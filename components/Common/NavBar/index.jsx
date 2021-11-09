import NavLink from "./NavLink";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import MetaMaskButton from "../MetaMaskButton";

function NavBar({ transparentNavBar, triedToEagerConnect }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <nav
      className={
        transparentNavBar
          ? "bg-black md:bg-opacity-30 fixed w-screen z-50"
          : "bg-white shadow-lg fixed w-screen z-50"
      }
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-row relative justify-between">
          <div>
            <Link href="/" passHref={true}>
              <a className="flex items-center py-4">
                <img
                  alt="Logo"
                  height="32px"
                  layout="fixed"
                  src="/android-chrome-192x192.png"
                  width="32px"
                />
                <span
                  className={
                    transparentNavBar
                      ? "font-semibold ml-2 text-gray-300 text-lg"
                      : "font-semibold ml-2 text-gray-500 text-lg"
                  }
                >
                  NuBloom
                </span>
              </a>
            </Link>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="nav-primary hidden md:flex items-center space-x-1 text-xl text-gray-500 font-semibold">
              <NavLink href="/">
                <a
                  className={
                    transparentNavBar
                      ? "py-4 px-2 border-b-transparent text-white hover:text-green-500 transition duration-300"
                      : "py-4 px-2 border-b-4 border-white hover:text-green-500 transition duration-300"
                  }
                >
                  About
                </a>
              </NavLink>
              {/* <NavLink href="/mint">
                <a
                  className={
                    transparentNavBar
                      ? "py-4 px-2 border-b-transparent text-white hover:text-green-500 transition duration-300"
                      : "py-4 px-2 border-b-4 border-white hover:text-green-500 transition duration-300"
                  }
                >
                  Mint!
                </a>
                </NavLink> */}
              <NavLink href="/garden">
                <a
                  className={
                    transparentNavBar
                      ? "py-4 px-2 border-b-transparent text-white hover:text-green-500 transition duration-300"
                      : "py-4 px-2 border-b-4 border-white hover:text-green-500 transition duration-300"
                  }
                >
                  Garden
                </a>
              </NavLink>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-end">
            <MetaMaskButton triedToEagerConnect={triedToEagerConnect} />
          </div>
          <div
            className="md:hidden flex items-center"
            onClick={toggleMobileMenu}
          >
            <button
              className="outline-none mobile-menu-button"
              aria-label="Mobile menu"
            >
              <svg
                className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuVisible && <MobileMenu />}
    </nav>
  );
}

export default NavBar;
