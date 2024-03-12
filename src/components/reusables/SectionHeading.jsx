const SectionHeading = ({ title, desc }) => {
  return (
    <div className="flex md:items-center md:flex-row flex-col gap-y-1 gap-4">
      <h2 className="text-xl font-semibold text-darkBlack">{title}</h2>

      <p className="text-sm leading-none text-futureDesc">{desc}</p>
    </div>
  );
};

export default SectionHeading;
