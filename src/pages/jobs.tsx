import Header from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent } from "@/components/ui/tabs";

export default function JobsPage() {
    
    return (
        <div>
            <Header></Header>
            <div className="container mx-auto mt-8">
                <Tabs defaultValue="all">
                    <div className="">
                        <TabsContent value="all">
                            <Card x-chunk="dashboard-06-chunk-0">
                                <CardHeader>
                                <CardTitle>Job List</CardTitle>
                                <CardDescription>
                                    Here job list of Dubai
                                </CardDescription>
                                </CardHeader>
                                <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="hidden w-[100px] sm:table-cell">
                                                <span className="sr-only">Image</span>
                                            </TableHead>
                                            <TableHead>Job info</TableHead>
                                            <TableHead>Company</TableHead>
                                            <TableHead className="hidden md:table-cell">
                                                Salary
                                            </TableHead>
                                            <TableHead className="hidden md:table-cell">
                                                Located
                                            </TableHead>
                                            <TableHead className="hidden md:table-cell">
                                                Created at
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="hidden sm:table-cell">
                                                <a href="http://www.google.it" target="_blank">
                                                    <img
                                                        alt="Product image"
                                                        className="aspect-square rounded-md object-cover"
                                                        height="64"
                                                        src="/placeholder.svg"
                                                        width="64"
                                                    />
                                                </a>
                                            </TableCell>
                                            <TableCell >
                                                <a href="http://www.google.it" target="_blank">
                                                    <h2 className="font-medium">Job Title</h2>
                                                </a>
                                                <p>some description here</p>
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant="outline">Company name</Badge>
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell">
                                                $499.99
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell">
                                                AUE - Dubai
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell">
                                                2023-07-12 10:42 AM
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
                                    </TableBody>
                                </Table>
                                </CardContent>
                                <CardFooter>
                                    <div className="text-xs text-muted-foreground mb-3 mt-3">
                                        Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                                        products
                                    </div>
                                </CardFooter>
                                <CardFooter>
                                    <Pagination>
                                        <PaginationContent>
                                            <PaginationItem>
                                                <PaginationPrevious href="#" />
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#">1</PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#" isActive>
                                                    2
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#">3</PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationEllipsis />
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationNext href="#" />
                                            </PaginationItem>
                                        </PaginationContent>
                                    </Pagination>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </div>
    )
}