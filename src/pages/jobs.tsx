import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Header from "@/components/header";
import { PaginationComponent } from "@/components/pagination-component";
import { RowTableSkeleton } from "@/components/skeletons/rowTableSkeleton";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { AppThunkDispatch, useAppSelector } from "@/store";
import { getJobs } from "@/store/jobs/jobsSlice";

export default function JobsPage() {
    const { page } = useParams<{ page: string }>();
    const navigate = useNavigate();
    const currentPage = parseInt(page || "1", 10);
    const jobs = useAppSelector((state) => state.jobs);
    const dispatch = useDispatch<AppThunkDispatch>();

    useEffect(() => {
        dispatch(getJobs(currentPage));
    }, [dispatch, currentPage]);

    const handlePageChange = (page: number) => {
        navigate(`/jobs/page/${page}`);
    };

    return (
        <div>
            <Header />
            <div className="container mx-auto mt-8">
                <Tabs defaultValue="all">
                    <div>
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
                                            <Card className="m-6 flex p-2" key={job.id}>
                                                <a href={job.url} className="rounded-md w-[126px] h-[126px]" target="_blank">
                                                    <div className="rounded-md w-[126px] h-[126px]" style={{
                                                        background: 'url(' + job.logoCompany + ')',
                                                        width: '126px',
                                                        height: '126px',
                                                        backgroundPosition: 'center',
                                                        backgroundSize: 'cover'
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
                                            </Card>
                                        );
                                    })
                                }
                                {
                                    jobs.isLoading &&
                                    <RowTableSkeleton />
                                }
                                <CardFooter>
                                    <div className="text-xs text-muted-foreground mb-3 mt-3">
                                        Showing <strong>{jobs.elements?.length}-{jobs.totalElement}</strong>{" "}
                                        products
                                    </div>
                                </CardFooter>
                                <CardFooter>
                                    <PaginationComponent
                                        totalElements={jobs.totalElement as number}
                                        perPage={jobs.elements?.length as number}
                                        currentPage={currentPage}
                                        onPageChange={handlePageChange}
                                    />
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </div>
    );
}