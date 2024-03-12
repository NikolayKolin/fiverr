import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TempCard from "../components/cards/temp/TempCard";
import PollenCard from "../components/cards/moderate/PollenCard";
import ForcastWeatherSlider from "../components/forecast/ForcastWeatherSlider";
import ForcastPollenSlider from "../components/forecast/ForcastPollenSlider";
import MobileDetailsBox from "../components/details/MobileDetailsBox";

import windSpeed from "../assets/wind-speed.svg";
import rainChance from "../assets/rain-chance.svg";
import cloudiness from "../assets/cloudiness.svg";
import Humidity from "../assets/humidity.svg";
import uvIndex from "../assets/uvIndex.svg";
import lightInt from "../assets/lightIntensity.svg";
import AirP from "../assets/airPressure.svg";

import Tree from "../assets/tree.svg";
import Pecan from "../assets/pecan.svg";
import Grass from "../assets/grass.svg";
import Rye from "../assets/rye.svg";
import Particles from "../assets/particles.svg";

const HomeMobile = () => {
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
    <div className="block md:hidden">
      <Swiper
        className="mySwiperTwo pb-8"
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
      >
        {/* Left */}
        <SwiperSlide className="p-4">
          <div className="w-full pb-7">
            <TempCard cardType={"day-card"} />
          </div>

          {/* Forcast Section */}
          <ForcastWeatherSlider />

          {/* Weather Details For Mobile */}
          <MobileDetailsBox
            data={weatherDetailsData}
            title={"Weather Details"}
          />
        </SwiperSlide>

        {/* Right (Moderate Card) */}
        <SwiperSlide className="p-4">
          <div className="w-full pb-7">
            <PollenCard cardType={"pollen-mod"} />
          </div>

          {/* Forecast  */}
          <ForcastPollenSlider />

          {/* Pollen Details */}
          <MobileDetailsBox data={pollenDetailsData} title={"Pollen Details"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeMobile;
