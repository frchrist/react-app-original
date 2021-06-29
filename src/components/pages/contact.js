import {useState} from "react"
import { useForm } from "react-hook-form"
import classes from "./css/contact.module.css"
function Contact(){
        document.title  = "Nous contacter"
        const [stepForm, setStepForm] = useState(0);
        const {watch, register, handleSubmit} = useForm();
       const increaseStep = ()=>{
        setStepForm(cur=>(cur + 1))
       }
       const decreaseStep = ()=>{
        setStepForm(cur=>(cur - 1))
       }
       const Onsubmit = data=>{
          alert(JSON.stringify(data))
       }
       function renderButtonNext(){
           if(stepForm < 4){
                return <button type="button" onClick={increaseStep}>Suivant</button>
           }else if(stepForm == 4){
            return <button type="button" onClick={increaseStep}>Envoyer</button>
           }else if(stepForm == 5){
            return <button type="submit" onClick={increaseStep} className={classes.hidden}>Envoyer</button>
           }
           else{
                return undefined
           }
       }
       function renderButtonBack(){
        if(stepForm > 0 && stepForm=== 4) {
             return <button type="button" onClick={decreaseStep}>retour</button>
        }
        else{
             return undefined
        }
    }
        return (
            <div className={classes.contact}>
                <h3>Prendre contact avec Nous</h3>
                <form className={classes.form} onSubmit={handleSubmit(Onsubmit)}>
                        {stepForm === 0 && <section>
                            <label>Votre nom ({stepForm+1}/5)</label>
                            <input type="text" {...register('username', {required:"le nom est obligatoire"})}/>
                        </section>}
                        {stepForm === 1 && <section>
                            <label>Votre prénom ({stepForm+1}/5)</label>
                            <input type="text" {...register('lastname')}/>
                        </section>}
                        {stepForm === 2 && 
                        <section>
                            <label>Votre age ({stepForm+1}/5)</label>
                            <input type="number" {...register('age')}/>
                        </section>}
                        {stepForm === 3 && 
                        <section>
                            <label>Votre site ({stepForm+1}/5)</label>
                            <input type="url" {...register('site')}/>
                        </section>}
                        {stepForm === 4 && 
                        <section>
                            <label>Finalement le message</label>
                            <textarea defaultValue={"votre message"} {...register('message')}/>
                        </section>}

                        {stepForm === 5 && 
                        <section>
                            <label>Félicitation votre message à été bien reçue</label>
                        </section>}
                      {renderButtonNext()}
                        {renderButtonBack()}
                </form>
            </div>
        )
    }


export default Contact;