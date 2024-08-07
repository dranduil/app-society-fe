import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Header from "@/components/header";
import { PaginationComponent } from "@/components/pagination-component";
import { RowTableSkeleton } from "@/components/skeletons/rowTableSkeleton";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { AppThunkDispatch, useAppSelector } from "@/store";
import { getJobs } from "@/store/jobs/jobsSlice";
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function JobsPage() {
    const { page } = useParams<{ page: string }>()
    const navigate = useNavigate()
    const currentPage = parseInt(page || "1", 10)
    const jobs = useAppSelector((state) => state.jobs)
    const dispatch = useDispatch<AppThunkDispatch>()
    const [search, setSearch] = useState('');

    useEffect(() => {
        dispatch(getJobs({page:currentPage}));
    }, [dispatch, currentPage]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        dispatch(getJobs({page:currentPage, query:search}))
    }

    const handlePageChange = (page: number) => {
        navigate(`/jobs/page/${page}`);

        dispatch(getJobs({page:page})); // Dispatch the action immediately when the page changes
    };

    return (
        <div>
            <Header />
            <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8">
                <Tabs defaultValue="all">
                    <div>
                        <TabsContent value="all">
                            <Card x-chunk="dashboard-06-chunk-0">
                                <CardHeader>
                                    <CardTitle>Job List</CardTitle>
                                    <div className="relative ml-auto flex-1 md:grow-0">
                                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input type="search" value={search} onChange={handleSearch} placeholder="Search..." className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"/>
                                    </div>
                                    <CardDescription>
                                        Here job list of Dubai
                                    </CardDescription>
                                </CardHeader>
                                {
                                    jobs.isLoading ? (
                                        <RowTableSkeleton />
                                    ) : (
                                        jobs.elements?.map((job) => (
                                            <Card className="m-6 flex flex-col sm:flex-row p-2" key={job.id}>
                                                <a href={job.url} className="rounded-md w-full sm:w-[126px] h-[126px]" target="_blank" rel="noopener noreferrer">
                                                    <div className="rounded-md w-full sm:w-[126px] h-[126px]" style={{
                                                        background: `url(${job.logoCompany})`,
                                                        backgroundPosition: 'center',
                                                        backgroundSize: 'cover'
                                                    }}>
                                                    </div>
                                                </a>
                                                <div className="ml-0 mt-4 sm:mt-0 sm:ml-4 flex flex-col">
                                                    <h2>
                                                        <a className="text-xl" href={job.url} target="_blank" rel="noopener noreferrer">{job.title}</a>
                                                    </h2>
                                                    <a href={job.url} target="_blank" rel="noopener noreferrer">
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
                                        ))
                                    )
                                }
                                <CardFooter>
                                    <div className="text-xs text-muted-foreground mb-3 mt-3">
                                        Showing <strong>{jobs.elements?.length}</strong> of <strong>{jobs.totalElement}</strong>{" "}
                                        jobs
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