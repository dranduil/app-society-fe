import { Dashboard } from "@/pages/dashboard";
import { LoginPage } from "@/pages/login";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export default function Navigation() {
    return (
        <Router>
            <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
                <TooltipProvider>
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/dashboard/{id}" element={<Dashboard />} />
                        <Route path="/events" element={<Dashboard />} />
                        <Route path="/events/{id}" element={<Dashboard />} />
                        <Route path="/courses" element={<Dashboard />} />
                        <Route path="/courses/{id}" element={<Dashboard />} />
                        <Route path="/properties" element={<Dashboard />} />
                        <Route path="/properties/{id}" element={<Dashboard />} />
                        <Route path="/my-property-reservation" element={<Dashboard />} />
                        <Route path="/participations" element={<Dashboard />} />
                        <Route path="/profile" element={<Dashboard />} />
                        <Route path="/profile/cards" element={<Dashboard />} />
                        <Route path="/jobs" element={<Dashboard />} />
                        <Route path="/coming-soon" element={<Dashboard />} />
                        <Route path="/page-not-found" element={<Dashboard />} />
                    </Routes>
                </TooltipProvider>
            </ThemeProvider>
        </Router>
    )
}