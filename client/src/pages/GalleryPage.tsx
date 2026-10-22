import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { galleryItems as defaultGalleryItems, GalleryItem } from "@/data/portfolioData";
import {
  Image as ImageIcon,
  X,
  ZoomIn,
  ExternalLink,
  Sparkles,
  Edit3,
  Plus,
  Trash2,
  Upload,
  CloudUpload,
  RotateCcw,
  CheckCircle,
  AlertCircle,
  Settings,
  Eye,
  Key
} from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const STORAGE_KEY = "ppg_gallery_items_v3";
const TOKEN_KEY = "ppg_gh_token_v3";
const REPO_OWNER = "irvan-byte";
const REPO_NAME = "eportfolio-ppg-irvan";

const categories = [
  "Semua",
  "PPL",
  "Mengajar",
  "Kegiatan Sekolah",
  "Diskusi",
  "Presentasi",
  "Dokumentasi Tugas"
];

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error("Failed to load local gallery items", e);
    }
    return defaultGalleryItems;
  });

  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);
  const [isManageMode, setIsManageMode] = useState(false);

  // Edit / Add Modal State
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [formData, setFormData] = useState({
    judul: "",
    kategori: "PPL",
    deskripsi: "",
    imageUrl: "",
    linkDrive: ""
  });
  const [previewUrl, setPreviewUrl] = useState<string>("");

  // GitHub Sync State
  const [showSyncModal, setShowSyncModal] = useState(false);
  const [githubToken, setGithubToken] = useState(() => {
    return localStorage.getItem(TOKEN_KEY) || "";
  });
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncLogs, setSyncLogs] = useState<string[]>([]);

  // Save to localStorage whenever items change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error("Failed to save to localStorage", e);
    }
  }, [items]);

  const getImgSrc = (path: string) => {
    if (!path) return "";
    if (path.startsWith("data:") || path.startsWith("http://") || path.startsWith("https://")) {
      return path;
    }
    const clean = path.replace(/^\/+/, "");
    const base = import.meta.env.BASE_URL.endsWith("/")
      ? import.meta.env.BASE_URL
      : `${import.meta.env.BASE_URL}/`;
    return `${base}${clean}`;
  };

  const filteredItems = useMemo(
    () =>
      items.filter(
        (item) => selectedCategory === "Semua" || item.kategori === selectedCategory
      ),
    [items, selectedCategory]
  );

  // Open Add Dialog
  const handleOpenAdd = () => {
    setIsNew(true);
    setFormData({
      judul: "",
      kategori: "Mengajar",
      deskripsi: "",
      imageUrl: "",
      linkDrive: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
    });
    setPreviewUrl("");
    setEditingItem({
      id: "gal-" + Date.now(),
      judul: "",
      kategori: "Mengajar",
      deskripsi: "",
      imageUrl: ""
    });
  };

  // Open Edit Dialog
  const handleOpenEdit = (item: GalleryItem, e: React.MouseEvent) => {
    e.stopPropagation();
    setIsNew(false);
    setEditingItem(item);
    setFormData({
      judul: item.judul,
      kategori: item.kategori,
      deskripsi: item.deskripsi,
      imageUrl: item.imageUrl,
      linkDrive: item.linkDrive || ""
    });
    setPreviewUrl(getImgSrc(item.imageUrl));
  };

  // Handle File Input Upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      toast.error("Ukuran file terlalu besar! Maksimal 10 MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result as string;
      setPreviewUrl(base64);
      setFormData((prev) => ({ ...prev, imageUrl: base64 }));
      toast.success("Foto berhasil dimuat dari perangkat!");
    };
    reader.readAsDataURL(file);
  };

  // Save changes from Dialog to State (and LocalStorage)
  const handleSaveItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.judul.trim()) {
      toast.error("Judul foto tidak boleh kosong");
      return;
    }
    if (!formData.imageUrl) {
      toast.error("Silakan pilih foto terlebih dahulu");
      return;
    }

    const newItem: GalleryItem = {
      id: editingItem ? editingItem.id : "gal-" + Date.now(),
      judul: formData.judul.trim(),
      kategori: formData.kategori,
      deskripsi: formData.deskripsi.trim(),
      imageUrl: formData.imageUrl,
      linkDrive: formData.linkDrive.trim() || undefined
    };

    if (isNew) {
      setItems((prev) => [newItem, ...prev]);
      toast.success("Foto baru berhasil ditambahkan dan disimpan di perangkat!");
    } else {
      setItems((prev) =>
        prev.map((i) => (i.id === newItem.id ? newItem : i))
      );
      toast.success("Perubahan data foto berhasil disimpan!");
    }

    setEditingItem(null);
  };

  // Delete item
  const handleDeleteItem = (id: string, judul: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm(`Apakah Anda yakin ingin menghapus foto "${judul}" dari galeri?`)) {
      setItems((prev) => prev.filter((i) => i.id !== id));
      toast.info(`Foto "${judul}" telah dihapus.`);
    }
  };

  // Reset to default verified items
  const handleResetDefault = () => {
    if (confirm("Kembalikan galeri ke 8 foto terverifikasi awal? Perubahan lokal akan direset.")) {
      localStorage.removeItem(STORAGE_KEY);
      setItems(defaultGalleryItems);
      toast.success("Galeri dikembalikan ke daftar foto terverifikasi default.");
    }
  };

  // Download JSON backup
  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(items, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `galeri_ppg_irvan_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    toast.success("Cadangan file JSON berhasil diunduh.");
  };

  // Sync to GitHub Pages via REST API
  const handleSyncToGitHub = async () => {
    if (!githubToken.trim()) {
      toast.error("Token GitHub tidak boleh kosong");
      return;
    }

    localStorage.setItem(TOKEN_KEY, githubToken.trim());
    setIsSyncing(true);
    setSyncLogs(["Memulai sinkronisasi ke repository GitHub..."]);

    try {
      const headers = {
        Authorization: `token ${githubToken.trim()}`,
        Accept: "application/vnd.github.v3+json",
        "Content-Type": "application/json"
      };

      // 1. Check and upload any base64 images
      const updatedList = [...items];
      for (let i = 0; i < updatedList.length; i++) {
        const item = updatedList[i];
        if (item.imageUrl.startsWith("data:")) {
          setSyncLogs((prev) => [...prev, `[${i + 1}/${updatedList.length}] Mengunggah file foto "${item.judul}"...`]);
          
          const commaIdx = item.imageUrl.indexOf(",");
          const base64Data = item.imageUrl.slice(commaIdx + 1);
          const safeName = "foto-" + Date.now() + "-" + (i + 1) + ".jpg";
          const repoPath = `client/public/images/galeri/${safeName}`;

          const putRes = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${repoPath}`, {
            method: "PUT",
            headers,
            body: JSON.stringify({
              message: `Upload user gallery photo: ${safeName}`,
              content: base64Data,
              branch: "main"
            })
          });

          if (!putRes.ok) {
            const errJson = await putRes.json().catch(() => ({}));
            throw new Error(`Gagal mengunggah gambar ${safeName}: ${errJson.message || putRes.statusText}`);
          }

          // Update image path to relative web path
          updatedList[i] = {
            ...item,
            imageUrl: `images/galeri/${safeName}`
          };
          setSyncLogs((prev) => [...prev, ` Gambar ${safeName} berhasil disimpan ke repository!`]);
        }
      }

      // 2. Fetch current portfolioData.ts to obtain SHA
      setSyncLogs((prev) => [...prev, "Mengambil metadata portfolioData.ts dari GitHub..."]);
      const getFileRes = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/client/src/data/portfolioData.ts`, {
        headers
      });

      if (!getFileRes.ok) {
        throw new Error("Gagal mengambil portfolioData.ts dari GitHub.");
      }

      const fileInfo = await getFileRes.json();
      const currentContent = atob(fileInfo.content.replace(/\s/g, ""));

      // 3. Replace the galleryItems block in portfolioData.ts
      setSyncLogs((prev) => [...prev, "Memperbarui daftar galeri di portfolioData.ts..."]);
      const galleryItemsRegex = /export const galleryItems: GalleryItem\[\] = \[[\s\S]*?\];/;
      const newGalleryBlock = `export const galleryItems: GalleryItem[] = ${JSON.stringify(updatedList, null, 2)};`;
      
      const newFullContent = currentContent.replace(galleryItemsRegex, newGalleryBlock);
      const encodedNewContent = btoa(unescape(encodeURIComponent(newFullContent)));

      // 4. Commit updated portfolioData.ts
      const commitRes = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/client/src/data/portfolioData.ts`, {
        method: "PUT",
        headers,
        body: JSON.stringify({
          message: "Perbarui daftar galeri otentik via Fitur Kelola Galeri Web",
          content: encodedNewContent,
          sha: fileInfo.sha,
          branch: "main"
        })
      });

      if (!commitRes.ok) {
        const commitErr = await commitRes.json().catch(() => ({}));
        throw new Error(`Gagal menyimpan file ke GitHub: ${commitErr.message || commitRes.statusText}`);
      }

      // Update local state with the clean relative paths
      setItems(updatedList);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));

      setSyncLogs((prev) => [
        ...prev,
        " Commit berhasil dipublikasikan ke branch main!",
        " GitHub Actions otomatis memulai build dan deploy ke GitHub Pages.",
        " Perubahan akan aktif dalam ~1 menit."
      ]);

      toast.success("Galeri berhasil disinkronkan permanen ke GitHub Pages!");
    } catch (err: any) {
      console.error(err);
      setSyncLogs((prev) => [...prev, ` Gagal: ${err.message}`]);
      toast.error(`Sinkronisasi gagal: ${err.message}`);
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Top Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-mono font-bold tracking-wider uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5" /> 08 — Dokumentasi Visual Otentik
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
                Rekam Jejak & Dokumentasi PPL.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Dokumentasi nyata kegiatan Praktik Pengalaman Lapangan (PPL) di SMAN 15 Surabaya dan SMP Negeri 8 Surabaya. Terverifikasi langsung dari foto penerimaan, observasi lab, praktik mengajar di laboratorium komputer, supervisi klinis, hingga upacara penarikan resmi.
              </p>
            </div>

            {/* Manage Mode Toggle Button */}
            <div className="shrink-0 flex items-center gap-3">
              <Button
                onClick={() => setIsManageMode(!isManageMode)}
                variant={isManageMode ? "default" : "outline"}
                className={`rounded-xl px-4 py-2.5 text-xs font-semibold flex items-center gap-2 shadow-sm transition-all ${
                  isManageMode
                    ? "bg-blue-700 text-white hover:bg-blue-800"
                    : "bg-white text-slate-700 border-slate-300 hover:border-blue-500 hover:text-blue-700"
                }`}
              >
                <Settings className={`w-4 h-4 ${isManageMode ? "animate-spin" : ""}`} />
                {isManageMode ? "Tutup Mode Kelola" : "Kelola & Upload Foto"}
              </Button>
            </div>
          </div>

          {/* Manage Mode Toolbar */}
          {isManageMode && (
            <div className="mb-10 p-5 sm:p-6 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl shadow-xl border border-blue-800">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-base font-bold flex items-center gap-2 text-cyan-300">
                    <Edit3 className="w-4 h-4" /> Mode Kelola Galeri Aktif
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Anda dapat mengunggah foto baru, mengedit judul & caption, menghapus foto yang keliru, dan langsung menyimpannya ke web serta GitHub Pages.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Button
                    onClick={handleOpenAdd}
                    size="sm"
                    className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-xs gap-1.5 shadow-md"
                  >
                    <Plus className="w-4 h-4" /> Upload Foto Baru
                  </Button>
                  <Button
                    onClick={() => setShowSyncModal(true)}
                    size="sm"
                    className="bg-green-500 hover:bg-green-400 text-slate-950 font-bold rounded-xl text-xs gap-1.5 shadow-md"
                  >
                    <CloudUpload className="w-4 h-4" /> Publikasikan ke GitHub Pages
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span>Penyimpanan Lokal: <strong>Aktif Otomatis</strong> (Perubahan tidak akan hilang)</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleExportJSON}
                    className="hover:text-cyan-300 underline underline-offset-4 transition-colors"
                  >
                    Unduh Cadangan JSON
                  </button>
                  <span>·</span>
                  <button
                    onClick={handleResetDefault}
                    className="hover:text-rose-300 underline underline-offset-4 transition-colors text-slate-400"
                  >
                    Reset ke Foto Default
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200">
            <span className="text-xs font-mono font-bold text-slate-400 mr-2 uppercase">Filter:</span>
            {categories.map((cat) => {
              const count =
                cat === "Semua"
                  ? items.length
                  : items.filter((i) => i.kategori === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                    selectedCategory === cat
                      ? "bg-slate-950 text-white shadow-md shadow-slate-950/20"
                      : "bg-white border border-slate-200 text-slate-600 hover:border-cyan-400 hover:text-cyan-800"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      selectedCategory === cat
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* If in manage mode, show Quick Add Card */}
            {isManageMode && (
              <div
                onClick={handleOpenAdd}
                className="group cursor-pointer border-2 border-dashed border-cyan-400/60 hover:border-cyan-500 bg-cyan-50/50 hover:bg-cyan-50 rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all min-h-[360px]"
              >
                <div className="w-16 h-16 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Upload className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-slate-950 mb-1">Unggah Foto Baru</h3>
                <p className="text-xs text-slate-600 max-w-xs leading-relaxed mb-4">
                  Pilih foto dari laptop atau HP Anda (JPG, PNG) untuk ditambahkan langsung ke dalam galeri portofolio.
                </p>
                <span className="px-3 py-1.5 rounded-lg bg-cyan-600 text-white text-xs font-bold shadow-sm">
                  Pilih File Foto
                </span>
              </div>
            )}

            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveImage(item)}
                className="group cursor-pointer bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative"
              >
                <div>
                  <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                    <img
                      src={getImgSrc(item.imageUrl)}
                      alt={item.judul}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    <div className="absolute top-3 left-3">
                      <span className="text-xs font-bold text-cyan-900 bg-white/90 backdrop-blur-sm border border-white/40 px-3 py-1 rounded-full shadow-sm">
                        {item.kategori}
                      </span>
                    </div>

                    <div className="absolute right-3 top-3 p-2 rounded-xl bg-slate-950/60 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <ZoomIn className="w-4 h-4" />
                    </div>

                    {/* Manage Overlay Buttons */}
                    {isManageMode && (
                      <div
                        className="absolute bottom-3 right-3 flex items-center gap-1.5 z-10"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          onClick={(e) => handleOpenEdit(item, e)}
                          className="px-2.5 py-1.5 rounded-lg bg-slate-950/80 hover:bg-blue-600 text-white text-xs font-semibold backdrop-blur-sm flex items-center gap-1 shadow-md transition-colors"
                          title="Edit Judul & Foto"
                        >
                          <Edit3 className="w-3.5 h-3.5" /> Edit
                        </button>
                        <button
                          onClick={(e) => handleDeleteItem(item.id, item.judul, e)}
                          className="p-1.5 rounded-lg bg-red-600/90 hover:bg-red-700 text-white text-xs font-semibold backdrop-blur-sm shadow-md transition-colors"
                          title="Hapus Foto"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <h2 className="text-base font-bold text-slate-950 leading-snug group-hover:text-blue-700 transition-colors">
                      {item.judul}
                    </h2>
                    <p className="text-sm text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                      {item.deskripsi}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 mt-auto">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                    <span className="font-mono text-cyan-700 font-medium">Klik untuk memperbesar</span>
                    <ZoomIn className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-700 transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative border border-slate-200 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-900 text-white transition-colors shadow-lg"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="bg-slate-950 overflow-hidden flex items-center justify-center max-h-[55vh]">
              <img
                src={getImgSrc(activeImage.imageUrl)}
                alt={activeImage.judul}
                className="w-full h-full max-h-[55vh] object-contain"
              />
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <span className="text-xs font-bold text-cyan-800 bg-cyan-50 border border-cyan-200 px-3 py-1 rounded-full">
                  {activeImage.kategori}
                </span>
                {activeImage.linkDrive && (
                  <Button
                    onClick={() => window.open(activeImage.linkDrive, "_blank", "noopener,noreferrer")}
                    size="sm"
                    variant="outline"
                    className="text-xs border-cyan-200 text-cyan-800 hover:bg-cyan-50 rounded-xl"
                  >
                    Buka Arsip Google Drive <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                  </Button>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 mb-3">
                {activeImage.judul}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {activeImage.deskripsi}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Edit / Add Photo Modal */}
      {editingItem && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
              <h2 className="text-xl font-bold text-slate-950 flex items-center gap-2">
                <Edit3 className="w-5 h-5 text-blue-700" />
                {isNew ? "Unggah & Tambah Foto Baru" : "Edit Data Foto"}
              </h2>
              <button
                onClick={() => setEditingItem(null)}
                className="p-2 text-slate-400 hover:text-slate-600 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveItem} className="space-y-5">
              {/* Image Preview & Upload Input */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  File Foto (Pilih dari Laptop / HP)
                </label>
                
                {previewUrl ? (
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100 border border-slate-300 mb-3">
                    <img
                      src={previewUrl}
                      alt="Pratinjau"
                      className="w-full h-full object-contain"
                    />
                    <label className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-slate-950/80 hover:bg-slate-900 text-white text-xs font-semibold cursor-pointer shadow-md">
                      Ganti Foto
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileUpload}
                      />
                    </label>
                  </div>
                ) : (
                  <label className="border-2 border-dashed border-slate-300 hover:border-cyan-500 rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer bg-slate-50 hover:bg-cyan-50/40 transition-colors mb-3">
                    <Upload className="w-10 h-10 text-cyan-600 mb-2" />
                    <span className="text-sm font-bold text-slate-800">Klik untuk memilih file foto</span>
                    <span className="text-xs text-slate-500 mt-1">Mendukung JPG, JPEG, PNG (Maksimal 10 MB)</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileUpload}
                    />
                  </label>
                )}
              </div>

              {/* Judul */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Judul Foto / Momen
                </label>
                <Input
                  type="text"
                  placeholder="Contoh: Praktik Mengajar Lab Komputer SMAN 15"
                  value={formData.judul}
                  onChange={(e) => setFormData({ ...formData, judul: e.target.value })}
                  className="rounded-xl h-11"
                  required
                />
              </div>

              {/* Kategori */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Kategori
                </label>
                <select
                  value={formData.kategori}
                  onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
                  className="w-full h-11 px-3.5 rounded-xl border border-slate-200 bg-white text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.filter((c) => c !== "Semua").map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Deskripsi */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Deskripsi / Refleksi Momen
                </label>
                <Textarea
                  placeholder="Jelaskan suasana foto, interaksi dengan peserta didik, atau tujuan kegiatan pembelajaran..."
                  rows={4}
                  value={formData.deskripsi}
                  onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
                  className="rounded-xl resize-none"
                />
              </div>

              {/* Google Drive Link */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Tautan Google Drive (Opsional)
                </label>
                <Input
                  type="url"
                  placeholder="https://drive.google.com/..."
                  value={formData.linkDrive}
                  onChange={(e) => setFormData({ ...formData, linkDrive: e.target.value })}
                  className="rounded-xl h-11"
                />
              </div>

              {/* Modal Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setEditingItem(null)}
                  className="rounded-xl"
                >
                  Batal
                </Button>
                <Button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-bold px-5"
                >
                  {isNew ? "Simpan Foto ke Galeri" : "Simpan Perubahan"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* GitHub Sync Modal */}
      {showSyncModal && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200">
              <h2 className="text-xl font-bold text-slate-950 flex items-center gap-2">
                <CloudUpload className="w-5 h-5 text-green-600" />
                Publikasikan ke GitHub Pages
              </h2>
              {!isSyncing && (
                <button
                  onClick={() => setShowSyncModal(false)}
                  className="p-2 text-slate-400 hover:text-slate-600 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-5">
              Fitur ini akan secara otomatis mengunggah foto baru ke repositori GitHub Anda dan memperbarui file data portofolio. Website GitHub Pages Anda akan otomatis terupdate sehingga bisa diakses oleh dosen dan penguji.
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Key className="w-3.5 h-3.5 text-blue-700" /> Token Akses GitHub (PAT)
                </label>
                <Input
                  type="password"
                  placeholder="ghp_..."
                  value={githubToken}
                  onChange={(e) => setGithubToken(e.target.value)}
                  className="rounded-xl h-11 font-mono text-xs"
                  disabled={isSyncing}
                />
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Token disimpan aman di penyimpanan lokal browser Anda.
                </span>
              </div>

              {/* Sync Log Output */}
              {syncLogs.length > 0 && (
                <div className="bg-slate-950 text-slate-200 rounded-2xl p-4 font-mono text-xs space-y-1.5 max-h-48 overflow-y-auto border border-slate-800">
                  {syncLogs.map((log, idx) => (
                    <div key={idx} className="leading-relaxed">
                      {log}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
              <Button
                type="button"
                variant="outline"
                disabled={isSyncing}
                onClick={() => setShowSyncModal(false)}
                className="rounded-xl"
              >
                Tutup
              </Button>
              <Button
                type="button"
                disabled={isSyncing}
                onClick={handleSyncToGitHub}
                className="bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl px-5 gap-2"
              >
                {isSyncing ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sedang Menyimpan...
                  </>
                ) : (
                  <>
                    <CloudUpload className="w-4 h-4" />
                    Mulai Publikasikan ke GitHub
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
