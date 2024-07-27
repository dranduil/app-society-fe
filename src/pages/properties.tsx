import Header from "@/components/header";
import { SkeletonCardList } from "@/components/skeletons/skeletonCardList";

export default function PropertiesPage() {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <Header></Header>
            <div className="container mx-auto mt-8">
                <SkeletonCardList />
            </div>
        </div>
    )
}