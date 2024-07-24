import { Dashboard } from "@/pages/dashboard";
import { LoginPage } from "@/pages/login";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export default function Navigation() {
    return (
        <Router>
            <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
                <TooltipProvider>
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </TooltipProvider>
            </ThemeProvider>
        </Router>
    )
}