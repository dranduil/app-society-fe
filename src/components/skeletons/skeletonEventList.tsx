import { SkeletonCard } from '@/components/skeletons/skeletonCard';

export function SkeletonEventList() {
  const numberOfSkeletons = 5; // Cambia questo valore per il numero di scheletri che vuoi mostrare

  return (
    <div className="space-y-6">
        <div className="text-center text-xl mt-8">
            Not available now - Coming soon
        </div>
      {[...Array(numberOfSkeletons)].map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
}
