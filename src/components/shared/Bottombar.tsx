import { Link, useLocation } from "react-router-dom";

import { bottombarLinks } from "@/constants";

const Bottombar = () => {
  const { pathname } = useLocation();

  return (
    <section className="bottom-bar">
      {bottombarLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <Link
            key={`bottombar-${link.label}`}
            to={link.route}
            className={`${
              isActive && "rounded-[18px]  w-18 h-16 "
            } flex-center flex-col p-7 transition`}>
          
  <img
    src={link.imgURL}
    className={` group-hover: ${isActive ? "" : "invert-white"}`}
    style={{ width: "28px", height: "28px" }} 
  />

            <p className="tiny-medium pt-1 text-stone-300">{link.label}</p>
          </Link>
        );
      })}
    </section>
  );
};

export default Bottombar;
