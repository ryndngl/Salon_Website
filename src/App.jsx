import Navbar from './components/Navbar';  // Add this line
import Home from './components/Home';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import ContactFooter from './components/ContactFooter';
import MobileAppPreview from './components/MobileAppPreview';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Gallery />
      <About />
      <MobileAppPreview />
      <ContactFooter />
    </div>
  );
}

export default App;