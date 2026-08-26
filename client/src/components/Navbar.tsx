import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

/**
 * Style reminder — Modern Humanist & Reflective.
 * The IHA monogram is the primary identity mark; navy frames the journey while cyan marks active learning.
 */
export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);
      setScrolled(currentScroll > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/tentang", label: "Tentang Saya" },
    { href: "/perjalanan", label: "Perjalanan PPG" },
    { href: "/ppl", label: "PPL" },
    { href: "/portofolio", label: "Portofolio" },
    { href: "/refleksi", label: "Refleksi" },
    { href: "/galeri", label: "Galeri" },
    { href: "/kontak", label: "Kontak" },
  ];
  const semesterLinks = [
    { href: "/semester-1", label: "Semester 1" },
    { href: "/semester-2", label: "Semester 2" },
  ];
  const isActive = (href: string) => href === "/" ? location === "/" : location.startsWith(href);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300 ${scrolled ? "bg-slate-950/95 shadow-lg backdrop-blur-md py-3" : "bg-slate-950/85 backdrop-blur-sm py-4"}`}>
      <div className="absolute bottom-0 left-0 h-0.5 bg-cyan-400 transition-all duration-150" style={{ width: `${scrollProgress}%` }} />
      <div className="container mx-auto px-4 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 rounded-xl bg-cyan-400 text-slate-950 flex items-center justify-center shadow-md group-hover:-rotate-3 group-hover:scale-105 transition-transform overflow-hidden">
<img
  src="/eportfolio-ppg-irvan/logo.png"
  alt="Monogram IHA"
  className="w-full h-full object-contain"
/>
          </div>
          <div>
            <span className="font-extrabold text-lg tracking-tight block text-white">Irvan Hadi Abiyoga</span>
            <span className="text-xs text-cyan-300 block font-medium">E-Portfolio PPG Informatika</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
          {navLinks.slice(0, 3).map((link) => (
            <Link key={link.href} href={link.href} className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive(link.href) ? "bg-blue-600 text-white shadow-sm" : "text-slate-200 hover:bg-white/10 hover:text-white"}`}>
              {link.label}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className={`text-sm font-medium px-3 py-2 h-auto text-slate-200 hover:bg-white/10 hover:text-white ${location.startsWith("/semester") ? "bg-blue-600 text-white" : ""}`}>
                Semester <ChevronDown className="w-4 h-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-slate-950 border-slate-700 text-slate-100">
              {semesterLinks.map((sem) => (
                <DropdownMenuItem key={sem.href} asChild className="hover:bg-white/10 focus:bg-white/10 cursor-pointer">
                  <Link href={sem.href} className="w-full block px-2 py-1.5 text-sm">{sem.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {navLinks.slice(3).map((link) => (
            <Link key={link.href} href={link.href} className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive(link.href) ? "bg-blue-600 text-white shadow-sm" : "text-slate-200 hover:bg-white/10 hover:text-white"}`}>
              {link.label}
            </Link>
          ))}
        </nav>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-lg bg-white/10 text-slate-200 hover:text-white focus:outline-none" aria-label="Buka menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-950 border-b border-slate-800 shadow-2xl animate-in fade-in duration-200">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.slice(0, 3).map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive(link.href) ? "bg-blue-600 text-white" : "text-slate-200 hover:bg-white/10"}`}>{link.label}</Link>
            ))}
            <div className="py-2 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Semester</div>
            {semesterLinks.map((sem) => (
              <Link key={sem.href} href={sem.href} onClick={() => setIsOpen(false)} className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive(sem.href) ? "bg-blue-600 text-white" : "text-slate-300 hover:bg-white/10"}`}>{sem.label}</Link>
            ))}
            {navLinks.slice(3).map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive(link.href) ? "bg-blue-600 text-white" : "text-slate-200 hover:bg-white/10"}`}>{link.label}</Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
