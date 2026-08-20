import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { profileData } from "@/data/portfolioData";
import { Mail, MapPin, Instagram, Linkedin, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

/**
 * Style reminder — Modern Humanist & Reflective.
 * Contact is a soft landing page: white form surface, navy personal note, and no false promise of backend delivery.
 */
export default function ContactPage() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); toast.success("Pesan tersimpan sebagai demo", { description: "Form ini belum terhubung ke email. Tambahkan endpoint di tahap berikutnya." }); setNama(""); setEmail(""); setPesan(""); };
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans"><Navbar /><main className="flex-1 pt-32 pb-20"><div className="container mx-auto px-4 max-w-5xl">
      <div className="max-w-3xl mb-14"><div className="text-xs font-mono font-bold text-cyan-700 tracking-[0.2em] uppercase mb-4">09 — Kontak & kolaborasi</div><h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-5">Mari bertukar cerita tentang pembelajaran.</h1><p className="text-lg text-slate-600 leading-relaxed">Terbuka untuk diskusi seputar pendidikan Informatika, praktik mengajar, dan ide kolaborasi yang berpihak pada perkembangan peserta didik.</p></div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8"><div className="lg:col-span-5"><div className="bg-slate-950 text-white rounded-[2rem] p-8 sm:p-9 h-full"><div className="font-mono text-cyan-300 text-xs tracking-[0.2em] mb-5">IHA / OPEN CHANNEL</div><MessageSquare className="w-8 h-8 text-cyan-300 mb-5" /><h2 className="text-2xl font-bold mb-4">Saya senang mendengar perspektif baru.</h2><p className="text-slate-300 text-sm leading-relaxed mb-8">Saluran kontak dan tautan sosial di bawah masih dapat dilengkapi. Untuk sekarang, halaman ini menjadi rancangan ruang kolaborasi.</p><div className="space-y-5 border-t border-white/15 pt-6"><div className="flex gap-4"><Mail className="w-5 h-5 text-cyan-300 shrink-0" /><div><span className="text-xs text-slate-400 block">Email</span><span className="text-sm font-medium">{profileData.email}</span></div></div><div className="flex gap-4"><MapPin className="w-5 h-5 text-cyan-300 shrink-0" /><div><span className="text-xs text-slate-400 block">Lokasi</span><span className="text-sm font-medium">{profileData.kota}, Jawa Timur</span></div></div><div className="flex gap-4"><Instagram className="w-5 h-5 text-cyan-300 shrink-0" /><div><span className="text-xs text-slate-400 block">Instagram</span><span className="text-sm font-medium">{profileData.instagram}</span></div></div><div className="flex gap-4"><Linkedin className="w-5 h-5 text-cyan-300 shrink-0" /><div><span className="text-xs text-slate-400 block">LinkedIn</span><span className="text-sm font-medium">{profileData.linkedin}</span></div></div></div></div></div>
      <div className="lg:col-span-7 bg-white border border-slate-200 rounded-[2rem] p-8 sm:p-9 shadow-sm"><h2 className="text-2xl font-bold text-slate-950 mb-2">Kirim pesan</h2><p className="text-sm text-slate-500 mb-7">Form demo untuk menunjukkan alur interaksi. Belum ada pesan yang benar-benar dikirim.</p><form onSubmit={handleSubmit} className="space-y-5"><div className="space-y-2"><label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Nama lengkap</label><Input type="text" required placeholder="Nama Anda" value={nama} onChange={(e) => setNama(e.target.value)} className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 rounded-xl h-12" /></div><div className="space-y-2"><label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email</label><Input type="email" required placeholder="nama@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 rounded-xl h-12" /></div><div className="space-y-2"><label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Pesan</label><Textarea required rows={5} placeholder="Tuliskan pesan atau ide kolaborasi..." value={pesan} onChange={(e) => setPesan(e.target.value)} className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 rounded-xl resize-none p-4" /></div><Button type="submit" className="w-full bg-slate-950 hover:bg-blue-700 text-white font-semibold rounded-xl h-12 flex items-center justify-center gap-2"><Send className="w-4 h-4" /> Simulasikan kirim pesan</Button></form></div></div>
    </div></main><Footer /></div>
  );
}
