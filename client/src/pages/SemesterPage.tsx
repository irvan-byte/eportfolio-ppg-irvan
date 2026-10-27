import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { coursesData } from "@/data/portfolioData";
import {
  BookOpen,
  FileText,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Lightbulb,
  Sparkles,
  Link2,
  AlertTriangle,
  TrendingUp,
  FolderCheck
} from "lucide-react";
import { useState } from "react";

interface SemesterPageProps {
  semesterNum: 1 | 2;
}

/**
 * Modern Humanist & Reflective.
 * Menampilkan review mendalam setiap mata kuliah PPG Prajabatan Informatika UNESA,
 * dilengkapi LEMBAR KERJA 2 (LK 2): Refleksi 4C, Analisis Artefak, dan Kaitan Praktis
 * yang terstruktur rapi, elegan, dan mudah dinilai oleh dosen & guru pamong.
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
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
              {semesterNum === 1
                ? "Fondasi pedagogik, filosofi pendidikan Ki Hadjar Dewantara, growth mindset, kebugaran jasmani, pemahaman peserta didik (PPDP), pembelajaran mendalam (PMAD), dan praktik terbimbing di SMAN 15 Surabaya."
                : "Pengembangan kompetensi lanjutan: pembelajaran mendalam & asesmen lanjutan (PMAL), pembelajaran sosial emosional (PSE), projek kepemimpinan sosial, pendidikan inklusi, dan seminar riset tindakan di SMPN 8 Surabaya."}
            </p>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-cyan-100/70 border border-cyan-200 text-cyan-900 text-xs font-medium">
              <Sparkles className="w-4 h-4 text-cyan-700 shrink-0" />
              <span>
                Dilengkapi <strong>Lembar Kerja 2 (LK 2)</strong>: Refleksi 4C (Connection, Challenge, Concept, Change), Analisis Artefak & Kaitan Praktis.
              </span>
            </div>
          </div>

          {/* Course List Accordion */}
          <div className="space-y-6">
            {filteredCourses.map((course) => {
              const isExpanded = expandedId === course.id;

              return (
                <div
                  key={course.id}
                  className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 shadow-xs ${
                    isExpanded ? "border-cyan-400 ring-2 ring-cyan-100 shadow-md" : "border-slate-200 hover:border-slate-300"
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
                    <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 space-y-7 animate-in fade-in duration-300">
                      {/* Deskripsi & Pengantar */}
                      <div className="pt-6">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                          Pengantar & Esensi Mata Kuliah
                        </h3>
                        <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                          {course.deskripsi}
                        </p>
                      </div>

                      {/* Grid: Hal yang Dipelajari & Tugas/Aksi Nyata */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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

                      {/* LEMBAR KERJA 2 (LK 2): REFLEKSI PENGALAMAN BELAJAR */}
                      <div className="pt-2">
                        {/* Header LK 2 */}
                        <div className="bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 text-white rounded-2xl p-5 sm:p-6 mb-6 shadow-sm border border-cyan-900/50">
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-2 border border-cyan-400/30">
                            <Sparkles className="w-3.5 h-3.5" />
                            LEMBAR KERJA 2 (LK 2) • PPG PRAJABATAN
                          </div>
                          <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                            Refleksi Pengalaman Belajar Setiap Mata Kuliah
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                            Kajian reflektif komprehensif mengintegrasikan kerangka Refleksi 4C, Analisis Artefak Pembelajaran, dan Kaitan Praktis Masa Depan.
                          </p>
                        </div>

                        {/* BAGIAN A: REFLEKSI MODEL 4C */}
                        {course.refleksi4C && (
                          <div className="mb-6">
                            <div className="flex items-center gap-2.5 mb-4">
                              <div className="w-7 h-7 rounded-lg bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold text-xs border border-cyan-200">
                                A
                              </div>
                              <div>
                                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                                  Refleksi Model 4C (Pola Pikir & Peran Pendidik)
                                </h4>
                                <p className="text-xs text-slate-500">
                                  Kajian mendalam empat aspek terkait peran calon guru profesional
                                </p>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {/* 1. CONNECTION */}
                              <div className="bg-white rounded-xl p-5 border-2 border-blue-100 hover:border-blue-300 transition-colors shadow-2xs">
                                <div className="flex items-center gap-2.5 mb-2.5">
                                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-200">
                                    <Link2 className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <div className="text-[11px] font-mono font-bold text-blue-700 uppercase tracking-wider">
                                      Dimensi 1
                                    </div>
                                    <h5 className="text-sm font-bold text-slate-900">
                                      Connection (Keterkaitan)
                                    </h5>
                                  </div>
                                </div>
                                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                                  {course.refleksi4C.connection}
                                </p>
                              </div>

                              {/* 2. CHALLENGE */}
                              <div className="bg-white rounded-xl p-5 border-2 border-amber-100 hover:border-amber-300 transition-colors shadow-2xs">
                                <div className="flex items-center gap-2.5 mb-2.5">
                                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
                                    <AlertTriangle className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <div className="text-[11px] font-mono font-bold text-amber-700 uppercase tracking-wider">
                                      Dimensi 2
                                    </div>
                                    <h5 className="text-sm font-bold text-slate-900">
                                      Challenge (Tantangan)
                                    </h5>
                                  </div>
                                </div>
                                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                                  {course.refleksi4C.challenge}
                                </p>
                              </div>

                              {/* 3. CONCEPT */}
                              <div className="bg-white rounded-xl p-5 border-2 border-purple-100 hover:border-purple-300 transition-colors shadow-2xs">
                                <div className="flex items-center gap-2.5 mb-2.5">
                                  <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 border border-purple-200">
                                    <Lightbulb className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <div className="text-[11px] font-mono font-bold text-purple-700 uppercase tracking-wider">
                                      Dimensi 3
                                    </div>
                                    <h5 className="text-sm font-bold text-slate-900">
                                      Concept (Konsep Kunci)
                                    </h5>
                                  </div>
                                </div>
                                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                                  {course.refleksi4C.concept}
                                </p>
                              </div>

                              {/* 4. CHANGE */}
                              <div className="bg-white rounded-xl p-5 border-2 border-emerald-100 hover:border-emerald-300 transition-colors shadow-2xs">
                                <div className="flex items-center gap-2.5 mb-2.5">
                                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                                    <TrendingUp className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <div className="text-[11px] font-mono font-bold text-emerald-700 uppercase tracking-wider">
                                      Dimensi 4
                                    </div>
                                    <h5 className="text-sm font-bold text-slate-900">
                                      Change (Perubahan Diri)
                                    </h5>
                                  </div>
                                </div>
                                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                                  {course.refleksi4C.change}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* BAGIAN B: ANALISIS ARTEFAK */}
                        {course.analisisArtefak && (
                          <div className="mb-6 bg-slate-50/80 border border-slate-200 rounded-xl p-5 sm:p-6">
                            <div className="flex items-center gap-2.5 mb-3">
                              <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xs border border-blue-200">
                                B
                              </div>
                              <div>
                                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                                  Analisis Artefak Pembelajaran
                                </h4>
                                <p className="text-xs text-slate-500">
                                  Identifikasi bukti dukung hasil refleksi beserta alasan pedagogis pemilihannya
                                </p>
                              </div>
                            </div>

                            <div className="space-y-4 pt-2">
                              <div>
                                <div className="text-xs font-bold text-slate-700 mb-2.5 flex items-center justify-between">
                                  <span>Dokumen & Artefak Bukti Belajar Asli:</span>
                                  <span className="text-[11px] font-normal text-slate-500">
                                    Klik kartu untuk membuka / mengunduh berkas PDF asli
                                  </span>
                                </div>

                                {course.analisisArtefak.artefakDetail && course.analisisArtefak.artefakDetail.length > 0 ? (
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                    {course.analisisArtefak.artefakDetail.map((art, idx) => (
                                      <a
                                        key={idx}
                                        href={art.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group p-3 rounded-xl bg-white border border-slate-200 hover:border-cyan-500 hover:shadow-xs transition-all flex items-start gap-3"
                                      >
                                        <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                          <FileText className="w-4 h-4" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                          <div className="text-xs font-bold text-slate-900 group-hover:text-cyan-700 transition-colors truncate">
                                            {art.nama}
                                          </div>
                                          {art.deskripsi && (
                                            <p className="text-[11px] text-slate-500 leading-snug mt-0.5 line-clamp-2">
                                              {art.deskripsi}
                                            </p>
                                          )}
                                          <div className="inline-flex items-center gap-1 text-[10px] font-semibold text-cyan-700 group-hover:text-cyan-800 mt-1.5">
                                            <span>Buka / Unduh Berkas Asli</span>
                                            <ExternalLink className="w-3 h-3" />
                                          </div>
                                        </div>
                                      </a>
                                    ))}
                                  </div>
                                ) : (
                                  <div className="flex flex-wrap gap-2">
                                    {course.analisisArtefak.artefakTerpilih.map((art, idx) => (
                                      <span
                                        key={idx}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-medium shadow-2xs"
                                      >
                                        <FolderCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                                        {art}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>

                              <div className="bg-white rounded-lg p-4 border border-slate-200">
                                <div className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1.5">
                                  Alasan Pemilihan Artefak Sebagai Bukti Belajar Terbaik:
                                </div>
                                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                                  {course.analisisArtefak.alasanPemilihan}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* BAGIAN C: KAITAN PRAKTIS */}
                        {course.kaitanPraktis && (
                          <div className="mb-6 bg-gradient-to-br from-cyan-50/60 to-blue-50/60 border border-cyan-200 rounded-xl p-5 sm:p-6">
                            <div className="flex items-center gap-2.5 mb-4">
                              <div className="w-7 h-7 rounded-lg bg-cyan-200 text-cyan-900 flex items-center justify-center font-bold text-xs border border-cyan-300">
                                C
                              </div>
                              <div>
                                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                                  Kaitan Praktis & Rencana Perubahan Masa Depan
                                </h4>
                                <p className="text-xs text-slate-600">
                                  Integrasi konsep di kelas nyata dan komitmen perbaikan berkelanjutan
                                </p>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="bg-white/95 rounded-lg p-4 border border-cyan-100 shadow-2xs">
                                <div className="text-xs font-bold text-cyan-900 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                                  Konsep Utama yang Diterapkan di Kelas
                                </div>
                                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                                  {course.kaitanPraktis.konsepUtama}
                                </p>
                              </div>

                              <div className="bg-white/95 rounded-lg p-4 border border-blue-100 shadow-2xs">
                                <div className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                                  <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                                  Rencana Perubahan & Aksi Masa Depan
                                </div>
                                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                                  {course.kaitanPraktis.perubahanMasaDepan}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Folder & Arsip Dokumen Lengkap di Google Drive */}
                      <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="text-xs text-slate-500">
                          Seluruh dokumen portofolio dan artefak pembelajaran tersimpan secara resmi di cloud repository.
                        </div>

                        {course.arsipUrl && (
                          <a
                            href={course.arsipUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-semibold text-xs transition-colors shadow-xs shrink-0"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            Buka Folder Artefak Lengkap di Google Drive
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
