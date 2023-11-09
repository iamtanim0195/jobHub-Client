import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AppliedJobs = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const [jobs, setJobData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    if (user) {
      axios
        .get("/user/add-job") // Replace with your server's endpoint
        .then((response) => {
          setJobData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching job data: ", error);
        });
    }
  }, [axios, user]);

  if (!user) {
    return (
      <div className="text-center">
        <p>Please log in to view your jobs.</p>
      </div>
    );
  }
  console.log(jobs)


  return (
    <div>
      {jobs.map((job) => (
        <div key={job._id["$oid"]} className="bg-gray-100">
          <h1>{job.email}</h1>
        </div>
       ) )}
    </div>
  )
};




export default AppliedJobs