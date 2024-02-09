// @ts-ignore
import { headerLogo } from "../assets/images";
// @ts-ignore
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header className="absolute max-container z-10 w-full">
      <nav className="padding-x py-4 flex justify-between items-center">
        <a href="/">
          <img src={headerLogo} alt="" className="" />
        </a>
        <ul className="hidden flex-1 md:flex justify-end items-center gap-16 max ">
          {navLinks.map((link, i) => (
            <a href={link.href} key={i}>
              <li className="text-slate-500">{link.label}</li>
            </a>
          ))}
        </ul>
        <div className="md:hidden">
          <img src={hamburger} alt="hamburger" height={30} width={30} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
