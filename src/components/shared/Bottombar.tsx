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
              isActive && "rounded-[18px]  w-20 h-16 bg-alphaDark2 "
            } flex-center flex-col gap-1 p-7 transition`}>
          
  <img
    src={link.imgURL}
    className={` group-hover: ${isActive ? " scale-125" : ""}`}
    style={{ width: "22px", height: "22px" }} 
  />

            <p className="tiny-medium pt-1 text-stone-300">{link.label}</p>
          </Link>
        );
      })}
    </section>
  );
};

export default Bottombar;
