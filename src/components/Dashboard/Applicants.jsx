import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../config";
import { useNavigate } from "react-router-dom";

const Applicants = () => {
  const [job, setJob] = React.useState([]);
  const [status, setStatus] = useState('pending');
  const navigate = useNavigate()
  async function fetchJobs() {
    const res = await axios.get(baseUrl + "appliedJob/applicants", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    console.log(res.data);
    setJob(res.data.applicants);
    if(res.data.applicants.status == 'accepted'){
          // document.getElementById('btn-app').style.display = 'none';
          setStatus("accepted");
    }if(res.data.applicants.status == "rejected") {
      // document.getElementById("btn-reject").style.display = "none";
      setStatus('rejected');
    }
    // console.log(res.data.data.applicants);
    console.log(job);
  }


  async function handleApprove(id,email) {
    const res = await axios.patch(
      baseUrl + "company/changestatus/" + id,
      {
        status: "accepted",
        email: email,
      },
      {
        headers: {
          "x-access-token": localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      }
    );

    if(res.data.status == 200){
         fetchJobs();
    }
    console.log("acc", res);

  }
  async function handleReject(id,email) {
    const res = await axios.patch(baseUrl + "company/changestatus/" + id, {
      status: 'rejected',
      email:email
    }, {
      headers: {
        "x-access-token": localStorage.getItem("token"),
        "Content-Type": 'application/json'
      },
    });
      if (res.data.status == 200) {
        fetchJobs();
      }
console.log('re', res);
  }
  useEffect(() => {
    fetchJobs();
  }, []);
return (
  <div>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Job title
            </th>
            <th scope="col" className="px-6 py-3">
              CV
            </th>
            <th scope="col" className="px-6 py-3">
              Status
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
                {jb.userId.name}
              </th>
              <td className="px-6 py-4">{jb.userId.email}</td>
              <td className="px-6 py-4"><span onClick={()=>navigate(`/single/${jb.jobId._id}`)}>{jb?.jobId?.title}</span></td>
              <td className="px-6 py-4">{jb.cv}</td>
              <td className="px-6 py-4">{jb.status}</td>
              <td className="px-6 py-4">
                {jb.status === "pending" && (
                  <>
                    <a
                      onClick={() => handleApprove(jb._id, jb.userId.email)}
                      className="font-medium text-blue-600 dark:text-blue-500 "
                      id="btn-app"
                      style={{ cursor: "pointer" }}

                    >
                      Approve
                    </a>
                    <a
                      onClick={() => handleReject(jb._id, jb.userId.email)}
                      className="ml-3  font-medium text-red-400  "
                      id="btn-reject"
                      style={{ cursor: "pointer" }}

                    >
                      Reject
                    </a>
                  </>
                )}

                {jb.status === "accepted" && (
                  <a
                    onClick={() => handleReject(jb._id, jb.userId.email)}
                    className="ml-3  font-medium text-red-400  hover:underline"
                    id="btn-reject"
                  >
                    Reject
                  </a>
                )}
                {jb.status === "rejected" && (
                  <a
                    onClick={() => handleApprove(jb._id, jb.userId.email)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    id="btn-app"
                  >
                    Approve
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
};

export default Applicants;
