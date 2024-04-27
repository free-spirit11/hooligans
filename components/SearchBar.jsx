import { useState } from 'react';

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <label className='relative flex items-center cursor-text'>
      <svg
        className='absolute left-0 z-10'
        width='17'
        height='17'
        viewBox='0 0 17 17'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        onMouseEnter={(e) => e.preventDefault()} // Prevent svg from interfering with text cursor
      >
        <path
          d='M16.5 15.3041L12.2938 11.098C13.1186 10.0258 13.6134 8.62373 13.6134 7.1392C13.6134 3.51033 10.6443 0.54126 7.01546 0.54126C3.3866 0.54126 0.5 3.51033 0.5 7.1392C0.5 10.7681 3.46907 13.7371 7.09794 13.7371C8.66495 13.7371 10.067 13.2423 11.2216 12.3351L15.3454 16.4588L16.5 15.3041ZM7.09794 12.0877C4.37629 12.0877 2.14948 9.86085 2.14948 7.1392C2.14948 4.41755 4.37629 2.19074 7.09794 2.19074C9.81959 2.19074 12.0464 4.41755 12.0464 7.1392C12.0464 9.86085 9.81959 12.0877 7.09794 12.0877Z'
          fill='white'
        />
      </svg>
      <input
        type='text'
        id='search-input'
        placeholder='Search'
        className={`pl-8 bg-transparent text-white placeholder-white outline-none transition-all duration-500 ease-in ${
          isExpanded ? 'w-48 border-b-2 border-gray-300' : 'w-0 border-none'
        } h-10`}
        onFocus={() => setIsExpanded(true)}
        onBlur={() => setIsExpanded(false)}
        onMouseEnter={(e) => e.currentTarget.focus()} // Focus input when hovering over the SVG
      />
    </label>
  );
};

export default SearchBar;
