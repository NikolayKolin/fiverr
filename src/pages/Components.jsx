import PollenCard from "../components/cards/moderate/PollenCard";
import TempCard from "../components/cards/temp/TempCard";
import Navbar from "../components/reusables/Navbar";
import SectionHeading from "../components/reusables/SectionHeading";

const Components = () => {
  return (
    <div className="w-full bg-bodyBg min-h-screen">
      <Navbar />

      <div className="w-full max-w-customWidth mx-auto p-3 md:p-6">
        <div>
          <SectionHeading title={"Pollen Cards"} />

          <div className="grid grid-cols-2 gap-6 mt-6">
            <PollenCard cardType={"pollen-low"} />
            <PollenCard cardType={"pollen-mod"} />
            <PollenCard cardType={"pollen-high"} />
          </div>
        </div>

        {/* Temp Cards */}
        <div className="mt-10">
          <SectionHeading title={"Temperature Cards"} />

          <div className="grid grid-cols-2 gap-6 mt-6">
            <TempCard cardType={"day-card"} />
            <TempCard cardType={"night-card"} />
            <TempCard cardType={"mix-weather-card"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Components;
