import InstaPics from '@/components/InstaPics';
import Hero from '@/components/Hero';
import Exhibition from '@/components/Exhibition';
import Advertisement from '@/components/Advertisement';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Exhibition heading='NEW ARRIVALS' />
      <Advertisement />
      <InstaPics />
      <div className='w-full h-20'></div>
    </>
  );
};

export default HomePage;
