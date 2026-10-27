export interface ProfileData {
  nama: string;
  program: string;
  bidangStudi: string;
  jenjang: string;
  kota: string;
  status: string;
  nim: string;
  universitas: string;
  sekolahPpl: string;
  tahunPpg: string;
  email: string;
  instagram: string;
  linkedin: string;
  alasanMenjadiGuru: string;
  nilaiPribadi: string[];
  visiGuru: string;
  bioNarasi: string;
}

export const profileData: ProfileData = {
  nama: "Irvan Hadi Abiyoga",
  program: "Pendidikan Profesi Guru (PPG) Prajabatan",
  bidangStudi: "Informatika",
  jenjang: "SMA (PPL Terbimbing) & SMP (PPL Mandiri)",
  kota: "Probolinggo / Surabaya",
  status: "Mahasiswa PPG / Calon Guru Informatika Profesional",
  nim: "2500103916225025",
  universitas: "Universitas Negeri Surabaya (UNESA)",
  sekolahPpl: "SMAN 15 Surabaya (PPL Terbimbing) & SMPN 8 Surabaya (PPL Mandiri)",
  tahunPpg: "2025/2026",
  email: "Irvan00001@gmail.com",
  instagram: "@ir_van00000",
  linkedin: "//www.linkedin.com/in/irvan-hadi-abiyoga",
  alasanMenjadiGuru: "Menjadi guru Informatika adalah panggilan jiwa untuk menjembatani generasi muda dengan literasi digital yang bijak, kritis, dan beretika. Di era transformasi kecerdasan buatan (AI) saat ini, komputer bukan sekadar alat komputasi, melainkan wahana melatih cara berpikir komputasional (computational thinking) yang membentuk problem solver tangguh di masa depan.",
  nilaiPribadi: [
    "Empati dan berpusat sepenuhnya pada peserta didik (student-centered)",
    "Integritas dalam mendidik, menuntun, dan membimbing",
    "Inovasi pembelajaran berbasis teknologi bermakna & inklusif",
    "Refleksi berkelanjutan untuk pengembangan diri tanpa henti"
  ],
  visiGuru: "Menjadi guru yang mampu membantu siswa belajar dengan cara yang sederhana, nyaman, ramah emosional, dan bermakna bagi kehidupannya.",
  bioNarasi: "Perjalanan saya sebagai calon guru dimulai dari kecintaan terhadap dunia teknologi dan pendidikan. Melalui program PPG Prajabatan Bidang Studi Informatika di Universitas Negeri Surabaya (UNESA), saya belajar memahami bahwa mengajar bukan sekadar mentransfer materi koding atau software, melainkan menuntun kodrat anak—membangun cara pandang logis, kreatif, dan humanis pada setiap peserta didik di era transformasi digital."
};

export interface TimelineItem {
  id: string;
  tahap: string;
  periode: string;
  ringkasan: string;
  detail: string;
  status: "selesai" | "berlangsung" | "mendatang";
}

export const timelineData: TimelineItem[] = [
  {
    id: "awal",
    tahap: "Awal PPG Prajabatan",
    periode: "Semester 1 (Awal)",
    ringkasan: "Orientasi program, pengenalan filosofi pendidikan Indonesia, dan membangun landasan pedagogik.",
    detail: "Masa adaptasi dari dunia akademisi/praktisi IT murni menjadi seorang pendidik profesional. Menyelami pemikiran Ki Hadjar Dewantara, growth mindset, dan dasar-dasar computational thinking.",
    status: "selesai"
  },
  {
    id: "sem1",
    tahap: "Perkuliahan Semester 1",
    periode: "Semester 1",
    ringkasan: "Pendalaman teori belajar, asesmen diagnostik, dan perancangan pembelajaran mendalam.",
    detail: "Mempelajari mata kuliah inti seperti Pemahaman Peserta Didik dan Pembelajaran (PPDP), Pembelajaran Mendalam (PMAD), Kebugaran Jasmani, serta Filosofi Pendidikan Indonesia.",
    status: "selesai"
  },
  {
    id: "ppl1",
    tahap: "PPL I Terbimbing (SMAN 15 Surabaya)",
    periode: "Sela Semester 1-2",
    ringkasan: "Observasi sekolah, asistensi mengajar, dan praktik mengajar terbimbing di SMAN 15 Surabaya.",
    detail: "Mengenal kultur sekolah mitra jenjang SMA, mengamati karakteristik peserta didik remaja, menyusun perangkat pembelajaran terbimbing, dan simulasi mengajar di SMAN 15 Surabaya.",
    status: "selesai"
  },
  {
    id: "sem2",
    tahap: "Perkuliahan Semester 2",
    periode: "Semester 2",
    ringkasan: "Mata kuliah lanjutan: Pembelajaran Mendalam & Asesmen Lanjutan (PMAL), PSE, Projek Kepemimpinan, dan Inklusi.",
    detail: "Memperluas wawasan asesmen tingkat tinggi (HOTS), manajemen emosi di kelas (KSE), penanganan keberagaman peserta didik (inklusi/UDL), kepemimpinan kolaboratif kemasyarakatan, serta seminar proposal penelitian.",
    status: "berlangsung"
  },
  {
    id: "ppl2",
    tahap: "PPL II Mandiri (SMPN 8 Surabaya)",
    periode: "PPL Mandiri",
    ringkasan: "Praktik mengajar mandiri dan inovasi Kompulogika di SMPN 8 Surabaya didampingi Guru Pamong Pamuji Raharjo, S.Pd.",
    detail: "Mengimplementasikan pembelajaran mandiri penuh 4 pilar Berpikir Komputasional (Dekomposisi, Pola, Abstraksi, Algoritma), manajemen kelas, inovasi Kompulogika, dan evaluasi UTS-UAS di SMPN 8 Surabaya.",
    status: "berlangsung"
  },
  {
    id: "pengembangan",
    tahap: "Seminar & Publikasi Portofolio Digital",
    periode: "Akhir PPG",
    ringkasan: "Diseminasi penelitian reflektif, uji kompetensi, dan publikasi e-portfolio terpadu.",
    detail: "Merangkum seluruh bukti karya, modul ajar, video rekaman praktik, dan review mendalam setiap mata kuliah sebagai bekal memasuki dunia kerja sebagai guru profesional.",
    status: "berlangsung"
  },
  {
    id: "guru",
    tahap: "Pengabdian Guru Profesional",
    periode: "Masa Depan",
    ringkasan: "Pengabdian penuh sebagai pendidik Informatika yang inovatif, ramah, dan berdedikasi.",
    detail: "Siap mengabdi di satuan pendidikan untuk mencetak generasi cerdas digital, berintegritas, dan berkarakter Profil Pelajar Pancasila.",
    status: "mendatang"
  }
];

export interface Refleksi4C {
  connection: string;
  challenge: string;
  concept: string;
  change: string;
}

export interface AnalisisArtefak {
  artefakTerpilih: string[];
  alasanPemilihan: string;
}

export interface KaitanPraktis {
  konsepUtama: string;
  perubahanMasaDepan: string;
}

export interface CourseItem {
  id: string;
  nama: string;
  semester: 1 | 2;
  deskripsi: string;
  halDipelajari: string[];
  tugas: string[];
  refleksi: string;
  dokumentasi: string[];
  arsipUrl?: string;
  refleksi4C?: Refleksi4C;
  analisisArtefak?: AnalisisArtefak;
  kaitanPraktis?: KaitanPraktis;
}

