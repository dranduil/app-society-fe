import Header from "@/components/header";
import { RowTableSkeleton } from "@/components/skeletons/rowTableSkeleton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { AppThunkDispatch, useAppSelector } from "@/store";
import { getJobs } from "@/store/jobs/jobsSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function JobsPage() {
    const jobs = useAppSelector((state) => state.jobs);
    const dispatch = useDispatch<AppThunkDispatch>()
    useEffect(() => {
        dispatch(getJobs())
    }, [dispatch])

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
                                        {
                                            jobs.elements?.map((job) => {
                                                return (
                                                <TableRow key={job.id}>
                                                    <TableCell className="hidden sm:table-cell">
                                                        <a href={job.url} target="_blank">
                                                            <img
                                                                alt={job.title}
                                                                className="aspect-square rounded-md object-cover"
                                                                height="64"
                                                                src={job.logoCompany}
                                                                width="64"
                                                            />
                                                        </a>
                                                    </TableCell>
                                                    <TableCell >
                                                        <a href={job.url} target="_blank">
                                                            <h2 className="font-medium">{job.title}</h2>
                                                        </a>
                                                        <p>{job.description}</p>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Badge variant="outline">{job.companyName}</Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        {job.salary}
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        {job.location}
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        2023-07-12 10:42 AM
                                                    </TableCell>
                                                </TableRow>)
                                            })
                                        }
                                        
                                    {
                                        jobs.isLoading &&
                                        <RowTableSkeleton></RowTableSkeleton>
                                    }
                                        
                                    </TableBody>
                                </Table>
                                </CardContent>
                                <CardFooter>
                                    <div className="text-xs text-muted-foreground mb-3 mt-3">
                                        Showing <strong>{jobs.elements?.length}-{jobs.totalElement}</strong>{" "}
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