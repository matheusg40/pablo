import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen font-body">
      {/* Textura de rabisco muito sutil sobre o fundo */}
      <div
        className="bg-texture pointer-events-none fixed inset-0 z-0 opacity-[0.07] mix-blend-screen"
        aria-hidden="true"
      />

      <div className="relative z-10">
        <Header />
        <main className="pt-20">
          <Hero />
        </main>
        <Footer />
      </div>
    </div>
  );
}
