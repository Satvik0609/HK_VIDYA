import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ImpactEducation from "./pages/ImpactEducation";
import ImpactFoodEducation from "./pages/ImpactFoodEducation";
import ImpactCompleteCare from "./pages/ImpactCompleteCare";
import Donate from "./pages/Donate";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import RefundPolicy from "./pages/RefundPolicy";
import TaxBenefits from "./pages/TaxBenefits";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import Gallery from "./pages/Gallery";
import DonateUPI from "./components/donation/DonateUPI";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/tax-benefits" element={<TaxBenefits />} />
          <Route path="/impact/education" element={<ImpactEducation />} />
          <Route path="/impact/food-education" element={<ImpactFoodEducation />} />
          <Route path="/impact/complete-care" element={<ImpactCompleteCare />} />
          <Route path="/donate-upi" element={<DonateUPI />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
