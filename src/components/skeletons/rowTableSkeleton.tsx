import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "@/components/ui/table";

export function RowTableSkeleton(){
    return (
        <>
            <TableRow>
                <TableCell className="hidden sm:table-cell">
                    <Skeleton className="h-[64px] w-[64px] rounded-xl" />
                </TableCell>
                <TableCell >
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-[50px]" />
                </TableCell>
                <TableCell className="hidden md:table-cell">
                    <Skeleton className="h-4 w-[50px]" />
                </TableCell>
                <TableCell className="hidden md:table-cell">
                    <Skeleton className="h-4 w-[50px]" />
                </TableCell>
                <TableCell className="hidden md:table-cell">
                    <Skeleton className="h-4 w-[50px]" />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell className="hidden sm:table-cell">
                    <Skeleton className="h-[64px] w-[64px] rounded-xl" />
                </TableCell>
                <TableCell >
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-[50px]" />
                </TableCell>
                <TableCell className="hidden md:table-cell">
                    <Skeleton className="h-4 w-[50px]" />
                </TableCell>
                <TableCell className="hidden md:table-cell">
                    <Skeleton className="h-4 w-[50px]" />
                </TableCell>
                <TableCell className="hidden md:table-cell">
                    <Skeleton className="h-4 w-[50px]" />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell className="hidden sm:table-cell">
                    <Skeleton className="h-[64px] w-[64px] rounded-xl" />
                </TableCell>
                <TableCell >
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-[50px]" />
                </TableCell>
                <TableCell className="hidden md:table-cell">
                    <Skeleton className="h-4 w-[50px]" />
                </TableCell>
                <TableCell className="hidden md:table-cell">
                    <Skeleton className="h-4 w-[50px]" />
                </TableCell>
                <TableCell className="hidden md:table-cell">
                    <Skeleton className="h-4 w-[50px]" />
                </TableCell>
            </TableRow>
        </>
    )
}