export const coursesData: CourseItem[] = [
  // ================= SEMESTER 1 =================
  {
    id: "gm-1",
    nama: "Growth Mindset",
    semester: 1,
    deskripsi: "Mata kuliah yang menjadi titik balik pola pikir saya pada awal menempuh studi PPG Prajabatan. Sebagai sarjana berlatar belakang teknologi informasi, awalnya saya sempat cemas apakah saya memiliki kesabaran dan kepekaan pedagogis untuk membimbing murid yang sangat majemuk. Melalui mata kuliah ini, saya menyadari bahwa kecerdasan, kapasitas intelektual, dan keterampilan pedagogik bukanlah sesuatu yang bersifat tetap (fixed), melainkan kapasitas dinamis yang dapat terus bertumbuh melalui ikhtiar, strategi tepat, dan proses belajar bermakna dari kegagalan. Hal ini sangat krusial bagi siswa Informatika yang kerap putus asa saat menjumpai galat (error) logika komputasi.",
    halDipelajari: [
      "Konsep dan distingsi mendasar Growth Mindset vs Fixed Mindset menurut Carol Dweck",
      "Neuroplastisitas otak: bagaimana tantangan baru memperkuat pembentukan koneksi sinapsis saraf baru",
      "Strategi pemberian umpan balik berorientasi proses (process praise) alih-alih bakat bawaan",
      "Membiasakan reframing kata 'Saya tidak bisa' menjadi 'Saya belum bisa, namun sedang berproses' (The Power of Yet)",
      "Mengubah pesan eror komputasi sebagai batu loncatan belajar yang konstruktif (debugging as learning)"
    ],
    tugas: [
      "Analisis diri dan refleksi kritis terhadap pola pikir berkembang vs pola pikir tetap (LK 1.1)",
      "Studi kasus pendampingan siswa yang mengalami kecemasan belajar komputer (LK 2.4)",
      "Penyusunan modul skenario penerapan Growth Mindset dalam pembelajaran Berpikir Komputasional (LK 4.1)",
      "Projek kolaboratif perancangan budaya kelas bertumbuh (LK 4.3)"
    ],
    refleksi: "Saya belajar bahwa kapasitas seseorang tidak bersifat mutlak. Ketika menghadapi kendala mengajar atau logika pemrograman yang rumit, saya membiasakan diri dan siswa untuk berkata: 'Bukan tidak bisa, melainkan belum bisa'. Di kelas PPL, saat murid frustrasi karena programnya tidak berjalan, saya mendampingi mereka membaca eror dengan tenang sebagai sebuah teka-teki logika yang mengasyikkan untuk dipecahkan bersama.",
    dokumentasi: [
      "LK 1.1 Cara Pikirmu Cermin Dirimu",
      "LK 2.4 Dari 'Aduh, Gagal' ke 'Aha, Peluang Belajar!'",
      "LK 4.1 Guru yang Menumbuhkan Growth Mindset",
      "LK 4.3 Jawaban Tugas Project-Based Mindset"
    ],
    arsipUrl: "https://drive.google.com/drive/folders/19g4VYGIyOGqVNAPEKPtKo2pRJkYDphg8?usp=sharing",
    refleksi4C: {
      connection: "Sebelum menempuh mata kuliah Growth Mindset, latar belakang saya di bidang teknologi kerap membuat saya memandang keahlian logika pemrograman sebagai bakat bawaan ('bakat komputer'). Di awal PPG, saya juga sempat ragu akan kemampuan diri saya dalam mengelola kelas yang heterogen. Konsep Growth Mindset menjembatani pemikiran tersebut: kapasitas intelektual dan keterampilan pedagogik bukanlah sifat tetap (fixed), melainkan dapat terus bertumbuh melalui latihan terarah, strategi tepat, dan ketekunan belajar dari kegagalan (productive struggle).",
      challenge: "Tantangan terbesar yang saya hadapi adalah mendekonstruksi respon otomatis ketika menghadapi kesulitan belajar atau kegagalan program. Di kelas laboratorium komputer, tantangan nyata muncul ketika menghadapi peserta didik yang mengalami computer anxiety dan cepat menyerah dengan ucapan 'Saya memang tidak berbakat di komputer'. Mengubah kebiasaan memberi pujian pada hasil akhir/bakat menjadi pujian pada proses, ikhtiar, dan eksplorasi (process praise) memerlukan pembiasaan sadar dan kesabaran yang konsisten.",
      concept: "Konsep kunci yang saya pelajari meliputi: (1) Perbedaan fundamental Fixed Mindset dan Growth Mindset; (2) Neuroplastisitas otak—bagaimana sinapsis saraf menguat dan membentuk jalur baru saat menghadapi tantangan; (3) Konsep 'The Power of Yet' (Kekuatan Kata 'Belum') untuk mereframing kalimat 'Saya tidak bisa' menjadi 'Saya belum bisa, namun sedang berproses'; (4) Menempatkan eror sintaksis dan pesan galat logika komputasi bukan sebagai aib kegagalan, melainkan data umpan balik paling konstruktif dalam siklus belajar.",
      change: "Perubahan mendasar pada diri saya adalah pergeseran cara merespons kesulitan dan eror. Sebagai calon pendidik, saya tidak lagi cepat merasa frustrasi saat instruksi belum dipahami murid. Di laboratorium komputer, saya membudayakan respon kelas yang menyambut eror secara positif: pesan galat kami bedah bersama sebagai teka-teki nalar (debugging as learning). Saya bertransisi dari penuntut kesempurnaan teknis menjadi penuntun pertumbuhan proses berpikir siswa."
    },
    analisisArtefak: {
      artefakTerpilih: [
        "LK 1.1 Cara Pikirmu Cermin Dirimu",
        "LK 2.4 Dari 'Aduh, Gagal' ke 'Aha, Peluang Belajar!'",
        "LK 4.1 Guru yang Menumbuhkan Growth Mindset",
        "LK 4.3 Jawaban Tugas Project-Based Mindset"
      ],
      alasanPemilihan: "Artefak LK 1.1, LK 2.4, dan LK 4.1 dipilih karena secara komprehensif merefleksikan lintasan transformasi pola pikir saya, mulai dari pemetaan awal mindset diri hingga perancangan skenario intervensi pedagogis di kelas Informatika. Melalui LK 2.4, saya mendokumentasikan analisis konkret mengenai bagaimana membimbing siswa mengurai kecemasan saat program komputer mereka mengalami galat, membuktikan bahwa konsep neuroplastisitas dapat dioperasionalkan secara nyata dalam pembelajaran Berpikir Komputasional."
    },
    kaitanPraktis: {
      konsepUtama: "Menerapkan prinsip 'The Power of Yet' dan pemberian umpan balik berbasis proses (process praise) dalam pembelajaran Informatika, khususnya saat membimbing siswa menelusuri logika algoritma dan pemrograman di laboratorium komputer.",
      perubahanMasaDepan: "Di masa depan, saya berkomitmen merancang rubrik penilaian yang tidak hanya menilai hasil akhir produk digital siswa, melainkan mengapresiasi keuletan proses penelusuran eror (debugging journal). Saya juga akan konsisten menciptakan lingkungan kelas yang aman secara psikologis, di mana setiap murid merasa aman untuk bereksperimen dan berinovasi tanpa rasa takut dihakimi ketika berbuat kesalahan."
    }
  },
  {
    id: "filosofi-1",
    nama: "Filosofi Pendidikan Indonesia",
    semester: 1,
    deskripsi: "Mata kuliah yang membongkar pemahaman lama saya mengenai esensi mendidik. Menyelami pemikiran Ki Hadjar Dewantara (KHD) menyadarkan saya bahwa guru bukanlah sosok yang mencetak anak sesuai kehendaknya, melainkan seorang pamong yang menuntun kodrat yang telah ada pada anak. Bagi guru Informatika, menuntun 'Kodrat Zaman' di era digital adalah amanah besar agar generasi muda cakap, kritis, dan beretika dalam menggunakan teknologi.",
    halDipelajari: [
      "Sistem Among: Ing Ngarsa Sung Tuladha, Ing Madya Mangun Karsa, Tut Wuri Handayani",
      "Filosofi Pendidikan yang Menuntun: memerdekakan dan berpihak sepenuhnya pada peserta didik",
      "Konsep Kodrat Alam (konteks sosiokultural lokal) dan Kodrat Zaman (era kecerdasan buatan & transformasi digital)",
      "Asas Trikon (Kontinuitas, Konvergensi, Konsentris) dalam menyerap kemajuan teknologi global",
      "Refleksi kritis perjalanan pendidikan nasional dari era kolonial hingga Kurikulum Merdeka"
    ],
    tugas: [
      "Esai Reflektif Kritis Pendidikan Nasional: Transformasi Pembelajaran Informatika Menuju Kurikulum Merdeka",
      "Infografis Pemikiran Ki Hadjar Dewantara dalam Literasi Digital Abad ke-21",
      "Aksi Nyata Kontekstualisasi Filosofi KHD di Sekolah Mitra PPL (T2.7 & T3.7)",
      "Laporan UAS Kajian Filosofi Pendidikan Indonesia"
    ],
    refleksi: "Guru sejati adalah pamong yang menuntun kodrat anak, bukan menuntut anak memenuhi ekspektasi sepihak guru. Di laboratorium komputer, saya tidak ingin menjadi guru yang serba instruksional kaku. Saya ingin menjadi fasilitator yang memberi ruang kemerdekaan berpikir, mendorong anak bereksplorasi, dan memastikan teknologi menjadi sarana memanusiakan manusia.",
    dokumentasi: [
      "Esai Filosofi Pendidikan Indonesia",
      "Artefak Infografis Pemikiran KHD",
      "Dokumentasi Aksi Nyata Modul KHD",
      "Naskah Refleksi UAS Filosofi"
    ],
    arsipUrl: "https://drive.google.com/drive/folders/1f8FVLS1DvW3sJTPx7E-AIDGBj_Vc0Rvy?usp=sharing",
    refleksi4C: {
      connection: "Sebagai sarjana teknologi informasi yang terbiasa dengan sistem terstruktur dan biner, pemikiran Ki Hadjar Dewantara (KHD) menjadi jangkar humanistik yang menyeimbangkan cara pandang profesional saya. Mata kuliah ini mengaitkan hakikat pendidik dengan panggilan jiwa sebagai 'pamong'. Dalam konteks abad ke-21, tugas guru Informatika bukan sekadar melatih ketangkasan operasional software, melainkan menuntun kodrat zaman murid agar bijak, bernalar kritis, dan berakhlak mulia di tengah banjir informasi digital.",
      challenge: "Tantangan utama adalah melepaskan kebiasaan mengajar yang berpusat pada guru (teacher-centered) yang menganggap murid seperti kertas kosong (tabularasa). Di kelas nyata, tantangan besar yang saya temukan adalah bagaimana mempraktikkan pembelajaran yang memerdekakan murid saat menghadapi keterbatasan fasilitas laboratorium komputer dan adanya jurang ketimpangan kemampuan digital antar peserta didik.",
      concept: "Konsep esensial yang dipelajari mencakup: (1) Sistem Among dengan trilogi kepemimpinan: Ing Ngarsa Sung Tuladha (teladan etika berteknologi), Ing Madya Mangun Karsa (membangun prakarsa kreatif), Tut Wuri Handayani (mendorong kemandirian); (2) Konsep Kodrat Alam dan Kodrat Zaman; (3) Pendidikan yang Menuntun: memfasilitasi kekuatan kodrat anak agar mencapai keselamatan dan kebahagiaan setinggi-tingginya; (4) Penanaman nilai luhur Profil Pelajar Pancasila.",
      change: "Saya bertransformasi dari seorang pengajar materi yang kaku menjadi pamong yang menuntun dan berpihak penuh pada murid. Saya menyadari bahwa setiap murid memiliki kodrat dan keunikan yang wajib dihargai. Saya tidak lagi memaksakan seluruh anak menguasai materi dengan tempo yang sama, melainkan menyediakan ruang kreasi yang demokratis dan menempatkan etika digital (digital citizenship) setara dengan kecakapan teknis komputasi."
    },
    analisisArtefak: {
      artefakTerpilih: [
        "Esai Reflektif Kritis Pendidikan Nasional: Transformasi Pembelajaran Informatika",
        "Infografis Pokok Pikiran KHD dalam Literasi Digital Abad 21",
        "T2.7 & T3.7 Aksi Nyata Filosofi Pendidikan Indonesia",
        "Naskah Evaluasi UAS Filosofi Pendidikan Irvan Hadi Abiyoga"
      ],
      alasanPemilihan: "Esai reflektif kritis dan infografis KHD dipilih karena menjadi bukti autentik sintesis pemikiran saya dalam mengontekstualisasikan filosofi Ki Hadjar Dewantara ke dalam pembelajaran Informatika era modern. Karya ini membuktikan pergeseran filosofis saya bahwa teknologi di ruang kelas harus menjadi instrumen pemuliaan harkat kemanusiaan murid, bukan sarana penyeragaman kognitif."
    },
    kaitanPraktis: {
      konsepUtama: "Mewujudkan Sistem Among di laboratorium komputer dengan memberikan keteladanan literasi digital yang santun, memantik kreativitas pemecahan masalah algoritma, serta memfasilitasi kemerdekaan belajar murid sesuai minat mereka.",
      perubahanMasaDepan: "Saya berkomitmen mengintegrasikan nilai-nilai kearifan lokal dan penguatan karakter Profil Pelajar Pancasila di setiap modul ajar Informatika yang saya susun, serta memastikan iklim kelas yang inklusif dan bebas dari diskriminasi kesiapan teknologi."
    }
  },
  {
    id: "kbg-1",
    nama: "Kebugaran Jasmani",
    semester: 1,
    deskripsi: "Mata kuliah yang mengingatkan saya bahwa kebugaran fisik adalah pilar utama profesionalisme pendidik. Di tengah padatnya tugas perkuliahan PPG dan aktivitas PPL di sekolah, kondisi fisik yang prima sangat menentukan kejernihan pikiran dan stabilitas emosi. Guru Informatika yang berjam-jam berada di depan komputer rentan mengalami kelelahan dan gangguan ergonomis. Fisik yang bugar menghadirkan energi positif yang menular kepada seluruh siswa di kelas.",
    halDipelajari: [
      "Komponen dasar kebugaran jasmani (daya tahan kardiovaskular, kekuatan, kelenturan, dan komposisi tubuh)",
      "Ergonomi kerja pendidik dan postur tubuh yang tepat saat beraktivitas di laboratorium komputer",
      "Korelasi langsung antara kebugaran fisik, pasokan oksigen ke otak, dan daya konsentrasi mengajar",
      "Manajemen stres fisik dan variasi peregangan dinamis di sela-sela jam pelajaran",
      "Penerapan Tes Kebugaran Jasmani Indonesia (TKJI) untuk pemantauan mandiri"
    ],
    tugas: [
      "Tes Kebugaran Jasmani Mandiri (TKJI) dan analisis derajat kebugaran fisik",
      "Penyusunan logbook aktivitas fisik harian calon guru (Jawaban Logbook Program Kardio & Manajemen Stres)",
      "Rancangan variasi ice breaking gerak tubuh (brain gym) untuk mencairkan kejenuhan di laboratorium komputer",
      "Refleksi dan tindak lanjut kebugaran jasmani pendidik (Jawaban 1.E & 2.E)"
    ],
    refleksi: "Mengajar beberapa jam pelajaran di laboratorium komputer membutuhkan stamina prima untuk berkeliling memantau layar siswa. Ketika kondisi fisik saya prima, saya dapat menyapa siswa dengan senyum hangat dan tidak mudah terpancing emosi ketika terjadi kendala teknis. Kebugaran fisik adalah bentuk dedikasi saya dalam melayani peserta didik dengan performa terbaik.",
    dokumentasi: [
      "Jawaban Logbook Program Kardio & Manajemen Stres Irvan.pdf",
      "Laporan Tes Kebugaran Jasmani Mandiri (TKJI)",
      "Jawaban 1.D Mengintegrasikan Pemahaman Menjadi Solusi.pdf",
      "Jawaban 2.E Refleksi dan Tindak Lanjut Kebugaran Irvan.pdf"
    ],
    arsipUrl: "https://drive.google.com/drive/folders/1vZ_J1_EHEatm-yYeE8XRMPeKz809OLxy?usp=drive_link",
    refleksi4C: {
      connection: "Awalnya saya sempat mempertanyakan korelasi mata kuliah Kebugaran Jasmani dengan bidang keilmuan Informatika. Namun setelah menjalani ritme asistensi mengajar di sekolah mitra dan penugasan PPG yang padat, relevansi mata kuliah ini terasa sangat vital. Pendidik Informatika rentan mengalami gaya hidup sedenter (banyak duduk di depan monitor) yang memicu gangguan ergonomis muskuloskeletal dan kejenuhan mental. Kebugaran fisik terbukti menjadi modalitas utama yang menopang ketahanan mental dan antusiasme mengajar di kelas.",
      challenge: "Tantangan yang saya hadapi adalah membangun konsistensi jadwal berolahraga di tengah padatnya beban akademik dan tugas lapangan. Selain itu, mempertahankan postur tubuh ergonomis saat berkeliling mendampingi murid selama jam-jam praktikum komputer memerlukan disiplin kesadaran ragawi (body awareness) yang terus-menerus.",
      concept: "Konsep kunci yang dipelajari: (1) Komponen kebugaran jasmani terkait kesehatan (kardiorespirasi, kelenturan, kekuatan, dan daya tahan otot); (2) Parameter pengukuran derajat kebugaran berbasis instrumen TKJI; (3) Prinsip ergonomi kerja pendidik di laboratorium komputer (posisi duduk netral, penataan sudut pandang layar, aturan istirahat mata 20-20-20); (4) Korelasi fisiologis antara aktivitas fisik teratur dengan optimalisasi suplai oksigen ke otak dan regulasi kestabilan emosi guru.",
      change: "Terjadi perubahan gaya hidup dan kesadaran ergonomis yang nyata pada diri saya. Saya yang sebelumnya abai terhadap postur duduk kini disiplin menjaga sikap tubuh yang benar dan rutin melakukan peregangan dinamis. Kondisi fisik yang bugar membuat saya memiliki stamina prima untuk aktif berkeliling (mobile facilitation) mendampingi setiap siswa di laboratorium komputer tanpa rasa lelah berlebih."
    },
    analisisArtefak: {
      artefakTerpilih: [
        "Jawaban Logbook Program Kardio & Manajemen Stres Irvan.pdf",
        "Laporan Pengukuran Mandiri Tes Kebugaran Jasmani Indonesia (TKJI)",
        "Jawaban 1.D Mengintegrasikan Pemahaman Menjadi Solusi.pdf",
        "Jawaban 2.E Refleksi dan Tindak Lanjut Kebugaran Irvan.pdf"
      ],
      alasanPemilihan: "Logbook Program Kardio dan Laporan TKJI dipilih sebagai artefak bukti dukung terbaik karena menyajikan data pemantauan aktivitas fisik dan manajemen stres saya secara terukur dan berkelanjutan. Dokumen ini menjadi bukti pertanggungjawaban profesional bahwa saya secara sadar menjaga kebugaran jasmani sebagai prasyarat utama pelayanan pendidikan yang optimal bagi murid."
    },
    kaitanPraktis: {
      konsepUtama: "Menerapkan prinsip ergonomi di ruang laboratorium komputer sekolah dan membiasakan sesi peregangan fisik ringan (ice breaking dinamis 2 menit) di sela-sela jam praktikum untuk memulihkan kesegaran fisik dan konsentrasi belajar murid.",
      perubahanMasaDepan: "Saya berkomitmen untuk terus menjaga rutinitas olahraga kardio mingguan guna menjaga stamina mengajar sepanjang karier saya, serta secara berkala memberikan edukasi ergonomi digital kepada murid agar mereka terhindar dari cedera postur akibat gawai digital."
    }
  },
  {
    id: "PPP-1",
    nama: "Pemahaman tentang Peserta Didik dan Pembelajaran (PPDP)",
    semester: 1,
    deskripsi: "Mata kuliah yang membuka mata saya bahwa satu kelas berisikan profil individu yang majemuk. Di SMPN 8 Surabaya dan SMAN 15 Surabaya, saya menjumpai keberagaman murid yang luar biasa: mulai dari yang cepat menguasai logika hingga yang membutuhkan bimbingan bertahap. PPDP membekali saya dengan teori psikologi perkembangan untuk memetakan kesiapan, minat, dan gaya belajar murid sebelum modul pembelajaran dirancang.",
    halDipelajari: [
      "Teori perkembangan kognitif Piaget dan teori sosiokultural Vygotsky (ZPD & Scaffolding)",
      "Pendekatan Teaching at the Right Level (TaRL): mengajar berbasis tingkat kesiapan nyata peserta didik",
      "Pelaksanaan Asesmen Diagnostik (Awal) kognitif dan non-kognitif",
      "Prinsip diferensiasi konten, proses, dan produk dalam pembelajaran Kurikulum Merdeka",
      "Penyusunan profiling karakteristik, gaya belajar, dan modalitas peserta didik"
    ],
    tugas: [
      "Studi kasus analisis profil dan karakteristik peserta didik di sekolah mitra PPL",
      "Penyusunan instrumen Asesmen Diagnostik Awal materi Berpikir Komputasional",
      "Rancangan Modul Ajar berdiferensiasi berdasarkan hasil pemetaan profil belajar",
      "Lembar Kerja Aktivitas Refleksi 1E dan Rencana Tindak Lanjut (RTL)"
    ],
    refleksi: "Sebelum menentukan cara mengajar, saya perlu memahami secara mendalam siapa yang saya ajar. Menyeragamkan instruksi bagi siswa yang sudah mahir dan yang masih pemula adalah bentuk ketidakadilan pedagogis. Melalui asesmen diagnostik, saya dapat menyusun pembelajaran bertingkat dan mengoptimalkan tutor sebaya, sehingga setiap anak merasa dihargai dan bertumbuh sesuai potensinya.",
    dokumentasi: [
      "Instrumen Asesmen Diagnostik Lengkap",
      "Laporan Hasil Pemetaan Karakteristik Siswa",
      "Lembar Kerja Aktivitas Refleksi 1E Irvan Hadi Abiyoga.pdf",
      "Modul Ajar Berdiferensiasi Berpikir Komputasional"
    ],
    arsipUrl: "https://drive.google.com/drive/folders/1j0LHhEHLC5P5-CryMHV66hrGBwzUWLuR?usp=drive_link",
    refleksi4C: {
      connection: "Sebelum mendalami PPDP, kecenderungan saya adalah merancang skenario ajar dengan asumsi bahwa semua murid di kelas memiliki kecepatan nalar komputasi yang seragam. Namun ketika mengamati kelas nyata di SMPN 8 Surabaya dan SMAN 15 Surabaya, saya menjumpai disparitas profil belajar yang sangat lebar: terdapat siswa yang sangat cepat menyelesaikan algoritma, sementara siswa lainnya masih memerlukan bimbingan dasar pengoperasian piranti. PPDP menghubungkan teori psikologi perkembangan dengan realitas heterogenitas kelas yang saya hadapi.",
      challenge: "Tantangan terbesar adalah merancang instrumen asesmen diagnostik awal yang ringkas namun akurat dalam memetakan kesiapan kognitif dan non-kognitif murid, lalu menerjemahkan hasilnya ke dalam pembelajaran berdiferensiasi (konten, proses, produk). Menyiapkan materi berjenjang di laboratorium tanpa membuat murid berkemampuan awal rendah merasa rendah diri atau murid yang cepat merasa bosan menuntut kepekaan pedagogis yang tinggi.",
      concept: "Konsep-konsep esensial yang dipelajari: (1) Teori perkembangan kognitif Piaget dan teori perkembangan sosiokultural Lev Vygotsky, khususnya konsep Zone of Proximal Development (ZPD) dan Scaffolding (dukungan bertahap); (2) Pendekatan Teaching at the Right Level (TaRL): menyelaraskan pembelajaran dengan kesiapan riil murid; (3) Desain Asesmen Diagnostik Awal; (4) Tiga strategi diferensiasi: diferensiasi konten, proses (bimbingan berjenjang dan tutor sebaya), dan produk unjuk kerja.",
      change: "Saya bertransformasi dari guru yang 'mengajar materi kurikulum' menjadi pendidik yang 'mengajar murid'. Saya tidak lagi memandang keberagaman murid sebagai kendala, melainkan sebagai aset kekayaan kelas. Saya membiasakan diri melakukan asesmen awal sebelum menyusun rancangan ajar, lebih sabar menyediakan tangga bantuan belajar (scaffolding), dan memberdayakan murid yang telah mahir sebagai tutor sebaya di laboratorium komputer."
    },
    analisisArtefak: {
      artefakTerpilih: [
        "Instrumen Asesmen Diagnostik Kognitif & Non-Kognitif Berpikir Komputasional",
        "Laporan Hasil Pemetaan Profil dan Karakteristik Siswa",
        "Lembar Kerja Aktivitas Refleksi 1E Irvan Hadi Abiyoga.pdf",
        "Peta Konsep & RTL Topik 1 Pemahaman Peserta Didik"
      ],
      alasanPemilihan: "Instrumen asesmen diagnostik dan laporan pemetaan profil peserta didik dipilih karena menjadi bukti empiris kemampuan saya dalam memetakan modalitas belajar, minat, dan tingkat kesiapan siswa di sekolah mitra. Dokumen ini menjadi fondasi ilmiah dalam merancang intervensi pembelajaran berdiferensiasi yang adil dan berpusat pada murid."
    },
    kaitanPraktis: {
      konsepUtama: "Melakukan asesmen diagnostik awal di setiap awal bab pembelajaran Informatika dan menyediakan lembar kerja peserta didik berjenjang (scaffolded worksheet) yang memfasilitasi murid bertumbuh sesuai kesiapan belajarnya.",
      perubahanMasaDepan: "Saya berkomitmen untuk secara rutin memperbarui data profil belajar siswa di setiap awal semester, mengoptimalkan dinamika kelompok dengan sistem tutor sebaya di laboratorium komputer, dan memastikan setiap instruksi belajar disajikan melalui berbagai representasi modalitas (visual, tekstual, demonstrasi langsung)."
    }
  },
  {
    id: "PMAD-1",
    nama: "Pembelajaran Mendalam (PMAD)",
    semester: 1,
    deskripsi: "Mata kuliah yang mentransformasi kerangka berpikir saya dalam menyusun perencanaan ajar melalui pendekatan Understanding by Design (UbD) atau alur mundur (backward design). Saya belajar memulai desain pembelajaran dari perumusan tujuan pemahaman abadi (enduring understanding), menentukan bukti asesmen autentik, lalu merancang rangkaian aktivitas belajar yang selaras.",
    halDipelajari: [
      "Framework Understanding by Design (UbD): Hasil yang Diinginkan -> Bukti Asesmen -> Rencana Pembelajaran",
      "Enam aspek pemahaman: Menjelaskan, menginterpretasikan, mengaplikasikan, memiliki perspektif, berempati, dan mengenal diri",
      "Perbedaan esensial antara Surface Learning (hafalan teknis) dan Deep Learning (pemecahan masalah bermakna)",
      "Penyusunan rubrik asesmen unjuk kerja dan tugas autentik berbasis masalah nyata (PBL)",
      "Perancangan alur aktivitas instruksional berbasis WHERETO"
    ],
    tugas: [
      "2.D.1 Lembar Kerja 2.2 Merancang Perencanaan Pembelajaran UbD Informatika.docx",
      "2.E Menyusun Langkah Perbaikan Berkelanjutan.pdf",
      "Perancangan Modul Ajar Informatika berbasis kerangka UbD lengkap dengan alur WHERETO",
      "Pembuatan rubrik penilaian autentik untuk karya pemecahan masalah algoritma"
    ],
    refleksi: "Menyusun perangkat ajar dengan alur UbD menuntut ketelitian tinggi dalam memastikan keselarasan antara tujuan dan bukti asesmen. Namun ketika diimplementasikan, pembelajaran menjadi sangat bermakna. Siswa Informatika tidak sekadar menghafal istilah perangkat keras atau software, melainkan benar-benar memahami nalar pemecahan masalah yang dapat diterapkan dalam kehidupan sehari-hari.",
    dokumentasi: [
      "2.D.1 Lembar Kerja 2.2 Merancang Perencanaan Pembelajaran.docx",
      "2.E Menyusun Langkah Perbaikan Berkelanjutan.pdf",
      "Modul Ajar Berpikir Komputasional berbasis UbD",
      "Rubrik Asesmen Autentik Pemecahan Masalah"
    ],
    arsipUrl: "https://drive.google.com/drive/folders/1WS1svN-awoqU_UM_1VChGPjBaW3oQPKZ?usp=drive_link",
    refleksi4C: {
      connection: "Dalam pendidikan Informatika, godaan terbesar guru adalah terjebak pada pengajaran permukaan (surface learning)—murid hanya sekadar menghafal instruksi menu software atau menyalin sintaksis kode tanpa memahami logika komputasional yang mendasarinya. Mata kuliah PMAD memperkenalkan kerangka Understanding by Design (UbD) atau backward design dari Wiggins & McTighe, yang mengaitkan esensi perencanaan ajar dengan pencapaian pemahaman mendalam yang bertahan lama (enduring understanding).",
      challenge: "Tantangan terbesar adalah membalik kebiasaan lama dalam mendesain pembelajaran. Pola lama kerap merancang aktivitas menarik terlebih dahulu sebelum memikirkan bagaimana cara mengevaluasinya. UbD menuntut perumusan hasil akhir yang diinginkan terlebih dahulu, menentukan bukti asesmen autentik yang terukur, lalu merancang rangkaian aktivitas instruksional (WHERETO). Menentukan rubrik unjuk kerja yang mampu mengukur nalar abstraksi dan dekomposisi data menuntut ketelitian metodologis yang tinggi.",
      concept: "Konsep-konsep esensial meliputi: (1) Alur Tiga Tahap UbD: Menentukan Hasil yang Diinginkan -> Menentukan Bukti Asesmen -> Merencanakan Pengalaman Belajar; (2) Enam Faset Pemahaman Mendalam (Mampu Menjelaskan, Menginterpretasikan, Menerapkan, Memiliki Perspektif, Berempati, dan Mengenal Diri Sendiri); (3) Perumusan Pertanyaan Pemantik (Essential Questions) yang memantik rasa ingin tahu komputasional siswa; (4) Desain asesmen autentik berbasis masalah dunia nyata (Problem-Based Learning).",
      change: "Perencanaan pembelajaran saya berubah total menjadi lebih terstruktur, fokus, dan bermakna. Saya tidak lagi menyusun modul ajar berbasis tumpukan materi teoritis yang kering, melainkan berbasis tantangan pemecahan masalah kontekstual. Di kelas, saya membimbing murid menghubungkan konsep dekomposisi dan algoritma dengan persoalan kehidupan nyata, sehingga mereka merasakan relevansi dan kebermaknaan ilmu Informatika."
    },
    analisisArtefak: {
      artefakTerpilih: [
        "2.D.1 Lembar Kerja 2.2 Merancang Perencanaan Pembelajaran UbD Informatika.docx",
        "2.E Menyusun Langkah Perbaikan Berkelanjutan.pdf",
        "Modul Ajar Berpikir Komputasional Berbasis Alur Mundur (UbD)",
        "Lembar Kerja Peserta Didik (LKPD) Analisis Dekomposisi & Pola"
      ],
      alasanPemilihan: "Lembar Kerja 2.2 dan Modul Ajar UbD dipilih karena secara komprehensif mendemonstrasikan penguasaan saya terhadap metodologi alur mundur (backward design). Di dalam artefak ini tercermin perumusan pertanyaan pemantik yang tajam, rubrik analitik pemecahan masalah komputasi, dan rangkaian aktivitas belajar terpadu yang menjamin ketercapaian pemahaman mendalam pada peserta didik."
    },
    kaitanPraktis: {
      konsepUtama: "Menerapkan alur Understanding by Design (UbD) pada setiap unit topik Informatika dengan merumuskan pertanyaan pemantik kontekstual dan menugaskan proyek autentik unjuk kinerja sebagai bukti capaian belajar murid.",
      perubahanMasaDepan: "Saya berkomitmen untuk secara konsisten menerapkan prinsip backward design dalam menyusun perangkat pembelajaran di satuan pendidikan tempat saya mengabdi, serta terus melakukan refleksi siklus perbaikan berkelanjutan berbasis data asesmen autentik siswa."
    }
  },
  {
    id: "ppl-1",
    nama: "Praktik Pengalaman Lapangan I (PPL Terbimbing di SMAN 15 Surabaya)",
    semester: 1,
    deskripsi: "PPL I di SMAN 15 Surabaya merupakan ruang transisi awal saya dari ranah teori menuju dinamika empiris sekolah jenjang Menengah Atas (SMA). Di SMAN 15 Surabaya, saya belajar mengamati kultur belajar peserta didik SMA, sarana laboratorium komputer, dan iklim interaksi akademik, yang dilanjutkan dengan praktik asistensi mengajar dan praktik pembelajaran terbimbing bersama guru pamong.",
    halDipelajari: [
      "Observasi kultur sekolah jenjang SMA, tata kelola laboratorium komputer, dan karakteristik siswa remaja di SMAN 15 Surabaya",
      "Penyusunan modul ajar terbimbing dan konsultasi intensif bersama guru pamong SMA",
      "Simulasi praktik mengajar terbimbing di kelas nyata SMA",
      "Refleksi harian siklus mengajar dan evaluasi umpan balik konstruktif",
      "Penanganan kendala teknis perangkat dan manajemen kelas laboratorium komputer"
    ],
    tugas: [
      "Laporan Observasi Lingkungan Sekolah dan Laboratorium Komputer SMAN 15 Surabaya",
      "Perangkat Pembelajaran Praktik Mengajar Terbimbing Siklus 1 & 2 di SMAN 15 Surabaya",
      "Jurnal Refleksi Harian dan Video Dokumentasi Praktik Terbimbing",
      "Penyusunan Naskah Artikel Ilmiah Refleksi PPL Terbimbing (Artikel PPL 15)"
    ],
    refleksi: "PPL Terbimbing di SMAN 15 Surabaya memberikan gambaran nyata mengenai karakter siswa SMA yang kritis dan membutuhkan materi yang lebih aplikatif. Saat mengajar terbimbing, saya belajar pentingnya pengelolaan waktu, mobilitas mendekati siswa, dan kesiapan strategi cadangan (seperti aktivitas komputasi tanpa komputer / unplugged) apabila terjadi kendala teknis. Bimbingan guru pamong menjadi bekal pedagogis yang sangat bernilai bagi saya.",
    dokumentasi: [
      "Laporan Hasil Observasi Sekolah SMAN 15 Surabaya",
      "Modul Ajar Siklus Terbimbing SMA",
      "LKPD Informatika Kelas X.pdf",
      "Artikel Ilmiah Refleksi PPL SMAN 15 (INI ADALAH SALINAN ARTIKEL PPL 15.pdf)"
    ],
    arsipUrl: "https://drive.google.com/file/d/1RIAyNt_nX_7yDfvzpnKwuSNqIxZDteLN/view?usp=sharing",
    refleksi4C: {
      connection: "PPL I di SMAN 15 Surabaya merupakan jembatan emas yang menghubungkan seluruh teori pedagogik yang saya pelajari di bangku kuliah (Filosofi Pendidikan, Growth Mindset, Kebugaran Jasmani, PPDP, dan PMAD) dengan realitas empiris sekolah. Menghadapi siswa jenjang SMA yang memiliki tingkat kekritisan tinggi dan keakraban intensif dengan perangkat teknologi mengonfirmasi bahwa peran guru profesional adalah sebagai pamong yang adaptif, komunikatif, dan berdaya lenting tinggi.",
      challenge: "Tantangan yang saya hadapi meliputi: penyesuaian diri dengan ritme akademik di SMAN 15 Surabaya, pengelolaan proporsi alokasi waktu antara ceramah guru dan praktik mandiri murid di lab, serta menghadapi insiden teknis tak terduga (seperti fluktuasi koneksi internet atau galat sistem komputer) saat praktik mengajar terbimbing berlangsung.",
      concept: "Konsep kunci yang dipraktikkan: (1) Prosedur observasi komprehensif lingkungan belajar, tata kelola laboratorium komputer, dan kultur sekolah di SMA; (2) Asistensi mengajar dan kemitraan kolaboratif dengan Guru Pamong; (3) Siklus pembelajaran terbimbing: perencanaan bersama, simulasi mengajar, observasi kelas, dan sesi refleksi pasca-pembelajaran (debriefing); (4) Keterampilan manajemen kelas di ruang laboratorium komputer dan penanganan kendala teknis secara pedagogis.",
      change: "Saya mengalami pertumbuhan kematangan pedagogis, ketenangan mental, dan rasa percaya diri yang nyata di depan kelas. Dari yang awalnya gugup dan berbicara terlalu cepat, saya belajar mengatur tempo pemaparan, membatasi durasi penjelasan teori maksimal 15 menit, dan aktif bergerak mendampingi murid (active roaming). Bimbingan dan masukan Guru Pamong mendidik saya untuk selalu terbuka terhadap kritik membangun demi perbaikan diri."
    },
    analisisArtefak: {
      artefakTerpilih: [
        "Laporan Hasil Observasi Sekolah dan Lab SMAN 15 Surabaya",
        "Modul Ajar Praktik Terbimbing Siklus 1 & 2 Jenjang SMA",
        "LKPD Informatika Kelas X.pdf",
        "Artikel Ilmiah Refleksi PPL SMAN 15 (INI ADALAH SALINAN ARTIKEL PPL 15.pdf)"
      ],
      alasanPemilihan: "Laporan observasi sekolah, modul ajar terbimbing, dan naskah artikel ilmiah refleksi PPL SMAN 15 dipilih karena mendokumentasikan secara utuh tahapan pengabdian saya di sekolah mitra: mulai dari fase diagnosis awal kultur sekolah, implementasi modul ajar yang divalidasi guru pamong, hingga publikasi artikel ilmiah reflektif yang merekam dinamika belajar siswa di kelas Informatika."
    },
    kaitanPraktis: {
      konsepUtama: "Menerapkan manajemen alokasi waktu yang proporsional di laboratorium komputer (penjelasan ringkas, eksplorasi luas) dan membiasakan sesi evaluasi reflektif harian pasca-pembelajaran bersama guru pamong untuk perbaikan siklus berikutnya.",
      perubahanMasaDepan: "Saya berkomitmen untuk senantiasa menyiapkan skenario cadangan (contingency plan, seperti skenario unplugged computing) saat merencanakan pembelajaran di lab komputer, serta terus memelihara sikap rendah hati untuk belajar dari supervisi klinis rekan sejawat dan guru senior."
    }
  },

  // ================= SEMESTER 2 =================
  {
    id: "pmal-2",
    nama: "Pembelajaran Mendalam dan Asesmen Lanjutan (PMAL)",
    semester: 2,
    deskripsi: "Mata kuliah PMAL merupakan eskalasi lanjutan dalam menguasai desain pembelajaran dan asesmen tingkat tinggi di bangku perkuliahan Semester 2. Fokus mata kuliah ini adalah memperdalam kemampuan merancang asesmen autentik HOTS (Higher-Order Thinking Skills), asesmen kinerja (performance task), portofolio unjuk karya, serta rubrik analitik dan holistik yang presisi untuk mengukur capaian nalar komputasi tingkat lanjut siswa secara objektif dan berkeadilan.",
    halDipelajari: [
      "Perancangan asesmen autentik lanjutan: asesmen berbasis proyek (project-based assessment), portofolio digital, dan tugas kinerja kompleks",
      "Penyusunan instrumen evaluasi formatif berkelanjutan (Assessment as Learning & Assessment for Learning)",
      "Pengembangan rubrik penilaian analitik bertingkat untuk menilai logika algoritma, keorisinalan solusi, dan efisiensi koding",
      "Analisis data hasil asesmen (daya pembeda, tingkat kesukaran, dan reliabilitas) untuk perbaikan kualitas pembelajaran berkelanjutan"
    ],
    tugas: [
      "Pengembangan Paket Asesmen Autentik Terpadu pada Materi Analisis Data dan Algoritma Tingkat Lanjut",
      "Penyusunan Rubrik Penilaian Proyek Digital Kolaboratif berbasis kriteria HOTS",
      "Laporan Analisis Evaluasi Hasil Asesmen Peserta Didik dan Rancangan Umpan Balik Deskriptif",
      "Laporan UTS PMAL: DUP Dekomposisi & Pengenalan Pola"
    ],
    refleksi: "Melalui mata kuliah PMAL, saya memahami bahwa asesmen lanjutan bukanlah instrumen penghakiman nilai akhir semata, melainkan sarana diagnosis yang sangat berharga bagi guru untuk memetakan kekuatan dan kebutuhan belajar setiap murid. Menyusun rubrik analitik yang jelas membantu peserta didik memahami ekspektasi kualitas kerja mereka serta menumbuhkan keterampilan refleksi mandiri (self-assessment).",
    dokumentasi: [
      "Laporan UTS PMAL: DUP Dekomposisi & Pengenalan Pola",
      "Paket Instrumen Asesmen Autentik HOTS",
      "Rubrik Penilaian Unjuk Kinerja Analitik",
      "Laporan Analisis Hasil Evaluasi Belajar Siswa"
    ],
    arsipUrl: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID",
    refleksi4C: {
      connection: "Sebagai eskalasi lanjutan dari PMAD Semester 1, PMAL menghubungkan kemampuan desain instruksional saya dengan keahlian menyusun sistem evaluasi tingkat tinggi. Di bidang Informatika, kemampuan murid memecahkan masalah tidak dapat dinilai secara akurat melalui tes pilihan ganda semata. PMAL memperdalam kemampuan saya merancang asesmen autentik HOTS, penilaian kinerja (performance task), serta rubrik evaluasi yang transparan dan berkeadilan.",
      challenge: "Tantangan yang saya hadapi adalah menghindari bias subjektivitas dalam menilai proyek karya komputasi siswa, serta merumuskan deskriptor indikator capaian yang operasional dan presisi untuk mengukur nalar algoritma, keorisinalan solusi, dan efisiensi logika program siswa.",
      concept: "Konsep esensial yang dipelajari: (1) Asesmen formatif berkelanjutan (Assessment as Learning & Assessment for Learning); (2) Desain asesmen unjuk kerja autentik berbasis Higher-Order Thinking Skills (HOTS); (3) Penyusunan rubrik analitik bertingkat yang membedah kriteria performa secara detail; (4) Analisis data psikometrik asesmen (daya pembeda, tingkat kesukaran, reliabilitas) untuk evaluasi instruksional berkala.",
      change: "Saya tidak lagi memandang asesmen sebagai vonis angka akhir semata (assessment of learning), melainkan sebagai alat navigasi dan diagnosis pedagogis yang memberikan peta pertumbuhan belajar setiap anak. Saya membiasakan diri membagikan rubrik penilaian analitik kepada siswa sebelum mereka memulai proyek, sehingga mereka memiliki acuan mutu mandiri (self-assessment)."
    },
    analisisArtefak: {
      artefakTerpilih: [
        "Laporan UTS PMAL: DUP Dekomposisi & Pengenalan Pola",
        "Paket Instrumen Asesmen Autentik HOTS Informatika",
        "Rubrik Penilaian Unjuk Kinerja Analitik",
        "Laporan Analisis Hasil Evaluasi Belajar Siswa"
      ],
      alasanPemilihan: "Laporan UTS PMAL dan Paket Instrumen Asesmen HOTS dipilih karena membuktikan kemampuan saya merancang sistem evaluasi unjuk kerja autentik yang komprehensif. Artefak ini memuat indikator pencapaian kompetensi berpikir komputasional yang terukur dan rubrik analitik yang telah diuji validitasnya pada materi dekomposisi data siswa."
    },
    kaitanPraktis: {
      konsepUtama: "Menerapkan rubrik analitik transparan yang dibagikan kepada peserta didik sebelum pengerjaan proyek komputasi, serta memberikan umpan balik deskriptif berkelanjutan pada setiap tahapan kerja siswa.",
      perubahanMasaDepan: "Saya berkomitmen untuk membiasakan siswa melakukan penilaian antarteman (peer-assessment) dan refleksi diri (self-assessment) berbasis rubrik, serta memanfaatkan data asesmen diagnostik berkala untuk terus menyempurnakan kualitas metode pengajaran saya di kelas."
    }
  },
  {
    id: "pse-2",
    nama: "Pembelajaran Sosial Emosional (PSE)",
    semester: 2,
    deskripsi: "Mata kuliah yang menyentuh dimensi humanistik terdalam saya sebagai pendidik. PSE menegaskan bahwa fungsi kognitif dan daya nalar komputasi peserta didik tidak dapat berkembang optimal apabila emosi mereka berada dalam kecemasan, rasa takut dihakimi, atau tekanan psikologis. Mengintegrasikan 5 Kompetensi Sosial Emosional (KSE) ke dalam kelas Informatika menciptakan iklim belajar yang aman dan suportif.",
    halDipelajari: [
      "Kerangka CASEL: Kesadaran Diri, Manajemen Diri, Kesadaran Sosial, Keterampilan Berelasi, dan Pengambilan Keputusan Bertanggung Jawab",
      "Penerapan teknik kesadaran penuh (Mindfulness) dengan metode STOP (Stop, Take a breath, Observe, Proceed)",
      "Penciptaan iklim kelas positif yang aman secara psikologis (psychological safety) di laboratorium komputer",
      "Kesejahteraan psikologis (well-being) guru dan murid sebagai fondasi keberhasilan pembelajaran",
      "Manajemen konflik emosional dan kolaborasi tim dalam tugas proyek"
    ],
    tugas: [
      "Rancangan Modul Ajar Informatika terintegrasi KSE (Modul Ajar UTS PSE Berpikir Komputasional)",
      "Penyusunan Lembar Kerja Aktivitas PSE (1A - 1E Rev)",
      "Studi Kasus Experiential Learning PSE (LK 3.1 & LK 3.2)",
      "Laporan Kajian Kesejahteraan Emosional di Satuan Pendidikan (UAS School Well-Being)"
    ],
    refleksi: "Saya pernah mendapati seorang siswa yang frustrasi dan enggan melanjutkan tugas akibat kesalahan logika program yang berulang. Berkat bekal ilmu PSE, saya mendekatinya dengan empati dan mengajak mengambil jeda napas sejenak sebelum menelaah eror secara bersama. Pendekatan yang menenangkan tersebut mengembalikan rasa percaya dirinya. Menjadi pendidik adalah menyentuh hati sebelum mengisi daya pikir anak.",
    dokumentasi: [
      "Modul Ajar UTS PSE Berpikir Komputasional.docx",
      "Lembar Kerja Aktivitas PSE 1A - 1E Rev.pdf",
      "LK 3.1 Experiential Learning PSE.pdf",
      "Laporan UAS School Well-Being SMPN 8 Surabaya"
    ],
    arsipUrl: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID",
    refleksi4C: {
      connection: "Di era digital saat ini, peserta didik kerap dihadapkan pada disrupsi informasi, kecemasan kognitif saat program komputer error, dan tekanan interaksi digital. Mata kuliah PSE menghubungkan kecakapan teknis komputasi dengan ketahanan mental dan kecerdasan emosional. PSE menyadarkan saya bahwa otak yang sedang stres atau cemas tidak akan mampu berpikir logis secara optimal. Membangun ruang kelas yang aman secara emosional adalah prasyarat keberhasilan pembelajaran Informatika.",
      challenge: "Tantangan yang saya hadapi adalah bagaimana mengintegrasikan 5 Kompetensi Sosial Emosional (KSE) ke dalam modul ajar Informatika secara kontekstual dan natural, tanpa terkesan dipaksakan atau mengurangi alokasi jam praktikum materi komputer yang padat.",
      concept: "Konsep esensial yang dipelajari: (1) 5 Kompetensi KSE menurut CASEL: Kesadaran Diri, Manajemen Diri, Kesadaran Sosial, Keterampilan Berelasi, dan Pengambilan Keputusan yang Bertanggung Jawab; (2) Praktik kesadaran penuh (Mindfulness) dengan teknik STOP (Stop, Take a breath, Observe, Proceed); (3) Konsep School Well-Being dan Psychological Safety di ruang belajar; (4) Integrasi PSE secara eksplisit dan terintegrasi dalam mata pelajaran.",
      change: "Saya bertransformasi menjadi pendidik yang mengedepankan empati, kehangatan, dan stabilitas emosi. Saya membiasakan diri menyapa kondisi perasaan murid sebelum memulai pelajaran. Ketika ada siswa yang mengalami frustrasi karena komputernya eror, saya tidak lagi merespons secara kaku, melainkan membimbingnya mengambil jeda napas sejenak untuk menenangkan pikiran sebelum menelaah kembali masalah secara jernih."
    },
    analisisArtefak: {
      artefakTerpilih: [
        "Modul Ajar UTS PSE Berpikir Komputasional.docx",
        "Lembar Kerja Aktivitas PSE 1A - 1E Rev.pdf",
        "LK 3.1 Experiential Learning PSE.pdf",
        "Laporan UAS Kajian School Well-Being Siswa"
      ],
      alasanPemilihan: "Modul Ajar UTS PSE dan Lembar Kerja PSE 1A-1E dipilih karena membuktikan kemampuan saya mengintegrasikan teknik kesadaran penuh (teknik STOP) secara konkret ke dalam aktivitas pembelajaran Berpikir Komputasional. Dokumen ini menjadi bukti autentik penerapan pedagogi humanis yang memperhatikan kesehatan mental murid di ruang kelas komputer."
    },
    kaitanPraktis: {
      konsepUtama: "Mengintegrasikan teknik STOP selama 2 menit di awal pembelajaran atau sebelum evaluasi kuis logika, serta membimbing siswa mengelola emosi frustrasi koding melalui komunikasi suportif dan kerja kelompok yang saling menghargai.",
      perubahanMasaDepan: "Saya berkomitmen untuk senantiasa menempatkan kesejahteraan psikologis (well-being) murid sebagai prioritas utama iklim kelas saya, mengedukasi etika berelasi digital yang santun, serta terus melatih kematangan regulasi emosi pribadi dalam menghadapi segala dinamika kelas."
    }
  },
  {
    id: "projek-kepemimpinan-2",
    nama: "Projek Kepemimpinan",
    semester: 2,
    deskripsi: "Mata kuliah yang melatih jiwa kepemimpinan yang melayani (servant leadership) dan agen perubahan sosial. Pendidik tidak hanya bertugas di dalam ruang kelas, melainkan juga memiliki tanggung jawab sosial untuk memajukan komunitasnya. Melalui Service Learning, kami berkolaborasi dalam tim untuk merancang prakarsa perubahan nyata yang menjawab kebutuhan literasi digital di lingkungan sasaran.",
    halDipelajari: [
      "Pendekatan Design Thinking: Empathize, Define, Ideate, Prototype, dan Testing untuk inovasi pendidikan",
      "Manajemen proyek sosial berbasis SMART (Specific, Measurable, Achievable, Relevant, Time-bound)",
      "Advokasi kemitraan, manajemen linimasa, penganggaran, dan mitigasi risiko kegiatan",
      "Evaluasi dampak sosial program (Monitoring & Evaluation) serta pameran gelar karya (Exhibition)",
      "Kepemimpinan transformasional dan kolaborasi lintas pemangku kepentingan"
    ],
    tugas: [
      "Penyusunan Proposal Prakarsa Perubahan Projek Kepemimpinan Sosial (UTS PK Terbaru)",
      "Pengerjaan Lembar Kerja Kelompok Projek (LK 2.3.A & LK 2.4.A)",
      "Pelaksanaan Aksi Nyata Program Peningkatan Literasi Digital Komunitas Sasaran",
      "Pameran Gelar Karya (Exhibition) dan Laporan Pertanggungjawaban Akhir Projek"
    ],
    refleksi: "Memimpin proyek sosial bersama rekan mahasiswa di tengah padatnya jadwal PPL menuntut kematangan komunikasi dan manajemen waktu. Dari pengalaman ini, saya belajar bahwa kepemimpinan sejati bukanlah tentang mendikte, melainkan kemampuan mendengar, memfasilitasi kekuatan rekan tim, dan merawat komitmen bersama demi kemanfaatan yang berkelanjutan.",
    dokumentasi: [
      "Proposal Prakarsa Perubahan Projek Kepemimpinan (UTS PK Terbaru.pdf)",
      "LK 2.3.A & LK 2.4.A Tugas Kelompok Projek Kepemimpinan.pdf",
      "Dokumentasi Gelar Karya & Pameran Projek Komunitas",
      "Laporan Akhir Pertanggungjawaban Dampak Projek"
    ],
    arsipUrl: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID",
    refleksi4C: {
      connection: "Mata kuliah Projek Kepemimpinan memperluas horizon peran saya: seorang pendidik profesional tidak boleh terisolasi hanya di dalam empat dinding ruang kelas, melainkan harus hadir sebagai agen perubahan sosial dan pemimpin yang melayani (servant leader) di masyarakat. Mata kuliah ini menghubungkan keahlian teknologi informasi saya dengan tanggung jawab pengabdian masyarakat guna menjawab kesenjangan literasi digital di lingkungan sasaran.",
      challenge: "Tantangan terbesar yang dihadapi adalah menyelaraskan ide, ritme kerja, dan pembagian peran anggota tim di tengah padatnya jadwal praktik mengajar mandiri PPL, serta melakukan mitigasi risiko ketika terjadi kendala teknis dan dinamika komunikasi di lapangan sasaran.",
      concept: "Konsep kunci yang dipelajari: (1) Pendekatan Design Thinking dalam rekayasa sosial pendidikan: Empathize, Define, Ideate, Prototype, dan Test; (2) Manajemen proyek berbasis target SMART (Specific, Measurable, Achievable, Relevant, Time-bound); (3) Pemetaan pemangku kepentingan (stakeholder mapping), manajemen anggaran, dan advokasi kemitraan; (4) Monitoring, evaluasi dampak terukur, dan diseminasi gelar karya.",
      change: "Saya mengalami transformasi dalam gaya kepemimpinan. Dari yang awalnya berorientasi instruksional mandiri, saya belajar menjadi pemimpin yang inklusif, pendengar yang baik, serta mampu memfasilitasi kelebihan setiap rekan tim. Saya menyadari bahwa perubahan berkelanjutan lahir dari kolaborasi yang solid, bukan kerja individu."
    },
    analisisArtefak: {
      artefakTerpilih: [
        "Proposal Prakarsa Perubahan Projek Kepemimpinan (UTS_PK_TERBARU.pdf)",
        "LK 2.3.A & LK 2.4.A Tugas Kelompok PK.pdf",
        "2.2.a Tugas 4.1 Individu Projek Kepemimpinan.pdf",
        "Laporan Pertanggungjawaban Akhir Gelar Karya Projek"
      ],
      alasanPemilihan: "Proposal UTS PK Terbaru dan LK 2.3.A dipilih karena mendokumentasikan secara rinci perencanaan aksi perubahan sosial yang kami gagas menggunakan pendekatan Design Thinking. Dokumen ini membuktikan kompetensi saya dalam merancang inisiatif pendidikan yang terukur, mengelola risiko, dan menggalang kemitraan demi dampak sosial yang nyata."
    },
    kaitanPraktis: {
      konsepUtama: "Menggunakan metode Design Thinking dalam membedah dan memecahkan kendala pembelajaran di sekolah mitra, serta mengorganisasi kegiatan kolaboratif yang berdampak bagi komunitas sekitar.",
      perubahanMasaDepan: "Saya berkomitmen untuk aktif menginisiasi dan menggerakkan Komunitas Belajar (Kombel) antar pendidik di satuan pendidikan tempat saya bertugas kelak, serta merancang proyek-proyek kolaborasi literasi digital yang menghubungkan sekolah dengan masyarakat luas."
    }
  },
  {
    id: "inklusi-2",
    nama: "Pendidikan Inklusi",
    semester: 2,
    deskripsi: "Mata kuliah yang meluruskan paradigma saya bahwa pendidikan inklusif berlaku di semua satuan pendidikan reguler. Setiap guru niscaya akan menjumpai peserta didik berkebutuhan khusus (PDBK)—baik yang memiliki hambatan sensori, kesulitan belajar spesifik, maupun ragam kecepatan belajar. Mata kuliah ini membekali saya dengan prinsip Universal Design for Learning (UDL) agar materi Informatika dapat diakses secara bermartabat oleh seluruh siswa tanpa terkecuali.",
    halDipelajari: [
      "Filosofi pendidikan inklusif dan hak asasi setiap anak untuk memperoleh layanan pendidikan yang setara",
      "Identifikasi dan asesmen awal peserta didik berkebutuhan khusus (PDBK) di sekolah reguler",
      "Prinsip Akomodasi yang Layak: Modifikasi tujuan, materi, proses pembelajaran, dan format penilaian",
      "Kerangka Universal Design for Learning (UDL): Ragam Keterlibatan, Ragam Representasi, dan Ragam Ekspresi",
      "Pengembangan media dan materi Informatika yang aksesibel (multimodal text, audio, visual)"
    ],
    tugas: [
      "Analisis studi kasus identifikasi karakteristik PDBK di lingkungan sekolah mitra PPL (Studi Kasus Siswa Inklusif Alya)",
      "Penyusunan Modul Ajar Informatika Inklusif berbasis kerangka UDL",
      "Perancangan instrumen penilaian modifikasi yang adil bagi peserta didik slow learner",
      "Rancangan Aksi Nyata Lingkungan Belajar Ramah Inklusi di Laboratorium Komputer"
    ],
    refleksi: "Di laboratorium komputer, saya pernah mendampingi siswa dengan kecepatan membaca yang lebih lambat sehingga tertinggal saat membaca panduan tertulis. Pengalaman tersebut menegaskan bahwa pendidiklah yang wajib menyediakan jalur belajar alternatif—misalnya melalui infografis visual dan rekaman audio instruksi. Tidak ada satu pun anak yang boleh merasa tersisih di ruang kelas saya.",
    dokumentasi: [
      "Studi Kasus Mengenal Profil Siswa Inklusif Alya",
      "RPP Berdiferensiasi Informatika Berbasis UDL",
      "Instrumen Asesmen Akomodasi yang Layak",
      "Panduan Praktik Laboratorium Komputer Aksesibel"
    ],
    arsipUrl: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID",
    refleksi4C: {
      connection: "Sebelum mendalami Pendidikan Inklusi, ada anggapan umum bahwa pelayanan bagi Peserta Didik Berkebutuhan Khusus (PDBK) adalah kewajiban eksklusif Sekolah Luar Biasa (SLB). Di era Kurikulum Merdeka, sekolah reguler membuka pintu bagi PDBK. Bagi calon guru Informatika, hal ini menjadi amanah besar: bagaimana memastikan bahwa pembelajaran teknologi tidak menjadi penghalang diskriminatif, melainkan menjadi jembatan pemberdayaan yang aksesibel bagi setiap anak dengan ragam hambatan belajar.",
      challenge: "Tantangan terberat adalah mengidentifikasi hambatan belajar spesifik siswa secara objektif tanpa melakukan pelabelan negatif (labeling), serta memodifikasi materi dan modul ajar praktikum komputer agar dapat dipahami oleh siswa yang memiliki keterbatasan membaca, gangguan konsentrasi, maupun kecepatan belajar yang lambat (slow learner).",
      concept: "Konsep kunci yang dipelajari: (1) Filosofi pendidikan inklusif berbasis hak asasi manusia; (2) Konsep Akomodasi yang Layak (modifikasi tujuan, proses instruksional, sarana, dan asesmen); (3) Kerangka Universal Design for Learning (UDL) dengan tiga prinsip utama: Ragam Representasi (Multiple Means of Representation), Ragam Keterlibatan (Engagement), dan Ragam Aksi/Ekspresi (Action & Expression); (4) Penerapan teknologi asistif sederhana.",
      change: "Saya mengalami perubahan paradigma yang mendalam: tidak ada anak yang 'gagal belajar', yang ada adalah rancangan kurikulum dan instruksi guru yang belum menyediakan akses yang sesuai dengan pintu masuk pemahaman anak. Saya bertransformasi menjadi guru yang proaktif merancang materi pembelajaran multimodal (teks, diagram visual, video, dan panduan taktil berurutan)."
    },
    analisisArtefak: {
      artefakTerpilih: [
        "Studi Kasus Mengenal Profil Siswa Inklusif Alya",
        "RPP Berdiferensiasi Informatika Berbasis UDL",
        "Instrumen Asesmen Akomodasi yang Layak",
        "Panduan Praktik Laboratorium Komputer Aksesibel"
      ],
      alasanPemilihan: "Studi Kasus Siswa Inklusif Alya dan RPP Berdiferensiasi UDL dipilih karena mendemonstrasikan secara nyata kemampuan saya dalam mengidentifikasi kebutuhan khusus murid dan merumuskan modifikasi kurikulum yang adil. Dokumen ini menjadi bukti autentik penerapan prinsip UDL dalam pembelajaran Informatika di sekolah mitra PPL."
    },
    kaitanPraktis: {
      konsepUtama: "Menyediakan panduan praktikum visual langkah demi langkah (step-by-step pictorial guide) di laboratorium komputer dan memberikan opsi unjuk kerja fleksibel bagi siswa dengan kebutuhan khusus.",
      perubahanMasaDepan: "Saya berkomitmen untuk selalu menerapkan prinsip Universal Design for Learning (UDL) pada setiap materi ajar digital yang saya rancang, memastikan perangkat lunak dan media pembelajaran yang digunakan memiliki fitur aksesibilitas yang ramah bagi seluruh peserta didik."
    }
  },
  {
    id: "seminar-2",
    nama: "Seminar Proposal / Riset Tindakan Pembelajaran",
    semester: 2,
    deskripsi: "Mata kuliah pemungkas yang meramu seluruh pengalaman empiris di sekolah mitra PPL dan kajian teoretis perkuliahan menjadi karya ilmiah reflektif. Persoalan riil di kelas—seperti optimalisasi kemampuan berpikir komputasional siswa—dianalisis secara ilmiah melalui Penelitian Tindakan Kelas (PTK) dan diseminasi Praktik Baik (Best Practice) berbasis kerangka STAR.",
    halDipelajari: [
      "Metodologi Penelitian Tindakan Kelas (PTK) siklik model Kemmis & McTaggart (Plan - Act - Observe - Reflect)",
      "Penyusunan laporan Best Practice inovasi pembelajaran menggunakan kerangka STAR (Situasi, Tantangan, Aksi, Refleksi)",
      "Teknik presentasi dan argumentasi ilmiah pedagogis dalam forum ujian sidang seminar proposal",
      "Diseminasi hasil refleksi pembelajaran demi peningkatan mutu pendidikan secara berkelanjutan",
      "Integrasi inovasi media pembelajaran digital (Kompulogika) sebagai solusi empiris di sekolah"
    ],
    tugas: [
      "Penyusunan Proposal Penelitian Tindakan Kelas / Seminar Refleksi Inovasi Pembelajaran Informatika di Sekolah Mitra",
      "Slide presentasi sidang seminar proposal dan simulasi diseminasi karya ilmiah di depan dewan penguji",
      "Penyusunan artikel reflektif Praktik Baik (Best Practice) pembelajaran Informatika di sekolah mitra PPL",
      "Laporan Inovasi Pembelajaran Kompulogika SMPN 8 Surabaya (83 Siswa, CBT Room 728953)"
    ],
    refleksi: "Menjalani ujian sidang seminar proposal memberikan pengalaman berharga dalam mempertahankan argumentasi pedagogis dengan dukungan data kelas nyata. Guru profesional adalah praktisi yang senantiasa menempatkan dirinya sebagai pembelajar sepanjang hayat (lifelong learner) dan peneliti atas praktiknya sendiri di kelas demi perbaikan mutu pembelajaran yang tiada henti.",
    dokumentasi: [
      "Laporan Inovasi Pembelajaran Kompulogika SMPN 8 Surabaya.docx",
      "Slide Presentasi Ujian Sidang Seminar Proposal",
      "Artikel Best Practice Pembelajaran Informatika Berbasis STAR",
      "Tugas LK 1 Identifikasi Diri Calon Guru.pdf"
    ],
    arsipUrl: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID",
    refleksi4C: {
      connection: "Sebagai mata kuliah pemungkas dan muara dari seluruh rangkaian PPG Prajabatan, Seminar PPG memadukan seluruh teori pedagogik yang dipelajari di bangku kuliah dengan data empiris yang saya temukan selama bertugas di sekolah mitra PPL (SMAN 15 Surabaya dan SMPN 8 Surabaya). Mata kuliah ini mempertegas peran saya sebagai guru profesional yang reflektif dan adaptif: seorang pendidik yang tidak hanya mengajar, tetapi juga mampu meneliti, mengevaluasi, dan mendokumentasikan inovasi pembelajarannya secara ilmiah.",
      challenge: "Tantangan terberat adalah menyusun karya tulis ilmiah reflektif yang didukung data kuantitatif dan kualitatif yang valid dari kelas nyata, serta mempertahankan argumentasi pedagogis inovasi pembelajaran (seperti inovasi media Kompulogika) di hadapan dewan penguji dan dosen pembimbing dalam forum sidang seminar proposal yang kritis.",
      concept: "Konsep kunci yang dipelajari: (1) Metodologi Penelitian Tindakan Kelas (PTK) siklik model Kemmis & McTaggart (Perencanaan, Tindakan, Pengamatan, Refleksi); (2) Kerangka penulisan Praktik Baik (Best Practice) menggunakan metode STAR (Situasi, Tantangan, Aksi, Refleksi); (3) Teknik komunikasi dan diseminasi akademik dalam forum ilmiah kependidikan; (4) Konsep teacher as reflective practitioner and researcher (guru sebagai peneliti reflektif).",
      change: "Saya menginternalisasi identitas baru sebagai pendidik pembelajar sepanjang hayat (lifelong learner) dan peneliti atas praktiknya sendiri di kelas. Saya tidak lagi memandang masalah pembelajaran di kelas sebagai keluhan yang pasrah diterima, melainkan sebagai tantangan riset tindakan yang dapat diselesaikan melalui intervensi inovatif yang terukur dan dapat dipertanggungjawabkan."
    },
    analisisArtefak: {
      artefakTerpilih: [
        "Laporan Inovasi Pembelajaran Kompulogika SMPN 8 Surabaya.docx",
        "Tugas LK 1 Identifikasi Diri Calon Guru.pdf",
        "Slide Presentasi Ujian Sidang Seminar Proposal",
        "Naskah Artikel Best Practice Publikasi Ilmiah PPG"
      ],
      alasanPemilihan: "Laporan Inovasi Pembelajaran Kompulogika SMPN 8 Surabaya dan Slide Sidang Seminar dipilih sebagai artefak puncak karena merangkum secara utuh implementasi riset tindakan kelas yang saya lakukan pada 83 siswa kelas 9 di SMPN 8 Surabaya. Dokumen ini membuktikan integrasi antara pemecahan masalah empiris kelas (rendahnya minat komputasi abstrak) dengan rekayasa solusi pedagogis yang terukur dan sukses diseminasi di depan dewan penguji."
    },
    kaitanPraktis: {
      konsepUtama: "Menerapkan kerangka STAR dan siklus PTK secara berkelanjutan untuk memecahkan kendala pembelajaran Informatika di kelas nyata, serta mendesain media interaktif yang mempermudah pemahaman konsep logika komputasi siswa.",
      perubahanMasaDepan: "Saya berkomitmen untuk secara rutin mendokumentasikan setiap praktik baik dan inovasi mengajar saya dalam bentuk tulisan ilmiah, membagikannya dalam forum Komunitas Belajar (Kombel) atau Musyawarah Guru Mata Pelajaran (MGMP) Informatika, serta terus mempublikasikan karya reflektif di jurnal kependidikan."
    }
  }
];

