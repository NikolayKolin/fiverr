import SectionHeading from "../reusables/SectionHeading";
import DetailsCard from "./DetailsCard";

import windSpeed from "../../assets/wind-speed.svg";
import rainChance from "../../assets/rain-chance.svg";
import cloudiness from "../../assets/cloudiness.svg";
import Humidity from "../../assets/humidity.svg";
import uvIndex from "../../assets/uvIndex.svg";
import lightInt from "../../assets/lightIntensity.svg";
import AirP from "../../assets/airPressure.svg";

import Tree from "../../assets/tree.svg";
import Pecan from "../../assets/pecan.svg";
import Grass from "../../assets/grass.svg";
import Rye from "../../assets/rye.svg";
import Particles from "../../assets/particles.svg";

const DetailsBox = () => {
  // Data
  const weatherDetailsData = [
    {
      id: 1,
      icon: windSpeed,
      title: "Wind Speed",
      value: "12 km/h",
      variation: false,
      aditionalValue: "2 km/h",
    },
    {
      id: 2,
      icon: rainChance,
      title: "Rain Chance",
      value: "24%",
      variation: true,
      aditionalValue: "6%",
    },
    {
      id: 3,
      icon: cloudiness,
      title: "Cloudiness",
      value: "24%",
      variation: false,
      aditionalValue: "5%",
    },
    {
      id: 4,
      icon: Humidity,
      title: "Humidity",
      value: "12%",
      variation: false,
      aditionalValue: "2%",
    },
    {
      id: 5,
      icon: uvIndex,
      title: "UV Index",
      value: "1.3",
      variation: false,
      aditionalValue: "0.3",
    },
    {
      id: 6,
      icon: lightInt,
      title: "Light Intensity",
      value: "1.2",
      variation: true,
      aditionalValue: "0.5",
    },
    {
      id: 7,
      icon: AirP,
      title: "Air Pressure",
      value: "3.7 hpa",
      variation: true,
      aditionalValue: "1.3 hpa",
    },
  ];

  // Pollen Data
  const pollenDetailsData = [
    {
      id: 1,
      icon: Tree,
      title: "Tree",
      value: "Low · 1.2",
      variation: false,
      aditionalValue: "2",
    },
    {
      id: 2,
      icon: Pecan,
      title: "Pecan",
      value: "Low · 1.2",
      variation: true,
      aditionalValue: "6",
    },
    {
      id: 3,
      icon: Grass,
      title: "Grass",
      value: "Low · 1.2",
      variation: false,
      aditionalValue: "5",
    },
    {
      id: 4,
      icon: Rye,
      title: "Perennial rye",
      value: "Low · 1.2",
      variation: false,
      aditionalValue: "2",
    },
    {
      id: 5,
      icon: Particles,
      title: "Inorganic particles",
      value: "Low · 1.2",
      variation: false,
      aditionalValue: "0.3",
    },
  ];

  return (
    <div className="w-full">
      {/* Weather Details For Desktop */}
      <div className="w-full hidden md:flex justify-between gap-6">
        <div className="w-full p-4 bg-navBg shadow-sm rounded-2xl">
          {/* Heading */}
          <SectionHeading
            desc={"Sunday, February 4, 2024"}
            title={"Weather Details"}
          />

          {/* Cards Container */}
          <div className="w-full mt-4 grid grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-2 sm:gap-4">
            {/* Card */}
            {weatherDetailsData.map((item) => (
              <DetailsCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Pollen Details */}
        <div className="w-full p-4 bg-navBg shadow-sm rounded-2xl">
          {/* Heading */}
          <SectionHeading
            desc={"Sunday, February 4, 2024"}
            title={"Pollen Details"}
          />

          {/* Cards Container*/}
          <div className="w-full mt-4 grid grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-4">
            {pollenDetailsData.map((item) => (
              <DetailsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsBox;
