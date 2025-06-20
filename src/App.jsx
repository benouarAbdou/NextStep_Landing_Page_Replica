import "./App.css";
import Cta from "./assets/components/cta";
import CustomButton from "./assets/components/customButton";
import Footer from "./assets/components/footer";
import Hero from "./assets/components/hero";
import Steps from "./assets/components/steps";
const App = () => {
  return (
    <div>
      <Hero />
      <Steps />
      <div className="flex justify-center my-12">
        <CustomButton text="Start For Free Today" />
      </div>
      <Cta />
      <Footer />
    </div>
  );
};

export default App;
