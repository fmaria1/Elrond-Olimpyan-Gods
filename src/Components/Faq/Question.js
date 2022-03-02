import React from "react";
import "./Question.css";

const Question = (props) => {
  if (!props.question) return null;
  return (
    <details class="faq-question">
      <summary>{props.question.title}</summary>
      <p>{props.question.content}</p>
    </details>
  );
};
export default Question;
