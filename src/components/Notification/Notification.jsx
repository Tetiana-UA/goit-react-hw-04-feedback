import styles from "./notification.module.css";

const Notification = ({message}) => {
	return <p className={styles.title}>{message}</p>;
};

export default Notification;