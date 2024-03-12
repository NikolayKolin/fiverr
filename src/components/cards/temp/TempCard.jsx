// Imporing Icons
import CloudyIcon from "../../../assets/cloudy-icon.svg";
import ClearNightIcon from "../../../assets/clearNight-icon.svg";
import PartlyClouldIcon from "../../../assets/partyCloudy-icon.svg";
import SunnyIcon from "../../../assets/sunny-icon.svg";
import ThunderedIcon from "../../../assets/thunder-icon.svg";
import RainIcon from "../../../assets/rain-icon.svg";
import HeaveRainIcon from "../../../assets/heavyRain-icon.svg";

import DayOverlay from "../../../assets/day-card-overlay.svg";
import NightOverlay from "../../../assets/night-overlay.svg";
import MixOverlay from "../../../assets/mix-overlay.svg";
import SunnyImage from "../../../assets/card-sunny.svg";
import AreaChart from "../../charts/AreaChart";

const TempCard = ({ cardType }) => {
  // icons array
  const icons = [
    {
      id: 1,
      source: CloudyIcon,
    },
    {
      id: 2,
      source: CloudyIcon,
    },
    {
      id: 3,
      source: ClearNightIcon,
    },
    {
      id: 4,
      source: PartlyClouldIcon,
    },
    {
      id: 5,
      source: CloudyIcon,
    },
    {
      id: 6,
      source: SunnyIcon,
    },
    {
      id: 7,
      source: PartlyClouldIcon,
    },
    {
      id: 8,
      source: RainIcon,
    },
    {
      id: 9,
      source: HeaveRainIcon,
    },
    {
      id: 10,
      source: ThunderedIcon,
    },
    {
      id: 11,
      source: ThunderedIcon,
    },
    {
      id: 12,
      source: CloudyIcon,
    },
  ];

  return (
    <div
      className={`${cardType} w-full h-[445px] md:h-auto shadow-cardShadow rounded-2xl p-4 flex items-center justify-between gap-6 lg:flex-row flex-col relative isolate`}
    >
      {/* left */}
      <div className="w-full">
        {/* Title */}
        <h5 className="text-white font-semibold text-xl">Temperature</h5>

        <div className="flex items-end justify-end gap-24 md:gap-[60px]">
          {/* Image and temp*/}
          <div>
            {/* Image */}
            <img src={SunnyImage} alt="weather-img" />

            {/* temp data */}
            <h3 className="text-4xl text-white font-semibold text-center">
              14°C
            </h3>
            <p className="text-base text-white font-semibold text-center">
              Sunny
            </p>
          </div>

          {/* Additonal */}
          <div>
            <p className="text-[15px] text-white font-semibold text-center">
              H: 18°C
            </p>

            <p className="text-[15px] text-white font-semibold text-center mt-1.5">
              L: 7°C
            </p>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="w-full bg-white p-3 pb-2 rounded-2xl">
        {/* Icons */}
        <div className="w-full flex items-center justify-between">
          {icons?.map(({ id, source }) => (
            <img key={id} src={source} alt="icon" />
          ))}
        </div>

        {/* Chart */}
        <div className="h-[150px]">
          <AreaChart />
        </div>
      </div>

      {/* Overlay */}
      <img
        src={
          cardType === "day-card"
            ? DayOverlay
            : cardType === "night-card"
            ? NightOverlay
            : cardType === "mix-weather-card"
            ? MixOverlay
            : null
        }
        alt="overlay"
        className="absolute left-0 top-0 -z-10"
      />
    </div>
  );
};

export default TempCard;
