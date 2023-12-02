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
              isActive && "w-18 h-16 "
            } flex-center flex-col p-4 transition`}>
          
  <img
  src={isActive ? link.imgURLF : link.imgURL}
      className={` group-hover: ${isActive ? "scale-125" : " scale-110"}`}
    style={{ width: "48px", height: "27px" }} 
  />

<p className={`pt-2 base-medium text-black`} style={{ fontWeight: isActive ? 'bold' : '500' }}>
    {link.label}
  </p>
          </Link>
        );
      })}
    </section>
  );
};

export default Bottombar;
