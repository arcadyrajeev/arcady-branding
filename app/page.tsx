// app/page.tsx

import Footer from "./components/Footer";
import HomeHero from "./components/HomeHero";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import SelectedWorks from "./components/SelectedWorks";
import Values from "./components/Values";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeHero />
      <Values />
      <SelectedWorks />
      <Process />
      <Footer image="/images/footer/footer-default.png" />
    </main>
  );
}
