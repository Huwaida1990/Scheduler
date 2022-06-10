import React from 'react'
import './style.scss'
import Header from './Header'
import Show from './Show'
import Empty from './Empty'
import Form from './Form'
import useVisualMode from 'hooks/useVisualMode'
import Status from './Status'
import Confirm from './Confirm'
import Error from './Error'
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const CONFIRM = "CONFIRM";
const DELETING = "DELETING";
const EDITING = "EDITING";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";
export const Appointment = (props) => {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function onSave(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING)
    props.bookInterview(props.id, interview)
      .then(() => { transition(SHOW) })
      .catch(() => { transition(ERROR_SAVE, true) })
  }

  function onEdit() {
    transition(EDITING);
  }

  function onConfirm() {

    transition(DELETING)
    props.cancelInterview(props.id)
      .then(() => { transition(EMPTY) })
      .catch(() => { transition(ERROR_DELETE, true) })
  }

  function onDelete() {
    transition(CONFIRM)
  }

  return (
    <article className="appointment" key={props.id}>
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      )}
      {mode === CREATE && (
        <Form interviewers={props.interviewers} onCancel={back} onSave={onSave} />
      )}
      {mode === EDITING && (
        <Form interviewers={props.interviewers} onCancel={back} onSave={onSave} name={props.interview.student} interviewer={props.interview.interviewer.id} />
      )}
      {mode === SAVING && <Status message="Saving" />}
      {mode === DELETING && <Status message="Deleting" />}
      {mode === CONFIRM && <Confirm message="are you sure" onConfirm={onConfirm} onCancel={back} />}

      {mode === ERROR_SAVE && <Error message="Saving" onClose={back} />}
      {mode === ERROR_DELETE && <Error message="Deleting" onClose={back} />}
    </article>
  )
}



export default Appointment;