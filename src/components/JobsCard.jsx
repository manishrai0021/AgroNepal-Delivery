import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "./config";
import { useNavigate } from "react-router-dom";

import Fertilizer from '../assets/fertilizer.svg'
import Grocery from '../assets/grocery.svg'
import Food from '../assets/food.svg'

const JobsCard = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([
    {
      name: 'Fertilizer',
      tag: Fertilizer,
      type: 'Walking/Cycle/Bike',
      number: 10000,
      desc: "Deliver Fertilizers to Farmers"
    },
    {
      name: 'Groccery',
      tag: Grocery,
      type: 'Walking/Cycle/Bike',
      number: 5000,
      desc: "Deliver Fertilizers to Farmers"
    },
    {
      name: 'Food',
      tag: Food,
      type: 'Walking/Cycle/Bike',
      number: 1000,
      desc: "Deliver Fertilizers to Farmers"
    },
  ]);
  const fetchCategories = async () => {
    const res = await axios.get(`${baseUrl}admin/category`);
    console.log(res.data);
    setCategories(res.data.catgory);
    console.log(categories);
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="flex flex-wrap w-[90%] m-auto gap-10 sm: justify-center   md:justify-between pt-8 ">
      {categories.slice(0,4).map((category) => {
        return (
          <div className="shadow-2xl w-[200px] h-[200px] text-center flex justify-center p-4 items-center flex-col" onClick={()=>navigate(`/jobs/${category.name}`)} >
            <div className="bg-black h-20 w-20 rounded-full items-center flex justify-center border-black p-4">
              <img src={category.tag} className="w-[50px]" />
            </div>
            <h3 className="text-center pt-2">{category.name}</h3>
            <h4 className="font-semibold">{category.type}</h4>
            <p className="text-center font-semibold">- {category.number} -</p>
            <p className="text-[12px]">{category.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default JobsCard;
