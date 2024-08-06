import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, RootState, useAppSelector } from "@/store";

export function RequestPassword() {
    const { loading, isAuthenticated } = useAppSelector((state: RootState) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
        navigate('/');
        }
    }, [isAuthenticated, navigate]);


  const [email, setEmail] = useState('');
  const dispatch = useAppDispatch();



  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    setTimeout(() => {
        navigate('/login');
    }, 1500)
  };

  return (
    <div className="h-screen w-full flex items-center justify-center py-12">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Request New Password</CardTitle>
          <CardDescription>
            Enter your information to reset your password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email} onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
               Request new password
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
