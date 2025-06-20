import "./App.css";
import Cta from "./assets/components/cta";
import CustomButton from "./assets/components/customButton";
import Footer from "./assets/components/footer";
import Hero from "./assets/components/hero";
import Navbar from "./assets/components/navbar";
import Prices from "./assets/components/prices";
import Steps from "./assets/components/steps";
import Testemonials from "./assets/components/testo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Hero />
        <Steps />
        <div className="flex justify-center my-12">
          <CustomButton text="Start For Free Today" />
        </div>
        <Prices />
        <Testemonials />

        <Cta />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
