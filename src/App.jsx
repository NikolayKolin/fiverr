import Navbar from "./components/reusables/Navbar";
import Overview from "./components/overview/Overview";
import Forcast from "./components/forecast/Forcast";
import DetailsBox from "./components/details/DetailsBox";
import HomeMobile from "./pages/HomeMobile";

import "swiper/css";
import "swiper/css/pagination";

function App() {
  return (
    <div className="w-full bg-bodyBg min-h-screen pb-3">
      <Navbar />

      {/* Desktop Version */}
      <div className="w-full max-w-customWidth mx-auto p-3 md:p-6 md:block hidden">
        {/* Overview */}
        <Overview />

        {/* Forcast */}
        <Forcast />

        {/* details box */}
        <DetailsBox />
      </div>

      {/* Mobile Version */}
      <HomeMobile />
    </div>
  );
}

export default App;
