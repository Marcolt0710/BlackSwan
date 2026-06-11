import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Sobre from "./components/Sobre";
import Processo from "./components/Processo";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      {/* Immersive Preloading Overlay Screen */}
      <Loader />

      {/* Core Landing Page Content wrapper with ambient Noise Overlay */}
      <div className="bg-black min-h-screen text-off-white relative bg-noise selection:bg-gold/20 select-none">
        
        {/* Floating Headers and menus */}
        <Navbar />

        {/* Hero split landing section */}
        <Hero />

        {/* Manifesto block */}
        <Manifesto />

        {/* Overviews and 3x3 graphic layout */}
        <Sobre />

        {/* 4-Stage artisanal timeline steps */}
        <Processo />

        {/* Contact direct invitation */}
        <Contato />

        {/* Minimalistic footer */}
        <Footer />
        
      </div>
    </>
  );
}
