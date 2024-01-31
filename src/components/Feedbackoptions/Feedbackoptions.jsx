import styles from "./feedbackoptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const buttonElements = options.map(name => 
    <button onClick={(() => onLeaveFeedback(name))}
    key={name} 
    className={styles.button}>{name}</button>) 

    return buttonElements;

}
export default FeedbackOptions;