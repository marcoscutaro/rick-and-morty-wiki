import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageNumber, setPageNumber, info }) => {
  return (
    <div>
      <ReactPaginate
        className="flex justify-center items-center h-20 gap-4"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        nextLabel="Next"
        previousLabel="Prev"
        nextClassName="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        previousClassName="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        pageClassName="bg-transparent hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-2 px-4 rounded shadow"
        // pageLinkClassName="inline-block py-2 px-4 rounded-lg  hover:bg-gray-200 hover:text-blue-900"
        activeClassName="bg-gray-300 text-white hover:text-white"
        onPageChange={(data) => {
          setPageNumber(data.selected + 1);
        }}
        pageCount={info?.pages}
      />
    </div>
  );
};

export default Pagination;
