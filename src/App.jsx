import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-primary text-light font-sans">
      {/* Header with navigation */}
      <Header />

      {/* Main content */}
      <main>
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
