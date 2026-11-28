// app/page.tsx

import Footer from "./components/Footer";
import HomeHero from "./components/HomeHero";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import SelectedWorks from "./components/SelectedWorks";
import TrustedBySection from "./components/TrustedBySection";
import TrustedSection from "./components/TrustedSection";
import Values from "./components/Values";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeHero />
      <Values />
      <TrustedBySection />
      <SelectedWorks />
      <Process />
      <TrustedSection />
      <Footer image="/images/footer/footer-default.png" />
    </main>
  );
}
