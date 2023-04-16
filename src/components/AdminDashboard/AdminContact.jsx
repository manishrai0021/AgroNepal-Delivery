import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { baseUrl } from "../config";

const AdminContact = () => {
  const [jobs, setJobs] = useState();
  const fetchJobs = async () => {
    const res = await axios.get(`${baseUrl}user/contact`);
    console.log(res.data);
    if(res.data.status == 200){
      setJobs(res.data.contacts);
    }
   
  };
  useEffect(() => {
    fetchJobs();
    console.log('jobs', jobs);
  }, []);
  const deleteItem = async (id) => {
    const res = await axios.delete(`${baseUrl}user/contact/${id}`, {
      headers: {
        "x-access-token": localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    });
    console.log(res.data);
    fetchJobs();
  };

  return (
    <div>
      <h3 className="pb-4">Contact</h3>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Index
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
               Message
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {jobs?.map((item,index) => {
              return (
                <tr
                  key={item._id}
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {index+1}
                  </th>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">{item.phone}</td>
                  <td className="px-6 py-4">{item.message}</td>
                  <td className="px-6 py-4">
                    <AiFillDelete
                      onClick={() => deleteItem(item._id)}
                      className="cursor-pointer"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminContact;
