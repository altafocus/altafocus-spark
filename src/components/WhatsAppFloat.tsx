import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/628999605666?text=Halo%20AltaFocus%2C%20saya%20ingin%20bertanya%20tentang%20layanan%20internet."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 btn-whatsapp rounded-full p-4 shadow-2xl hover:scale-110 transition-transform"
    aria-label="Chat WhatsApp"
  >
    <MessageCircle className="w-6 h-6" />
  </a>
);

export default WhatsAppFloat;
