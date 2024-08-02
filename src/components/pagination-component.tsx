import { useState } from "react";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface PaginationComponentProps {
    totalElements: number;
    perPage: number;
}

export function PaginationComponent({totalElements, perPage}:PaginationComponentProps)
{
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages = Math.ceil(totalElements / perPage);

    const handlePageClick = (page: number) => {
        setCurrentPage(page);
    };

    const renderPaginationItems = (): JSX.Element[] => {
        const items: JSX.Element[] = [];

        // Add previous button
        items.push(
            <PaginationItem key="prev">
                <PaginationPrevious href="#" onClick={() => handlePageClick(Math.max(currentPage - 1, 1))} />
            </PaginationItem>
        );

        // Add page numbers
        for (let i = 1; i <= totalPages; i++) {
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

        // Add next button
        items.push(
            <PaginationItem key="next">
                <PaginationNext href="#" onClick={() => handlePageClick(Math.min(currentPage + 1, totalPages))} />
            </PaginationItem>
        );

        return items;
    };

    return (
        <Pagination>
            <PaginationContent>
                {renderPaginationItems()}
            </PaginationContent>
        </Pagination>
    )
}
