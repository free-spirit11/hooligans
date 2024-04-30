'use client';
import { useState } from 'react';

const AddProductForm = () => {
  const [fields, setFields] = useState({
    brand: '',
    model: '',
    type: '',
    sku: '',
    gender: '',
    price: '',
    color: '',
    sale: false,
    inWishList: false,
    description: '',
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const { files } = e.target;

    // Clone images array
    const updatedImages = [...fields.images];

    // Add new files to the array
    for (const file of files) {
      updatedImages.push(file);
    }

    //Update state with array of images
    setFields((prevFields) => ({
      ...prevFields,
      images: updatedImages,
    }));
  };

  return (
    <form action='/api/add' method='POST' encType='multipart/form-data'>
      <h2 className='mb-6 text-3xl font-semibold text-center'>Add Product</h2>

      <div className='mb-4'>
        <label htmlFor='type' className='block mb-2 font-bold text-gray-700'>
          Product Type
        </label>
        <select
          id='type'
          name='type'
          className='w-full px-3 py-2 border rounded'
          required
          value={fields.type}
          onChange={handleChange}
        >
          <option value='Sunglasses'>Sunglasses</option>
          <option value='Eyeglasses'>Eyeglasses</option>
        </select>
      </div>

      <div className='mb-4'>
        <label htmlFor='gender' className='block mb-2 font-bold text-gray-700'>
          Select product gender
        </label>
        <select
          id='gender'
          name='gender'
          className='w-full px-3 py-2 border rounded'
          required
          value={fields.gender}
          onChange={handleChange}
        >
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Unisex'>Unisex</option>
        </select>
      </div>
      {/* TODO: later implement selection from all available brands*/}
      <div className='mb-4'>
        <label className='block mb-2 font-bold text-gray-700'>
          Enter product brand
        </label>
        <input
          type='text'
          id='brand'
          name='brand'
          className='w-full px-3 py-2 mb-2 border rounded'
          placeholder='eg. Prada'
          required
          value={fields.brand}
          onChange={handleChange}
        />
      </div>

      <div className='mb-4'>
        <label className='block mb-2 font-bold text-gray-700'>
          Enter product model
        </label>
        <input
          type='text'
          id='model'
          name='model'
          className='w-full px-3 py-2 mb-2 border rounded'
          placeholder=''
          required
          value={fields.model}
          onChange={handleChange}
        />
      </div>

      <div className='mb-4'>
        <label className='block mb-2 font-bold text-gray-700'>
          Enter product sku
        </label>
        <input
          type='text'
          id='sku'
          name='sku'
          className='w-full px-3 py-2 mb-2 border rounded'
          placeholder=''
          required
          value={fields.sku}
          onChange={handleChange}
        />
      </div>

      <div className='mb-4'>
        <label className='block mb-2 font-bold text-gray-700'>
          Enter product price in USD
        </label>
        <input
          type='text'
          id='price'
          name='price'
          className='w-full px-3 py-2 mb-2 border rounded'
          placeholder=''
          required
          value={fields.price}
          onChange={handleChange}
        />
      </div>

      <div className='mb-4'>
        <label className='block mb-2 font-bold text-gray-700'>
          Enter product color
        </label>
        <input
          type='text'
          id='color'
          name='color'
          className='w-full px-3 py-2 mb-2 border rounded'
          placeholder=''
          required
          value={fields.color}
          onChange={handleChange}
        />
      </div>

      <div className='mb-4'>
        <label
          htmlFor='description'
          className='block mb-2 font-bold text-gray-700'
        >
          Description
        </label>
        <textarea
          id='description'
          name='description'
          className='w-full px-3 py-2 border rounded'
          rows='4'
          placeholder='Add an optional description of your product'
          value={fields.description}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className='mb-4'>
        <label htmlFor='images' className='block mb-2 font-bold text-gray-700'>
          Images
        </label>
        <input
          type='file'
          id='images'
          name='images'
          className='w-full px-3 py-2 border rounded'
          accept='image/*'
          multiple
          onChange={handleImageChange}
          required
        />
      </div>

      <div className='mb-4'>
        <label htmlFor='type' className='block mb-2 font-bold text-gray-700'>
          Is it on sale?
        </label>
        <select
          id='sale'
          name='sale'
          className='w-full px-3 py-2 border rounded'
          required
          value={fields.sale}
          onChange={handleChange}
        >
          <option value='false'>No</option>
          <option value='true'>Yes</option>
        </select>
      </div>

      <div>
        <button
          className='w-full px-4 py-2 font-bold text-white bg-slate-400 hover:bg-slate-500 focus:outline-none focus:shadow-outline'
          type='submit'
        >
          Add Product
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;
