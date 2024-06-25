import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarMobile from "./components/NavbarMobile";
import Hero from "./components/Hero";
import Header from "./components/Header";
import CardComponent from "./components/CardComponent";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Card from "./components/Card";
import BgImage from "./components/BgImage";
import EssayePart from "./components/EssayePart";
import Confiance from "./components/Confiance";
import Fait from "./components/Fait";
import Testimonial from "./components/Testimonial";
import Patissier from "./components/Patissier";
import AccordionComponent from "./components/Accordion";

function App() {
  return (
    <div className="App  font-Arimo">
      <NavbarMobile />
      <Hero />
      <Header />
      <AccordionComponent />
      <Card />
      <CardComponent />
      <BgImage />
      <EssayePart />
      <Confiance />
      <Fait />
      <Newsletter />
      <Testimonial />
      <Patissier />
      <Footer />
    </div>
  );
}

export default App;
