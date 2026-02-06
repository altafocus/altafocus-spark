import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { MapPin, Loader2 } from "lucide-react";

const pakets = ["Home Basic – 10 Mbps", "Home Plus – 25 Mbps", "Home Max – 50 Mbps", "Business Pro – 100 Mbps", "Corporate / Dedicated"];

const Daftar = () => {
  const [form, setForm] = useState({
    nama: "", whatsapp: "", alamat: "", maps: "", paket: "", catatan: "",
  });
  const [gpsLoading, setGpsLoading] = useState(false);

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("Browser Anda tidak mendukung GPS.");
      return;
    }
    setGpsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const mapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
        setForm(p => ({ ...p, maps: mapsLink }));
        setGpsLoading(false);
      },
      () => {
        alert("Gagal mendapatkan lokasi. Pastikan izin GPS aktif.");
        setGpsLoading(false);
      },
      { enableHighAccuracy: true }
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Halo AltaFocus, saya ingin mendaftar layanan internet.\n\nNama: ${form.nama}\nWhatsApp: ${form.whatsapp}\nAlamat: ${form.alamat}\nLink Maps: ${form.maps}\nPaket: ${form.paket}\nCatatan: ${form.catatan || "-"}`;
    window.open(`https://wa.me/628999605666?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <Layout>
      <section className="hero-gradient section-padding pt-24">
        <div className="container-main text-center">
          <AnimatedSection>
            <h1 className="text-4xl font-bold mb-3">Form Pendaftaran</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">Isi form berikut untuk mendaftar layanan internet AltaFocus.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main max-w-2xl">
          <AnimatedSection>
            <GlassCard strong>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="nama">Nama Lengkap</Label>
                  <Input id="nama" required value={form.nama} onChange={e => setForm(p => ({ ...p, nama: e.target.value }))} placeholder="Nama lengkap Anda" />
                </div>
                <div>
                  <Label htmlFor="wa">Nomor WhatsApp</Label>
                  <Input id="wa" required value={form.whatsapp} onChange={e => setForm(p => ({ ...p, whatsapp: e.target.value }))} placeholder="08xxxxxxxxxx" />
                </div>
                <div>
                  <Label htmlFor="alamat">Alamat Pemasangan</Label>
                  <Textarea id="alamat" required value={form.alamat} onChange={e => setForm(p => ({ ...p, alamat: e.target.value }))} placeholder="Alamat lengkap lokasi pemasangan" />
                </div>
                <div>
                  <Label htmlFor="maps">Link Google Maps Lokasi</Label>
                  <div className="flex gap-2">
                    <Input id="maps" value={form.maps} onChange={e => setForm(p => ({ ...p, maps: e.target.value }))} placeholder="https://maps.app.goo.gl/..." className="flex-1" />
                    <Button type="button" variant="outline" onClick={handleGetLocation} disabled={gpsLoading} className="shrink-0">
                      {gpsLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <MapPin className="w-4 h-4" />}
                      <span className="hidden sm:inline">{gpsLoading ? "Mencari..." : "Lokasi GPS"}</span>
                    </Button>
                  </div>
                </div>
                <div>
                  <Label>Pilih Paket</Label>
                  <Select onValueChange={v => setForm(p => ({ ...p, paket: v }))}>
                    <SelectTrigger><SelectValue placeholder="Pilih paket internet" /></SelectTrigger>
                    <SelectContent>
                      {pakets.map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="catatan">Catatan Tambahan</Label>
                  <Textarea id="catatan" value={form.catatan} onChange={e => setForm(p => ({ ...p, catatan: e.target.value }))} placeholder="Catatan tambahan (opsional)" />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Kirim via WhatsApp
                </Button>
              </form>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Daftar;
