
function NewsLetterForm(){
    return (
        <div className="newsLetterArea">
            <form className="newsLetter">
                <input type="text" name='name' id="name" placeholder="Nom : "/>
                <input type="email" name="email" id="email" placeholder="Email : " />
                <button className="btn">Send</button>
            </form>
            <button className="close">&times;</button>
        </div>
    )
}

export default NewsLetterForm;