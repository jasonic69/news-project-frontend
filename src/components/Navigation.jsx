import { Link } from "react-router-dom"
import { MdHome } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import "./Navigation.css";

const Navigation = () => {
    return (
        <div className="nav-full-container">
      <div className="button-cont">
        <Link to="/">
          <button className="btn" to="/">
            <MdHome/>
          </button>
        </Link>
        <p>Home</p>
      </div>
      <div className="button-cont">
        <Link to="/tbc">
          <button className="btn">
          <GoPerson/>
          </button>
        </Link>
        <p>TBC</p>
      </div>
      <div className="button-cont">
        <Link to="/tbc">
          <button className="btn">
          <GoPerson/>
          </button>
        </Link>
        <p>TBC</p>
      </div>
      <div className="button-cont">
        <Link to="/profile">
          <button className="btn">
            <GoPerson/>
          </button>
        </Link>
        <p>Profile</p>
      </div>
    </div>
    )
}

export default Navigation