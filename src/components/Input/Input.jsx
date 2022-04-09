const Input=(props)=>{
    return(
        <>
        <h1>Enter a value to add / sub</h1>
        <input onChange={props.changeHandler}
         type="number" 
         placeHolder="enter value"
         value={props.value}/>
        </>
    )
}
export default Input;