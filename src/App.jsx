import './App.css'
import squiggle from '../assets/squiggle.svg'
import Navbar from '../components/Navbar.jsx'
import Button from '../components/Button.jsx'

function App() {
    return (
        <>
        <Navbar />
        <div className="section1">
            <h1 className="headline">Networking for Creatives</h1>
            <p className="bodytext">penis cock balls shaft penis cock balls shaft penis cock balls shaft penis cock balls shaft penis cock balls shaft penis cock balls shaft penis cock balls shaft penis cock balls shaft penis cock balls shaft penis cock balls shaft</p>
            <h3>
                <Button text="Make an Account" variant="filled" />
            </h3>
        </div>
        <div className="section2">
            {/* TODO: import dark filter blob from figma */}
            {/* TODO: the styles here are really inconsistent @sophie */}
            <h1 style={{ fontSize: "6rem" }}>Our Mission</h1>
            <h1 style={{ fontWeight: 400 }}>
                penis cock balls shak balls shft peniaAAAAAAAAAAAAAAs cock balls shaft penis cock balls sh balls shafshaft penis cock balls shaft penis cockt penis cock balls shaft penis cock balls shaft penis cock balls balls shaft
            </h1>
        </div>
        <div className="section3">
            <h1 className="underline">Why us?</h1>
            <div className="card-container">
                <div className="card">
                    <h2>Developed by models for models</h2>
                    <p>wow sophie is such a bad ta for showing up to her meeting 10 minutes late and forgetting that she evne had it she is so bad at being a responsible ta</p>
                </div>
                <div className="card">
                    <h2>NYU Entrepreneurship Center</h2>
                    <p>wow owo w fidosjafo fjiosdajfos if you dont have any right now you can always email me but yeah if not do you have any now if not yeah we had one about traffic?</p>
                </div>
                <div className="card">
                    <h2>By Data Systems & Technology Professionals</h2>
                    <p>if you gys wanna come up with a new problem statement and email me you can otally do that i think that might be a smarter option as well because i think ortho k lenses are super specific so doing something broader woudl allow for more ideas for solutions</p>
                </div>
            </div>
            <img id="squiggle" src={squiggle} alt="squiggle" />
            <h1>Get to know us.</h1>
            <p className="bodytext">this fucking TA forogt about our meeting what the fuck now you have to be nicer no this group is good they always do their work on time im gonna give them extra credit lol how much next time they try to submit something for extra credit i will lol i dont know  apoint its not a hard class you dont need the extra credit</p>
            <p>
                <Button text="Make an Account" variant="outlined" />
            </p>
        </div>
        </>
    )
}

export default App
