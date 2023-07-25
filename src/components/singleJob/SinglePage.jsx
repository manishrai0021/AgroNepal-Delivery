import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import JobTitle from "./JobTitle";


const SinglePage = () => {
  const id = useParams();
  useEffect(() => {
    console.log(id);
  });
  return (
    <>
      <div className="w-[80%] m-auto">
        <JobTitle />
      </div>
    </>
  );
};

export default SinglePage;
