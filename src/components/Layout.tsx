import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";
import PageTransition from "./PageTransition";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <PageTransition>
      <main className="flex-1 pt-16">{children}</main>
    </PageTransition>
    <Footer />
    <WhatsAppFloat />
  </div>
);

export default Layout;
