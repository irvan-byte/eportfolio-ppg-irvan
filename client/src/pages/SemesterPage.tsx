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
            {filteredCourses.map((course) => { const isExpanded = expandedId === course.id; return <div key={course.id} className={`bg-white border rounded-2xl overflow-hidden transition-all duration-200 ${isExpanded ? "border-cyan-300 shadow-lg shadow-slate-200" : "border-slate-200 hover:border-cyan-300"}`}>
              <button onClick={() => setExpandedId(isExpanded ? null : course.id)} className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-5"><div className="flex items-start gap-4"><div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0"><BookOpen className="w-5 h-5" /></div><div><span className="text-xs font-bold text-cyan-700 uppercase tracking-wider block mb-1">Mata kuliah</span><h2 className="text-xl font-bold text-slate-950">{course.nama}</h2><p className="text-sm text-slate-500 mt-1 line-clamp-1">{course.deskripsi}</p></div></div>{isExpanded ? <ChevronUp className="w-5 h-5 text-blue-700 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}</button>
              {isExpanded && <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 space-y-6 animate-in fade-in duration-300">
                <p className="text-slate-600 leading-relaxed pt-6">{course.deskripsi}</p><div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                    <h3 className="text-xs font-bold text-blue-700 uppercase tracking-wider flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-4 h-4" /> Hal yang dipelajari</h3><ul className="space-y-2 text-sm text-slate-600">
                        {course.halDipelajari.map((item, idx) => <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />{item}</li>)}</ul>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                    <h3 className="text-xs font-bold text-blue-700 uppercase tracking-wider flex items-center gap-2 mb-3">
                      <FileText className="w-4 h-4" /> Tugas / proyek</h3><ul className="space-y-2 text-sm text-slate-600">{course.tugas.map((item, idx) => <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />{item}</li>)}</ul></div></div><div className="bg-cyan-50 border border-cyan-100 p-5 rounded-xl"><h3 className="text-xs font-bold text-cyan-800 uppercase tracking-wider mb-2">Refleksi pribadi</h3>
                          <p className="text-slate-700 text-sm italic leading-relaxed">"{course.refleksi}"</p></div>
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
              </div>}
            </div>; })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
