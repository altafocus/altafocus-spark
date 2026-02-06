import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Wifi, Gamepad2, HeadphonesIcon, Users, Network, Building2, ChevronRight, Star, MapPin, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const WA_LINK = "https://wa.me/628999605666?text=Halo%20AltaFocus%2C%20saya%20ingin%20mendaftar%20layanan%20internet.";

const features = [
  { icon: Wifi, title: "Stabil & Konsisten", desc: "Koneksi internet yang handal minim gangguan." },
  { icon: Gamepad2, title: "Latency Rendah", desc: "Ideal untuk game online dengan ping minimal." },
  { icon: HeadphonesIcon, title: "Support Responsif", desc: "Tim support siap membantu sampai maksimal." },
  { icon: Users, title: "Tim Lokal Profesional", desc: "Dikerjakan dengan teknisi yang profesional pada bidangnya dan berpengalaman." },
  { icon: Network, title: "Jaringan Terkelola", desc: "Menggunakan link terbaik serta termonitor." },
  { icon: Building2, title: "Cocok Untuk Rumah & Bisnis", desc: "Solusi untuk berbagai kebutuhan konektivitas." },
];

const packages = [
  { name: "Home Basic", speed: "10 Mbps", desc: "Browsing, sosial media, streaming HD", badge: null },
  { name: "Home Plus", speed: "25 Mbps", desc: "WFH, video conference, streaming Full HD", badge: "Best Seller" },
  { name: "Home Max", speed: "50 Mbps", desc: "Gaming, streaming 4K, upload intensif", badge: "For Gaming" },
  { name: "Business Pro", speed: "100 Mbps", desc: "Kantor, UMKM, cloud apps, CCTV", badge: "For Business" },
];

const steps = [
  { num: "1", title: "Pilih Paket", desc: "Tentukan paket internet sesuai kebutuhan Anda." },
  { num: "2", title: "Hubungi Kami", desc: "Daftar via WhatsApp atau form pendaftaran online." },
  { num: "3", title: "Terhubung", desc: "Tim kami akan melakukan instalasi di lokasi Anda." },
];

const testimonials = [
  { name: "Ahmad R.", text: "Internet stabil, cocok banget buat WFH. Support-nya juga responsif!", rating: 5 },
  { name: "Siti N.", text: "Anak-anak bisa belajar online tanpa buffering. Terima kasih AltaFocus!", rating: 5 },
  { name: "Budi S.", text: "Ping rendah buat gaming, mantap! Latency konsisten di bawah 10ms.", rating: 5 },
  { name: "Dewi A.", text: "Untuk bisnis kecil kami, koneksi ini sangat membantu operasional harian.", rating: 5 },
];

const faqs = [
  { q: "Dimana saja area coverage AltaFocus?", a: "Saat ini kami melayani wilayah Kota Batu dan sekitarnya." },
  { q: "Berapa lama proses instalasi?", a: "Proses instalasi biasanya selesai dalam 1-3 hari kerja setelah survei lokasi." },
  { q: "Apakah ada biaya instalasi?", a: "Informasi biaya instalasi dapat ditanyakan langsung melalui WhatsApp kami." },
  { q: "Bagaimana jika terjadi gangguan?", a: "Silakan hubungi tim support kami via WhatsApp. Tim teknisi lokal kami siap membantu." },
  { q: "Apakah tersedia IP Public?", a: "Ya, IP Public / Static tersedia untuk paket Business Pro. Hubungi kami untuk detail lebih lanjut." },
];

