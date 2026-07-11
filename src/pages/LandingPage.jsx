import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import DashboardPreview from "../components/landing/DashboardPreview";
import Stats from "../components/landing/Stats";
import AboutDeveloper from "../components/landing/AboutDeveloper";
import Testimonials from "../components/landing/Testimonials";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

function LandingPage() {
  return (
    <div
      className="
        min-h-screen
        bg-white
        text-slate-900
        scroll-smooth

        dark:bg-slate-950
        dark:text-white
      "
    >
      <Navbar />

      <main>

        <Hero />

        <Features />

        <DashboardPreview />

        <Stats />

        <AboutDeveloper />

        <Testimonials />

        <CTA />

      </main>

      <Footer />

    </div>
  );
}

export default LandingPage;