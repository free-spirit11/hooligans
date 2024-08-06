import InstaPics from '@/components/InstaPics';
import Hero from '@/components/Hero';
import Exhibition from '@/components/Exhibition';
import Advertisement from '@/components/Advertisement';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Exhibition heading='NEW ARRIVALS' />
      <Advertisement />
      <InstaPics />
      <div className='w-full h-20'></div>
      <Footer />
    </>
  );
};

export default HomePage;
