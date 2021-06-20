import {Component} from "react"
import classes from "./css/contact.module.css"
class Contact extends Component{
    constructor(){
        super()
    }

    render(){
        return (
            <div className={classes.contact}>
                <h3>Prendre contact avec Nous</h3>
                <form className={classes.form}>
                    <input type="Text" placeholder="Votre nom"/>
                      <input type="Email" placeholder="Votre Email"/>
                      <input type="url" placeholder="votre Site"/>
                      <textarea placeholder="Votre message"></textarea>
                      <button type="submit">Send</button>
                </form>
            </div>
        )
    }
}

export default Contact;