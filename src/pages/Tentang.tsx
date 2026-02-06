import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import { Target, Eye, CheckCircle2 } from "lucide-react";

const misi = [
  "Menyediakan layanan internet berperforma tinggi melalui infrastruktur terkelola profesional.",
  "Menjaga kualitas jaringan untuk mendukung kebutuhan rumah, gaming, dan bisnis.",
  "Memberikan layanan pelanggan yang responsif dan bertanggung jawab.",
];

const Tentang = () => (
  <Layout>
    <section className="hero-gradient section-padding pt-24">
      <div className="container-main text-center">
        <AnimatedSection>
          <h1 className="text-4xl font-bold mb-3">Tentang Kami</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">Mengenal lebih dekat PT AltaFocus Media Center.</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-main max-w-4xl">
        <AnimatedSection>
          <GlassCard strong className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Tentang AltaFocus</h2>
            <p className="text-muted-foreground leading-relaxed">
              AltaFocus merupakan penyedia layanan internet di wilayah Kota Batu dan sekitarnya yang mengutamakan kualitas jaringan, keandalan layanan, serta dukungan teknis profesional. Kami menyediakan konektivitas yang stabil dan konsisten untuk kebutuhan rumah, gaming, dan bisnis secara berkelanjutan.
            </p>
          </GlassCard>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2">
          <AnimatedSection direction="left">
            <GlassCard strong className="h-full">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-xl font-bold mb-3">Visi</h2>
              <p className="text-muted-foreground leading-relaxed">
                Menjadi penyedia layanan internet yang andal dan terpercaya dengan kualitas jaringan yang konsisten.
              </p>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <GlassCard strong className="h-full">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-xl font-bold mb-3">Misi</h2>
              <ul className="space-y-3">
                {misi.map((m, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  </Layout>
);

export default Tentang;