const Index = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActiveTestimonial((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="container-main section-padding relative z-10 flex flex-col items-center text-center min-h-[80vh] justify-center">
          
          <AnimatedSection delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="text-gradient">Reliable</span>
              <br />
              <span className="text-foreground">Connectivity Solutions</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-6 leading-relaxed">
              Solusi Internet handal dengan kualitas jaringan prima
              
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <div className="flex flex-wrap justify-center gap-8 mt-4 mb-8 text-xl font-semibold text-primary/80">
              <span className="flex items-center gap-1"><Star className="w-4 h-4 text-primary" /> KWB NET </span>
              <span className="flex items-center gap-1"><Star className="w-4 h-4 text-primary" /> SAE NET </span>
              <span className="flex items-center gap-1"><Star className="w-4 h-4 text-primary" /> ASA NET</span>
              <span className="flex items-center gap-1"><Star className="w-4 h-4 text-primary" /> ALTA NET</span>
              <span className="flex items-center gap-1"><Star className="w-4 h-4 text-primary" /> MAC NET</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/daftar">
                <Button variant="hero" size="lg" className="px-8">
                  Daftar Sekarang <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="glass" size="lg" className="px-8">
                  Hubungi WhatsApp
                </Button>
              </a>
            </div>
          </AnimatedSection>
          
        </div>
      </section>

      {/* Features */}
      <section className="gradient-bg section-padding">
        <div className="container-main">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Mengapa Memilih AltaFocus?</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">Keunggulan layanan kami untuk koneksi internet yang stabil & cepat</p>
            </div>
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.1}>
                <GlassCard strong className="h-full hover:-translate-y-1 transition-transform duration-300 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <f.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Preview */}
      <section className="section-padding">
        <div className="container-main">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Paket Internet</h2>
              <p className="text-muted-foreground">Pilih paket sesuai kebutuhan Anda. Harga dan ketersediaan layanan menyesuaikan lokasi pemasangan, Untuk detail paket silakan hubungi Customer Service kami.</p>
            </div>
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg, i) => (
              <AnimatedSection key={pkg.name} delay={i * 0.1}>
                <GlassCard strong className="h-full text-center hover:-translate-y-1 transition-transform duration-300 relative">
                  {pkg.badge && (
                    <span className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                      {pkg.badge}
                    </span>
                  )}
                  <div className="text-4xl font-bold text-gradient mb-1">{pkg.speed}</div>
                  <h3 className="font-semibold text-lg mb-2">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{pkg.desc}</p>
                  <a href={`https://wa.me/628999605666?text=Halo%20AltaFocus%2C%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(pkg.name)}.`} target="_blank" rel="noopener noreferrer">
                    <Button variant="hero" size="sm" className="w-full">
                      Pilih Paket <ChevronRight className="w-4 h-4" />
                    </Button>
                  </a>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.4}>
            <div className="text-center mt-8">
              <Link to="/paket">
                <Button variant="outline" size="lg">Lihat Semua Paket</Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How to Subscribe */}
      <section className="gradient-bg section-padding">
        <div className="container-main">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Cara Berlangganan</h2>
              <p className="text-muted-foreground">Tiga langkah mudah untuk terhubung.</p>
            </div>
          </AnimatedSection>
          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map((s, i) => (
              <AnimatedSection key={s.num} delay={i * 0.15}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold mb-4 shadow-lg">
                    {s.num}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-main">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Apa Kata Pelanggan</h2>
              <p className="text-muted-foreground">Pengalaman pelanggan kami menggunakan layanan AltaFocus.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="max-w-2xl mx-auto">
              <GlassCard strong className="text-center py-10 px-8">
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg text-foreground mb-4 italic">"{testimonials[activeTestimonial].text}"</p>
                <p className="font-semibold text-primary">{testimonials[activeTestimonial].name}</p>
              </GlassCard>
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${i === activeTestimonial ? "bg-primary" : "bg-border"}`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="gradient-bg section-padding">
        <div className="container-main">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Coverage Area</h2>
              <p className="text-muted-foreground">Wilayah layanan AltaFocus di Kota Batu dan sekitarnya.</p>
            </div>
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {["Malang", "Batu", "Coming Soon"].map((area, i) => (
              <AnimatedSection key={area} delay={i * 0.1}>
                <GlassCard className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-medium">{area}</span>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.3}>
            <div className="text-center mt-8">
              <a href="https://wa.me/628999605666?text=Halo%20AltaFocus%2C%20saya%20ingin%20mengecek%20coverage%20area%20di%20lokasi%20saya." target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg">Cek Coverage Lokasi Anda</Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-main max-w-3xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">FAQ</h2>
              <p className="text-muted-foreground">Pertanyaan yang sering ditanyakan.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="glass-card-strong px-6 border-none">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
