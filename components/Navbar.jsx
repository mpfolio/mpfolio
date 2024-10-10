import './Navbar.css'
import logo from '../assets/logo.svg'
import Button from '../components/Button.jsx'

const Navbar = () => {
    return (
        <>
        <div className="navbar">
            <div className="logo-container">
                <img id="logo" src={logo} alt="logo" />
                <h2>PocketFolio</h2>
            </div>
            <div className="spacer"></div>
            <h3>
                <Button text={"Sign Up"} variant="transparent"/>
            </h3>
            <h3>
                <Button text={"Login"} variant="filled"/>
            </h3>
        </div>
        </>
    );
}
 
export default Navbar;