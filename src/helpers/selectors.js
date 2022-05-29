export function getAppointmentsForDay(state, day) {
  const result = [];
  state.days.forEach(data => {
    if (data.name === day) {
      data.appointments.forEach(id => {
        if (state.appointments[id]) {
          result.push(state.appointments[id])
        };
      });
    };
  });
  return result;
}

export function getInterview(state, interview) {

  if (interview) {

    let result = { ...interview }
    for (let key in state['interviewers']) {
      if (key == interview['interviewer']) result['interviewer'] = state['interviewers'][key]
    }
    return result;

  } else {
    return null;
  }
}

export function getInterviewersForDay(state, day) {
  const result = [];
  state.days.forEach(data => {
    if (data.name === day) {
      data.interviewers.forEach(id => {
        if (state.interviewers[id]) {
          result.push(state.interviewers[id])
        };
      });
    };
  });
  return result;
}