export interface PplData {
  jenjang?: string;
  guruPamong?: string;
  sekolah: string;
  sekolahTerbimbing: string;
  sekolahMandiri: string;
  jenjangTerbimbing: string;
  jenjangMandiri: string;
  bidangStudi: string;
  periode: string;
  kepalaSekolahMandiri: string;
  guruPamongMandiri: string;
  dosenPembimbing: string;
  deskripsi: string;
  tahapan: {
    judul: string;
    deskripsi: string;
    poinPenting: string[];
    dokumentasiPlaceholder: string;
  }[];
}

export const pplData: PplData = {
  jenjang: "Sekolah Menengah Pertama (SMP) & Sekolah Menengah Atas (SMA)",
  guruPamong: "Pamuji Raharjo., S.Pd (SMPN 8 Surabaya)",
  sekolah: "SMAN 15 Surabaya (PPL Terbimbing) & SMPN 8 Surabaya (PPL Mandiri)",
  sekolahTerbimbing: "SMAN 15 Surabaya",
  sekolahMandiri: "SMP Negeri 8 Surabaya",
  jenjangTerbimbing: "Sekolah Menengah Atas (SMA)",
  jenjangMandiri: "Sekolah Menengah Pertama (SMP)",
  bidangStudi: "Pendidikan Informatika",
  periode: "PPL I Terbimbing & PPL II Mandiri (Tahun Ajaran 2025/2026)",
  kepalaSekolahMandiri: "Drs. Sudjasmi Marginono, M.Si (SMPN 8 Surabaya)",
  guruPamongMandiri: "Pamuji Raharjo., S.Pd (SMPN 8 Surabaya)",
  dosenPembimbing: "Prof. Dr. Joko, M.Pd., M.T. (UNESA)",
  deskripsi: "Praktik Pengalaman Lapangan (PPL) terbagi menjadi dua tahap pengabdian: PPL Terbimbing di SMAN 15 Surabaya (jenjang SMA) untuk mengamati kultur belajar dan asistensi mengajar, serta PPL Mandiri di SMP Negeri 8 Surabaya (jenjang SMP) untuk melaksanakan praktik mengajar mandiri, penerapan inovasi Kompulogika, dan penyusunan portofolio UTS-UAS.",
  tahapan: [
    {
      judul: "1. Observasi & Orientasi Sekolah Mitra",
      deskripsi: "Mengamati kultur sekolah di SMAN 15 Surabaya (SMA) dan SMPN 8 Surabaya (SMP), fasilitas laboratorium komputer, dan karakteristik awal peserta didik.",
      poinPenting: [
        "Observasi tata kelola laboratorium komputer dan akses internet sekolah",
        "Pengenalan kultur belajar dan dinamika interaksi siswa jenjang SMP dan SMA",
        "Pemetaan kesiapan belajar awal siswa melalui instrumen asesmen diagnostik"
      ],
      dokumentasiPlaceholder: "Laporan observasi sekolah & dokumentasi lab komputer di Google Drive"
    },
    {
      judul: "2. Perencanaan Pembelajaran (Modul Ajar & Media UbD)",
      deskripsi: "Menyusun modul ajar Informatika berbasis kerangka Understanding by Design (UbD) yang terstruktur dan bermakna.",
      poinPenting: [
        "Penyusunan 4 Modul Ajar Berpikir Komputasional (Dekomposisi, Pola, Abstraksi, Algoritma)",
        "Pembuatan LKPD interaktif, presentasi visual, dan media pembelajaran alternatif (unplugged)",
        "Konsultasi dan validasi perangkat pembelajaran bersama guru pamong"
      ],
      dokumentasiPlaceholder: "Modul Ajar, PPT, dan LKPD lengkap tersedia di folder artefak"
    },
    {
      judul: "3. Praktik Mengajar Terbimbing & Mandiri (Inovasi Kompulogika)",
      deskripsi: "Melaksanakan pembelajaran di kelas secara langsung: asistensi terbimbing di SMAN 15 Surabaya dan praktik mandiri berbasis inovasi Kompulogika di SMPN 8 Surabaya.",
      poinPenting: [
        "Penerapan model Problem Based Learning (PBL) dan Project Based Learning (PjBL)",
        "Pengelolaan kelas aktif, ramah anak, dan pendekatan empati (PSE)",
        "Pemberian umpan balik konstruktif dan scaffolding bagi siswa yang membutuhkan bimbingan"
      ],
      dokumentasiPlaceholder: "Video rekaman praktik mengajar dan dokumentasi kelas di lab komputer"
    },
    {
      judul: "4. Asesmen Autentik & Evaluasi Hasil Belajar",
      deskripsi: "Melakukan penilaian formatif dan sumatif, menganalisis ketuntasan tujuan pembelajaran, dan mengolah data hasil belajar.",
      poinPenting: [
        "Pengolahan asesmen diagnostik, formatif berkala, dan unjuk kerja proyek",
        "Refleksi efektivitas instrumen penilaian terhadap pemahaman mendalam siswa",
        "Tindak lanjut berupa pengayaan bagi siswa mahir dan bimbingan tambahan bagi yang membutuhkan"
      ],
      dokumentasiPlaceholder: "Rekapitulasi asesmen dan analisis hasil belajar peserta didik kelas 9B & 9G"
    },
    {
      judul: "5. Refleksi Siklis & Produk Portofolio PPL",
      deskripsi: "Mengevaluasi kekuatan dan area pengembangan diri setelah setiap siklus mengajar, menyusun produk UTS & UAS PPL.",
      poinPenting: [
        "Diskusi reflektif berkala bersama guru pamong dan DPL",
        "Penyusunan Tugas 1 Analisis Komponen Praktik Mengajar Mandiri",
        "Penyusunan produk terbaik UTS (Siklus 1) dan persiapan UAS"
      ],
      dokumentasiPlaceholder: "Jurnal refleksi PPL, laporan UTS, dan laporan UAS"
    }
  ]
};

