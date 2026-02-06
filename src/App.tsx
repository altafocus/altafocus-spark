import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Paket from "./pages/Paket";
import Promo from "./pages/Promo";
import Tentang from "./pages/Tentang";
import Kontak from "./pages/Kontak";
import Daftar from "./pages/Daftar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Monitoring from "./pages/Monitoring";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/paket" element={<Paket />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/monitoring" element={<Monitoring />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
