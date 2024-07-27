import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function PageNotFoundPage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <CardContent className="flex flex-col items-center text-center">
        <img className="p-4" src="/space.png" width={300} alt="Not Found" />
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Page Not Found</p>
        <Link to="/" className="text-blue-500 underline">
            <Button>    
                Go back to Home
            </Button>
        </Link>
      </CardContent>
    </div>
  );
}
