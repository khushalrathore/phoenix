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
              style={{ width: "18px", height: "18px" }} 
            />
          </Button>

          {/* Menu */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-white absolute border border-stone-200 top-8 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {/* Menu links with styling from the first list */}
              {[
                { title: "Log Out", onClick: () => { signOut(); setToggle(false); } },
                { title: "Settings", onClick: () => { navigate('/saved'); setToggle(false); } },
              ].map((nav, index) => (
                <li
                  key={index}
                  className={`font-poppins font-medium cursor-pointer text-[16px] text-black mb-4`}
                  onClick={nav.onClick}
                >
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
