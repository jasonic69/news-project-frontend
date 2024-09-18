import { BsArrowLeftSquare } from "react-icons/bs";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header>
            <span className='leftArrow'><Link to='/'><BsArrowLeftSquare /></Link></span>
        </header>
    )
}

export default Header