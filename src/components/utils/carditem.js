// import Card from "./card";
import classes from "./carditem.module.css"
import Progress from "./progess"
import {Fragment, useState} from "react"


function CardItem({title, content, date, username, prog}){
    const [progress, setprogress] = useState(prog)
    
    function handleClick(e){
        setprogress(progress-10+20)
    }

    return (
        <Fragment>
            <div className={classes.header}>
            <h2 className={classes.title}>{title}</h2>
            </div>
            <div className={classes.content}>
                <p>{content}</p>
            <Progress value={progress} />
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