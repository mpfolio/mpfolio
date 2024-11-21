import './EditModal.css';
import Image from 'next/image';
import close from '@/app/assets/profile/close.svg'

const ProfileModal = () => {
    return (
        <>
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
        </>
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
            // : type == "measurement" ? <MeasurementModal />
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