import {useEffect, useState} from "react";

const JobCategory = () => {
    const [tab, setTab] = useState(1);
    const [jobs, setJobs] = useState([]);

    const activeTab = (tabNumber) => {
        setTab(tabNumber);
    };
    useEffect(() => { // Fetch the JSON file
        fetch("/jobs.json").then((response) => response.json()).then((data) => setJobs(data)).catch((error) => console.error("Error fetching job data: ", error));
    }, []);

    const On_Site_Job = jobs.filter((job) => job.category === "On_Site_Job");

    const Remote_Job = jobs.filter((job) => job.category === "Remote_Job");

    const Hybrid = jobs.filter((job) => job.category === "Hybrid");

    const Part_Time = jobs.filter((job) => job.category === "Part_Time");

    const jobData = tab === 1 ? jobs : tab === 2 ? On_Site_Job : tab === 3 ? Remote_Job : tab === 4 ? Hybrid : tab === 5 ? Part_Time : null;

    return (<>
        <div className="tabs tabs-boxed mx-auto my-10 text-center">
            <div onClick={
                    () => activeTab(1)
                }
                className={
                    tab === 1 ? "tab tab-active" : "tab"
            }>
                All Job
            </div>
            <div onClick={
                    () => activeTab(2)
                }
                className={
                    tab === 2 ? "tab tab-active" : "tab"
            }>
                On Site Job
            </div>
            <div onClick={
                    () => activeTab(3)
                }
                className={
                    tab === 3 ? "tab tab-active" : "tab"
            }>
                Remote Job
            </div>
            <div onClick={
                    () => activeTab(4)
                }
                className={
                    tab === 4 ? "tab tab-active" : "tab"
            }>
                Hybrid
            </div>
            <div onClick={
                    () => activeTab(5)
                }
                className={
                    tab === 5 ? "tab tab-active" : "tab"
            }>
                Part Time
            </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-auto"> {" "}
            {
            jobData && jobData.map((value) => {
                return (<>
                    <div key={
                        value.id
                    }>
                        <div className="card w-96 lg:w-[25rem] bg-base-100 shadow-xl">
                            <div className="card-body">
                                <p className="font-semibold">
                                    <span className="text-2xl font-bold">job category:</span>
                                    {
                                    value.viewDetailsButton
                                }</p>
                                <p className="font-semibold">
                                    <span className="text-2xl font-bold">Posted by:</span>
                                    {
                                    value.postedBy
                                }</p>
                                <p className="font-semibold">
                                    <span className="text-2xl font-bold">Job Title:
                                    </span>
                                    {
                                    value.jobTitle
                                }</p>
                                <p className="font-semibold">
                                    <span className="text-2xl font-bold">Posting Date:
                                    </span>
                                    {
                                    value.postingDate
                                }</p>
                                <p className="font-semibold">
                                    <span className="text-2xl font-bold">Application Deadline:</span>
                                    {
                                    value.applicationDeadline
                                }</p>
                                <p className="font-semibold">
                                    <span className="text-2xl font-bold">Salary Range:</span>
                                    {
                                    value.salaryRange
                                }</p>
                                <p className="font-semibold">
                                    <span className="text-2xl font-bold">Job Applicants Number:
                                    </span>
                                    {
                                    value.applicantsNumber
                                }</p>

                                <div className="card-actions justify-center">
                                    <button className="btn btn-primary"> {
                                        value.viewDetailsButton
                                    }</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </>);
            })
        }
            {" "} </div>
    </>);
};

export default JobCategory;
