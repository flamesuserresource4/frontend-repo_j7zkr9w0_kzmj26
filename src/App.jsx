import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sections from "./components/Sections";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <Sections />
        {/* Anchor for search results scroll target (can be expanded later) */}
        <div id="search-results" className="sr-only" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
