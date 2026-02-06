import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-altafocus.png";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/paket", label: "Paket" },
  { href: "/promo", label: "Promo" },
  { href: "/tentang", label: "Tentang" },
  { href: "/kontak", label: "Kontak" },
  { href: "/daftar", label: "Daftar" },
  { href: "/login", label: "Member" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card-strong shadow-md py-2" : "py-4 bg-transparent"
      }`}
    >
      <nav className="container-main flex items-center justify-between px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="AltaFocus Media Center" className="h-8 sm:h-10" />
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-card-strong mx-4 mt-2 rounded-xl p-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/70 hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
