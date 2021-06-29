import classes from "./css/error.module.css"
import {useHistory} from "react-router-dom"
import { useEffect } from "react";
function Error404(){
    let history = useHistory()
    function handleClick(){
        history.push("/")
    }
    document.title ="Error 404"
    return(
       <div className={classes.error}>
            <p>Error 404</p>
            <p>Cette page n'existe pas</p>
            <button onClick={handleClick} className="btn">clickez ici</button>
        </div>
    )
}

export default Error404;