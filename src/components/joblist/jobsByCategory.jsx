import React, { useCallback, useEffect, useState } from "react";
import Filter from "./Filter";
import JobList from "./JobList";
import JobListByCategory from "./jobListByCategory";


const JobsByCategory = () => {



  return (
    <>
      <div className="flex flex-wrap gap-8 w-[90%] m-auto">
        <div className="flex-1">
          <JobListByCategory />
        </div>
      </div>
    </>
  );
};

export default JobsByCategory;
