import React,{ useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Hamburger = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const [drop, setDrop] = useState(false);
  const [open, setOpen] = useState(false);
  let login = localStorage.getItem("token") ? true : false;

  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };
  return (
    <>
      <div onClick={handleNav} className="md:hidden z-50">
        {nav ? (
          <AiOutlineClose
            className="text-white bg-white"
            color="white"
            size={20}
          />
        ) : (
          <div>
            <AiOutlineMenu size={30} className="pt-2" />
          </div>
        )}
      </div>
      {drop && (
        <div className="flex justify-end absolute">
          <div
            id="userDropdown"
            className="z-10   bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          >
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div>{localStorage.getItem("name")}</div>
            </div>
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="avatarButton"
            >
              <Link to="/profile">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    My Profile
                  </a>
                </li>
              </Link>
            </ul>
            <div className="py-1">
              <button onClick={() => localStorage.clear()}>
                <a
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              </button>
            </div>
          </div>
        </div>
      )}

      {open && (
        <div class="max-w-lg mx-auto items-center h-screen">
          <div class="flex justify-between px-3 py-1 bg-white items-center gap-1 rounded-lg border border-gray-100 my-3">
            <div class="relative w-16 h-16 rounded-full hover:bg-red-700 bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gray-200 rounded-full border-2 border-white">
                <img
                  class="w-full h-full object-cover rounded-full"
                  src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <span class="font-mono text-black">
                Emma would like to connect with you
              </span>
            </div>
            <div class="flex gap-2">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div class="flex justify-between px-3 py-1 bg-white items-center gap-1 rounded-lg border border-gray-100 my-3">
            <div class="relative w-16 h-16 rounded-full hover:bg-red-700 bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gray-200 rounded-full border-2 border-white">
                <img
                  class="w-full h-full object-cover rounded-full"
                  src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </div>
            </div>
            <div>
              <span class="font-mono text-black">
                Tom liked one of your comments
              </span>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div class="flex justify-between px-3 py-1 bg-white items-center gap-1 rounded-lg border border-gray-100 my-3">
            <div class="relative w-16 h-16 rounded-full hover:bg-red-700 bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gray-200 rounded-full border-2 border-white">
                <img
                  class="w-full h-full object-cover rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt=""
                />
              </div>
            </div>
            <div>
              <span class="font-mono text-black">
                Andrea posted a new Tweet have a look
              </span>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hamburger;
