import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface PaginationComponentProps {
    totalElements: number;
    perPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export function PaginationComponent({ totalElements, perPage, currentPage, onPageChange }: PaginationComponentProps) {
    const totalPages = Math.ceil(totalElements / perPage);
    const maxPageButtons = 5;

    const handlePageClick = (page: number) => {
        onPageChange(page);
    };

    const renderPaginationItems = (): JSX.Element[] => {
        const items: JSX.Element[] = [];
        const half = Math.floor(maxPageButtons / 2);
        let startPage = Math.max(1, currentPage - half);
        let endPage = Math.min(totalPages, currentPage + half);

        // Adjust start and end if the number of pages is less than maxPageButtons
        if (endPage - startPage < maxPageButtons - 1) {
            if (startPage === 1) {
                endPage = Math.min(totalPages, startPage + maxPageButtons - 1);
            } else if (endPage === totalPages) {
                startPage = Math.max(1, endPage - maxPageButtons + 1);
            }
        }

        if (currentPage > 1) {
            // Add previous button
            items.push(
                <PaginationItem key="prev">
                    <PaginationPrevious href="#" onClick={() => handlePageClick(Math.max(currentPage - 1, 1))} />
                </PaginationItem>
            );
        }

        // Add page numbers
        for (let i = startPage; i <= endPage; i++) {
            items.push(
                <PaginationItem key={i}>
                    <PaginationLink
                        href="#"
                        isActive={i === currentPage}
                        onClick={() => handlePageClick(i)}
                    >
                        {i}
                    </PaginationLink>
                </PaginationItem>
            );
        }

        if (currentPage < totalPages) {
            // Add next button
            items.push(
                <PaginationItem key="next">
                    <PaginationNext href="#" onClick={() => handlePageClick(Math.min(currentPage + 1, totalPages))} />
                </PaginationItem>
            );
        }

        return items;
    };

    return (
        <Pagination>
            <PaginationContent>
                {renderPaginationItems()}
            </PaginationContent>
        </Pagination>
    );
}