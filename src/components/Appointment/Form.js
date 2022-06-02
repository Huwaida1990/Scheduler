import React, { useState } from 'react'
import Button from 'components/Button'
import InterviewerList from 'components/InterviewerList'

const Form = (props) => {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const reset = () => {
    setStudent("")
    setInterviewer(null)
  }
  const cancel = () => {
    reset();
    props.onCancel();
  }
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(ev) => ev.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(ev) => setStudent(ev.target.value)}
          />
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
          setInterviewer={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={() => props.save(student, interviewer)}>Save</Button>
        </section>
      </section>
    </main >
  )
}

export default Form
