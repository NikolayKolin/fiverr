import SectionHeading from "../reusables/SectionHeading";
import ForcastSlider from "./ForcastSlider";

const Forcast = () => {
  return (
    <div className="w-full bg-navBg shadow-futureShadow p-4 rounded-2xl my-3 md:my-6">
      {/* Header */}
      <SectionHeading
        title={"Future Forecast"}
        desc={"Click on a daily card to see detailed forecasts."}
      />

      {/* Cards Container */}
      <div className="mt-4 w-full">
        {/* Single Forecast Card */}
        <ForcastSlider />
      </div>
    </div>
  );
};

export default Forcast;
