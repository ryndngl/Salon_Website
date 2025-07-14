import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div> 
  );
}

export default App;