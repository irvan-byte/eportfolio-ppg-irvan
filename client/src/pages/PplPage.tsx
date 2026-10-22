import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  pplData,
  siklusDataList,
  taskComponentsList,
  utsPplData,
  pplTimelineSteps,
} from "@/data/portfolioData";
import {
  School,
  CheckCircle2,
  ExternalLink,
  Video,
  FileText,
  Layers,
  Award,
  Image as ImageIcon,
  FolderOpen,
  MapPin,
} from "lucide-react";
import { useState } from "react";

type PplTab = "overview" | "siklus" | "tugas1" | "uts" | "dokumentasi";

export default function PplPage() {
  const [activeTab, setActiveTab] = useState<PplTab>("overview");

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Top Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10">
            <div className="lg:col-span-8">
              <div className="text-xs font-mono font-bold text-cyan-700 tracking-[0.2em] uppercase mb-3">
                05 - Praktik Pengalaman Lapangan (PPL)
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
                Pusat Terpadu Praktik Mengajar Nyata.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                PPL terbagi menjadi dua tahap pengabdian: <strong>PPL I Terbimbing di SMAN 15 Surabaya</strong> (jenjang SMA) dan <strong>PPL II Mandiri di SMP Negeri 8 Surabaya</strong> (jenjang SMP).
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="bg-slate-950 text-white rounded-2xl p-5 w-full sm:w-72 shadow-lg">
                <div className="font-mono text-cyan-300 text-xs tracking-[0.15em] mb-1">
                  IHA &bull; PPL INFORMATIKA
                </div>
                <div className="text-lg font-bold">SMAN 15 & SMPN 8</div>
                <div className="text-xs text-slate-300 mt-1">
                  Surabaya &bull; Terbimbing & Mandiri
                </div>
                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-cyan-400 font-medium">Status:</span>
                  <span className="bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full font-semibold">
                    Praktik Mandiri Berjalan
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 border-b border-slate-200 scrollbar-none">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                activeTab === "overview"
                  ? "bg-slate-950 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <School className="w-4 h-4" />
              Ikhtisar & Sekolah Mitra
            </button>
            <button
              onClick={() => setActiveTab("siklus")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                activeTab === "siklus"
                  ? "bg-slate-950 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <Layers className="w-4 h-4" />
              Siklus Praktik Mengajar (1-4)
            </button>
            <button
              onClick={() => setActiveTab("tugas1")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                activeTab === "tugas1"
                  ? "bg-slate-950 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <FileText className="w-4 h-4" />
              Tugas 1 (Analisis Komponen)
            </button>
            <button
              onClick={() => setActiveTab("uts")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                activeTab === "uts"
                  ? "bg-slate-950 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <Award className="w-4 h-4" />
              Produk UTS & UAS PPL
            </button>
            <button
              onClick={() => setActiveTab("dokumentasi")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                activeTab === "dokumentasi"
                  ? "bg-slate-950 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              Galeri & Dokumentasi Drive
            </button>
          </div>

          {/* TAB 1: OVERVIEW & SEKOLAH MITRA */}
          {activeTab === "overview" && (
            <div className="space-y-10 animate-in fade-in duration-200">
              {/* Card Identitas Sekolah & Pamong */}
              <div className="bg-slate-950 text-white rounded-3xl p-7 sm:p-9 shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block mb-1">
                      PPL Terbimbing (SMA)
                    </span>
                    <h3 className="text-base font-bold text-white flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                      {pplData.sekolahTerbimbing}
                    </h3>
                    <div className="text-xs text-slate-400 mt-1">
                      Jenjang: {pplData.jenjangTerbimbing}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block mb-1">
                      PPL Mandiri (SMP)
                    </span>
                    <h3 className="text-base font-bold text-white flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                      {pplData.sekolahMandiri}
                    </h3>
                    <div className="text-xs text-slate-400 mt-1">
                      Jenjang: {pplData.jenjangMandiri}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block mb-1">
                      Guru Pamong (Mandiri)
                    </span>
                    <h3 className="text-base font-bold text-white">
                      {pplData.guruPamongMandiri}
                    </h3>
                    <div className="text-xs text-slate-400 mt-1">
                      Kepala Sekolah: {pplData.kepalaSekolahMandiri}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block mb-1">
                      Dosen Pembimbing
                    </span>
                    <h3 className="text-base font-bold text-white">
                      {pplData.dosenPembimbing}
                    </h3>
                    <div className="text-xs text-slate-400 mt-1">
                      LPTK: Universitas Negeri Surabaya
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/15 mt-7 pt-6 text-slate-300 text-sm leading-relaxed">
                  {pplData.deskripsi}
                </div>
              </div>

              {/* 5 Tahapan Alur PPL */}
              <div>
                <div className="max-w-3xl mb-6">
                  <h2 className="text-2xl font-extrabold text-slate-950">
                    5 Alur Siklus PPL Terpadu
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    Setiap tahapan memiliki bukti artefak yang terhubung ke dokumen modul ajar, video pelaksanaan, dan instrumen asesmen.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {pplData.tahapan.map((tahap, idx) => (
                    <article
                      key={idx}
                      className={`bg-white border rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-200 ${
                        idx === 4
                          ? "md:col-span-2 bg-gradient-to-br from-cyan-50/70 to-blue-50/70 border-cyan-200"
                          : "border-slate-200"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center font-mono font-bold text-sm shrink-0">
                          0{idx + 1}
                        </div>
                        <span className="text-[11px] text-slate-400 text-right bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">
                          {tahap.dokumentasiPlaceholder}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-950 mb-2">
                        {tahap.judul.replace(/^\d+\.\s*/, "")}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        {tahap.deskripsi}
                      </p>
                      <div className="border-t border-slate-100 pt-3">
                        <ul className="space-y-1.5 text-xs text-slate-600">
                          {tahap.poinPenting.map((poin, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 mt-0.5 shrink-0" />
                              <span>{poin}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* 8 Langkah Alur Praktik Mengajar */}
              <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-xs">
                <h3 className="text-lg font-bold text-slate-950 mb-4">
                  8 Langkah Alur Praktik Mengajar
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {pplTimelineSteps.map((step) => (
                    <div
                      key={step.no}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="w-6 h-6 rounded-full bg-cyan-600 text-white text-[11px] font-bold flex items-center justify-center">
                          {step.no}
                        </span>
                      </div>
                      <div className="font-bold text-xs text-slate-900 mb-1">
                        {step.judul}
                      </div>
                      <div className="text-[11px] text-slate-500 leading-tight">
                        {step.deskripsi}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SIKLUS PRAKTIK MENGAJAR (1-4) */}
          {activeTab === "siklus" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="max-w-3xl mb-4">
                <h2 className="text-2xl font-extrabold text-slate-950">
                  Daftar Siklus Praktik Mengajar Mandiri (SMPN 8 Surabaya)
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Rincian pelaksanaan setiap siklus praktik mengajar mandiri di kelas nyata SMPN 8 Surabaya, perangkat pembelajaran, tautan video, dan dokumentasi lengkap.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {siklusDataList.map((siklus) => (
                  <div
                    key={siklus.nomor}
                    className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span className="text-xs font-mono font-bold text-cyan-700 uppercase tracking-wider">
                          Siklus {siklus.nomor}
                        </span>
                        <span
                          className={`text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider ${
                            siklus.status === "selesai"
                              ? "bg-emerald-100 text-emerald-800"
                              : siklus.status === "berjalan"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {siklus.status}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-950 mb-2">
                        {siklus.judul}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        {siklus.deskripsi}
                      </p>

                      <div className="space-y-1.5 text-xs text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100 mb-5">
                        <div>
                          <strong className="text-slate-900">Sekolah:</strong> {siklus.sekolah}
                        </div>
                        <div>
                          <strong className="text-slate-900">Mata Pelajaran:</strong> {siklus.mataPelajaran}
                        </div>
                        <div>
                          <strong className="text-slate-900">Kelas:</strong> {siklus.kelas}
                        </div>
                        <div>
                          <strong className="text-slate-900">Materi:</strong> {siklus.materi}
                        </div>
                        <div>
                          <strong className="text-slate-900">Periode:</strong> {siklus.tanggal}
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-2">
                      {siklus.linkRancangan && siklus.linkRancangan.startsWith("http") && (
                        <a
                          href={siklus.linkRancangan}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-xs font-semibold hover:bg-blue-100 transition-colors"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          Modul Ajar
                        </a>
                      )}
                      {siklus.linkVideo && siklus.linkVideo.startsWith("http") && (
                        <a
                          href={siklus.linkVideo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 text-red-700 text-xs font-semibold hover:bg-red-100 transition-colors"
                        >
                          <Video className="w-3.5 h-3.5" />
                          Video Praktik
                        </a>
                      )}
                      {siklus.linkDokumentasi && siklus.linkDokumentasi.startsWith("http") && (
                        <a
                          href={siklus.linkDokumentasi}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-50 text-cyan-800 text-xs font-semibold hover:bg-cyan-100 transition-colors"
                        >
                          <FolderOpen className="w-3.5 h-3.5" />
                          Arsip Drive
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: TUGAS 1 - ANALISIS KOMPONEN */}
          {activeTab === "tugas1" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="max-w-3xl mb-4">
                <h2 className="text-2xl font-extrabold text-slate-950">
                  Tugas 1: Analisis Komponen Praktik Mengajar Mandiri
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Analisis mendalam terhadap 3 komponen utama pelaksanaan praktik mengajar mandiri di SMP Negeri 8 Surabaya.
                </p>
              </div>

              <div className="space-y-5">
                {taskComponentsList.map((comp) => (
                  <div
                    key={comp.id}
                    className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-800 font-mono font-bold text-xs flex items-center justify-center">
                        {comp.nomor}
                      </span>
                      <h3 className="text-xl font-bold text-slate-950">
                        {comp.judul}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {comp.deskripsi}
                    </p>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-5 text-xs text-slate-700 space-y-1">
                      <div>
                        <strong className="text-slate-900">Produk yang Dianalisis:</strong> {comp.produkNama}
                      </div>
                      <div>
                        <strong className="text-slate-900">Deskripsi Singkat:</strong> {comp.produkDeskripsi}
                      </div>
                      <div>
                        <strong className="text-slate-900">Tujuan Inti:</strong> {comp.tujuan}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-xs font-bold text-cyan-800 uppercase tracking-wider">
                        Poin-Poin Analisis Kritis:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {comp.analisisPoin.map((item, pIdx) => (
                          <div
                            key={pIdx}
                            className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs"
                          >
                            <div className="font-bold text-slate-900 mb-1">
                              {item.label}
                            </div>
                            <div className="text-slate-600 leading-relaxed">
                              {item.keterangan}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {comp.linkDokumen && (
                      <div className="mt-5 pt-4 border-t border-slate-100 flex justify-end">
                        <a
                          href={comp.linkDokumen}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 hover:text-cyan-900"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Lihat Dokumen Produk &rarr;
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: PRODUK TERBAIK UTS & UAS */}
          {activeTab === "uts" && (
            <div className="space-y-8 animate-in fade-in duration-200">
              {/* Box UTS */}
              <div className="bg-white rounded-3xl p-7 sm:p-9 border border-cyan-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-cyan-500 text-slate-950 font-mono font-bold text-[10px] uppercase px-4 py-1.5 rounded-bl-xl tracking-wider">
                  {utsPplData.label}
                </div>

                <div className="max-w-2xl mb-6">
                  <span className="text-xs font-mono font-bold text-cyan-700 uppercase tracking-wider block mb-1">
                    {utsPplData.subtitle}
                  </span>
                  <h2 className="text-2xl font-extrabold text-slate-950">
                    {utsPplData.judul}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <FileText className="w-4 h-4 text-blue-600" />
                        Rancangan Pembelajaran Terbaik
                      </div>
                      <h4 className="text-base font-bold text-slate-900 mb-1">
                        {utsPplData.rancangan.judul}
                      </h4>
                      <p className="text-xs text-slate-600 mb-3">
                        {utsPplData.rancangan.tujuan}
                      </p>
                    </div>
                    <a
                      href={utsPplData.rancangan.linkDokumen}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors w-fit"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Buka Modul Ajar (PDF)
                    </a>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-bold text-red-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Video className="w-4 h-4 text-red-600" />
                        Video Praktik Mengajar Terbaik
                      </div>
                      <h4 className="text-base font-bold text-slate-900 mb-1">
                        Video Praktik Mandiri Siklus 1
                      </h4>
                      <p className="text-xs text-slate-600 mb-3">
                        {utsPplData.video.deskripsi}
                      </p>
                    </div>
                    <a
                      href={utsPplData.video.linkVideo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition-colors w-fit"
                    >
                      <Video className="w-3.5 h-3.5" />
                      Tonton Video Praktik
                    </a>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-100 text-xs sm:text-sm">
                  <div>
                    <strong className="text-slate-900 block mb-1">
                      Alasan Pemilihan Sebagai Produk Terbaik:
                    </strong>
                    <p className="text-slate-600 leading-relaxed">
                      {utsPplData.alasanPemilihan}
                    </p>
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-1">
                      Kekuatan Rancangan & Asesmen:
                    </strong>
                    <p className="text-slate-600 leading-relaxed">
                      {utsPplData.kekuatan}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900">
                    <strong className="block mb-1 font-bold">
                      Refleksi Bermakna Calon Guru (UTS):
                    </strong>
                    <p className="italic text-xs leading-relaxed">
                      "{utsPplData.refleksiUTS}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Box UAS (Persiapan Siklus 2-4) */}
              <div className="bg-slate-900 text-white rounded-3xl p-7 sm:p-9 shadow-md">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider block mb-1">
                      E-PORTFOLIO 2 (UAS PPL)
                    </span>
                    <h3 className="text-2xl font-bold">
                      Persiapan Produk Terbaik UAS (Siklus 2 - 4)
                    </h3>
                  </div>
                  <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-semibold">
                    Sedang Disiapkan
                  </span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  Produk UAS akan dirangkum dari hasil terbaik pelaksanaan Siklus 2, 3, dan 4 di SMPN 8 Surabaya yang mencakup modul ajar diferensiasi, video praktik lanjutan, dan laporan refleksi komprehensif.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs transition-colors"
                  >
                    <FolderOpen className="w-4 h-4" />
                    Buka Folder Drive Persiapan UAS
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: DOKUMENTASI & GALERI DRIVE */}
          {activeTab === "dokumentasi" && (
            <div className="space-y-8 animate-in fade-in duration-200">
              <div className="bg-gradient-to-r from-blue-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-2">
                    ARSIP TERPADU GOOGLE DRIVE
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
                    Folder Artefak & Dokumentasi PPL
                  </h2>
                  <p className="text-slate-300 text-sm max-w-xl leading-relaxed">
                    Seluruh dokumen perangkat pembelajaran (PDF/DOCX), slide presentasi (PPTX), video rekaman mengajar, serta dokumentasi foto PPL di SMAN 15 Surabaya dan SMPN 8 Surabaya tersimpan rapi dan dapat diakses langsung oleh dosen serta guru pamong.
                  </p>
                </div>
                <a
                  href="https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-2xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold text-sm transition-all shadow-lg hover:scale-105 shrink-0 flex items-center gap-2"
                >
                  <FolderOpen className="w-4 h-4" />
                  Buka Folder ARTEFAK PPG di Drive
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-white p-6 rounded-2xl border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-950 text-base mb-1">
                    Modul Ajar & LKPD
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    Perangkat ajar berbasis kurikulum merdeka materi Berpikir Komputasional & Analisis Data.
                  </p>
                  <a
                    href="https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-cyan-700 hover:text-cyan-900 inline-flex items-center gap-1"
                  >
                    Buka Berkas &rarr;
                  </a>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 flex items-center justify-center mb-4">
                    <Video className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-950 text-base mb-1">
                    Video Praktik Mengajar
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    Rekaman praktik mengajar mandiri (video full durasi dan video ringkasan berpendekatan emosional).
                  </p>
                  <a
                    href="https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-cyan-700 hover:text-cyan-900 inline-flex items-center gap-1"
                  >
                    Tonton Video &rarr;
                  </a>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                    <ImageIcon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-950 text-base mb-1">
                    Foto Kegiatan PPL Terbaru
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    Dokumentasi suasana laboratorium komputer, bimbingan guru pamong, dan interaksi bersama murid di SMPN 8 & SMAN 15 Surabaya.
                  </p>
                  <a
                    href="https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-cyan-700 hover:text-cyan-900 inline-flex items-center gap-1"
                  >
                    Lihat Galeri Foto &rarr;
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Direct Link to Standalone PPL if needed */}
          <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              Semua siklus, modul ajar, dan tugas PPL kini terintegrasi penuh di dalam satu website utama ini.
            </div>
            <a
              href="https://irvan-byte.github.io/Ppl-Eporto/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-slate-700 hover:text-cyan-700 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Arsip Alternatif: Standalone Ppl-Eporto Web
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
