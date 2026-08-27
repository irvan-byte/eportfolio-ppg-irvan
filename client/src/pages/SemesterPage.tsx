import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { coursesData } from "@/data/portfolioData";
import { BookOpen, FileText, CheckCircle2, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { useState } from "react";

interface SemesterPageProps { semesterNum: 1 | 2; }

/**
 * Style reminder — Modern Humanist & Reflective.
 * Course cards behave like open notebook entries: clean surfaces, readable evidence, and calm expansion.
 */
export default function SemesterPage({ semesterNum }: SemesterPageProps) {
  const filteredCourses = coursesData.filter((c) => c.semester === semesterNum);
  const [expandedId, setExpandedId] = useState<string | null>(filteredCourses[0]?.id || null);
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="max-w-3xl mb-14"><div className="text-xs font-mono font-bold text-cyan-700 tracking-[0.2em] uppercase mb-4">04 — Dokumentasi Perkuliahan</div><h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-5">Semester {semesterNum}: belajar, mencoba, merefleksikan.</h1><p className="text-lg text-slate-600 leading-relaxed">{semesterNum === 1 ? "Fondasi pedagogik, filosofi pendidikan, computational thinking, dan perancangan asesmen awal." : "Pengembangan lanjutan: pembelajaran sosial emosional, projek kepemimpinan, pendidikan inklusi, dan seminar proposal."}</p></div>
          <div className="space-y-4">
     {filteredCourses.map((course) => {
  const isExpanded = expandedId === course.id;
  return (
    <div key={course.id} className="bg-white border rounded-2xl overflow-hidden transition-all duration-300">
<button 
  onClick={() => setExpandedId(isExpanded ? null : course.id)} 
  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-5"
>
  <div className="flex items-center gap-4">
    <div className="w-11 h-11 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center shrink-0">
      <BookOpen className="w-5 h-5" />
    </div>

    <div>
      <div className="text-xs font-bold text-cyan-700 uppercase tracking-wider mb-1">
        Semester {course.semester}
      </div>
      <h2 className="text-xl font-extrabold text-slate-950">
        {course.nama}
      </h2>
    </div>
  </div>

  <div className="text-slate-400 shrink-0">
    {isExpanded ? (
      <ChevronUp className="w-5 h-5" />
    ) : (
      <ChevronDown className="w-5 h-5" />
    )}
  </div>
</button>
      
      {isExpanded && (
        <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 space-y-6 animate-in fade-in duration-300">
          <p className="text-slate-600 leading-relaxed pt-6">{course.deskripsi}</p>
          
          {/* Grid content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* ... grid items ... */}
          </div>
          
          {/* Documentation section */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Bukti / dokumentasi
            </h3>
            <div className="flex flex-wrap gap-2">
              {course.dokumentasi.map((doc, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-white border border-dashed border-slate-300 text-slate-500 text-xs"
                >
                  {doc}
                </span>
              ))}
            </div>
            {course.arsipUrl && (
              <a
                href={course.arsipUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-cyan-700 hover:text-cyan-900 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Lihat arsip lengkap
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
})}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
