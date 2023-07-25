import React from "react";

import Bike from "../assets/Bike.svg";
import Order from "../assets/deliver.svg";
import Customer from "../assets/customer.svg";

import Kathmandu from "../assets/Images/ktm.jpg";
import Dharan from "../assets/Images/Dharan.png";

const FeturedJobs = () => {
  const cities = [
    {
      name: "Kathmandu",
      no_of_employees: 500,
      img: Kathmandu,
      no_of_deliveries: 20000,
      happy_customers: 50000,
    },
    {
      name: "Dharan",
      no_of_employees: 400,
      img: Dharan,
      no_of_deliveries: 15000,
      happy_customers: 35000,
    },
  ];
  return (
    <div className="pt-20 pb-10 w-[86%] m-auto">
      <h1 className="text-center">Located Cities</h1>
      <div className="flex flex-col items-center justify-center md:flex-row gap-6 md:gap-10  pt-10">
        {cities.map((city) => {
          return (
            <div className="flex flex-col items-center text-center gap-4 border-2 border-black rounded-md p-4">
              <h3>{city.name}</h3>
              <img
                src={city.img}
                alt=""
                className="w-[200px] h-[100px] rounded-md"
              />
              <h4 className="flex items gap-2 font-semibold">
                Delimans: {city.no_of_employees}{" "}
                <img src={Bike} alt="" className="w-[35px] " />
              </h4>
              <h4 className="flex items gap-2 font-semibold">
                No. of Orders: {city.no_of_deliveries}{" "}
                <img src={Order} alt="" />
              </h4>
              <h4 className="flex items gap-2 font-semibold">
                Happy Customers: {city.happy_customers}{" "}
                <img src={Customer} alt="" className="w-[30px]"/>
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeturedJobs;
