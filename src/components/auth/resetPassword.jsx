import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { baseUrl } from "../config";

const ResetPassword = () => {
  // grab the coming email from navigate
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);

  const [formData, setFormData] = useState({
    otp: "",
    password: "",
  });

  const onchange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let loginData = {
      otp: formData.otp,
      password: formData.password,
      email: state.email,
    };

    await axios
      .post(baseUrl + "user/resetpassword", loginData)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          alert("password reset successfully");
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("e");
  };

  const signInWithGoogle = async () => {
    window.location.href = "http://localhost:4000/auth/google";
    const res = await axios.get("http://localhost:4000/auth/google/callback", {
      withCredentials: true,
    });
    console.log(res);

    // navigate(`${baseUrl}/auth/google`);
  };

  return (
    <div>
      {/* Page Container */}
      <div
        id="page-container"
        className="flex flex-col mx-auto w-full min-h-screen bg-gray-100"
      >
        {/* Page Content */}
        <main id="page-content" className="flex flex-auto flex-col max-w-full">
          <div className="min-h-screen flex items-center justify-center relative overflow-hidden max-w-10xl mx-auto p-4 lg:p-8 w-full">
            {/* Patterns Background */}
            <div className="pattern-dots-md text-gray-300 absolute top-0 right-0 w-32 h-32 lg:w-48 lg:h-48 transform translate-x-16 translate-y-16" />
            <div className="pattern-dots-md text-gray-300 absolute bottom-0 left-0 w-32 h-32 lg:w-48 lg:h-48 transform -translate-x-16 -translate-y-16" />
            {/* END Patterns Background */}

            {/* Sign In Section */}
            <div className="py-6 lg:py-0 w-full md:w-8/12 lg:w-6/12 xl:w-4/12 relative">
              {/* Header */}
              <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold inline-flex items-center mb-1 space-x-3">
                  <span>Job Search</span>
                </h1>
                <p className="text-gray-500">Welcome!! to Login Page</p>
              </div>
              {/* END Header */}

              {/* Sign In Form */}
              <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
                <div className="p-5 lg:p-6 grow w-full">
                  <div className="sm:p-5 lg:px-10 lg:py-8">
                    <form
                      className="space-y-6"
                      onSubmit={(e) => handleSubmit(e)}
                    >
                      <div className="space-y-1">
                        <label htmlFor="email" className="font-medium">
                          Otp
                        </label>
                        <input
                          className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                          type="text"
                          id="email"
                          name="otp"
                          required
                          placeholder="Enter your Otp"
                          onChange={(e) => onchange(e)}
                        />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="password" className="font-medium">
                          Password
                        </label>
                        <input
                          className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                          type="text"
                          id="password"
                          name="password"
                          placeholder="Enter your password"
                          required
                          onChange={(e) => onchange(e)}
                        />
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-800 hover:border-blue-800 focus:ring focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700"
                        >
                          Reset
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* END Sign In Form */}
            </div>
            {/* END Sign In Section */}
          </div>
        </main>
        {/* END Page Content */}
      </div>
      {/* END Page Container */}
    </div>
  );
};

export default ResetPassword;
