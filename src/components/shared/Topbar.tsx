import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useSignOutAccount } from "@/lib/react-query/queries";

const Greeting = () => {
  const [timeOfDay, setTimeOfDay] = useState('');

  useEffect(() => {
    const getCurrentTime = () => {
      const currentHour = new Date().getHours();

      if (currentHour >= 5 && currentHour < 12) {
        setTimeOfDay('Morning');
      } else if (currentHour >= 12 && currentHour < 17) {
        setTimeOfDay('Afternoon');
      } else {
        setTimeOfDay('Evening');
      }
    };

    getCurrentTime();
  }, []); // Empty dependency array ensures that this effect runs once on mount

  return <p className="greeting">Good {timeOfDay}</p>;
};
// ... (previous imports)

const Topbar = () => {
  const navigate = useNavigate();
  const { mutate: signOut, isSuccess } = useSignOutAccount();

  const [toggle, setToggle] = useState(false);
  const [menuIcon, setMenuIcon] = useState("/assets/icons/Menu.png");

  const toggleMenu = () => {
    setToggle(!toggle);
    // Change the image source on tap
    setMenuIcon((prevIcon) =>
      prevIcon === "/assets/icons/Menu.png"
        ? "/assets/icons/MenuF.png"
        : "/assets/icons/Menu.png"
    );
  };

  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [isSuccess]);

  const menuItems = [
    { title: "Log Out", iconPath: "public/assets/icons/logOut.png", onClick: signOut },
    { title: "Settings", iconPath: "public/assets/icons/settings.png"},
  ];
  return (
    <section className="topbar">
      <div className="flex-between pt-2 px-5">
        <Link to="/" className="flex gap-3 items-center" onClick={() => setToggle(false)}>
          <Greeting />
        </Link>

        <div className="flex gap-4 relative">
          <Button
            variant="ghost"
            className="shad-button_ghost"
            onClick={toggleMenu}
          >
            <img 
              src={menuIcon} 
              style={{ width: "35px", height: "35px" }} 
            />
          </Button>

          {/* Menu */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } bg-white absolute border border-stone-200 top-8 right-0 mx-4 my-2 min-w-[100px] h-[90px] pl-5 pb-1 rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {menuItems.map((nav, index) => (
                <li
                  key={index}
                  className={`font-poppins font-normal cursor-pointer text-[10px] text-black mb-4 flex items-center`}
                >
                  <img
                    src={nav.iconPath}
                    alt={`${nav.title} Icon`}
                    style={{ width: "12px", height: "12px", marginRight: "8px"}}
                  />
                  {nav.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
