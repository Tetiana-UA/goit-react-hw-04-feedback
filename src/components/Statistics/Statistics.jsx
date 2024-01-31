import styles from "./statistics.module.css";

const Statistic =({good, bad, neutral, total, positiveFeedback}) =>{
    return (
        <>                
            <p className={styles.text}>Good:{good}</p>
            <p className={styles.text}>Neutral:{neutral}</p>
            <p className={styles.text}>Bad:{bad}</p>
            <p className={styles.text}>Total:{total}</p>
            <p className={styles.text}>Positive feedback:{positiveFeedback}%</p> 
    
        </>
    )
}




export default Statistic;