import connectDB from '@/config/MongoDBconfig';
import Product from '@/models/Product';

// GET /api/products
export const GET = async (request) => {
  try {
    await connectDB();

    const products = await Product.find({});

    if (!products) return new Response('Products Not Found', { status: 404 });

    return new Response(JSON.stringify(products), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('Something went wrong', { status: 500 });
  }
};
