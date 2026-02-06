import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";

const Kontak = () => (
  <Layout>
    <section className="hero-gradient section-padding pt-24">
      <div className="container-main text-center">
        <AnimatedSection>
          <h1 className="text-4xl font-bold mb-3">Kontak</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">Hubungi kami untuk informasi lebih lanjut.</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-main max-w-4xl">
        <div className="grid gap-6 sm:grid-cols-2">
          <AnimatedSection direction="left">
            <GlassCard strong className="h-full space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Alamat</h3>
                  <p className="text-sm text-muted-foreground">Raya Jurang Susuh No.02, Kel. Giripurno, Kec. Bumiaji, Kota Batu 65333</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">WhatsApp</h3>
                  <a href="https://wa.me/628999605666" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">+62 899 960 5666</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:info@altafocus.id" className="text-sm text-primary hover:underline">info@altafocus.id</a>
                </div>
              </div>
              <div className="flex flex-col gap-3 pt-4">
                <a href="https://wa.me/628999605666?text=Halo%20AltaFocus%2C%20saya%20ingin%20bertanya." target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" className="w-full">Hubungi WhatsApp</Button>
                </a>
                <a href="https://maps.app.goo.gl/L4N36KeGESsUM5dD9" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" /> Buka Google Maps
                  </Button>
                </a>
              </div>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.1!2d112.52!3d-7.84!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTAnMjQuMCJTIDExMsKwMzEnMTIuMCJF!5e0!3m2!1sid!2sid!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi AltaFocus"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  </Layout>
);

export default Kontak;
