import { Link } from "react-router-dom";

const ForcastWeatherMobile = ({ item }) => {
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
            <img src={item?.weatherImg} alt={item?.type} />
          </div>

          <div className="px-1">
            {/* Temp */}
            <p className="text-sm text-darkBlack text-center">{item?.temp}</p>

            {/* mode */}
            <p className="text-center text-[11px] text-forecastMode font-smeibold mt-1">
              {item?.type}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ForcastWeatherMobile;
