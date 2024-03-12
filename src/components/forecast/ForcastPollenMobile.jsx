import { Link } from "react-router-dom";

const ForcastPollenMobile = ({ item }) => {
  return (
    <Link to="/forecast-details">
      <div className="w-full py-2 border border-cardBorder shadow-futureShadow rounded-2xl">
        {/* Title */}
        <p className="text-[13px] sm:text-sm md:text-base text-center text-futureDesc">
          {item?.date}
        </p>

        <div className={`w-full h-full`}>
          {/* Icon */}
          <div className="flex items-center justify-center">
            <img src={item?.windImage} alt="wind-icon" />
          </div>

          {/* Temp */}
          <div className="px-1">
            <p className="text-sm text-darkBlack text-center">
              {item?.windValue}
            </p>

            {/* mode */}
            <p className="text-center text-xs text-forecastMode font-smeibold mt-1">
              {item?.windType}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ForcastPollenMobile;
