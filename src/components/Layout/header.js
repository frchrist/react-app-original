import classes from "./header.module.css"
import {NavLink} from "react-router-dom"
function Header(){
    return (
        <header className={classes.header}>
            <div className={classes.logo}></div> 
            <nav className={classes.nav}>
                <ul>
                    <li><NavLink  exact activeClassName={classes.current} to="/" >Home</NavLink></li>
                    <li><NavLink  exact activeClassName={classes.current} to="/about" >About</NavLink></li>
                    <li><NavLink  exact activeClassName={classes.current} to="/contact" >Contact</NavLink></li>
                </ul>
            </nav>  
        </header>
    )
}

export default Header;