export interface TimelineStep {
  no: number;
  judul: string;
  deskripsi: string;
  icon: string;
}

export const pplTimelineSteps: TimelineStep[] = [
  { no: 1, judul: "Perencanaan", deskripsi: "Analisis kebutuhan murid, penentuan TP, dan perancangan modul ajar UbD.", icon: "ClipboardList" },
  { no: 2, judul: "Persiapan Materi", deskripsi: "Pengembangan materi Informatika yang kontekstual dan ramah pemahaman anak.", icon: "BookOpen" },
  { no: 3, judul: "Pengembangan Media", deskripsi: "Pembuatan slide PPT interaktif, LKPD berpikir komputasional, dan aktivitas unplugged.", icon: "Monitor" },
  { no: 4, judul: "Pelaksanaan Mengajar", deskripsi: "Praktik mengajar mandiri di lab komputer dengan pendekatan sosial emosional (PSE).", icon: "Presentation" },
  { no: 5, judul: "Asesmen Autentik", deskripsi: "Pengukuran capaian pemahaman lewat unjuk kerja, observasi, dan kuis formatif.", icon: "ClipboardCheck" },
  { no: 6, judul: "Analisis Komponen", deskripsi: "Analisis mendalam terhadap produk rancangan, pelaksanaan, dan instrumen asesmen.", icon: "BarChart3" },
  { no: 7, judul: "Refleksi Mendalam", deskripsi: "Evaluasi diri model 4F bersama Guru Pamong Pamuji Raharjo, S.Pd.", icon: "Lightbulb" },
  { no: 8, judul: "Perbaikan Berkelanjutan", deskripsi: "Penyusunan rencana tindak lanjut perbaikan untuk siklus mengajar berikutnya.", icon: "RefreshCw" }
];

