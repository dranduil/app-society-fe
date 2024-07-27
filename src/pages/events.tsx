import Header from "@/components/header";
import { SkeletonEventList } from "@/components/skeletons/skeletonEventList";

export default function EventsPage() {
    return (
        <div>
            <Header></Header>
            <div className="container mx-auto mt-8">
                <h1 className="text-2xl font-bold mb-4">Event List</h1>
                <SkeletonEventList />
            </div>
        </div>
    )
}