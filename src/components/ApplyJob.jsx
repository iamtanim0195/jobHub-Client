import { useState } from 'react';
import Modal from 'react-modal';

const ApplyModal = ({ jobData, onClose, onSubmit }) => {
    const [userName, setUserName] = useState(''); // Pre-fill with the logged-in user's name
    const [userEmail, setUserEmail] = useState(''); // Pre-fill with the logged-in user's email
    const [resumeLink, setResumeLink] = useState('');
    const [error, setError] = useState(null);

    const handleApply = () => {
        const currentDate = new Date();
        const deadlineDate = new Date(jobData.end_date);

        // Check if the application deadline has passed
        if (currentDate > deadlineDate) {
            setError('The application deadline has passed.');
            return;
        }

        // Check if the user is the employer
        if (userName === jobData.Logged_In_User_Name) {
            setError("Employers can't apply for their own job.");
            return;
        }

        // Create the application object
        const applicationData = {
            job_id: jobData._id["$oid"],
            user_name: userName,
            user_email: userEmail,
            resume_link: resumeLink,
        };

        // Submit the application data to your server
        onSubmit(applicationData);

        // Close the modal
        onClose();
    };

    return (
        <Modal
            isOpen={true} // You can use a state variable to control modal visibility
            onRequestClose={onClose}
            
        >
            <div className="modal">
                <div className="modal-content">
                    <h2>Apply for {jobData.Job_Title}</h2>
                    <div className="input-field">
                        <label>User Name:</label>
                        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div className="input-field">
                        <label>User Email:</label>
                        <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                    </div>
                    <div className="input-field">
                        <label>Resume Link:</label>
                        <input type="text" value={resumeLink} onChange={(e) => setResumeLink(e.target.value)} />
                    </div>
                    <div className="error-message">{error}</div>
                    <div className="modal-actions">
                        <button onClick={handleApply}>Submit Application</button>
                        <button onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ApplyModal;
