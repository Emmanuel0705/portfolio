import React, { useMemo } from "react";

const range = (start, end) => {
  let length = end - start + 1;
  /*
  	Create an array of certain length and set the elements within it from
    start value to end value.
  */
  return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({ totalCount, pageSize, currentPage }) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    return range(1, totalPageCount);
    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;
  }, [totalCount, pageSize, currentPage]);

  return paginationRange;
};
