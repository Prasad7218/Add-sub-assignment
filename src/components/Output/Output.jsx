import styles from './Output.module.css'
const Output=(props)=>{
    return(
        <>
        <div className={styles.res}>Result:{props.value}</div>
        </>
    )
}
export default Output;