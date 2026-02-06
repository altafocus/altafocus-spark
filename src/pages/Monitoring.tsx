import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Activity, Gauge, ArrowUpDown, Calendar, AlertTriangle, Network, ChevronDown } from "lucide-react";

// Dummy chart component
const BandwidthChart = () => {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const data = hours.map(() => 20 + Math.random() * 60);
  const max = Math.max(...data);

  return (
    <div className="flex items-end gap-1 h-40">
      {data.map((v, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1">
          <div
            className="w-full rounded-t-sm bg-primary/60 hover:bg-primary transition-colors min-w-[4px]"
            style={{ height: `${(v / max) * 100}%` }}
            title={`${hours[i]}:00 - ${v.toFixed(0)}%`}
          />
        </div>
      ))}
    </div>
  );
};

const Monitoring = () => {
  const navigate = useNavigate();
  const [ping, setPing] = useState(8);

  useEffect(() => {
    const s = localStorage.getItem("af_session");
    if (!s) { navigate("/login"); return; }
    const interval = setInterval(() => setPing(5 + Math.floor(Math.random() * 10)), 2000);
    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <Layout>
      <section className="hero-gradient section-padding pt-24">
        <div className="container-main">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <h1 className="text-3xl font-bold">Monitoring Jaringan</h1>
              
              {/* Dropdown Menu */}
              <div className="relative w-full sm:w-auto group">
                <button className="w-full sm:w-auto flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary font-medium hover:bg-primary/20 transition-colors duration-200">
                  <Network className="w-4 h-4" />
                  <span>Monitoring Network</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                </button>

                {/* Dropdown Content - Tampil saat hover */}
                <div className="absolute top-full left-0 right-0 sm:left-auto sm:right-0 mt-2 w-full sm:w-56 bg-background border border-primary/20 rounded-xl shadow-lg glass-card-strong p-2 z-50 hidden group-hover:block">
                  <a
                    href="https://nms.altafocus.id/index.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-foreground hover:bg-primary/10 transition-colors duration-200"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-medium">NMS POP</span>
                  </a>
                  <a
                    href="https://stats.uptimerobot.com/7JvoJim5Lz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-foreground hover:bg-primary/10 transition-colors duration-200"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-medium">NMS Global</span>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <AnimatedSection delay={0}>
              <GlassCard strong className="text-center">
                <Activity className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Status Koneksi</p>
                <p className="text-2xl font-bold text-primary mt-1">● Online</p>
              </GlassCard>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <GlassCard strong className="text-center">
                <Gauge className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Ping</p>
                <p className="text-2xl font-bold text-foreground mt-1">{ping} ms</p>
              </GlassCard>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <GlassCard strong className="text-center">
                <ArrowUpDown className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Bandwidth Usage</p>
                <p className="text-2xl font-bold text-foreground mt-1">67%</p>
              </GlassCard>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <GlassCard strong className="text-center">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Jatuh Tempo</p>
                <p className="text-2xl font-bold text-foreground mt-1">20 Feb</p>
              </GlassCard>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.3}>
            <GlassCard strong className="mt-8">
              <h2 className="font-semibold text-lg mb-4">Bandwidth Usage (24 Jam)</h2>
              <BandwidthChart />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>23:00</span>
              </div>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="mt-8">
              <a href="https://wa.me/628999605666?text=Halo%20AltaFocus%2C%20saya%20ingin%20melaporkan%20gangguan%20pada%20koneksi%20saya." target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg">
                  <AlertTriangle className="w-4 h-4 mr-2" /> Laporkan Gangguan
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Monitoring;
