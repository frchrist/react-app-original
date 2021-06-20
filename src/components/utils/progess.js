function Progress({value}){
    function handleChange(e){
        e.target.value += 10
        value += 10;
    }
    return (

        <div> <progress value={value} min='0' max="100" onChange={handleChange}></progress>
            <span>{value}%</span>
         </div>
    )
}
export default Progress;