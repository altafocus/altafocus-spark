import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Home } from "lucide-react";

const NotFound = () => (
  <div className="hero-gradient min-h-screen flex items-center justify-center section-padding">
    <AnimatedSection>
      <div className="text-center">
        <h1 className="text-8xl font-bold text-gradient mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Halaman Tidak Ditemukan</h2>
        <p className="text-muted-foreground mb-8">Maaf, halaman yang Anda cari tidak tersedia.</p>
        <Link to="/">
          <Button variant="hero" size="lg"><Home className="w-4 h-4 mr-2" /> Kembali ke Beranda</Button>
        </Link>
      </div>
    </AnimatedSection>
  </div>
);

export default NotFound;
