import { Component } from "react";

import Statistic from "components/Statistics/Statistics";
import Section from "components/Section/Section";
import FeedbackOptions from "components/Feedbackoptions/Feedbackoptions";
import  Notification  from "components/Notification/Notification";

import styles from "./feedback.module.css";


class Feedback extends Component {
    static options=["good", "neutral", "bad"]

    state = {
        good:0,
        neutral:0,
        bad:0,
    } 

    calcTotal(){
    const {good, neutral, bad}=this.state;
    const total=good + neutral + bad;
    return total;
    }

    feedbackPercentage(keyName){
        const total=this.calcTotal();
        if (!total){
            return 0;
        }
        const value=this.state[keyName];
        return Number(((value/total)*100).toFixed(2));
    }

    onLeaveFeedback=(keyName)=>{
        this.setState(prevState=>{
        return{
            [keyName]:prevState[keyName] + 1
            }
        })
    }

    render() {
        const total=this.calcTotal();
        const positiveFeedback=this.feedbackPercentage("good");
        
            return (
            <div className={styles.wrapper}>              
                <Section title="Please leave feedback" >
                    <FeedbackOptions options={Feedback.options} onLeaveFeedback={this.onLeaveFeedback}/>   
                </Section> 

                {total ?     
                <Section title="Statistics" >         
                    <Statistic good={this.state.good} bad={this.state.bad} neutral={this.state.neutral} total={total} positiveFeedback={positiveFeedback}  />
                </Section> 
                : 
                <Notification message="There is no feedback..." />}  

            </div>
        )
    }
}
 
export default Feedback;