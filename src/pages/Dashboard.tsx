import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { User, Wifi, Calendar, LogOut } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [session, setSession] = useState<{ username: string } | null>(null);

  useEffect(() => {
    const s = localStorage.getItem("af_session");
    if (!s) { navigate("/login"); return; }
    setSession(JSON.parse(s));
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("af_session");
    navigate("/login");
  };

  if (!session) return null;

  return (
    <Layout>
      <section className="hero-gradient section-padding pt-24">
        <div className="container-main">
          <AnimatedSection>
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <h1 className="text-3xl font-bold">Dashboard Member</h1>
              <Button variant="outline" onClick={logout}><LogOut className="w-4 h-4 mr-2" /> Logout</Button>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection delay={0}>
              <GlassCard strong>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">Informasi Akun</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Username</span><span className="font-medium">{session.username}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">ID Pelanggan</span><span className="font-medium">AF-2025-001</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Status</span><span className="font-medium text-primary">Aktif</span></div>
                </div>
              </GlassCard>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <GlassCard strong>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Wifi className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">Paket Aktif</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Paket</span><span className="font-medium">Home Plus</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Kecepatan</span><span className="font-medium">25 Mbps</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">IP</span><span className="font-medium">Dynamic</span></div>
                </div>
              </GlassCard>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <GlassCard strong>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">Tagihan</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Periode</span><span className="font-medium">Februari 2026</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Jatuh Tempo</span><span className="font-medium">20 Feb 2026</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Status</span><span className="font-medium text-primary">Lunas</span></div>
                </div>
              </GlassCard>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-8 flex gap-4 flex-wrap">
              <Link to="/monitoring"><Button variant="hero">Lihat Monitoring</Button></Link>
              <a href="https://wa.me/628999605666?text=Halo%20AltaFocus%2C%20saya%20ingin%20melaporkan%20gangguan." target="_blank" rel="noopener noreferrer">
                <Button variant="outline">Laporkan Gangguan</Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
