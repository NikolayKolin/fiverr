import Navbar from "../components/reusables/Navbar";

const ForcastDetails = () => {
  return (
    <div className="w-full bg-bodyBg min-h-screen pb-3">
      <Navbar />

      <div className="w-full max-w-customWidth mx-auto p-3 md:p-6">
        <h2 className="text-2xl">Details Page</h2>
      </div>
    </div>
  );
};

export default ForcastDetails;
