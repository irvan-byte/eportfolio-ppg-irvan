import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

import Home from "./pages/Home";
import About from "./pages/About";
import TimelinePage from "./pages/TimelinePage";
import SemesterPage from "./pages/SemesterPage";
import PplPage from "./pages/PplPage";
import PortfolioPage from "./pages/PortfolioPage";
import KompulogikaPage from "./pages/KompulogikaPage";
import Lk3Page from "./pages/Lk3Page";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

function Router() {
  return (
    <WouterRouter base="/eportfolio-ppg-irvan">
      <Switch>
        {/* Beranda */}
        <Route path="/" component={Home} />

        {/* Tentang Profil */}
        <Route path="/tentang" component={About} />
        <Route path="/about" component={About} />

        {/* Garis Waktu Perjalanan PPG */}
        <Route path="/perjalanan" component={TimelinePage} />
        <Route path="/timeline" component={TimelinePage} />

        {/* Perkuliahan Semester 1 & 2 */}
        <Route path="/semester-1">
          <SemesterPage semesterNum={1} />
        </Route>
        <Route path="/semester-2">
          <SemesterPage semesterNum={2} />
        </Route>

        {/* PPL Terpadu (SMAN 15 & SMPN 8) */}
        <Route path="/ppl" component={PplPage} />

        {/* Portofolio & Artefak */}
        <Route path="/portofolio" component={PortfolioPage} />
        <Route path="/portfolio" component={PortfolioPage} />

        {/* Refleksi Pedagogik */}
        {/* Inovasi Pembelajaran Digital: Web Kompulogika */}
        <Route path="/kompulogika" component={KompulogikaPage} />
        <Route path="/inovasi" component={KompulogikaPage} />
        <Route path="/refleksi" component={KompulogikaPage} />
        <Route path="/reflections" component={KompulogikaPage} />

        {/* Lembar Kerja 3 (LK 3): Refleksi Akhir Program PPG */}
        <Route path="/lk-3" component={Lk3Page} />
        <Route path="/lk3" component={Lk3Page} />
        <Route path="/refleksi-akhir" component={Lk3Page} />

        {/* Galeri Foto Dokumentasi */}
        <Route path="/galeri" component={GalleryPage} />
        <Route path="/gallery" component={GalleryPage} />

        {/* Kontak */}
        <Route path="/kontak" component={ContactPage} />
        <Route path="/contact" component={ContactPage} />

        {/* 404 Not Found Fallback */}
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
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
