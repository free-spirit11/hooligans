import { MeiliSearch } from 'meilisearch';

export const meilisearchClient = new MeiliSearch({
  host: 'http://localhost:7700',
  apiKey: 'aSampleMasterKey',
});

type FiltersQuery = {
  categories?: string[];
  orderBy?: string;
  order?: 'asc' | 'desc';
  // page?: number;
  minPrice?: number;
  maxPrice?: number;
  query?: string;
  currencyCode?: string;
  color?: string[];
  brand?: string[];
};

export async function getProductsFromMeilisearch(
  {
    categories,
    maxPrice,
    minPrice,
    orderBy,
    order = 'asc',
    query,
    currencyCode = 'usd',
    brand,
    color,
  }: FiltersQuery,
  page = 1,
  pageSize = 9
) {
  const offset = (page - 1) * pageSize;

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

  if (brand && !brand.includes('all')) {
    queries.push(`brand IN [${brand.map((b) => `"${b}"`).join(', ')}]`);
  }

  if (color && !color.includes('all')) {
    queries.push(
      `variant_options_value IN [${color.map((c) => `"${c}"`).join(', ')}]`
    );
  }

  console.log(queries);

  const result = await meilisearchClient.index('products').search(query, {
    limit: pageSize,
    offset: offset,
    sort: orderBy ? [`${orderBy}:${order}`] : undefined,
    filter: queries.join(' AND '),
    facets: ['categories.handle'],
  });

  return result;
}
