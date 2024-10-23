import "./App.css";
import { NavBar } from "./Components/Navbar";
import HeroSlider from "./Components/HeroSlider";
import StoreLocator from "./Components/StoreLocator";
import { Download } from "./Components/Download";

function App() {
  return (
    <>
      <NavBar />
      <HeroSlider />
      <StoreLocator />
      <Download />
    </>
  );
}

export default App;
