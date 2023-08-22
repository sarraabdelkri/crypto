import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../buttons";
import { UserDropdown } from "./user-dropdown";




export function Navbar({ brandName, routes, action }) {
  const [openNav, setOpenNav] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <>
      <div className="fixed left-0 top-0 z-10 w-full bg-white font-inter text-white">
        <div className="xl:max-w-screen md:mx-auto md:w-5/6">
          <div className="relative flex w-full items-center justify-between">
            <div className="flex h-[70px] w-full items-center justify-between py-2 pl-4 lg:max-w-max lg:justify-start  lg:px-0 lg:py-3">
              <a className="flex flex-row py-1 outline-none" href="/">
                <img
                  alt="Peerlist"
                  loading="lazy"
                  width="60"
                  height="30"
                  decoding="async"
                  data-nimg="1"
                  src="/img/unnamed.png"
                />
              </a>
              <div className="text- ml-6 hidden items-center lg:flex">
                <span className="text-gray-gray5 text-base italic">for</span>
                <div className="flex items-center">
                  <div>
                    <a
                      className="border-gray-gray7 mx-5 border-b-2 py-1 text-base font-semibold text-greyed"
                      target="_self"
                      href="#"
                    >
                      cryptocurrency
                    </a>
                  </div>
                  <div>
                    <Link
                      className="from-gray-gray7 to-gray-gray7 mx-5 bg-gradient-to-r bg-[length:0px_2px] bg-left-bottom bg-no-repeat py-1 text-base font-semibold text-greyed transition-[background-size] duration-200 hover:bg-[length:100%_2px]"
                      to="/jobs"
                    >
                      Jobs
                    </Link>
                  </div>
                  <div>
                    <span className="text-gray-gray5 mx-5 text-base">|</span>
                    <a
                      className="from-gray-gray7 to-gray-gray7 mx-5 bg-gradient-to-r bg-[length:0px_2px] bg-left-bottom bg-no-repeat py-1 text-base font-semibold text-greyed transition-[background-size] duration-200 hover:bg-[length:100%_2px]"
                      href="#"
                    >
                      About Us
                    </a>
                  </div>
                  <div>
                    <a
                      className="from-gray-gray7 to-gray-gray7 mx-5 bg-gradient-to-r bg-[length:0px_2px] bg-left-bottom bg-no-repeat py-1 text-base font-semibold text-greyed transition-[background-size] duration-200 hover:bg-[length:100%_2px]"
                      href="#"
                    >
                      Blog
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden items-center gap-4 lg:flex">
           
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="h-[70px]"></div>
    </>
  );
}

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
