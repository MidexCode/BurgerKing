import "./App.css";
import { NavBar } from "./Components/Navbar";
import HeroSlider from "./Components/HeroSlider";
import StoreLocator from "./Components/StoreLocator";
import { Download } from "./Components/Download";
import { News } from "./Components/News";
import { NewsCard } from "./Components/NewsCard";

function App() {
  return (
    <>
      <NavBar />
      <HeroSlider />
      <StoreLocator />
      <Download />
      <News />
      {/* <NewsCard /> */}
    </>
  );
}

export default App;
