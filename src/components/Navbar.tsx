import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-altafocus.png";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/paket", label: "Paket" },
  { href: "/promo", label: "Promo" },
  { href: "/tentang", label: "Tentang" },
  { href: "/monitoring", label: "Monitoring" },
  { href: "/kontak", label: "Kontak" },
  { href: "/daftar", label: "Daftar" },
  { href: "/login", label: "Login User" },
];

const monitoringSubmenu = [
  { label: "UptimeRobot", href: "https://stats.uptimerobot.com/7JvoJim5Lz" },
  { label: "NMS Monitoring", href: "https://nms.altafocus.id/index.htm" },
  { label: "BGP Graph", href: "https://bgp.he.net/AS150986" },
  { label: "Looking Glass", href: "https://lg.altafocus.id/" },
  { label: "Route Server", href: "https://route.altafocus.id" },
  { label: "PeeringDB", href: "https://www.peeringdb.com/net/33382" },
  { label: "BGP Tools", href: "https://bgp.tools/as/150986" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileMonitoringOpen, setMobileMonitoringOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  useEffect(() => {
    const titleMap: Record<string, string> = {
      "/": "Beranda - AltaFocus",
      "/paket": "Paket - AltaFocus",
      "/promo": "Promo - AltaFocus",
      "/tentang": "Tentang - AltaFocus",
      "/monitoring": "Monitoring - AltaFocus",
      "/kontak": "Kontak - AltaFocus",
      "/daftar": "Daftar - AltaFocus",
      "/login": "Login User - AltaFocus",
    };

    const path = location.pathname || "/";
    document.title = titleMap[path] || "AltaFocus";
  }, [location]);

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
            <li key={link.href} className={link.href === "/monitoring" ? "relative group" : ""}>
              {link.href === "/monitoring" ? (
                <>
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

                  <div className="absolute left-0 top-full mt-2 hidden group-hover:block min-w-[220px] z-50">
                    <div className="glass-card-strong rounded-lg shadow-md py-2">
                      {monitoringSubmenu.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
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
              )}
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
                {link.href === "/monitoring" ? (
                  <>
                    <button
                      onClick={() => setMobileMonitoringOpen((s) => !s)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        location.pathname === link.href ? "bg-primary/10 text-primary" : "text-foreground/70 hover:bg-muted"
                      }`}
                    >
                      {link.label}
                    </button>

                    {mobileMonitoringOpen && (
                      <div className="pl-4">
                        {monitoringSubmenu.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 rounded-lg text-sm text-foreground/80 hover:bg-muted"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
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
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
