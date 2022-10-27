import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home'; 
import About from './components/about/About'; 
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contactForm/Contact';
import Footer from './components/footer/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <section>
        <Home />
      </section>
      <section>
        <Portfolio />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Contact />
      </section>
      <Footer/>
    </div>
  );
}

export default App;
