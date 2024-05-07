import React, { useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const CustomAutoScrollContainer = ({ children }) => {
  const [slider, setSlider] = useState(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      slider?.slickPrev();
    } else if (event.key === 'ArrowRight') {
      slider?.slickNext();
    }
  };

  return (
    <div className='relative'>
      <button
        className='absolute bottom-[50%] left-0 z-10 px-4 py-5 mx-7 text-white bg-black opacity-30 rounded-s-full hover:opacity-60'
        onClick={() => slider?.slickPrev()}
        onKeyDown={handleKeyDown}
      >
        <IoIosArrowBack className='size-10' />
      </button>
      <button
        className='absolute bottom-[50%] right-0 z-10 px-4 py-5 mx-7 text-white bg-black  opacity-30 rounded-e-full hover:opacity-60'
        onClick={() => slider?.slickNext()}
        onKeyDown={handleKeyDown}
      >
        <IoIosArrowForward className='size-10' />
      </button>

      <motion.div
        className='w-full'
        onHoverStart={() => slider?.slickPause()}
        onHoverEnd={() => slider?.slickPlay()}
      >
        <Slider ref={setSlider} {...settings}>
          {children}
        </Slider>
      </motion.div>
    </div>
  );
};

export default CustomAutoScrollContainer;

//TRIED TO IMPLEMENT AUTOSCROLL, BUT IT IS NOT PERFECT

// import React, { useEffect, useRef, useState } from 'react';

// const AutoScrollContainer = ({ children }) => {
//   const scrollContainerRef = useRef(null);
//   const [offset, setOffset] = useState(window.innerWidth / 4);
//   const [isHovering, setIsHovering] = useState(false);

//   // Update the offset when the window resizes
//   useEffect(() => {
//     const handleResize = () => {
//       setOffset(window.innerWidth / 4);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const smoothScroll = () => {
//       const { clientWidth, scrollWidth, scrollLeft } =
//         scrollContainerRef.current;
//       const maxScroll = scrollWidth - clientWidth;

//       let currentScroll = scrollLeft;
//       let targetScroll = scrollLeft + offset;

//       if (targetScroll >= maxScroll) {
//         targetScroll = 0; // Reset to start if overflows
//       }

//       const step = () => {
//         const stepOffset = (targetScroll - currentScroll) / 20;
//         currentScroll += stepOffset;

//         if (Math.abs(stepOffset) < 1) {
//           scrollContainerRef.current.scrollLeft = targetScroll;
//           if (targetScroll === 0) {
//             scrollContainerRef.current.scrollLeft = 0; // Resets if needed
//           }
//           return;
//         }

//         scrollContainerRef.current.scrollLeft = currentScroll;
//         requestAnimationFrame(step);
//       };

//       step();
//     };

//     const interval = setInterval(() => {
//       if (!isHovering) {
//         smoothScroll();
//       }
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [offset, isHovering]);

//   return (
//     <div
//       ref={scrollContainerRef}
//       className='relative flex w-full py-8 mb-5 overflow-hidden hide-scrollbar'
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//     >
//       {children}
//     </div>
//   );
// };

// export default AutoScrollContainer;