export interface SiklusInfo {
  nomor: number;
  judul: string;
  status: "selesai" | "berjalan" | "disiapkan";
  deskripsi: string;
  sekolah: string;
  mataPelajaran: string;
  kelas: string;
  materi: string;
  tanggal: string;
  linkRancangan: string;
  linkVideo: string;
  linkDokumentasi: string;
}

export const siklusDataList: SiklusInfo[] = [
  {
    nomor: 1,
    judul: "Pilar 1: Dekomposisi Masalah Komputasional (Produk UTS)",
    status: "selesai",
    deskripsi: "Praktik mengajar mandiri pertama di SMPN 8 Surabaya yang menjadi dasar penyusunan E-Portfolio 1 (UTS). Fokus pada penerapan rancangan pembelajaran Dekomposisi Masalah dan pendekatan emosional di kelas nyata.",
    sekolah: "SMP Negeri 8 Surabaya",
    mataPelajaran: "Informatika / TIK",
    kelas: "Kelas 9 SMP (9B & 9G)",
    materi: "Berpikir Komputasional: Dekomposisi Masalah Kompleks Menjadi Sub-Masalah",
    tanggal: "Agustus - September 2026",
    linkRancangan: "https://drive.google.com/file/d/1cFWbWKndGXuh0GPMY5uLn9fEI-20wUds/view?usp=sharing",
    linkVideo: "https://drive.google.com/file/d/1glRcMieoR8ET3MAD3mfFbim39NLl6FNX/view?usp=sharing",
    linkDokumentasi: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    nomor: 2,
    judul: "Pilar 2: Pengenalan Pola & Keteraturan Data",
    status: "selesai",
    deskripsi: "Praktik mengajar mandiri kedua di SMPN 8 Surabaya. Mengintegrasikan pembelajaran berbasis masalah (PBL) dan aktivitas interaktif mengenali keteraturan pola data komputasi dalam kehidupan sehari-hari.",
    sekolah: "SMP Negeri 8 Surabaya",
    mataPelajaran: "Informatika",
    kelas: "Kelas 9 SMP (9B & 9G)",
    materi: "Berpikir Komputasional: Pengenalan Pola (Pattern Recognition)",
    tanggal: "September - Oktober 2026",
    linkRancangan: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID",
    linkVideo: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID",
    linkDokumentasi: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    nomor: 3,
    judul: "Pilar 3: Abstraksi & Pemodelan Informasi Esensial",
    status: "berjalan",
    deskripsi: "Praktik mengajar mandiri ketiga di SMPN 8 Surabaya. Membimbing peserta didik memilah informasi penting dan mengabaikan detail yang tidak relevan dalam merancang sistem data.",
    sekolah: "SMP Negeri 8 Surabaya",
    mataPelajaran: "Informatika",
    kelas: "Kelas 9 SMP (9B & 9G)",
    materi: "Berpikir Komputasional: Abstraksi dan Pemodelan Data Sederhana",
    tanggal: "Oktober 2026",
    linkRancangan: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID",
    linkVideo: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID",
    linkDokumentasi: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    nomor: 4,
    judul: "Pilar 4: Algoritma & Bagan Alir Flowchart Logis",
    status: "berjalan",
    deskripsi: "Praktik mengajar mandiri keempat di SMPN 8 Surabaya. Mengonversi langkah-langkah logika pemecahan masalah ke dalam notasi bagan alir (flowchart) standar Kurikulum Merdeka.",
    sekolah: "SMP Negeri 8 Surabaya",
    mataPelajaran: "Informatika",
    kelas: "Kelas 9 SMP (9B & 9G)",
    materi: "Berpikir Komputasional: Algoritma & Notasi Standar Flowchart",
    tanggal: "Oktober - November 2026",
    linkRancangan: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID",
    linkVideo: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID",
    linkDokumentasi: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  }
];

