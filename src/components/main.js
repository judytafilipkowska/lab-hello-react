import Icon1 from "../components/icon1"
import Icon2 from "../components/icon2"
import Icon3 from "../components/icon3"
import Icon4 from "../components/icon4"
import "../components/main.css";


function Main() {
    return (
        <div className="mainDiv">
            <div className="internalDiv">
                <Icon1 />
                <h5>Declarative</h5>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div className="internalDiv">
                <Icon2 />
                <h5>Components</h5>
                <p>Build encapsulated components that manage theirs state</p>
            </div>
            <div className="internalDiv">
                <Icon3 />
                <h5>Single-Way</h5>
                <p>A set of immutable values to the component's</p>
            </div>
            <div className="internalDiv">
                <Icon4 />
                <h5>JSX</h5>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
        </div>
    );
}

export default Main;