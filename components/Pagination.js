import React from "react";
import { usePagination } from "../hooks/usePagination";

const Pagination = (props) => {
  const { onPageChange, totalCount, currentPage, pageSize, portfolioRef } =
    props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    portfolioRef.current.scrollIntoView({
      behavior: "smooth",
    });
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    portfolioRef.current.scrollIntoView({
      behavior: "smooth",
    });
    onPageChange(currentPage - 1);
  };
  let lastPage = paginationRange[paginationRange?.length - 1];
  return (
    <div className="flex flex-col items-center mt-6">
      <div className="inline-flex mt-2 xs:mt-0">
        {currentPage !== 1 && (
          <>
            <button
              onClick={onPrevious}
              className={`${currentPage === 1 ? "disabled" : ""}
        py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-25 disabled:cursor-not-allowed`}
            >
              Prev
            </button>
            <button
              className={`${
                currentPage === lastPage ? "disabled" : ""
              }py-2 px-4 text-sm font-medium text-center flex items-center  text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:cursor-not-allowed disabled:opacity-25`}
              disabled
            >
              Next
            </button>
          </>
        )}
        {currentPage !== lastPage && (
          <>
            <button
              className={`${currentPage === 1 ? "disabled" : ""}
              
        py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:bg-opacity-25 disabled:cursor-not-allowed`}
              disabled
            >
              Prev
            </button>
            <button
              onClick={onNext}
              className={`${
                currentPage === lastPage ? "disabled" : ""
              }py-2 px-4 text-sm font-medium text-center flex items-center  text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:cursor-not-allowed disabled:opacity-25`}
            >
              Next
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Pagination;