export interface TaskComponent {
  id: string;
  nomor: string;
  judul: string;
  deskripsi: string;
  produkNama: string;
  produkDeskripsi: string;
  produkTanggal: string;
  linkDokumen: string;
  tujuan: string;
  analisisPoin: { label: string; keterangan: string }[];
}

export const taskComponentsList: TaskComponent[] = [
  {
    id: "rancangan",
    nomor: "01",
    judul: "Analisis Rancangan / Perencanaan Pembelajaran",
    deskripsi: "Analisis mendalam terhadap produk rancangan pembelajaran (Modul Ajar UbD) yang digunakan dalam praktik mengajar mandiri di kelas nyata SMPN 8 Surabaya.",
    produkNama: "Modul Ajar Berpikir Komputasional (Kelas 9)",
    produkDeskripsi: "Rancangan modul ajar berbasis kerangka Understanding by Design (UbD) materi Berpikir Komputasional dengan pendekatan Problem Based Learning.",
    produkTanggal: "Agustus - September 2026",
    linkDokumen: "https://drive.google.com/file/d/1cFWbWKndGXuh0GPMY5uLn9fEI-20wUds/view?usp=sharing",
    tujuan: "Melatih kemampuan berpikir kritis, dekomposisi masalah rumit menjadi bagian sederhana, serta merancang algoritma terstruktur.",
    analisisPoin: [
      { label: "Kesesuaian dengan Karakteristik Siswa", keterangan: "Rancangan disesuaikan dengan hasil asesmen diagnostik awal di mana siswa lebih cepat memahami logika komputasi melalui analogi masalah sehari-hari dan visualisasi nyata." },
      { label: "Integrasi Kerangka UbD", keterangan: "Alur kegiatan disusun terbalik (backward design): menetapkan pemahaman abadi yang dituju, menentukan bukti asesmen autentik, lalu merancang aktivitas unjuk nalar logika." },
      { label: "Kesiapan Mitigasi Kendala", keterangan: "Menyediakan skenario alternatif berupa aktivitas tanpa komputer (unplugged activity) apabila terjadi kendala listrik atau gangguan jaringan lab komputer." }
    ]
  },
  {
    id: "pelaksanaan",
    nomor: "02",
    judul: "Analisis Pelaksanaan Praktik Mengajar",
    deskripsi: "Evaluasi kritis terhadap dinamika pelaksanaan pembelajaran langsung di kelas: pengelolaan waktu, respon siswa, dan penyesuaian instruksi.",
    produkNama: "Video Praktik Mengajar dengan Pendekatan Sosial Emosional",
    produkDeskripsi: "Rekaman video pelaksanaan pembelajaran mandiri di kelas dengan fokus pada interaksi positif, kesadaran emosional, dan bimbingan bertahap.",
    produkTanggal: "Agustus 2026",
    linkDokumen: "https://drive.google.com/file/d/1glRcMieoR8ET3MAD3mfFbim39NLl6FNX/view?usp=sharing",
    tujuan: "Menghadirkan suasana kelas yang inklusif, kondusif, dan bebas rasa takut dalam mencoba hal-hal baru di lab komputer.",
    analisisPoin: [
      { label: "Penerapan Pembelajaran Sosial Emosional", keterangan: "Mengawali kelas dengan sapaan hangat dan teknik kesadaran penuh singkat (STOP) untuk menstabilkan fokus siswa sebelum masuk ke materi teknis." },
      { label: "Manajemen Kelas & Mobilitas Guru", keterangan: "Membatasi ceramah klasikal maksimal 15 menit, lalu bergerak berkeliling memantau layar siswa, membimbing murid yang ragu, dan memberi penguatan." },
      { label: "Respon & Antusiasme Siswa", keterangan: "Siswa menunjukkan keterlibatan tinggi saat diberikan studi kasus interaktif dan kesempatan mempresentasikan alur logika kelompoknya." }
    ]
  },
  {
    id: "asesmen",
    nomor: "03",
    judul: "Analisis Asesmen & Penilaian Hasil Belajar",
    deskripsi: "Analisis terhadap instrumen penilaian autentik: kuis formatif, lembar unjuk kerja, dan rubrik evaluasi pemahaman mendalam.",
    produkNama: "Instrumen Asesmen Diagnostik, Formatif, & Rubrik Autentik",
    produkDeskripsi: "Kumpulan instrumen asesmen kognitif dan non-kognitif serta LKPD dekomposisi logika komputasional.",
    produkTanggal: "Agustus - September 2026",
    linkDokumen: "https://drive.google.com/file/d/1BfZgk7IfssQPajdVnL1KBjpfe6WCY4tB/view?usp=sharing",
    tujuan: "Mengukur tingkat pemahaman nalar komputasi secara objektif, transparan, dan memberikan umpan balik perbaikan nyata bagi siswa.",
    analisisPoin: [
      { label: "Keautentikan Rubrik", keterangan: "Penilaian tidak sekadar menilai jawaban benar/salah, melainkan menilai proses nalar logika, ketekunan mencari eror, dan kemampuan kerja sama." },
      { label: "Umpan Balik Formatif Cepat", keterangan: "Menggunakan tiket keluar (exit ticket) singkat untuk langsung mengetahui bagian konsep mana yang masih membingungkan murid sebelum kelas berakhir." },
      { label: "Keadilan Penilaian", keterangan: "Menyediakan variasi format tugas bagi murid dengan profil belajar yang beragam agar setiap anak memiliki ruang menunjukkan potensinya." }
    ]
  }
];

