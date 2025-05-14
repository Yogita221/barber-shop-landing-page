import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import About from './components/About';
import Gallery from './components/Gallery';


const App = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen ">
       
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <section id="gallery"><Gallery /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    
     
    </>
  );
};

export default App;
