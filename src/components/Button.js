import React from "react";
import classNames from "classnames";
import "components/Button.scss";

export default function Button(props) {

   let myclass = classNames(
      "button",
      {
         'button--confirm': props.confirm,
         'button--danger': props.danger
      }
   )


   return (
      <button
         onClick={props.onClick}
         className={myclass}
         disabled={props.disabled}
      >
         {props.children}
      </button>
   );
}
