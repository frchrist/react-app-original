import classes from "./header.module.css"
import {Link} from "react-router-dom"
function Header(){
    return (
        <header className={classes.header}>
            <div className={classes.logo}></div> 
            <nav className={classes.nav}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>  
        </header>
    )
}

export default Header;