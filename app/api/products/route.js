import connectDB from '@/config/MongoDBconfig';
import Product from '@/models/Product';

// GET /api/products
export const GET = async (request) => {
  try {
    await connectDB();

    const page = request.nextUrl.searchParams.get('page') || 1;
    const pageSize = request.nextUrl.searchParams.get('pageSize') || 3;
    const skip = (page - 1) * pageSize;

    const total = await Product.countDocuments({});

    const products = await Product.find({}).skip(skip).limit(pageSize);

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
