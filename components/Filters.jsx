'use client';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Slider } from '@/components/ui/slider';
import ProductsGrid from './ProductsGrid';
const SORT_OPTIONS = [
  { name: 'None', value: 'none' },
  { name: 'Price: Low to High', value: 'price-asc' },
  { name: 'Price: High to Low', value: 'price-desc' },
];

const COLOR_FILTERS = {
  id: 'color',
  name: 'Color',
  options: [
    { value: 'all', label: 'All Colors' },
    { value: 'black', label: 'Black' },
    { value: 'grey', label: 'Grey' },
    { value: 'gold', label: 'Gold' },
    { value: 'brown', label: 'Brown' },
  ],
};

const BRAND_FILTERS = {
  id: 'brand',
  name: 'Brand',
  options: [
    { value: 'all', label: 'All Brands' },
    { value: 'prada', label: 'Prada' },
    { value: 'gucci', label: 'GUCCI' },
    { value: 'saint laurent', label: 'Saint Laurent' },
    { value: 'balenciaga', label: 'Balenciaga' },
  ],
};

// const PRICE_FILTERS = {
//   id: 'price',
//   name: 'Price',
//   options: [
//     { value: [0, 1000], label: 'Any price' },
//     { value: [0, 200], label: 'Under 200$' },
//     { value: [0, 400], label: 'Under 400$' },
//     // custom option in JSX
//   ],
// };

const SUBCATEGORIES = [
  { name: 'Sunglasses', selected: true, href: '#' },
  { name: 'Eyeglasses', selected: false, href: '#' },
];

const DEFAULT_CUSTOM_PRICE = [0, 100000];

