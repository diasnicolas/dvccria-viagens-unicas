// src/hooks/useIrParaWhatsApp.js
import { useNavigate } from "react-router-dom";

export function useIrParaWhatsApp() {
  const navigate = useNavigate();

  const irParaWhatsApp = (tipo) => {
    navigate(`/whatsapp?tipo=${tipo}`);
  };

  return irParaWhatsApp;
}