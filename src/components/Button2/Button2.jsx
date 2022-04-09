import styles from './Button2.module.css'
const Button2=({btnHandler2})=>{
    return(
        <>
        <button onClick={btnHandler2} className={styles.btn2} value="Subtract">Subtract</button>
        </>
    )
}
export default Button2;