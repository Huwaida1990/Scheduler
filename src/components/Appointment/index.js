import React from 'react'
import './style.scss'
import Header from './Header'
import Show from './Show'
import Empty from './Empty'

export const Appointment = (props) => {
  return (
    <article className="appointment" key={props.id}>
      <Header time={props.time} />
      {props.interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer} /> : <Empty />}
    </article>
  )
}



export default Appointment;