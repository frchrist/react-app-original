import classes from "./footer.module.css"


function Footer(){
    return (
        <footer className={classes.footer} >
             <p data-testid="footer">@copyright 2021</p>
        </footer>
       
    )
}




export default Footer;