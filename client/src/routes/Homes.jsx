

import { CheckIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import notify from "../functions/notify";
export function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleLogout = () => {
    setUser({
      data: null,
      error: null,
      loading: false,
    });
    localStorage.removeItem("token");
    notify({
      success: "Logout Success",
      error: "",
    });
    navigate("/");
  };
  return (
    <>
           <nav className="px-2 py-2.5 md:py-1 bg-zinc-800 fixed w-full z-20 top-0 left-0 border-bborder-gray-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
       
         <Link to="/home" className="flex items-center">
          <img
            src="/img/unnamed.png"
            className="h-6 mr-3 sm:h-9"
            alt="Asset Screener Logo"
          />
          
        </Link>
        <div className="flex md:order-2">
        
        
          <button
            type="button"
            className="inline-flex items-center p-2 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            menuOpen ? "" : "hidden"
          } w-full md:flex md:w-auto md:order-1 lg:pl-16`}
        >
          <ul
            className={`flex flex-col p-4 mt-4 ${
              menuOpen && "mb-2"
            } border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0 bg-zinc-600 md:bg-zinc-800 border-zinc-500`}
          >
            <li>
              <Link
                to="/home"
                onClick={() => setMenuOpen(false)}
                className="block py-2 pl-3 pr-4rounded md:p-0 md:hover:text-white text-gray-200 hover:bg-zinc-700 hover:text-white md:hover:bg-transparent border-gray-700 md:hover:underline hover:underline-offset-8 hover:decoration-emerald-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/watchlist"
                onClick={() => setMenuOpen(false)}
                className="block py-2 pl-3 pr-4rounded md:p-0 md:hover:text-white text-gray-200 hover:bg-zinc-700 hover:text-white md:hover:bg-transparent border-gray-700 md:hover:underline hover:underline-offset-8 hover:decoration-emerald-600"
              >
                Watchlist
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                onClick={() => setMenuOpen(false)}
                className="block py-2 pl-3 pr-4rounded md:p-0 md:hover:text-white text-gray-200 hover:bg-zinc-700 hover:text-white md:hover:bg-transparent border-gray-700 md:hover:underline hover:underline-offset-8 hover:decoration-emerald-600"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/account"
                onClick={() => setMenuOpen(false)}
                className="block py-2 pl-3 pr-4rounded md:p-0 md:hover:text-white text-gray-200 hover:bg-zinc-700 hover:text-white md:hover:bg-transparent border-gray-700 md:hover:underline hover:underline-offset-8 hover:decoration-emerald-600"
              >
                Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      <section id="For-Individuals" className="bg-white">
        <div className="xl:max-w-screen mx-auto mt-2 flex w-full flex-col items-center justify-between px-4 py-10 text-primary md:w-5/6 md:px-0 lg:flex-row lg:py-24">
          <div className="lg:w-55p w-full">
            <div className="mb-3">
              <h2 className="capitlize mb-10 text-base font-medium tracking-wider text-btn-primary">
                For Everyone.
              </h2>
              <h3 className="text-gray-gray9 mb-2 text-3xl font-bold tracking-tight text-[#3D4F90] lg:text-6xl lg:leading-[58px]">
                Come and explore the evolution of cryptocurrencies.
              </h3>
            </div>
            <div className="my-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="border-primaryBorder flex rounded-lg border bg-white p-4">
                <div className="h-12 w-12 text-green-900">
                  <CheckIcon />
                </div>
                <div className="ml-2">
                  <h4 className="text-base font-semibold tracking-normal text-primary">
                    Proof of work
                  </h4>
                  <p className="text-gray text-sm font-normal tracking-normal">
                    Showcase your proof-of-work from different platforms on
                    Peerlist profile.{" "}
                  </p>
                </div>
              </div>
              <div className="border-primaryBorder flex rounded-lg border bg-white p-4">
                <div className="h-12 w-12 text-green-900">
                  <CheckIcon />
                </div>
                <div className="ml-2">
                  <h4 className="text-base font-semibold tracking-normal text-primary">
                    Always up-to-date
                  </h4>
                  <p className="text-gray text-sm font-normal tracking-normal">
                    With integrations, your portfolio is always up-to-date
                  </p>
                </div>
              </div>
              <div className="border-primaryBorder flex rounded-lg border bg-white p-4">
                <div className="h-12 w-12 text-green-900">
                  <CheckIcon />
                </div>
                <div className="ml-2">
                  <h4 className="text-base font-semibold tracking-normal text-primary">
                    Verified Work Experience
                  </h4>
                  <p className="text-gray text-sm font-normal tracking-normal">
                    Improved credibility of your profile with verified work
                    experience!
                  </p>
                </div>
              </div>
              <div className="border-primaryBorder flex rounded-lg border bg-white p-4">
                <div className="h-12 w-12 text-green-900">
                  <CheckIcon />
                </div>
                <div className="ml-2">
                  <h4 className="text-base font-semibold tracking-normal text-primary">
                    Profile Analytics
                  </h4>
                  <p className="text-gray text-sm font-normal tracking-normal">
                    Know who viewed your profile and where people are clicking.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center lg:flex-row">
              <div className="flex justify-center">
              </div>
            </div>
          </div>
          <div className="xl:max-w-screen mx-auto mt-2 flex w-full flex-col items-center justify-between px-4 py-10 text-primary md:w-5/6 md:px-0 lg:flex-row lg:py-24">
            <img
              src="/img/crypto.jpg"
              alt="For Individuals"
              className="mt-5 w-screen lg:order-3 lg:mt-0 lg:w-[400px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
