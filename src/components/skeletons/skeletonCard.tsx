import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 p-4 border rounded-xl shadow-sm">
      <Skeleton className="h-[125px] w-full rounded-xl" />
      <div className="space-y-2 mt-4">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
}