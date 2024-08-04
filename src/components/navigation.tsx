import { Dashboard } from "@/pages/dashboard";
import { LoginPage } from "@/pages/login";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProfilePage from "@/pages/profile";
import EventsPage from "@/pages/events";
import CoursesPage from "@/pages/courses";
import PropertiesPage from "@/pages/properties";
import ReservationsPage from "@/pages/reservations";
import JobsPage from "@/pages/jobs";
import PageNotFoundPage from "@/pages/page-not-found";
import Helmet from "./helmet";
import { HelmetProvider } from "react-helmet-async";
import ComingSoonPage from "@/pages/coming-soon";
import { Signup } from "@/pages/signup";
import PrivateRoutes from "./privateRoutes";

export default function Navigation() {
    const metaTitle = "Flexa Life"
    const keywords = "flexa"
    const metDescription = "Flexa is a comprehensive SaaS platform designed to streamline your professional and personal growth. Initially focused on sharing job posts, Flexa is evolving to offer a wide range of services including property rentals and sales, event management, and online courses. Whether you’re looking for your next career move, your dream home, engaging events, or enriching courses, Flexa brings everything to your fingertips in one user-friendly platform. Embrace the future with Flexa and discover endless opportunities to thrive."
    return (
        <Router>
            <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
                <HelmetProvider>
                    <Helmet title={metaTitle} description={metDescription} keywords={keywords} />
                </HelmetProvider>
                <TooltipProvider>
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/sign-up" element={<Signup />} />
                        <Route path="/coming-soon" element={<ComingSoonPage />} />
                        <Route path="*" element={<PageNotFoundPage />} />
                        <Route element={<PrivateRoutes />}>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/events" element={<EventsPage />} />
                            <Route path="/events/:id" element={<Dashboard />} />
                            <Route path="/courses" element={<CoursesPage />} />
                            <Route path="/courses/:id" element={<CoursesPage />} />
                            <Route path="/properties" element={<PropertiesPage />} />
                            <Route path="/properties/:id" element={<PropertiesPage />} />
                            <Route path="/my-property-reservation" element={<ReservationsPage />} />
                            <Route path="/participations" element={<Dashboard />} />
                            <Route path="/profile" element={<ProfilePage />} />
                            <Route path="/profile/cards" element={<Dashboard />} />
                            <Route path="/jobs" element={<JobsPage />} />
                            <Route path="/jobs/page/:page" element={<JobsPage />} />
                        </Route>
                    </Routes>
                </TooltipProvider>
            </ThemeProvider>
        </Router>
    );
}