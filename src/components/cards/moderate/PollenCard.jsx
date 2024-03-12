import RadialChart from "../../charts/RadialChart";
import AreaChart from "../../charts/AreaChart";

// Imporing Icons
import CloudyIcon from "../../../assets/cloudy-icon.svg";
import ClearNightIcon from "../../../assets/clearNight-icon.svg";
import PartlyClouldIcon from "../../../assets/partyCloudy-icon.svg";
import SunnyIcon from "../../../assets/sunny-icon.svg";
import ThunderedIcon from "../../../assets/thunder-icon.svg";
import RainIcon from "../../../assets/rain-icon.svg";
import HeaveRainIcon from "../../../assets/heavyRain-icon.svg";

import CounterOverlay from "../../../assets/counter-overlay.svg";

const PollenCard = ({ cardType }) => {
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
      className={`${cardType} w-full h-[445px] md:h-auto shadow-cardShadow rounded-2xl p-4 flex items-start justify-between gap-6 gap-y-24 lg:flex-row flex-col relative overflow-hidden isolate`}
    >
      {/* Left side */}
      <div className="w-full">
        {/* Title */}
        <h5 className="text-white font-semibold text-xl">Pollen Count</h5>

        {/* graph */}
        <RadialChart />
      </div>

      <div className="w-full bg-white p-3 pb-2 rounded-2xl">
        {/* Icons */}
        <div className="w-full flex items-center justify-between">
          {icons?.map(({ id, source }) => (
            <img
              key={id}
              src={source}
              alt="icon"
              className="invisible opacity-0"
            />
          ))}
        </div>

        {/* Chart */}
        <div className="h-[150px]">
          <AreaChart />
        </div>
      </div>

      {/* Overlay */}
      <img
        src={CounterOverlay}
        alt="overlay"
        className="absolute left-0 top-0 mix-blend-screen -z-10"
      />
    </div>
  );
};

export default PollenCard;
