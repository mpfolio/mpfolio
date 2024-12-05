import './EditModal.css';
import Image from 'next/image';
import close from '@/app/assets/profile/close.svg'

const ProfileModal = () => {
    return (
        <div className="profile-modal">
            <h3 className="modal-header">Edit Profile</h3>
            <div className="input-grid">
                <div className="input-container">
                    <label>First Name</label>
                    <input type="text" placeholder="First Name"></input>
                </div>
                <div className="input-container">
                    <label>Last Name</label>
                    <input type="text" placeholder="Last Name"></input>
                </div>
                <div className="input-container">
                    <label>Username</label>
                    <input type="text" placeholder="Username"></input>
                </div>
                <div className="input-container">
                    <label>Pronouns</label>
                    <input type="text" placeholder="Pronouns"></input>
                </div>
                <div className="input-container">
                    <label>Headline</label>
                    <input type="text" placeholder="Headline"></input>
                </div>
                <div className="input-container">
                    <label>Locations</label>
                    <input type="text" placeholder="Locations"></input>
                </div>
            </div>
            <div className="input-container">
                <label>About Me (400 characters max)</label>
                <textarea className="about" placeholder="About Me" rows={4}></textarea>
            </div>
        </div>
    )
}

const MeasurementModal = () => {
    return (
        <div className="measurement-modal">
            <h3 className="modal-header">Edit Measurements</h3>
            <div className="input-grid">
                <div className="input-container">
                    <label>Gender</label>
                    <select>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="nonbinary">Non-binary</option>
                    </select>
                </div>
                { 
                    ["Age", "Waist", "Hair Color", "Eye Color", "Chest", "Inseam", "Suit", "Hips", "Bust", "Dress", "Shoe Size"]
                    .map(label => {
                        return (
                            <div className="input-container">
                                <label>{label}</label>
                                <input type="text" placeholder={label}></input>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const ExperienceModal = () => {
    return (
        <div className="experience-modal">
            <h3 className="modal-header">Add Experience</h3>
            <div className="input-grid">
                <div className="input-container">
                    <label>Company</label>
                    <input type="text" placeholder="Company"></input>
                </div>
                <div className="input-container">
                    <label>Position</label>
                    <input type="text" placeholder="Position"></input>
                </div>
                <div className="input-container">
                    <label>Start Date</label>
                    <input type="date" placeholder="Start Date"></input>
                </div>
                <div className="input-container">
                    <label>End Date</label>
                    <input type="date" placeholder="End Date"></input>
                </div>
                <div className="checkbox input-container">
                    <input type="checkbox"></input>
                    <label>I am still working here</label>
                </div>
            </div>
            <div className="input-container">
                <label>Description (200 words max)</label>
                <textarea className="about" placeholder="About Me" rows={4}></textarea>
            </div>
        </div>
    )
}

type EditModalProps = {
    type: "profile" | "measurement" | "photos" | "experience" | "skills";
    handleClose: () => void;
}
function EditModal({type, handleClose} : EditModalProps) {
    return (
        <>
        <div className="background">
        </div>
        <div className="modal-container">
            <button className="close" onClick={handleClose}>
                <Image src={close} alt="X"></Image>
            </button>
            { type == "profile" ? <ProfileModal />
            : type == "measurement" ? <MeasurementModal />
            // : type == "photos" ? <PhotosModal />
            : type == "experience" ? <ExperienceModal />
            : <></>
            }
            <div className="button-row">
                <button className="outlined">Discard Changes</button>
                <button className="filled">Save Changes</button>
            </div>
        </div>
        </>
    );
}

export default EditModal;