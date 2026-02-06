import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight } from "lucide-react";

const WA = (pkg: string) => `https://wa.me/628999605666?text=Halo%20AltaFocus%2C%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(pkg)}.`;

const broadband = [
  {
    name: "Home Basic", speed: "10 Mbps", badge: null,
    desc: "Solusi internet kebutuhan dasar rumah",
    suited: "Browsing, media sosial, streaming HD, belajar online",
    features: ["Stabil 1–3 perangkat", "Dukungan teknis profesional"],
  },
  {
    name: "Home Plus", speed: "25 Mbps", badge: "Best Seller",
    desc: "Internet rumah untuk kebutuhan lebih",
    suited: "Streaming Full HD, WFH, video conference",
    features: ["Stabil 4–6 perangkat", "Support tim lokal"],
  },
  {
    name: "Home Max", speed: "50 Mbps", badge: "Recommended",
    desc: "Kecepatan tinggi untuk rumah besar",
    suited: "Streaming 4K, gaming latency rendah, upload intensif",
    features: ["Responsif", "Ideal rumah besar", "Jaringan terkelola profesional"],
    highlight: true,
  },
  {
    name: "Business Pro", speed: "100 Mbps", badge: "For Business",
    desc: "Solusi bisnis profesional",
    suited: "Kantor, UMKM, cloud apps, CCTV online, server ringan",
    features: ["Banyak user", "Opsi IP public/static", "Prioritas support"],
  },
];

const Paket = () => (
  <Layout>
    <section className="hero-gradient section-padding pt-24">
      <div className="container-main text-center">
        <AnimatedSection>
          <h1 className="text-4xl font-bold mb-3">Paket Internet</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">Pilih paket yang sesuai dengan kebutuhan konektivitas Anda.</p>
        </AnimatedSection>
      </div>
    </section>

    {/* Corporate / Dedicated */}
    <section className="section-padding">
      <div className="container-main max-w-3xl">
        <AnimatedSection>
          <GlassCard strong className="text-center py-10">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent mb-4">Enterprise</span>
            <h2 className="text-2xl font-bold mb-2">Paket Corporate / Dedicated</h2>
            <p className="text-muted-foreground mb-2">Solusi konektivitas khusus untuk kebutuhan Enterprise dan Corporate.</p>
            <div className="text-3xl font-bold text-gradient mb-6">Hubungi Kami</div>
            <a href="https://wa.me/628999605666?text=Halo%20AltaFocus%2C%20saya%20tertarik%20dengan%20paket%20Corporate%20%2F%20Dedicated." target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg">Hubungi WhatsApp <ChevronRight className="w-4 h-4" /></Button>
            </a>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>

    {/* Broadband */}
    <section className="gradient-bg section-padding">
      <div className="container-main">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-10">Paket Broadband</h2>
        </AnimatedSection>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {broadband.map((pkg, i) => (
            <AnimatedSection key={pkg.name} delay={i * 0.1}>
              <GlassCard strong className={`h-full flex flex-col hover:-translate-y-1 transition-transform duration-300 relative ${pkg.highlight ? "ring-2 ring-primary/30" : ""}`}>
                {pkg.badge && (
                  <span className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">{pkg.badge}</span>
                )}
                <div className="text-4xl font-bold text-gradient mb-1">{pkg.speed}</div>
                <h3 className="font-semibold text-lg mb-1">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{pkg.desc}</p>
                <p className="text-xs text-muted-foreground mb-4"><strong>Cocok:</strong> {pkg.suited}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href={WA(pkg.name)} target="_blank" rel="noopener noreferrer" className="mt-auto">
                  <Button variant="hero" size="sm" className="w-full">Pilih Paket</Button>
                </a>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Paket;