const Filters = () => {
  const [filter, setFilter] = useState({
    color: ['all'],
    brand: ['all'],
    minPrice: DEFAULT_CUSTOM_PRICE[0],
    maxPrice: DEFAULT_CUSTOM_PRICE[1],
    // price: { range: DEFAULT_CUSTOM_PRICE },
    // sort: 'none',
  });

  const applyArrayFilter = ({ category, value }) => {
    if (value === 'all') {
      setFilter((prev) => ({
        ...prev,
        [category]: ['all'],
      }));
    } else {
      setFilter((prev) => {
        const isAllSelected = prev[category].includes('all');
        const isFilterApplied = prev[category].includes(value);

        if (isFilterApplied) {
          return {
            ...prev,
            [category]: prev[category].filter((v) => v !== value),
          };
        } else {
          return {
            ...prev,
            [category]: isAllSelected ? [value] : [...prev[category], value],
          };
        }
      });
    }
  };

  // const minPrice = Math.min(filter.price.range[0], filter.price.range[1]);
  // const maxPrice = Math.max(filter.price.range[0], filter.price.range[1]);

  return (
    <main className='max-w-[90%] px-4 mx-auto sm:px-6 lg:px-8'>
      <div className='flex items-baseline justify-between pt-24 pb-6 border-b broder-gray-200'>
        <h1 className='text-4xl font-bold tracking-tight text-gray-900'>
          All Products
        </h1>

        <div className='flex items-center'>
          <DropdownMenu>
            <DropdownMenuTrigger className='inline-flex justify-center text-sm text-gray-700 group fond-medium hover:text-gray-900'>
              Sort
              <ChevronDown className='flex-shrink-0 w-5 h-5 ml-1 -mr-1 text-gray-400 group-hover:text-gray-500' />
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              {SORT_OPTIONS.map((option) => (
                <button
                  key={option.name}
                  className={cn('text-left w-full block px-4 py-2 text-sm', {
                    'text-gray-900 bg-gray-100': option.value === filter.sort,
                    'text-gray-500': option.value !== filter.sort,
                  })}
                  onClick={() => {
                    setFilter((prev) => ({
                      ...prev,
                      sort: option.value,
                    }));
                  }}
                >
                  {option.name}
                </button>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <button className='p-2 ml-4 -m-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden'>
            <Filter className='w-5 h-5' />
          </button>
        </div>
      </div>
      <section className='pt-6 pb-24'>
        <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>
          {/* Filters */}
          <div className='hidden lg:block lg:col-span-1'>
            <ul className='pb-6 space-y-4 text-sm font-medium text-gray-900 border-b border-gray-200'>
              {SUBCATEGORIES.map((category) => (
                <li key={category.name}>
                  <button
                    disabled={!category.selected}
                    className='disabled:cursor-not-allowed disabled:opacity-60'
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>

            <Accordion type='multiple' className='animate-none'>
              {/* Color filter */}
              <AccordionItem value='color'>
                <AccordionTrigger className='py-3 text-sm text-gray-400 hover:text-gray-500'>
                  <span className='font-medium text-gray-900'>Colors</span>
                </AccordionTrigger>

                <AccordionContent className='pt-6 animate-none'>
                  <ul className='space-y-4'>
                    {COLOR_FILTERS.options.map((option, optionIdx) => (
                      <li key={option.value} className='flex items-center'>
                        <input
                          type='checkbox'
                          id={`color-${optionIdx}`}
                          onChange={() => {
                            applyArrayFilter({
                              category: 'color',
                              value: option.value,
                            });
                          }}
                          checked={filter.color.includes(option.value)}
                          className='w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
                        />
                        <label
                          htmlFor={`color-${optionIdx}`}
                          className='ml-3 text-sm text-gray-600 '
                        >
                          {option.label}
                        </label>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Brand filter */}
              <AccordionItem value='brand'>
                <AccordionTrigger className='py-3 text-sm text-gray-400 hover:text-gray-500'>
                  <span className='font-medium text-gray-900'>Brands</span>
                </AccordionTrigger>

                <AccordionContent className='pt-6 animate-none'>
                  <ul className='space-y-4'>
                    {BRAND_FILTERS.options.map((option, optionIdx) => (
                      <li key={option.value} className='flex items-center'>
                        <input
                          type='checkbox'
                          id={`brand-${optionIdx}`}
                          onChange={() => {
                            applyArrayFilter({
                              category: 'brand',
                              value: option.value,
                            });
                          }}
                          checked={filter.brand.includes(option.value)}
                          className='w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
                        />
                        <label
                          htmlFor={`brand-${optionIdx}`}
                          className='ml-3 text-sm text-gray-600 '
                        >
                          {option.label}
                        </label>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Price filter */}
              <AccordionItem value='price'>
                <AccordionTrigger className='py-3 text-sm text-gray-400 hover:text-gray-500'>
                  <span className='font-medium text-gray-900'>Price</span>
                </AccordionTrigger>

                <AccordionContent className='pt-6 animate-none'>
                  <ul className='space-y-4'>
                    {/* {PRICE_FILTERS.options.map((option, optionIdx) => (
                      <li key={option.label} className='flex items-center'>
                        <input
                          type='radio'
                          id={`price-${optionIdx}`}
                          onChange={() => {
                            setFilter((prev) => ({
                              ...prev,
                              price: {
                                isCustom: false,
                                range: [...option.value],
                              },
                            }));
                          }}
                          checked={
                            !filter.price.isCustom &&
                            filter.price.range[0] === option.value[0] &&
                            filter.price.range[1] === option.value[1]
                          }
                          className='w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
                        />
                        <label
                          htmlFor={`price-${optionIdx}`}
                          className='ml-3 text-sm text-gray-600 '
                        >
                          {option.label}
                        </label>
                      </li>
                    ))} */}

                    <li className='flex-col gap-2 flex-justify-center'>
                      {/* <div>
                        <input
                          type='radio'
                          id={`price-${PRICE_FILTERS.options.length}`}
                          onChange={() => {
                            setFilter((prev) => ({
                              ...prev,
                              price: {
                                isCustom: true,
                                range: [0, 100],
                              },
                            }));
                          }}
                          checked={filter.price.isCustom}
                          className='w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
                        />
                        <label
                          htmlFor={`price-${PRICE_FILTERS.options.length}`}
                          className='ml-3 text-sm text-gray-600 '
                        >
                          Custom
                        </label>
                      </div> */}

                      <div className='flex justify-between my-3'>
                        <p className='font-medium'>Price</p>
                        <div>
                          {(filter.minPrice / 100).toFixed(0)} $ -{' '}
                          {(filter.maxPrice / 100).toFixed(0)} $
                        </div>
                      </div>

                      <Slider
                        onValueChange={(range) => {
                          const [newMin, newMax] = range;
                          setFilter((prev) => ({
                            ...prev,
                            minPrice: newMin,
                            maxPrice: newMax,
                            // price: {
                            //   range: [newMin, newMax],
                            // },
                          }));
                        }}
                        value={[filter.minPrice, filter.maxPrice]}
                        min={DEFAULT_CUSTOM_PRICE[0]}
                        defaultValue={DEFAULT_CUSTOM_PRICE}
                        max={DEFAULT_CUSTOM_PRICE[1]}
                        step={10000}
                      />
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Product grid */}

          <div className='lg:col-span-3'>
            <ProductsGrid filter={filter} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Filters;
