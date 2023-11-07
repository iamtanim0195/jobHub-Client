
const About = () => {
    return (
        <>
                        <h1 className="text-5xl mx-auto py-5">About Us</h1>
            <div className=" flex flex-col lg:flex-row gap-3 mx-auto">
                <div className="card w-[75vw] lg:w-96 bg-neutral text-neutral-content mx-auto">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Welcome to Job Hub - Your Job Search Partner</h2>
                        <p>At Job Hub, we are committed to helping you find your dream job and achieve your career goals. With our user-friendly platform and a vast network of employers, we connect job seekers with exciting job opportunities.</p>
                    </div>
                </div>
                <div className="card w-[75vw] lg:w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Our Mission</h2>
                        <p>Our mission is to simplify the job-seeking process and empower you to take the next step in your career. We understand that searching for a job can be a challenging and time-consuming task, and we are here to make it easier for you.</p>
                    </div>
                </div>
                <div className="card w-[75vw] lg:w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Join Job Hub Today</h2>
                        <p>Ready to find your dream job? Join Job Hub today and take the first step toward your future career. Sign up for a free account and start exploring job opportunities that match your skills and aspirations.
                            Thank you for choosing Job Hub as your job search partner. We look forward to helping you succeed in your career journey!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;