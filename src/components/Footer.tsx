import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo-altafocus.png";

const Footer = () => (
  <footer className="gradient-bg border-t border-border/50">
    <div className="container-main section-padding">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <img src={logo} alt="AltaFocus" className="h-10 mb-4" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Reliable Connectivity Solutions – Konektivitas stabil untuk rumah, gaming, dan bisnis di Kota Batu.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="https://www.facebook.com/altafocusmediacenter" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg glass-card hover:bg-primary/10 transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/altafocus.media.center" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg glass-card hover:bg-primary/10 transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://www.tiktok.com/@altafocusmediacenter" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg glass-card hover:bg-primary/10 transition-colors" aria-label="TikTok">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.92 2.92 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.57 6.33 6.33 0 0 0 9.37 22a6.33 6.33 0 0 0 6.36-6.22V8.72a8.16 8.16 0 0 0 3.86.96V6.69Z"/></svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-4 text-foreground">Navigasi</h3>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Beranda" },
              { to: "/paket", label: "Paket Internet" },
              { to: "/tentang", label: "Tentang Kami" },
              { to: "/kontak", label: "Kontak" },
              { to: "/daftar", label: "Daftar" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Brand Network */}
        <div>
          <h3 className="font-semibold mb-4 text-foreground">Brand Jaringan</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>SAE Net</li>
            <li>KWB Net</li>
            <li>ASA Net</li>
            <li>MAC Net</li>
            <li>Alta Net</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-foreground">Kontak</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2 items-start">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
              Raya Jurang Susuh No.02, Kel. Giripurno, Kec. Bumiaji, Kota Batu 65333
            </li>
            <li className="flex gap-2 items-center">
              <Phone className="w-4 h-4 shrink-0 text-primary" />
              <a href="https://wa.me/628999605666" className="hover:text-primary transition-colors">+62 899 960 5666</a>
            </li>
            <li className="flex gap-2 items-center">
              <Mail className="w-4 h-4 shrink-0 text-primary" />
              <a href="mailto:info@altafocus.id" className="hover:text-primary transition-colors">info@altafocus.id</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border/50 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} PT AltaFocus Media Center. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
