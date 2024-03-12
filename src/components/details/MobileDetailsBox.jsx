import SectionHeading from "../reusables/SectionHeading";
import DetailsCard from "./DetailsCard";

const MobileDetailsBox = ({ title, data }) => {
  return (
    <div className="w-full h-[350px] p-4 bg-navBg shadow-sm rounded-2xl">
      {/* Heading */}
      <SectionHeading desc={"Sunday, February 4, 2024"} title={title} />

      {/* Cards Container */}
      <div className="w-full mt-4 grid grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-2 sm:gap-4">
        {/* Card */}
        {data.map((item) => (
          <DetailsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MobileDetailsBox;
