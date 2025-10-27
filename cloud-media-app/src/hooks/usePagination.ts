import { useState } from 'react';

const usePagination = (itemsPerPage: number, items: any[]) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const currentItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return { currentItems, totalPages, paginate, currentPage };
};

export default usePagination;