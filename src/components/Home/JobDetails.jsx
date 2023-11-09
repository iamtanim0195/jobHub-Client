import  { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const JobDetails = () => {
    const [jobs, setJobs] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch('/jobs.json')
            .then((response) => response.json())
            .then((data) => setJobs(data))
            .catch((error) => console.error('Error fetching job data: ', error));
    }, []);

    const detail = jobs?.find((job) => job.id == id);

    if (!detail) {
        return <p>Loading job details...</p>;
    }

    return (
        <>
        <h1 className="text-5xl font-bold mx-auto">job detail</h1>
        <div className="card w-[75vw] my-10 lg:w-[70vw]  bg-slate-400  mx-auto shadow-xl">
        <div className="card-body mx-auto">
            <p className="font-semibold">
                <span className="text-2xl font-bold">Posted by:</span>
                {
                    detail.postedBy
                }</p>
            <p className="font-semibold">
                <span className="text-2xl font-bold">Job Title:
                </span>
                {
                    detail.jobTitle
                }</p>
            <p className="font-semibold">
                <span className="text-2xl font-bold">Posting Date:
                </span>
                {
                    detail.postingDate
                }</p>
            <p className="font-semibold">
                <span className="text-2xl font-bold">Application Deadline:</span>
                {
                    detail.applicationDeadline
                }</p>
            <p className="font-semibold">
                <span className="text-2xl font-bold">Salary Range:</span>
                {
                    detail.salaryRange
                }</p>
            <p className="font-semibold">
                <span className="text-2xl font-bold">Job Applicants Number:
                </span>
                {
                    detail.applicantsNumber
                }</p>
            <p className="font-semibold">
                <span className="text-2xl font-bold">Job Applicants Number:
                </span>
                {
                    detail.location
                }</p>
            <p className="font-semibold">
                <span className="text-2xl font-bold">Job Applicants Number:
                </span>
                {
                    detail.jobType
                }</p>
            <p className="font-semibold">
                <span className="text-2xl font-bold">Job Applicants Number:
                </span>
                {
                    detail.experienceLevel
                }</p>
        </div>
        </div>
    </>
    );
};

export default JobDetails;