export const utsPplData = {
  label: "PRODUK UTS PPL (E-PORTFOLIO 1)",
  judul: "Produk Terbaik Praktik Mengajar Mandiri Siklus 1",
  subtitle: "E-Portfolio 1 - Praktik Mengajar Mandiri Siklus 1 di SMPN 8 Surabaya",
  rancangan: {
    judul: "Modul Ajar Berpikir Komputasional Kelas 9",
    mataPelajaran: "Informatika / TIK",
    kelas: "Kelas 9 SMP (SMPN 8 Surabaya)",
    materi: "Berpikir Komputasional (Dekomposisi & Algoritma)",
    tujuan: "Memecahkan masalah besar lewat dekomposisi bagian kecil, mengembangkan nalar kritis, dan melatih pola pikir algoritmik terstruktur.",
    tanggal: "Agustus - September 2026",
    linkDokumen: "https://drive.google.com/file/d/1cFWbWKndGXuh0GPMY5uLn9fEI-20wUds/view?usp=sharing"
  },
  video: {
    linkVideo: "https://drive.google.com/file/d/1glRcMieoR8ET3MAD3mfFbim39NLl6FNX/view?usp=sharing",
    deskripsi: "Video rekaman pelaksanaan praktik mengajar mandiri dengan pendekatan sosial emosional dan interaksi aktif.",
    tanggal: "Agustus 2026"
  },
  alasanPemilihan: "Rancangan dan video ini dipilih sebagai produk terbaik UTS karena memiliki alur pembelajaran yang terstruktur, tujuan yang jelas, serta berhasil menciptakan iklim kelas yang aman secara emosional bagi murid saat menghadapi materi logika yang menantang.",
  kekuatan: "Keterkaitan erat antara tujuan pembelajaran, kegiatan unjuk kerja, dan rubrik asesmen autentik UbD. Setiap tahapan pembelajaran membimbing murid secara bertahap (scaffolding).",
  refleksiUTS: "Melalui pelaksanaan produk ini, saya memperoleh pengalaman nyata bahwa keberhasilan mengajar tidak hanya ditentukan oleh kelengkapan administrasi modul, melainkan oleh kepekaan hati guru dalam mendengarkan, memfasilitasi kebutuhan siswa, dan beradaptasi dengan situasi di kelas."
};

export interface PortfolioItem {
  id: string;
  judul: string;
  kategori: "Perangkat Pembelajaran" | "PPT" | "LKPD" | "Modul/Handout" | "Asesmen" | "Proyek" | "Tugas PPG" | "Dokumentasi PPL";
  tanggal: string;
  mataKuliah: string;
  deskripsi: string;
  fileTipe: "PDF" | "DOCX" | "PPTX" | "Video" | "Link";
  fileUrl: string;
}

export const portfolioItems: PortfolioItem[] = [
  // --- KELOMPOK 1: PERANGKAT PEMBELAJARAN (MODUL AJAR & KONTRAK) ---
  {
    id: "port-01",
    judul: "Modul Ajar Berpikir Komputasional Kelas 9 (Kurikulum Merdeka)",
    kategori: "Perangkat Pembelajaran",
    tanggal: "Agustus - September 2026",
    mataKuliah: "PPL Mandiri (SMPN 8 Surabaya)",
    deskripsi: "Modul ajar utama mata pelajaran Informatika materi Berpikir Komputasional kelas 9 SMPN 8 Surabaya. Memuat capaian pembelajaran, alur kegiatan 4 pilar nalar komputasi, dan asesmen autentik.",
    fileTipe: "PDF",
    fileUrl: "https://drive.google.com/file/d/1cFWbWKndGXuh0GPMY5uLn9fEI-20wUds/view?usp=sharing"
  },
  {
    id: "port-02",
    judul: "Modul Ajar Terintegrasi PSE: Berpikir Komputasional (Produk UTS PSE)",
    kategori: "Perangkat Pembelajaran",
    tanggal: "Oktober 2026",
    mataKuliah: "Pembelajaran Sosial Emosional (PSE)",
    deskripsi: "Modul ajar Berpikir Komputasional yang mengintegrasikan 5 Kompetensi Sosial Emosional (KSE CASEL) dan teknik mindfulness (STOP) untuk menciptakan suasana kelas kondusif dan inklusif.",
    fileTipe: "DOCX",
    fileUrl: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    id: "port-03",
    judul: "Kontrak Pembelajaran & Kesepakatan Kelas Informatika Kelas 9",
    kategori: "Perangkat Pembelajaran",
    tanggal: "Agustus 2026",
    mataKuliah: "PPL Mandiri (SMPN 8 Surabaya)",
    deskripsi: "Dokumen kontrak belajar dan kesepakatan tata tertib kelas 9 di SMPN 8 Surabaya untuk membangun budaya belajar positif, disiplin, kolaboratif, dan saling menghargai.",
    fileTipe: "PDF",
    fileUrl: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },

  // --- KELOMPOK 2: MEDIA AJAR & SLIDE PRESENTASI (PPT) ---
  {
    id: "port-04",
    judul: "Slide Media Ajar: Pilar 1 - Dekomposisi Masalah (Kelas 9)",
    kategori: "PPT",
    tanggal: "Agustus 2026",
    mataKuliah: "PPL Mandiri (SMPN 8 Surabaya)",
    deskripsi: "Slide presentasi visual yang komunikatif tentang konsep memecah masalah besar menjadi bagian-bagian kecil (studi kasus kepanitiaan acara dan penguraian aplikasi belanja).",
    fileTipe: "PPTX",
    fileUrl: "https://docs.google.com/presentation/d/1nkGTFyvgGAWASmUOVUI1trOxPQG2UM_untJmbn-q-D0/edit?usp=sharing"
  },
  {
    id: "port-05",
    judul: "Slide Media Ajar: Pilar 2 - Pengenalan Pola Komputasi (Kelas 9)",
    kategori: "PPT",
    tanggal: "September 2026",
    mataKuliah: "PPL Mandiri (SMPN 8 Surabaya)",
    deskripsi: "Slide multimedia interaktif mengenai penemuan pola keteraturan, deret angka logika, dan penerapannya dalam penyelesaian masalah Informatika.",
    fileTipe: "PPTX",
    fileUrl: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    id: "port-06",
    judul: "Slide Media Ajar: Pilar 3 - Abstraksi Informasi Esensial (Kelas 9)",
    kategori: "PPT",
    tanggal: "September 2026",
    mataKuliah: "PPL Mandiri (SMPN 8 Surabaya)",
    deskripsi: "Slide pembelajaran konsep abstraksi dengan analogi visual peta rute transportasi dan teknik pemilahan atribut informasi penting.",
    fileTipe: "PPTX",
    fileUrl: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    id: "port-07",
    judul: "Slide Media Ajar: Pilar 4 - Algoritma & Flowchart (Revisi Final)",
    kategori: "PPT",
    tanggal: "Oktober 2026",
    mataKuliah: "PPL Mandiri (SMPN 8 Surabaya)",
    deskripsi: "Slide materi algoritma dan penyusunan bagan alir (flowchart) menggunakan simbol standar internasional Kurikulum Merdeka.",
    fileTipe: "PPTX",
    fileUrl: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },

  // --- KELOMPOK 3: LEMBAR KERJA PESERTA DIDIK (LKPD) ---
  {
    id: "port-08",
    judul: "LKPD Gabungan Dekomposisi & Pengenalan Pola 9B/9G (Pegangan Guru)",
    kategori: "LKPD",
    tanggal: "September 2026",
    mataKuliah: "PPL Mandiri (SMPN 8 Surabaya)",
    deskripsi: "Lembar Kerja Peserta Didik versi panduan guru lengkap dengan rubrik penskoran, kunci jawaban studi kasus komputasi, dan pedoman fasilitasi kelas.",
    fileTipe: "DOCX",
    fileUrl: "https://docs.google.com/document/d/1Je1IkO3PPQc1PMhccJ_qfaC8JeT6eab2KAdJmZaX-QE/edit?usp=sharing"
  },
  {
    id: "port-09",
    judul: "LKPD Gabungan Dekomposisi & Pengenalan Pola 9B/9G (Lembar Kerja Siswa)",
    kategori: "LKPD",
    tanggal: "September 2026",
    mataKuliah: "PPL Mandiri (SMPN 8 Surabaya)",
    deskripsi: "Lembar kerja peserta didik interaktif untuk aktivitas kerja kelompok di kelas dalam menguraikan masalah dekomposisi dan menemukan pola logika.",
    fileTipe: "DOCX",
    fileUrl: "https://docs.google.com/document/d/1Je1IkO3PPQc1PMhccJ_qfaC8JeT6eab2KAdJmZaX-QE/edit?usp=sharing"
  },

  // --- KELOMPOK 4: ASESMEN & EVALUASI BELAJAR ---
  {
    id: "port-10",
    judul: "Naskah Soal & Kisi-Kisi Ulangan Harian Berpikir Komputasional",
    kategori: "Asesmen",
    tanggal: "Oktober 2026",
    mataKuliah: "PPL Mandiri (SMPN 8 Surabaya)",
    deskripsi: "Paket instrumen asesmen sumatif naskah soal ulangan harian Berpikir Komputasional kelas 9 SMPN 8 Surabaya beserta lembar jawaban singkat dan kisi-kisi.",
    fileTipe: "PDF",
    fileUrl: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    id: "port-11",
    judul: "Rubrik Penilaian Presentasi & Unjuk Kerja Kelompok Kelas 9B/9G",
    kategori: "Asesmen",
    tanggal: "September 2026",
    mataKuliah: "PPL Mandiri (SMPN 8 Surabaya)",
    deskripsi: "Rubrik analitik penilaian pemaparan slide PPT dan unjuk kerja kelompok siswa pada materi Berpikir Komputasional di SMPN 8 Surabaya.",
    fileTipe: "DOCX",
    fileUrl: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    id: "port-12",
    judul: "Rekapitulasi Nilai & Sistem Prestasi Siswa Kelas 9-B & 9-G",
    kategori: "Asesmen",
    tanggal: "Oktober 2026",
    mataKuliah: "PPL Mandiri (SMPN 8 Surabaya)",
    deskripsi: "Berkas spreadsheet rekapitulasi data nilai tugas, partisipasi kelompok, kuis formatif, dan ulangan harian siswa di SMPN 8 Surabaya.",
    fileTipe: "Link",
    fileUrl: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },

  // --- KELOMPOK 5: KARYA INOVASI & PROYEK KEPEMIMPINAN ---
  {
    id: "port-13",
    judul: "Laporan Inovasi Pembelajaran 'Kompulogika' di SMPN 8 Surabaya",
    kategori: "Proyek",
    tanggal: "Oktober 2026",
    mataKuliah: "Seminar PPG / PPL Mandiri",
    deskripsi: "Laporan inovasi pedagogik media komputasi interaktif 'Kompulogika' untuk meningkatkan kemampuan nalar berpikir komputasional peserta didik di SMPN 8 Surabaya.",
    fileTipe: "DOCX",
    fileUrl: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    id: "port-14",
    judul: "Laporan Seminar Diseminasi Inovasi Kompulogika (Semua Kelas)",
    kategori: "Proyek",
    tanggal: "Oktober 2026",
    mataKuliah: "Seminar PPG",
    deskripsi: "Naskah diseminasi seminar hasil implementasi inovasi Kompulogika yang telah dipaparkan dan diujicobakan pada seluruh kelas sasaran di SMPN 8 Surabaya.",
    fileTipe: "DOCX",
    fileUrl: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    id: "port-15",
    judul: "Laporan UAS PSE: School Well-Being & Lingkungan Belajar Positif",
    kategori: "Proyek",
    tanggal: "Oktober 2026",
    mataKuliah: "Pembelajaran Sosial Emosional (PSE)",
    deskripsi: "Laporan akhir mata kuliah Pembelajaran Sosial Emosional (PSE) mengenai strategi menciptakan School Well-Being dan iklim positif bagi murid di sekolah.",
    fileTipe: "DOCX",
    fileUrl: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    id: "port-16",
    judul: "Proposal & Perencanaan Projek Kepemimpinan (UTS PK)",
    kategori: "Proyek",
    tanggal: "September 2026",
    mataKuliah: "Projek Kepemimpinan",
    deskripsi: "Dokumen perencanaan dan proposal aksi nyata pemberdayaan komunitas sasaran berbasis kepemimpinan transformasional di satuan pendidikan.",
    fileTipe: "PDF",
    fileUrl: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },

  // --- KELOMPOK 6: DOKUMENTASI & LEMBAR KERJA PPL ---
  {
    id: "port-17",
    judul: "Lembar Kerja LK-1: Orientasi PPL Mandiri di SMPN 8 Surabaya",
    kategori: "Dokumentasi PPL",
    tanggal: "Juli - Agustus 2026",
    mataKuliah: "PPL Mandiri (SMPN 8 Surabaya)",
    deskripsi: "Laporan orientasi manajemen sekolah mitra, kurikulum operasional satuan pendidikan (KOSP), sarana prasarana lab TIK, dan koordinasi bersama pimpinan sekolah.",
    fileTipe: "PDF",
    fileUrl: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    id: "port-18",
    judul: "Lembar Kerja LK-2: Observasi Karakteristik & Kultur Sekolah (Final TTD)",
    kategori: "Dokumentasi PPL",
    tanggal: "Agustus 2026",
    mataKuliah: "PPL Mandiri (SMPN 8 Surabaya)",
    deskripsi: "Instrumen dan laporan observasi mendalam karakteristik peserta didik, iklim kelas, dan tata kelola sekolah yang telah ditandatangani resmi oleh Guru Pamong.",
    fileTipe: "DOCX",
    fileUrl: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    id: "port-19",
    judul: "Lembar Kerja LK-3: Refleksi Praktik Mengajar Terbimbing PPL Mandiri",
    kategori: "Dokumentasi PPL",
    tanggal: "September 2026",
    mataKuliah: "PPL Mandiri (SMPN 8 Surabaya)",
    deskripsi: "Refleksi komprehensif atas pelaksanaan siklus mengajar, respon psikologis siswa, evaluasi efektivitas metode pembelajaran, dan rencana tindak lanjut.",
    fileTipe: "DOCX",
    fileUrl: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    id: "port-20",
    judul: "Refleksi Diri Mahasiswa PPG - PPL Mandiri SMPN 8 Surabaya",
    kategori: "Dokumentasi PPL",
    tanggal: "Oktober 2026",
    mataKuliah: "PPL Mandiri (SMPN 8 Surabaya)",
    deskripsi: "Dokumen evaluasi diri kritis mahasiswa calon guru mengenai perkembangan kompetensi pedagogik, sosial, kepribadian, dan profesional selama PPL Mandiri.",
    fileTipe: "DOCX",
    fileUrl: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    id: "port-21",
    judul: "Artikel Ilmiah Publikasi PPL Terbimbing di SMAN 15 Surabaya",
    kategori: "Dokumentasi PPL",
    tanggal: "Februari 2026",
    mataKuliah: "PPL Terbimbing (SMAN 15 Surabaya)",
    deskripsi: "Naskah artikel ilmiah publikasi hasil praktik pengalaman lapangan (PPL 1) terbimbing di SMAN 15 Surabaya berfokus pada penguatan pedagogik calon guru.",
    fileTipe: "PDF",
    fileUrl: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },

  // --- KELOMPOK 7: TUGAS AKADEMIK & REFLEKSI PPG ---
  {
    id: "port-22",
    judul: "Kajian Filosofi Pendidikan Indonesia: Refleksi Pemikiran Ki Hadjar Dewantara",
    kategori: "Tugas PPG",
    tanggal: "November 2025",
    mataKuliah: "Filosofi Pendidikan Indonesia",
    deskripsi: "Karya reflektif mendalam mengenai prinsip 'Menuntun Kodrat Alam & Zaman' Ki Hadjar Dewantara sebagai fondasi utama pendidikan yang memerdekakan siswa.",
    fileTipe: "PDF",
    fileUrl: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  }
];

