import RiseIcon from "../../assets/raise.svg";
import DownIcon from "../../assets/down.svg";

const DetailsCard = ({ item }) => {
  return (
    <div
      key={item?.id}
      className="p-2 md:p-3 bg-bodyBg rounded-2xl shadow-sm border border-cardBorder flex items-center gap-1 md:gap-3 relative"
    >
      {/* Icon */}
      <div>
        <img src={item?.icon} alt="icon" />
      </div>

      {/* Details */}
      <div>
        <p className="text-xs sm:text-sm md:text-base text-futureDesc">
          {item?.title}
        </p>

        {/* value */}
        <p className="md:mt-1 text-base md:text-2xl font-semibold text-darkBlack">
          {item?.value}
        </p>
      </div>

      {/* variation show */}
      <div className="flex items-center gap-1 absolute md:bottom-3 md:right-3 bottom-2 right-2">
        {item?.variation === true ? (
          <img src={RiseIcon} alt="raise" />
        ) : (
          <img src={DownIcon} alt="fall" />
        )}

        <p className="text-[10px] sm:text-sm md:text-base text-futureDesc leading-none">
          {item?.aditionalValue}
        </p>
      </div>
    </div>
  );
};

export default DetailsCard;
