import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <NavLink to="/">
      <nav className="w-full bg-white py-4 px-6 flex items-center gap-6 shadow-navShadow select-none">
        {/* Image */}
        <img src={Logo} alt="site_logo" className="w-[74px]" />

        {/* Texts */}
        <div>
          <p className="text-xl font-semibold text-darkBlack">Carolinensiel</p>
          <p className="text-sm text-lightGray">Sunday, February 4, 2024</p>
        </div>
      </nav>
    </NavLink>
  );
};

export default Navbar;
