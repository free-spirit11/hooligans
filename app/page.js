import Hero from '@/components/Hero';
import NewArrivals from '@/components/NewArrivals';
import Newsletters from '@/components/Newsletters';
import ShoppingBag from '@/components/ShoppingBag';

const HomePage = () => {
  return (
    <>
      <Hero />
      <NewArrivals />
      <div className='h-20 w-full'></div>
      <Newsletters />
    </>
  );
};

export default HomePage;
