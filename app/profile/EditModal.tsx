import './EditModal.css';
import Image from 'next/image';
import close from '@/app/assets/profile/close.svg'

const ProfileModal = () => {
    return (
        <div className="profile-modal">
            <h3 className="modal-header">Edit Profile</h3>
            <div className="input-grid-profile">
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
                <div className="input-container">
                    <label>Age</label>
                    <input type="text" placeholder="Age"></input>
                </div>
                <div className="input-container">
                    <label>Waist</label>
                    <input type="text" placeholder="Waist"></input>
                </div>
                <div className="input-container">
                    <label>Hair Color</label>
                    <input type="text" placeholder="Hair Color"></input>
                </div>
                <div className="input-container">
                    <label>Chest</label>
                    <input type="text" placeholder="Chest"></input>
                </div>
                <div className="input-container">
                    <label>Inseam</label>
                    <input type="text" placeholder="Inseam"></input>
                </div>
                <div className="input-container">
                    <label>Suit</label>
                    <input type="text" placeholder="Suit"></input>
                </div>
                <div className="input-container">
                    <label>Shoe Size</label>
                    <input type="text" placeholder="Shoe Size"></input>
                </div>
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
            // : type == "experience" ? <ExperienceModal />
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