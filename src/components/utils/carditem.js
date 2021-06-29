// import Card from "./card";
import classes from "./carditem.module.css"
import Progress from "./progess"
import {Fragment} from "react"
import {useHistory} from "react-router-dom"


function CardItem({title, content, date, username, prog, read}){

    let history = useHistory()
    
    function handleClick(){
        history.push(read)
    }

    return (
        <Fragment>
            <div className={classes.header}>
            <h2 className={classes.title}>{title}</h2>
            </div>
            <div className={classes.content}>
                <p>{content}</p>
            <Progress value={prog} />
            </div>
            <button className={classes.btn} onClick={handleClick}>Lire</button>
            <hr/>
            <address>
                <span className={classes.date}>{date}</span>
                <span className={classes.username}>{username}</span>
            </address>
        </Fragment>
    )
}

export default CardItem;
