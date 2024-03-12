import TempCard from "../cards/temp/TempCard";
import PollenCard from "../cards/moderate/PollenCard";

const Overview = () => {
  return (
    <>
      <div className="hidden md:flex justify-between gap-6">
        {/* Left (Temp Card) */}
        <TempCard cardType={"day-card"} />

        {/* Right (Moderate Card) */}
        <PollenCard cardType={"pollen-mod"} />
      </div>
    </>
  );
};

export default Overview;
