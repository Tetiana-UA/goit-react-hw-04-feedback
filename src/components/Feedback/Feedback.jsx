import { useState, Component } from "react";

import Statistic from "components/Statistics/Statistics";
import Section from "components/Section/Section";
import FeedbackOptions from "components/Feedbackoptions/Feedbackoptions";
import  Notification  from "components/Notification/Notification";

import styles from "./feedback.module.css";

const variants = ["good", "neutral", "bad"];

const Feedback = () => {
    const [options, setOptions] = useState({
        good:0,
        neutral:0,
        bad:0,
    })
     
    const calcTotal = () => {
    const {good, neutral, bad}=options;
    const total=good + neutral + bad;
    return total;
    }

    const feedbackPercentage = (keyName) => {
        const total=calcTotal();
        if (!total){
            return 0;
        }
        const value=options[keyName];
        
        return Number(((value/total)*100).toFixed(2));
    }

    const onLeaveFeedback = (keyName) => {
        setOptions(prevOptions=>{
        return{
            ...prevOptions,
            [keyName]:prevOptions[keyName] + 1
            }
        })
    }

        const total=calcTotal();
        const positiveFeedback=feedbackPercentage("good");
        
            return (
            <div className={styles.wrapper}>              
                <Section title="Please leave feedback" >
                    <FeedbackOptions options={variants} onLeaveFeedback={onLeaveFeedback}/>   
                </Section> 

                {total ?     
                <Section title="Statistics" >         
                    <Statistic good={options.good} bad={options.bad} neutral={options.neutral} total={total} positiveFeedback={positiveFeedback}  />
                </Section> 
                : 
                <Notification message="There is no feedback..." />}  

            </div>
        )
    }

 
export default Feedback;