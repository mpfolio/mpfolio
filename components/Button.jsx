import './Button.css';

const Button = ({ text, variant }) => {
    return (
        // variants: filled, outlined, transparent
        <button className={variant}>
            { text }
        </button>
    );
}
 
export default Button;