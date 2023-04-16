import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../config";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const fetchBookMarkedJobs = async (e) => {
    const res = await axios.get(`${baseUrl}appliedjob/myappjobs`, {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
   
    if (res.data.status == 200) {
        // console.log("sdf",res.data.appliedJobs)
      setJobs(res.data.appliedJobs);
    }
  };

  console.log(jobs, 'ds')

  useEffect(() => {
    fetchBookMarkedJobs();
  }, []);
  return (
    <div class="p-10">
      <h2 class="mb-3">My Applied Jobs</h2>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" class="px-6 py-4">
                      #
                    </th>
                    <th scope="col" class="px-6 py-4">
                      jobTitle
                    </th>
                    <th scope="col" class="px-6 py-4">
                      location
                    </th>
                    <th scope="col" class="px-6 py-4">
                      industry
                    </th>
                    <th scope="col" class="px-6 py-4">
                      status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {jobs?.map((job, index) => {
                    {
                      console.log(job);
                    }
                    return (
                      <tr
                        key={job?._id}
                        class="border-b dark:border-neutral-500"
                      >
                        <td class="whitespace-nowrap px-6 py-4 font-medium">
                          {index}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                          {job?.jobId?.title}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                          {job?.jobId?.location}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                          {job?.jobId?.industry}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                          {job?.status}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