export interface ReflectionItem {
  id: string;
  tanggal: string;
  judul: string;
  kategori: string;
  experience: string;
  fact: string;
  feeling: string;
  finding: string;
  future: string;
  action: string;
}

export const reflectionsData: ReflectionItem[] = [
  {
    id: "ref-1",
    tanggal: "Agustus 2026",
    judul: "Refleksi Mengajar Pertama di Kelas PPL SMPN 8 Surabaya",
    kategori: "Praktik Mengajar",
    experience: "Menyampaikan materi Berpikir Komputasional menggunakan metode unplugged activity kepada siswa kelas 9.",
    fact: "Sebagian siswa tampak sangat antusias ketika bermain peran logika, namun beberapa siswa di barisan belakang sempat kurang fokus karena penjelasan awal saya terlalu cepat.",
    feeling: "Awalnya saya merasa gugup dan cemas apakah instruksi saya dapat dipahami dengan baik, namun perlahan mencair ketika melihat keterlibatan aktif siswa saat simulasi logika berhasil.",
    finding: "Manajemen kelas dan pengaturan tempo bicara sangat menentukan keterlibatan seluruh peserta didik. Aktivitas fisik nyata (unplugged) sangat efektif menjembatani pemahaman konsep komputasi yang abstrak.",
    future: "Pada pertemuan berikutnya, saya perlu merancang teknik ice breaking yang lebih inklusif dan memastikan mobilitas pengajaran saya merata ke seluruh sudut laboratorium.",
    action: "Menyusun ulang skenario pembelajaran dengan jeda interaktif dan asesmen formatif lisan berkala."
  },
  {
    id: "ref-2",
    tanggal: "September 2026",
    judul: "Refleksi Integrasi Pembelajaran Sosial Emosional (PSE)",
    kategori: "Pedagogik",
    experience: "Menerapkan teknik kesadaran diri (mindfulness / STOP) sebelum memulai materi logika algoritma yang menantang.",
    fact: "Murid yang sebelumnya tegang dan cemas menghadapi tantangan tugas menjadi jauh lebih rileks dan berani bertanya saat menjumpai kendala.",
    feeling: "Saya takjub melihat betapa sederhana namun kuatnya pengaruh kesejahteraan emosional terhadap kapasitas kognitif anak.",
    finding: "Kecerdasan akademik dan daya nalar tidak akan optimal jika peserta didik berada dalam tekanan, ketakutan, atau kecemasan yang tinggi di kelas.",
    future: "Saya akan selalu menyempatkan waktu 2-3 menit di awal pelajaran untuk membangun koneksi emosional positif dan kesiapan belajar murid.",
    action: "Memasukkan menu rutin mindfulness dan check-in perasaan di setiap awal modul ajar Informatika."
  },
  {
    id: "ref-3",
    tanggal: "Oktober 2026",
    judul: "Refleksi Pembelajaran Berdiferensiasi & Inklusi",
    kategori: "Inklusi",
    experience: "Mendampingi siswa dengan kecepatan belajar yang beragam pada praktik pemrograman dan analisis data.",
    fact: "Siswa dengan gaya belajar visual dan kinestetik jauh lebih cepat memahami konsep lewat diagram alur interaktif dibandingkan membaca teks modul yang panjang.",
    feeling: "Saya merasa tersentuh melihat rasa percaya diri siswa yang awalnya minder saat berhasil menyelesaikan tantangan bertingkat sesuai kemampuannya.",
    finding: "Keadilan dalam pendidikan bukanlah memberikan perlakuan yang sama rata kepada semua murid, melainkan memberikan dukungan sesuai kebutuhan unik masing-masing anak.",
    future: "Saya berkomitmen terus memperkaya ragam media pembelajaran berbasis UDL agar tidak ada satu anak pun yang merasa tertinggal di kelas saya.",
    action: "Menyusun modul bertingkat (level dasar, menengah, tantangan) serta mengoptimalkan sistem tutor sebaya."
  }
];

export interface GalleryItem {
  id: string;
  judul: string;
  kategori: "PPL" | "Mengajar" | "Kegiatan Sekolah" | "Kegiatan PPG" | "Diskusi" | "Presentasi" | "Dokumentasi Tugas";
  deskripsi: string;
  imageUrl: string;
  linkDrive?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    "id": "gal-smp-1",
    "judul": "Partisipasi Upacara Bendera Hari Senin di SMPN 8 Surabaya",
    "kategori": "Kegiatan Sekolah",
    "deskripsi": "Mahasiswa PPG berbaris khidmat bersama dewan guru dan seluruh peserta didik dalam pelaksanaan Upacara Bendera hari Senin di halaman sekolah SMP Negeri 8 Surabaya.",
    "imageUrl": "images/galeri/smpn8-upacara-bendera-senin.jpg",
    "linkDrive": "https://drive.google.com/drive/folders/15jdJG-jMIXDMqSRh8idgvRfWTYWGDNfG?hl=ID"
  },
  {
    "id": "gal-smp-2",
    "judul": "Pembiasaan Budaya Positif 5S & Salim Menyambut Siswa",
    "kategori": "Kegiatan Sekolah",
    "deskripsi": "Menyambut kedatangan peserta didik di gerbang utama sekolah (Jl. Bunguran) pada pagi hari melalui pembiasaan 5S (Senyum, Salam, Sapa, Sopan, Santun) dan jabat tangan hormat.",
    "imageUrl": "images/galeri/smpn8-budaya-5s-salim.jpg",
    "linkDrive": "https://drive.google.com/drive/folders/15jdJG-jMIXDMqSRh8idgvRfWTYWGDNfG?hl=ID"
  },
  {
    "id": "gal-smp-3",
    "judul": "Pembiasaan Apel Pagi & Senam Kebugaran Bersama Murid",
    "kategori": "Kegiatan Sekolah",
    "deskripsi": "Kegiatan apel pagi terpusat dan senam kesegaran jasmani bersama ratusan murid berseragam putih-biru di lapangan sekolah SMP Negeri 8 Surabaya.",
    "imageUrl": "images/galeri/smpn8-senam-apel-pagi.jpg",
    "linkDrive": "https://drive.google.com/drive/folders/15jdJG-jMIXDMqSRh8idgvRfWTYWGDNfG?hl=ID"
  },
  {
    "id": "gal-smp-4",
    "judul": "Penerimaan & Koordinasi Perdana di SMP Negeri 8 Surabaya",
    "kategori": "PPL",
    "deskripsi": "Pertemuan resmi penyerahan dan penerimaan mahasiswa PPL PPG Prajabatan di ruang pimpinan SMPN 8 Surabaya bersama DPL dan Guru Pamong Pamuji Raharjo, S.Pd.",
    "imageUrl": "images/galeri/smpn8-penerimaan-koordinasi.jpg",
    "linkDrive": "https://drive.google.com/drive/folders/15jdJG-jMIXDMqSRh8idgvRfWTYWGDNfG?hl=ID"
  },
  {
    "id": "gal-smp-5",
    "judul": "Pengerjaan LKPD Berpikir Komputasional oleh Peserta Didik",
    "kategori": "Mengajar",
    "deskripsi": "Peserta didik kelas 9 berkonsentrasi menyelesaikan Lembar Kerja Peserta Didik (LKPD) materi Dekomposisi dan Abstraksi secara mandiri dan tekun.",
    "imageUrl": "images/galeri/smpn8-pembelajaran-lkpd.jpg",
    "linkDrive": "https://drive.google.com/drive/folders/15jdJG-jMIXDMqSRh8idgvRfWTYWGDNfG?hl=ID"
  },
  {
    "id": "gal-smp-6",
    "judul": "Diskusi Kelompok & Pemecahan Kasus Logika Komputasi",
    "kategori": "Presentasi",
    "deskripsi": "Aktivitas belajar kelompok peserta didik berseragam batik khas SMPN 8 dalam mendiskusikan pemecahan masalah logika dan diagram alir (flowchart).",
    "imageUrl": "images/galeri/smpn8-kolaborasi-kelompok.jpg",
    "linkDrive": "https://drive.google.com/drive/folders/15jdJG-jMIXDMqSRh8idgvRfWTYWGDNfG?hl=ID"
  },
  {
    "id": "gal-smp-7",
    "judul": "Pendampingan Pembelajaran Aktif & Refleksi Kelas TIK",
    "kategori": "Mengajar",
    "deskripsi": "Guru membimbing kelompok kerja peserta didik pada jam pelajaran Informatika (TIK) untuk memastikan setiap siswa memahami konsep instruksi tugas.",
    "imageUrl": "images/galeri/smpn8-pendampingan-kelas.jpg",
    "linkDrive": "https://drive.google.com/drive/folders/15jdJG-jMIXDMqSRh8idgvRfWTYWGDNfG?hl=ID"
  },
  {
    "id": "gal-smp-8",
    "judul": "Konsultasi Modul Ajar di Studio Spendela SMPN 8",
    "kategori": "Diskusi",
    "deskripsi": "Koordinasi perangkat ajar dan integrasi LMS digital bersama Guru Pamong di studio/ruang podcast SpEIGHTaculer SMP Negeri 8 Surabaya.",
    "imageUrl": "images/galeri/smpn8-diskusi-pamong-podcast.jpg",
    "linkDrive": "https://drive.google.com/drive/folders/15jdJG-jMIXDMqSRh8idgvRfWTYWGDNfG?hl=ID"
  },
  {
    "id": "gal-sma-1",
    "judul": "Penerimaan & Sambutan Resmi PPL UNESA di SMAN 15 Surabaya",
    "kategori": "PPL",
    "deskripsi": "Sesi penerimaan resmi dan penyerahan mahasiswa PPL oleh Dosen Pembimbing Lapangan PPG UNESA bersama jajaran kepala sekolah dan pimpinan SMAN 15 Surabaya.",
    "imageUrl": "images/galeri/penerimaan-ppl.jpg",
    "linkDrive": "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    "id": "gal-sma-2",
    "judul": "Koordinasi Awal Perangkat Ajar & Arahan Pimpinan Sekolah",
    "kategori": "Diskusi",
    "deskripsi": "Sesi koordinasi mendalam antara mahasiswa PPG dengan pimpinan sekolah dan guru pamong terkait pemetaan jadwal mengajar dan fasilitas laboratorium.",
    "imageUrl": "images/galeri/koordinasi-awal.jpg",
    "linkDrive": "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    "id": "gal-sma-3",
    "judul": "Observasi Lingkungan Pembelajaran & Fasilitas Lab Komputer",
    "kategori": "Kegiatan Sekolah",
    "deskripsi": "Mahasiswa PPG mengobservasi kesiapan sarana prasarana laboratorium komputer, jaringan internet, serta budaya belajar siswa sebelum memulai siklus praktik.",
    "imageUrl": "images/galeri/observasi-lab.jpg",
    "linkDrive": "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    "id": "gal-sma-4",
    "judul": "Praktik Mengajar Nyata di Laboratorium Komputer SMAN 15",
    "kategori": "Mengajar",
    "deskripsi": "Pelaksanaan pembelajaran aktif di laboratorium komputer; guru memberikan penjelasan konsep di papan tulis sementara peserta didik mempraktikkan langsung pada PC masing-masing.",
    "imageUrl": "images/galeri/praktik-mengajar-lab.jpg",
    "linkDrive": "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    "id": "gal-sma-5",
    "judul": "Pendampingan Praktik Komputer & Kolaborasi Pembelajaran Aktif",
    "kategori": "Mengajar",
    "deskripsi": "Suasana kerja kolaboratif dan pendampingan terbimbing di laboratorium komputer SMAN 15 Surabaya menggunakan laptop dan sarana pembelajaran digital sekolah.",
    "imageUrl": "images/galeri/pendampingan-komputasi.jpg",
    "linkDrive": "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    "id": "gal-sma-6",
    "judul": "Supervisi Klinis & Refleksi Berkala Bersama DPL dan Pamong",
    "kategori": "Diskusi",
    "deskripsi": "Pertemuan supervisi klinis dan evaluasi kemajuan pembelajaran di ruang tamu sekolah bersama Dosen Pembimbing Lapangan dan Guru Pamong.",
    "imageUrl": "images/galeri/supervisi-dpl-pamong.jpg",
    "linkDrive": "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    "id": "gal-sma-7",
    "judul": "Penyampaian Laporan & Acara Penarikan Resmi Mahasiswa PPL",
    "kategori": "PPL",
    "deskripsi": "Acara resmi penarikan mahasiswa Praktik Lapangan Persekolahan PPG Prajabatan Informatika UNESA di ruang rapat pimpinan sekolah mitra.",
    "imageUrl": "images/galeri/penarikan-resmi.jpg",
    "linkDrive": "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    "id": "gal-sma-8",
    "judul": "Foto Bersama Mahasiswa PPL, DPL & Guru di Monumen SMAN 15",
    "kategori": "Kegiatan Sekolah",
    "deskripsi": "Momen kenang-kenangan bersama DPL dan perwakilan guru pamong di depan monumen SMAN 15 Surabaya sebagai penutup rangkaian kegiatan PPL yang bermakna.",
    "imageUrl": "images/galeri/foto-bersama-sman15.jpg",
    "linkDrive": "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  }
];
