import Header from "@/components/header";
import { RowTableSkeleton } from "@/components/skeletons/rowTableSkeleton";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
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
                                {
                                            jobs.elements?.map((job) => {
                                                return (
                                                <div className="m-6 flex" key={job.id}>
                                                    <a href={job.url} target="_blank">
                                                        <div className="rounded-md w-[100px] h-[100px]" style={{
                                                            background: 'url(' + job.logoCompany + ')',
                                                            width: '100px',
                                                            height: '100px',
                                                            backgroundPosition: 'center',
                                                            backgroundSize:'cover'
                                                        }}>
                                                        </div>
                                                    </a>
                                                    <div className="ml-4 flex flex-col">
                                                        <h2>
                                                            <a className="text-xl" href={job.url} target="_blank">{job.title}</a>
                                                        </h2>
                                                        <a href={job.url} target="_blank">
                                                            <span className="text-sm italic">{job.companyName}</span>
                                                        </a>
                                                        <p className="text-base">{job.description}</p>
                                                        <div className="mt-2 mb-2 flex content-center">
                                                            <p className="p-1">{job.location}</p>
                                                            <span className="p-1 ml-2 mr-2">|</span>
                                                            <p className="p-1">{job.salary}</p>
                                                        </div>
                                                    </div>
                                                </div>)
                                            })
                                        }
                                {
                                    jobs.isLoading &&
                                    <RowTableSkeleton></RowTableSkeleton>
                                }
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