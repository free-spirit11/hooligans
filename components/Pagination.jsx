import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Pagination = ({
  page,
  pageSize,
  totalItems,
  onPageChange,
  onPageSizeChange,
}) => {
  const totalPages = Math.ceil(totalItems / pageSize); // ceil will round up the result to the nearest next whole number

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  const handlePageSizeChange = (event) => {
    const newPageSize = Number(event.target.value);
    onPageSizeChange(newPageSize);
  };

  return (
    <section className='container flex items-center justify-end mx-auto my-8'>
      <div className='mx-3'>
        <label className='mx-1 text-gray-500'>Show Items</label>
        <select value={pageSize} onChange={handlePageSizeChange}>
          <option value='3'>3</option>
          <option value='9'>9</option>
          <option value='12'>12</option>
          <option value='21'>21</option>
        </select>
      </div>
      <button
        className='px-2 py-1 mr-2 border border-gray-300 rounded'
        disabled={page === 1}
        onClick={() => {
          handlePageChange(page - 1);
        }}
      >
        <FaArrowLeft />
      </button>
      <span className='mx-2'>
        Page {page} of {totalPages}
      </span>
      <button
        className='px-2 py-1 ml-2 border border-gray-300 rounded'
        disabled={page === totalPages}
        onClick={() => {
          handlePageChange(page + 1);
        }}
      >
        <FaArrowRight />
      </button>
    </section>
  );
};

export default Pagination;
