const ForcastWeatherPart = ({ item }) => {
  return (
    <div className="w-full">
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
  );
};

export default ForcastWeatherPart;
