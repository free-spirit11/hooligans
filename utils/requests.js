const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// My version with filters:

// Fetch all products
async function fetchProducts(page, pageSize, filter) {
  try {
    // Handle the case where the domain is not available yet
    if (!apiDomain) {
      return [];
    }

    let url = new URL(`${apiDomain}/products`);

    // Pagination queries
    if (page !== undefined) url.searchParams.append('page', page);
    if (pageSize !== undefined) url.searchParams.append('pageSize', pageSize);

    // Filters queries
    if (filter.brand !== undefined && !filter.brand.includes('all')) {
      filter.brand.forEach((brand) => url.searchParams.append('brand', brand));
    }
    if (filter.color !== undefined && !filter.color.includes('all')) {
      filter.color.forEach((color) => url.searchParams.append('color', color));
    }
    if (filter.price) {
      url.searchParams.append('priceMin', filter.price.range[0]);
      url.searchParams.append('priceMax', filter.price.range[1]);
    }

    // if (filter.sort !== 'none') {
    //   url.searchParams.append('sort', filter.sort);
    // }

    const res = await fetch(url.toString(), { cache: 'no-store' });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

//Fetch single product
async function fetchProduct(id) {
  try {
    //Handle the case where the domain is not available yet
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/product/${id}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export { fetchProduct, fetchProducts };

// Original version without filters:
// async function fetchProducts(page, pageSize) {
//   try {
//     // Handle the case where the domain is not available yet
//     if (!apiDomain) {
//       return [];
//     }

//     let url = `${apiDomain}/products`;

//     const params = [];
//     if (page !== undefined) params.push(`page=${page}`);
//     if (pageSize !== undefined) params.push(`pageSize=${pageSize}`);
//     if (params.length > 0) url += `?${params.join('&')}`;

//     const res = await fetch(url, { cache: 'no-store' });

//     if (!res.ok) {
//       throw new Error('Failed to fetch data');
//     }

//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// }

// CatGPT proposed:

// Utility function to convert filter object to query string
// const filtersToQueryString = (filters) => {
//   const params = new URLSearchParams();

//   if (filters.color.length > 0) {
//     params.append('color', filters.color.join(','));
//   }

//   if (filters.brand.length > 0) {
//     params.append('brand', filters.brand.join(','));
//   }

//   if (filters.price) {
//     params.append('priceMin', filters.price.range[0]);
//     params.append('priceMax', filters.price.range[1]);
//   }

//   if (filters.sort !== 'none') {
//     params.append('sort', filters.sort);
//   }

//   return params.toString();
// };

// async function fetchProducts(page, pageSize, filters) {
//   try {
//     // Handle the case where the domain is not available yet
//     if (!apiDomain) {
//       return [];
//     }

//     let url = `${apiDomain}/products`;
//     const queryParams = [];

//     if (page !== undefined) queryParams.push(`page=${page}`);
//     if (pageSize !== undefined) queryParams.push(`pageSize=${pageSize}`);
//     const filtersQuery = filtersToQueryString(filters);
//     if (filtersQuery) queryParams.push(filtersQuery);

//     if (queryParams.length > 0) url += `?${queryParams.join('&')}`;

//     const res = await fetch(url, { cache: 'no-store' });

//     if (!res.ok) {
//       throw new Error('Failed to fetch data');
//     }

//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// }
