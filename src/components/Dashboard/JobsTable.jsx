import axios from "axios";
import React, { useEffect } from "react";
import { baseUrl } from "../config";

const JobsTable = () => {
  const [job, setJob] = React.useState([]);
  const deleteJob = async (id) => {
    const res = await axios.delete(baseUrl + "job/" + id, {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    console.log(res);
    if(res.data.status === 200) alert("deleted sucessfully")
    window.location.reload();
  };
  useEffect(() => {
    async function fetchJobs() {
      const res = await axios.get(baseUrl + "job", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });

      setJob(res.data.data.jobs);
      console.log(res.data.data.jobs);
      console.log(job);
    }

    fetchJobs();
  }, []);
  return (
    <div>
      <h2>Job Title</h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Job Title
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Designation
              </th>
              <th scope="col" className="px-6 py-3">
                Salary
              </th>
              <th scope="col" className="px-6 py-3">
                jobType
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {job.map((jb) => (
              <tr
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                key={jb._id}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {jb.title}
                </th>

                <td className="px-6 py-4">{jb.industry}</td>
                <td className="px-6 py-4">{jb.designation}</td>
                <td className="px-6 py-4">{jb.salary}</td>
                <td className="px-6 py-4">{jb.jobType}</td>
                <td className="px-6 py-4">{jb.deadLine}</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    onClick={() => deleteJob(jb._id)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobsTable;
