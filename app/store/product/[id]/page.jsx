'use client';
import Navbar from '@/components/Navbar';
import Exhibition from '@/components/Exhibition';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useShoppingBagContext } from '@/contexts/ShoppingBagContext';
import { useProduct } from 'medusa-react';

const ProductPage = () => {
  const { id } = useParams();
  const { product, isLoading, error } = useProduct(id);
  const { addItemToBag, addWishlistItem } = useShoppingBagContext();

  if (!product) {
    return (
      <h1 className='mt-10 text-2xl font-bold text-center'>
        Product not found
      </h1>
    );
  }

  return (
    <section>
      <Navbar color='black' />
      <div className='flex items-center w-full pt-24 '>
        {/* small images */}
        <div className='w-[10%] pl-10 pr-3 self-start'>
          <Image
            className='my-3 bg-custom-gray'
            src={product.thumbnail}
            alt='Glasses'
            width={100}
            height={100}
          />
          {product &&
            product.images &&
            product.images.map((image, index) => (
              <Image
                key={index}
                className='my-3 bg-custom-gray'
                src={image.url}
                alt='Glasses'
                width={100}
                height={100}
              />
            ))}
        </div>

        {/* big images */}
        <div className='w-[30%] self-start px-3 mx-10'>
          <Image
            className='my-3 bg-custom-gray'
            src={product.thumbnail}
            alt='Glasses'
            width={555}
            height={555}
            quality={100}
          />
          {product &&
            product.images &&
            product.images.map((image, index) => (
              <Image
                key={index}
                className='my-3 bg-custom-gray'
                src={image.url}
                alt='Glasses'
                width={555}
                height={555}
                quality={100}
              />
            ))}
        </div>

        {/* description */}
        <div className='w-[50%] self-start p-3'>
          <div>
            <h1>{product.subtitle}</h1>
            <h1 className='my-2 text-4xl'>
              {product.title} {product.subtitle}
              {/* {product.color} */}
            </h1>
            <div>
              <span>${product.variants[0]?.prices[0]?.amount / 100}</span>
              {product.sale && (
                <span className='ml-5 text-red-300'>ON SALE</span>
              )}
            </div>
          </div>
          <div className='flex flex-col mt-24'>
            <button
              className='h-10 m-1 text-sm font-light text-white bg-black border border-black w-450px hover:bg-blue-800'
              onClick={() => addItemToBag(product)}
            >
              Add to cart
            </button>
            <button
              className='h-10 m-1 text-sm font-light text-black border border-black w-450px hover:bg-blue-800'
              onClick={() => addWishlistItem(product)}
            >
              Add to wishlist
            </button>
          </div>
          <div className='flex flex-col text-2xl mt-44 font-extralight'>
            <button className='inline-flex justify-between py-3 border-t border-black w-96'>
              <span>Description</span>
              <span>-</span>
            </button>
            <button className='inline-flex justify-between py-3 border-t border-black w-96 '>
              <span>Product details</span>
              <span>+</span>
            </button>
            <button className='inline-flex justify-between py-3 border-black border-y w-96 '>
              <span>Shipping</span>
              <span>+</span>
            </button>
          </div>
          <div className='mt-5'>
            <p>
              Brand: <span>{product.title}</span>
              <br />
              Model: <span>{product.subtitle}</span>
              <br />
              {/* Color Code: <span>{product.color}</span>
              <br /> */}
              {/* Gender: <span>{product.gender}</span>
              <br /> */}
              Year: <span>2023</span>
              <br />
              Frame Colour: <span>Cedar</span>
              <br />
              Frame Shape: <span>Oval</span>
              <br />
              Frame Style: <span>Full Rim</span>
              <br />
              Frame Material: <span>Acetate</span>
              <br />
              Lens Color: <span>Dark Grey</span>
              <br />
              Lens Material: <span>Bio Polyamide</span>
              <br />
              UV Protection: <span>Category 3</span>
              <br />
              Size: <span>55X16X145</span>
              <br />
              <span className='block'>{product.description}</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <Exhibition heading='YOU MAY ALSO LIKE' />
      </div>
    </section>
  );
};

export default ProductPage;
