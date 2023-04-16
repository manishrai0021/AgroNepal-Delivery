import React from "react";
import { BsFacebook, BsYoutube, BsInstagram, BsGithub } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <footer className="relative bg-black pt-8 pb-6 text-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap text-left lg:text-left">
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="text-3xl fonat-semibold text-blueGray-700">
                                Let's keep in touch!
                            </h4>
                            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                                Find us on any of these platforms, we respond 1-2 business days.
                            </h5>
                            <div className="mt-6 lg:mb-0 mb-6 flex">
                                <button
                                    className="bg-white text-lightBlue-400 flex shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button"
                                >
                                    <BsFacebook className="text-black" />
                                </button>
                                <button
                                    className="bg-white text-lightBlue-600 flex shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button"
                                >
                                    <BsYoutube className="text-black" />
                                </button>
                                <button
                                    className="bg-white text-pink-400 flex shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button"
                                >
                                    <BsInstagram className="text-black" />
                                </button>
                                <button
                                    className="bg-white text-blueGray-800 flex shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button"
                                >
                                    <BsGithub className="text-black" />
                                </button>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-4/12 px-4 ml-auto">
                                  
                                    <ul className="list-unstyled">
                                     
                                      
                                        <li>
                                          
                                        </li>
                                     
                                    </ul>
                                </div>
                             
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-blueGray-300" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-blueGray-500 font-semibold py-1">
                                Copyright © <span id="get-current-year">2021</span>
                                <a
                                    href="https://www.creative-tim.com/product/notus-js"
                                    className="text-blueGray-500 hover:text-gray-800"
                                    target="_blank"
                                />{" "}
                                site  by 
                                <a
                                    href="https://www.creative-tim.com?ref=njs-profile"
                                    className="text-blueGray-500 hover:text-blueGray-800"
                                >
                                     job search
                                </a>
                                .
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
