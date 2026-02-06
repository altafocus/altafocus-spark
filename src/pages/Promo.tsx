import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Gift, Clock, Zap, Star, ChevronRight } from "lucide-react";

const WA_PROMO = (promo: string) =>
  `https://wa.me/628999605666?text=${encodeURIComponent(`Halo AltaFocus, saya tertarik promo "${promo}". Mohon info lebih lanjut.`)}`;

// Countdown target: 30 days from now
const TARGET = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

const useCountdown = () => {
  const calc = () => {
    const diff = Math.max(0, TARGET.getTime() - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
};

const promos = [
  {
    title: "Gratis Instalasi",
    desc: "Nikmati pemasangan gratis untuk semua paket broadband. Berlaku untuk pelanggan baru di area coverage.",
    badge: "Terbatas",
    icon: Zap,
  },
  {
    title: "Coming Soon",
    desc: "Coming Soon.",
    badge: "Hot Deal",
    icon: Star,
  },
  {
    title: "Referral Bonus",
    desc: "Ajak teman berlangganan dan dapatkan potongan tagihan bulan berikutnya. Semakin banyak referral, semakin besar bonusnya.",
    badge: "Ongoing",
    icon: Gift,
  },
];

const Promo = () => {
  const countdown = useCountdown();

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-primary/15 blur-3xl" />
        </div>
        <div className="container-main section-padding pt-24 relative z-10 text-center">
          <AnimatedSection>
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full glass-card text-sm font-semibold text-primary">
              🎉 Promo Spesial
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Promo & <span className="text-gradient">Penawaran</span> Spesial
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              Jangan lewatkan penawaran terbaik dari AltaFocus untuk konektivitas rumah dan bisnis Anda.
            </p>
          </AnimatedSection>

          {/* Countdown */}
          <AnimatedSection delay={0.3}>
            <GlassCard strong className="max-w-lg mx-auto">
              <div className="flex items-center justify-center gap-2 mb-3 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                Promo berakhir dalam
              </div>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { val: countdown.days, label: "Hari" },
                  { val: countdown.hours, label: "Jam" },
                  { val: countdown.minutes, label: "Menit" },
                  { val: countdown.seconds, label: "Detik" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-gradient">{String(item.val).padStart(2, "0")}</div>
                    <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Promo Cards */}
      <section className="gradient-bg section-padding">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-10">Penawaran Aktif</h2>
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {promos.map((promo, i) => (
              <AnimatedSection key={promo.title} delay={i * 0.1}>
                <GlassCard strong className="h-full flex flex-col hover:-translate-y-1 transition-transform duration-300 relative">
                  <span className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                    {promo.badge}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <promo.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{promo.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-1">{promo.desc}</p>
                  <a href={WA_PROMO(promo.title)} target="_blank" rel="noopener noreferrer">
                    <Button variant="hero" size="sm" className="w-full">
                      Klaim Promo <ChevronRight className="w-4 h-4" />
                    </Button>
                  </a>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-main max-w-2xl text-center">
          <AnimatedSection>
            <GlassCard strong className="py-10">
              <h2 className="text-2xl font-bold mb-3">Punya Pertanyaan tentang Promo?</h2>
              <p className="text-muted-foreground mb-6">Hubungi tim kami untuk informasi detail dan syarat & ketentuan promo.</p>
              <a href="https://wa.me/628999605666?text=Halo%20AltaFocus%2C%20saya%20ingin%20bertanya%20tentang%20promo%20yang%20sedang%20berlangsung." target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg">Tanya via WhatsApp</Button>
              </a>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Promo;
