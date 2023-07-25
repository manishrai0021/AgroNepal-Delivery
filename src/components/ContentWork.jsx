import React from "react";
import { BsFillPersonFill, BsSearch } from "react-icons/bs";
import Confirm from "../assets/confirm.svg";
import Deliver from "../assets/deliver.svg";

const ContentWork = () => {
  return (
    <div className="flex justify-center items-center flex-wrap pt-[90px] pb-[90px] gap-4">
      <div className="flex flex-col justify-center max-w-sm items-center">
        <BsFillPersonFill className="text-[90px]" />
        <h3>Create Account</h3>
        <p className="text-center text-sm pt-3">
          Sign up and create your profile to get started. This will allow you to
          save your searches and apply for jobs.
        </p>
      </div>
      <div className="flex flex-col justify-center max-w-sm items-center">
        <BsSearch className="text-[90px]" />
        <h3>Search Orders</h3>
        <p className="text-center text-sm pt-3">
          Browse our database of job listings to find positions that match your
          skills and interests. Filter by location, industry, and more to refine
          your search.
        </p>
      </div>
      <div className="flex flex-col justify-center max-w-sm items-center">
        <img src={Confirm} alt="" className="w-[100px]"/>
        <h3>Confirm Orders</h3>
        <p className="text-center text-sm pt-3">
          Once you find a job that interests you, simply click "apply" and
          follow the prompts to submit your application. You can also track your
          application status through your account.
        </p>
      </div>
      <div className="flex flex-col justify-center max-w-sm items-center">
        <img src={Deliver} alt="" className="w-[100px]"/>
        <h3>Deliver</h3>
        <p className="text-center text-sm pt-3">
          Once you find a job that interests you, simply click "apply" and
          follow the prompts to submit your application. You can also track your
          application status through your account.
        </p>
      </div>
    </div>
  );
};

export default ContentWork;
