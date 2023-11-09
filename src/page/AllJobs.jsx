import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { Link } from "react-router-dom";

const AllJobs = () => {
    const axios = useAxios();

    // Create state variables for job data and search term
    const [jobs, setJobData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        // Fetch the data when the component mounts
        axios
            .get("/user/add-job") // Replace with your server's endpoint
            .then((response) => {
                setJobData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching job data: ", error);
            });
    }, []);

    // Filter the job listings based on the search term
    const filteredJobs = jobs.filter(
        (job) =>
            job.Job_Title &&
            job.Job_Title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="mb-5">
            <h1 className="text-5xl text-center mx-auto my-5">All Jobs</h1>
            {/* Add a search input field */}
            <div className="text-center mb-4">
                <input
                    type="text"
                    placeholder="Search by Job Title"
                    className="input input-bordered input-error w-full max-w-xs"         
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <table className="table-auto mx-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Job Title</th>
                        <th className="px-4 py-2">Job Posting Date</th>
                        <th className="px-4 py-2">Application Deadline</th>
                        <th className="px-4 py-2">Salary Range</th>
                        <th className="px-4 py-2">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredJobs.map((job) => (
                        <tr key={job._id["$oid"]} className="bg-gray-100">
                            <td className="px-4 py-2">{job.Logged_In_User_Name}</td>
                            <td className="px-4 py-2">{job.Job_Title}</td>
                            <td className="px-4 py-2">{job.Job_Posting_Date}</td>
                            <td className="px-4 py-2">{job.end_date}</td>
                            <td className="px-4 py-2">{job.salary}</td>
                            <td className="px-4 py-2">
                                <Link to={`/All-job-details/${job._id}`}>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Details
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllJobs;
