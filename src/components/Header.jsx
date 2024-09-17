import { BsArrowLeftSquare } from "react-icons/bs";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <span><Link to='/'><BsArrowLeftSquare /></Link></span>
            <span><h1>HEADER</h1></span>
        </header>
    )
}

export default Header