import Ironlogo from "../components/ironlogo"
import Irontop from "../components/irontop";
import "../components/navbar.css";


function Navbar() {
    return (
        <div className="navbar">
            <div className="navElement">
                <Ironlogo />
            </div>
            <div className="navElement">
                <Irontop />
            </div>

        </div>
    )
}

export default Navbar;