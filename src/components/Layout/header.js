import classes from "./header.module.css"
function Header(){
    return (
        <header className={classes.header}>
            <div className={classes.logo}></div> 
            <nav className={classes.nav}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>  
        </header>
    )
}

export default Header;