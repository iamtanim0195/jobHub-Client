import { useEffect, useState } from 'react';
import useAxios from '../hooks/useAxios';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useMutation, useQuery } from '@tanstack/react-query';

const AllJobDet = () => {
    const axios = useAxios();
    const [jobs, setJobData] = useState([]);
    const { id } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalValues, setModalValues] = useState({
        name: '', // This should be populated from the user's authentication context
        uEmail: '', // This should be populated from the user's authentication context
        resumeLink: '',
    });

    const handleModalChange = (e) => {
        const { name, value } = e.target;
        setModalValues({
            ...modalValues,
            [name]: value,
        });
    };
    const handleApplyClick = () => {
        if (!isEmployer && !isDeadlineOver && modalValues.uEmail !== jobData.Logged_In_User_Email) {
            setIsModalOpen(true);
        }
    };

   
  /*   const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmitApplication = () => {
        // Simulate a successful submission, you should implement the actual logic
        // for saving the job application and handle the server response here
        setTimeout(() => {
            // Simulate a successful application submission
            toast.success('Application submitted successfully!');
            closeModal(); // Close the modal
        }, 2000);
    }; */

    const {data : appyJob} = useQuery({
        queryKey: ['jobs'],
        queryFn: async () => {
            const get = await axios.get(`/user/add-job`);
            return get;
        },

    })
    const {mutate} = useMutation({
        mutationKey :['jobs'],
        mutationFn: (jobData)=>{
            return axios.post(`/user/add-job`,jobData);
        }
    });

    console.log(appyJob)

    useEffect(() => {
        axios.get('/user/add-job')
            .then((response) => {
                setJobData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching job data: ', error);
            });
    }, []);

    const jobData = jobs.find((job) => job._id === id);

    if (!jobData) {
        return <p>Loading job details...</p>;
    }
    console.log('isEmployer:', jobData);


    // Check if the user is the employer

    const isEmployer = jobData.email === modalValues.uEmail;
    const isDeadlineOver = new Date(jobData.end_date) < new Date();

    console.log('isEmployer:', isEmployer);
    console.log('isDeadlineOver:', isDeadlineOver);

    return (
        <>
            <img src={jobData.C_logo} className='w-20 m-5' alt="company logo" />
            <div className="bg-white rounded-lg shadow-md p-4 m-4 w-[65vw] mx-auto">
                <img src={jobData.img} alt="Job Image" className="w-full h-48 object-cover mb-2" />
                <h2 className="text-lg font-semibold">{jobData.Job_Title}</h2>
                <p className="text-gray-600 text-sm">{jobData.Job_Description}</p>
                <p className="text-gray-500 text-xs mt-2">
                    Posted on {new Date(jobData.Job_Posting_Date).toLocaleDateString()}
                </p>
                <p className="text-gray-500 text-xs">
                    Application Deadline: {new Date(jobData.end_date).toLocaleDateString()}
                </p>
                <div className="mt-4 flex justify-between">
                    <span className="text-blue-500 font-semibold">{jobData.Job_Applicants_Number} Applicants</span>
                    <span className="text-gray-400">{jobData.Logged_In_User_Name}</span>
                </div>
                <button onClick={handleApplyClick} className="bg-blue-500 text-white font-semibold rounded-md px-4 py-2 mt-4">
                    Apply
                </button>
            </div>
            {isModalOpen ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Appy job
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setIsModalOpen(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                
                                    <div >
                                        <h3>Submit Job Application</h3>
                                        <label>
                                            Name:
                                            <input
                                                type="text"
                                                name="name"
                                                value={modalValues.name}
                                                onChange={handleModalChange}
                                                disabled
                                                
                                            />
                                        </label>
                                        <label>
                                            Email:
                                            <input
                                                type="email"
                                                name="uEmail"
                                                value={modalValues.uEmail}
                                                onChange={handleModalChange}
                                            />
                                        </label>
                                        <label>
                                            Resume Link:
                                            <input
                                                type="text"
                                                name="resumeLink"
                                                value={modalValues.resumeLink}
                                                onChange={handleModalChange}
                                            />
                                        </label>
                                    </div>
                                
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={()=>mutate({email:modalValues.uEmail,resumeLink:modalValues.resumeLink,jobData})}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}

export default AllJobDet;
