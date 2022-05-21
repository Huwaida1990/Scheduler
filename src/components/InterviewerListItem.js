import React from "react";
import classNames from "classnames";
import './InterviewerListItem.scss';

const InterviewerListItem = (props) => {

  const myClasses = classNames(
    "interviewers__item",
    { "interviewers__item--selected": props.selected }
  )
  return (
    <li className={myClasses} onClick={props.setInterviewer} key={props.id}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  )
}

export default InterviewerListItem;