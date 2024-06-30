import connectDB from '@/config/MongoDBconfig';
import Product from '@/models/Product';

// GET /api/products
export const GET = async (request) => {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || 1;
    const pageSize = searchParams.get('pageSize') || 3;
    const skip = (page - 1) * pageSize;

    const brands = searchParams.getAll('brand');
    const colors = searchParams.getAll('color');
    const isAllBrandsSelected = brands.includes('all');
    const isAllColorsSelected = colors.includes('all');

    let query = {};

    if (!isAllBrandsSelected && brands.length > 0) {
      const brandSearch = brands.map((brand) => new RegExp(brand, 'i'));
      query.brand = { $in: brandSearch };
    }

    if (!isAllColorsSelected && colors.length > 0) {
      const colorSearch = colors.map((color) => new RegExp(color, 'i'));
      query.color = { $in: colorSearch };
    }

    const total = await Product.countDocuments(query);

    const products = await Product.find(query).skip(skip).limit(pageSize);

    const result = {
      total,
      products,
    };

    return new Response(JSON.stringify(result), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('Something went wrong', { status: 500 });
  }
};

// CatGPT proposed:
// GET /api/products
// export const GET = async (request) => {
//   try {
//     await connectDB();

//     const page = parseInt(request.nextUrl.searchParams.get('page'), 10) || 1;
//     const pageSize =
//       parseInt(request.nextUrl.searchParams.get('pageSize'), 10) || 3;
//     const skip = (page - 1) * pageSize;

//     const colors = request.nextUrl.searchParams.get('color')?.split(',') || [];
//     const brands = request.nextUrl.searchParams.get('brand')?.split(',') || [];
//     const priceMin =
//       parseInt(request.nextUrl.searchParams.get('priceMin'), 10) || 0;
//     const priceMax =
//       parseInt(request.nextUrl.searchParams.get('priceMax'), 10) || 1000;
//     const sort = request.nextUrl.searchParams.get('sort') || null;

//     const filter = {};

//     if (colors.length > 0) {
//       filter.color = { $regex: new RegExp(colors.join('|'), 'i') };
//     }

//     if (brands.length > 0) {
//       filter.brand = { $regex: new RegExp(brands.join('|'), 'i') };
//     }

//     filter.price = { $gte: priceMin, $lte: priceMax };

//     let query = Product.find(filter).skip(skip).limit(pageSize);

//     if (sort === 'price-asc') {
//       query = query.sort({ price: 1 });
//     } else if (sort === 'price-desc') {
//       query = query.sort({ price: -1 });
//     }

//     const total = await Product.countDocuments(filter);
//     const products = await query.exec();

//     const result = {
//       total,
//       products,
//     };

//     return new Response(JSON.stringify(result), {
//       status: 200,
//     });
//   } catch (error) {
//     console.log(error);
//     return new Response('Something went wrong', { status: 500 });
//   }
// };
