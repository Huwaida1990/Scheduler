import React from 'react'
import './style.scss'
export const Appointment = (props) => {
  return (
    <article className="appointment">
      {props.time}
    </article>
  )
}



export default Appointment;