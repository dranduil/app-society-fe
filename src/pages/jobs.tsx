import Header from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
                                            <TableCell>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                                </CardContent>
                                <CardFooter>
                                <div className="text-xs text-muted-foreground">
                                    Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                                    products
                                </div>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </div>
    )
}