export function getAppointmentsForDay(state, day) {
  let result = []
  let myDay = [];
  let obj1 = state['appointments']

  state['days'].forEach((d) => {
    if (d['name'] == day) myDay = d['appointments'];
  });

  for (let key in obj1) {

    if (myDay.includes(Number(key))) {
      result.push(obj1[key])
    }
  }
  return result;
}