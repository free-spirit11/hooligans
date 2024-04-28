const Newsletters = () => {
  return (
    <section className='bg-custom-orange h-80 flex items-center justify-center'>
      <div className='flex flex-col items-center'>
        <div className=''>
          <h1 className='text-4xl'>SIGN UP TO OUR NEWSLETTER</h1>
        </div>
        <div>
          <form className='m-5'>
            <input
              type='email'
              placeholder='Your email address'
              className='py-2 px-2 border border-black w-96'
            />
            <button className='bg-black text-gray-300 px-7 py-2 font-light border border-black'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletters;
