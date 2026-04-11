import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SkillsPage from "./pages/SkillsPage";
import ExperiencePage from "./pages/ExperiencePage";
import ContactPage from "./pages/ContactPage";
import AllProjectsPage from "./pages/AllProjectsPage";
import ChatWidget from "@/components/ChatWidget";
import CustomCursor from "@/components/CustomCursor";
import { initFlipSoundUnlock } from "@/lib/flipSound";
import InitialLoader from "@/components/InitialLoader";
import { EntrancesReadyProvider } from "@/context/EntrancesReadyContext";

const queryClient = new QueryClient();

/** Initial splash duration before hero/nav entrances (exit fade adds ~0.4s). */
const SPLASH_MS = 1200;

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    initFlipSoundUnlock();
  }, []);

  useEffect(() => {
    const id = window.setTimeout(() => setShowSplash(false), SPLASH_MS);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (showSplash) {
      const prev = root.style.overflow;
      root.style.overflow = "hidden";
      return () => {
        root.style.overflow = prev;
      };
    }
    root.style.overflow = "";
  }, [showSplash]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AnimatePresence>{showSplash && <InitialLoader key="initial-splash" />}</AnimatePresence>
        <CustomCursor />
        <Toaster />
        <Sonner />
        <EntrancesReadyProvider value={!showSplash}>
          <BrowserRouter basename={import.meta.env.PROD ? "/karuna-portfolio" : "/"}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/projects" element={<AllProjectsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ChatWidget />
          </BrowserRouter>
        </EntrancesReadyProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
