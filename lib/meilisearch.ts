// lib/meilisearch
import { MeiliSearch } from 'meilisearch';

export const meilisearchClient = new MeiliSearch({
  host: 'http://localhost:7700',
  apiKey: 'aSampleMasterKey',
});

// export const meilisearchClient = new MeiliSearch({
//   host: process.env.MEILISEARCH_HOST!,
//   apiKey: process.env.MEILISEARCH_API_KEY,
// });

// lib/meilisearch
type FiltersQuery = {
  categories?: string[];
  orderBy?: string;
  order?: 'asc' | 'desc';
  page?: number;
  minPrice?: number;
  maxPrice?: number;
  query?: string;
  currencyCode?: string;
  color?: string;
  brand?: string;
};

const PAGE_SIZE = 15;

export async function getProductsFromMeilisearch({
  categories,
  maxPrice,
  minPrice,
  orderBy,
  order = 'asc',
  page = 1,
  query,
  currencyCode = 'usd',
}: FiltersQuery) {
  const offset = (page - 1) * PAGE_SIZE;

  const queries: string[] = [];

  if (categories) {
    queries.push(`categories.handle IN [${categories.join(', ')}]`);
  }

  if (minPrice) {
    queries.push(
      `(variants.prices.amount >= ${minPrice} AND variants.prices.currency_code = "${currencyCode}")`
    );
  }

  if (maxPrice) {
    queries.push(
      `(variants.prices.amount <= ${maxPrice} AND variants.prices.currency_code = "${currencyCode}")`
    );
  }

  const result = await meilisearchClient.index('products').search(query, {
    limit: PAGE_SIZE,
    offset: offset,
    sort: orderBy ? [`${orderBy}:${order}`] : undefined,
    filter: queries.join(' AND '),
    facets: ['categories.handle'],
  });

  return result;
}
