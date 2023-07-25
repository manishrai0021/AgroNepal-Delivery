import React, { useState } from "react";
import {
  FaCartPlus,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaSearch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import Notification from "./Notification";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const [drop, setDrop] = useState(false);
  const [open, setOpen] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  let login = localStorage.getItem("token") ? true : false;
  return (
    <div className="flex justify-between items-center gap-4 bg-black text-white">
      <div className="w-full flex justify-between mx-6 h-16 pt-3 ">
        <div>
          <Link to="/" className={logo ? "hidden text-[30px] font-semibold" : "block text-[30px] font-semibold"}>Deliman</Link>
        </div>
        <ul className="hidden md:flex ">
          <Link to="/">
            <li className="pl-4">Home</li>
          </Link>
          <Link to="/jobs">
            <li className="pl-4">Jobs</li>
          </Link>
          <Link to="/contact">
            <li className="pl-4">Contact</li>
          </Link>
          {/* <li className="pl-4">Textimonial</li> */}
        </ul>
        <div className="flex gap-5">
          {/* <Notification setOpen={setOpen} open={open} /> */}
          {login ? (
            <>
              <img
                id="avatarButton"
                onClick={() => setDrop(!drop)}
                type="button"
                data-dropdown-toggle="userDropdown"
                data-dropdown-placement="bottom-start"
                className="w-10 h-10 rounded-full cursor-pointer hidden md:flex"
                src={
                  localStorage.getItem("avatar")
                    ? localStorage.getItem("avatar")
                    : "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                }
                alt="User dropdown"
              />
            </>
          ) : (
            <div className="hidden gap-3 sm:flex ">
              <button
                className="bg-white text-black h-10 px-6 rounded hover:bg-gray-400 hover:ease-in-out"
                onClick={() => {
                  window.location.href = "/login";
                }}
              >
                Login
              </button>
              <button
                className="bg-white text-black h-10 px-6  rounded hover:bg-gray-400 hover:ease-in-out"
                onClick={() => {
                  window.location.href = "/register";
                }}
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
      <Hamburger/>
    </div>
  );
};

export default Navbar;
