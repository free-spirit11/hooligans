import connectDB from '@/config/MongoDBconfig';
import Product from '@/models/Product';
// import { getSessionUser } from '@/utils/getSession';
import cloudinary from '@/config/cloudinary';

// POST /api/add
export const POST = async (request) => {
  try {
    await connectDB();

    // const sessionUser = await getSessionUser();
    // if (!sessionUser || !sessionUser.userId) {
    //   return new Response('User ID is required', { status: 401 });
    // }

    // const { userId } = sessionUser;

    const formData = await request.formData();

    // Access all values from images
    const images = formData
      .getAll('images')
      .filter((image) => image.name !== '');

    // Create product object for database
    const product = {
      brand: formData.get('brand'),
      model: formData.get('model'),
      type: formData.get('type'),
      sku: formData.get('sku'),
      gender: formData.get('gender'),
      price: formData.get('price'),
      color: formData.get('color'),
      sale: formData.get('sale'),
      inWishList: formData.get('inWishList'),
      description: formData.get('description'),
    };

    // Upload image(s) to Cloudinary
    const uploadPromises = images.map(async (image) => {
      // Convert image
      const imageBuffer = await image.arrayBuffer();
      const imageArray = Array.from(new Uint8Array(imageBuffer));
      const imageData = Buffer.from(imageArray);
      const imageBase64 = imageData.toString('base64');

      // Make request to upload to Cloudinary
      return cloudinary.uploader
        .upload(`data:image/png;base64,${imageBase64}`, {
          folder: 'hooligans',
        })
        .then((result) => result.secure_url)
        .catch((error) => {
          console.error('Failed to upload image to Cloudinary:', error);
          return null; // Return null or handle as appropriate
        });
    });

    // Wait for all images to upload
    const uploadedImages = (await Promise.all(uploadPromises)).filter(
      (url) => url !== null
    );
    // Add uploaded images to the product object
    product.images = uploadedImages;

    const newProduct = new Product(product);
    await newProduct.save();

    return Response.redirect(
      `${process.env.NEXTAUTH_URL}/store/product/${newProduct._id}`
    );

    // return new Response(JSON.stringify({ message: 'Success' }), {
    //   status: 200,
    // });
  } catch (error) {
    console.log(error);
    return new Response('Failed to add product', { status: 500 });
  }
};
