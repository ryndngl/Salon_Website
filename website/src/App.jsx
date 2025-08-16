import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import ContactFooter from './components/ContactFooter'
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Gallery />
      <About />
      <ContactFooter />
    </div> 
  );
}

export default App;