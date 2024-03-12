import ForcastWeatherPart from "./ForcastWeatherPart";
import ForcastPollenPart from "./ForcastPollenPart";

const ForcastCard = ({ item }) => {
  return (
    <button>
      <div className="w-full py-2 border border-cardBorder shadow-futureShadow rounded-2xl">
        {/* date */}
        <p className="text-[13px] sm:text-sm md:text-base text-center text-futureDesc">
          {item?.date}
        </p>

        {/* Details For Desktop (Non-Conditional) */}
        <div className="w-full hidden md:flex divide-x-2 divide-navBorder mt-1.5">
          {/* Weather */}
          <ForcastWeatherPart item={item} />

          {/* Pollen */}
          <ForcastPollenPart item={item} />
        </div>
      </div>
    </button>
  );
};

export default ForcastCard;
