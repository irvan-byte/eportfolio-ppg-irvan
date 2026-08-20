import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

import Home from "./pages/Home";
import About from "./pages/About";
import TimelinePage from "./pages/TimelinePage";
import SemesterPage from "./pages/SemesterPage";
import PplPage from "./pages/PplPage";
import PortfolioPage from "./pages/PortfolioPage";
import ReflectionsPage from "./pages/ReflectionsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

function Router() {
  const [location, setLocation] = useLocation();

  const base = "/eportfolio-ppg-irvan";

  if (location === base) {
    setLocation("/");
  }

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/tentang" component={About} />
      <Route path="/perjalanan" component={TimelinePage} />
      <Route path="/semester-1">
        <SemesterPage semesterNum={1} />
      </Route>
      <Route path="/semester-2">
        <SemesterPage semesterNum={2} />
      </Route>
      <Route path="/ppl" component={PplPage} />
      <Route path="/portofolio" component={PortfolioPage} />
      <Route path="/refleksi" component={ReflectionsPage} />
      <Route path="/galeri" component={GalleryPage} />
      <Route path="/kontak" component={ContactPage} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
