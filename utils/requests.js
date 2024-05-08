const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Fetch all products
async function fetchProducts(page, pageSize) {
  try {
    // Handle the case where the domain is not available yet
    if (!apiDomain) {
      return [];
    }

    let url = `${apiDomain}/products`;

    const params = [];
    if (page !== undefined) params.push(`page=${page}`);
    if (pageSize !== undefined) params.push(`pageSize=${pageSize}`);
    if (params.length > 0) url += `?${params.join('&')}`;

    const res = await fetch(url, { cache: 'no-store' });

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
