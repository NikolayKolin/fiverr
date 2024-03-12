const ForcastPollenPart = ({ item }) => {
  return (
    <div className="w-full">
      {/* Icon */}
      <div className="flex items-center justify-center">
        <img src={item?.windImage} alt="wind-icon" />
      </div>

      {/* Temp */}
      <div className="px-1">
        <p className="text-sm text-darkBlack text-center">{item?.windValue}</p>

        {/* mode */}
        <p className="text-center text-xs text-forecastMode font-smeibold mt-1">
          {item?.windType}
        </p>
      </div>
    </div>
  );
};

export default ForcastPollenPart;
