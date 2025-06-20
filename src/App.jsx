import "./App.css";
import CustomButton from "./assets/components/customButton";
import Hero from "./assets/components/hero";
import Steps from "./assets/components/steps";
const App = () => {
  return (
    <div className="p-4">
      <Hero />
      <Steps />
      <div className="flex justify-center my-12">
        <CustomButton text="Start For Free Today" />
      </div>
    </div>
  );
};

export default App;
