import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { coursesData } from "@/data/portfolioData";
import { BookOpen, FileText, CheckCircle2, ChevronDown, ChevronUp, ExternalLink, Lightbulb, Sparkles } from "lucide-react";
import { useState } from "react";

interface SemesterPageProps {
  semesterNum: 1 | 2;
}

/**
 * Modern Humanist & Reflective.
 * Menampilkan review mendalam setiap mata kuliah PPG dengan gaya mahasiswa natural,
 * terstruktur rapi untuk penilaian dosen & guru pamong.
 */
export default function SemesterPage({ semesterNum }: SemesterPageProps) {
  const filteredCourses = coursesData.filter((c) => c.semester === semesterNum);
  const [expandedId, setExpandedId] = useState<string | null>(filteredCourses[0]?.id || null);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono font-bold text-cyan-700 tracking-[0.2em] uppercase mb-3">
              04 - Dokumentasi & Review Perkuliahan
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
              Semester {semesterNum}: Refleksi, Teori, dan Praktik.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {semesterNum === 1
                ? "Fondasi pedagogik, filosofi pendidikan Ki Hadjar Dewantara, growth mindset, kebugaran, dan perancangan pembelajaran mendalam berbasis Understanding by Design (UbD)."
                : "Pengembangan kompetensi lanjutan: praktik mengajar mandiri (PMAL), pembelajaran sosial emosional (PSE), projek kepemimpinan sosial, pendidikan inklusi, dan seminar proposal riset tindakan."}
            </p>
          </div>

          {/* Course List Accordion */}
          <div className="space-y-5">
            {filteredCourses.map((course) => {
              const isExpanded = expandedId === course.id;

              return (
                <div
                  key={course.id}
                  className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 shadow-sm ${
                    isExpanded ? "border-cyan-300 ring-2 ring-cyan-100 shadow-md" : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {/* Accordion Trigger */}
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : course.id)}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-5 transition-colors hover:bg-slate-50/70"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center shrink-0 border border-cyan-100">
                        <BookOpen className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-cyan-700 uppercase tracking-wider mb-1">
                          Semester {course.semester} &bull; Mata Kuliah Inti
                        </div>
                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950">
                          {course.nama}
                        </h2>
                      </div>
                    </div>

                    <div className="text-slate-400 shrink-0">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-cyan-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </button>

                  {/* Accordion Content */}
                  {isExpanded && (
                    <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 space-y-6 animate-in fade-in duration-300">
                      {/* Deskripsi & Ekspektasi */}
                      <div className="pt-6">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                          Pengantar & Esensi Mata Kuliah
                        </h3>
                        <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                          {course.deskripsi}
                        </p>
                      </div>

                      {/* Grid: Hal yang Dipelajari & Tugas/Aksi Nyata */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                        {/* Hal yang Dipelajari */}
                        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80">
                          <h4 className="text-xs font-bold text-cyan-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                            <Sparkles className="w-4 h-4 text-cyan-600" />
                            Konsep Kunci yang Dipelajari
                          </h4>
                          <ul className="space-y-2.5">
                            {course.halDipelajari.map((hal, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                                <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                                <span>{hal}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tugas & Aksi Nyata */}
                        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80">
                          <h4 className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                            <FileText className="w-4 h-4 text-blue-600" />
                            Tugas & Aksi Nyata
                          </h4>
                          <ul className="space-y-2.5">
                            {course.tugas.map((tug, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2" />
                                <span>{tug}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Refleksi Bermakna 4F */}
                      <div className="bg-gradient-to-r from-amber-50/60 to-cyan-50/60 rounded-xl p-5 sm:p-6 border border-amber-200/60">
                        <div className="flex items-center gap-2 mb-2.5 text-amber-900 font-bold text-xs uppercase tracking-wider">
                          <Lightbulb className="w-4 h-4 text-amber-600" />
                          Refleksi Pengalaman Belajar (Reflektif Alami)
                        </div>
                        <p className="text-slate-800 leading-relaxed text-sm italic">
                          "{course.refleksi}"
                        </p>
                      </div>

                      {/* Bukti & Artefak Dokumen */}
                      <div className="pt-2">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                          Artefak Pembelajaran & Bukti Karya
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {course.dokumentasi.map((doc, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-medium shadow-xs"
                            >
                              &bull; {doc}
                            </span>
                          ))}
                        </div>

                        {course.arsipUrl && (
                          <a
                            href={course.arsipUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-semibold text-xs transition-colors shadow-xs"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            Buka Folder Artefak di Google Drive
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Footer Navigation */}
          <div className="mt-14 p-6 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs text-cyan-300 font-mono uppercase">Navigasi Semester</div>
              <div className="text-base font-bold">
                {semesterNum === 1 ? "Lanjut ke Review Semester 2?" : "Kembali ke Review Semester 1?"}
              </div>
            </div>
            <a
              href={semesterNum === 1 ? "/eportfolio-ppg-irvan/semester-2" : "/eportfolio-ppg-irvan/semester-1"}
              className="px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm transition-colors"
            >
              Buka Semester {semesterNum === 1 ? "2" : "1"} &rarr;
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
