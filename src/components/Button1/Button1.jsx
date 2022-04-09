import styles from './Button1.module.css'
const Button1=({btnHandler1})=>{
    return(
        <>
        <button onClick={btnHandler1} 
        className={styles.btn1} 
        value="Add">Add</button>
        </>
    )
}
export default Button1;