import React from "react";
import Question from "./Question";
import "./FaqComponent.css";

const FaqComponent = (props) => {
  if (!props.questions) return null;
  return (
    <div class="faq-container">
      <Question question={props.questions.question1} />
      <Question question={props.questions.question2} />
      <Question question={props.questions.question3} />
      <Question question={props.questions.question4} />
      <Question question={props.questions.question5} />
      <Question question={props.questions.question6} />
    </div>
  );
};
export default FaqComponent;
