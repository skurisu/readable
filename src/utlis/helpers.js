import moment from 'moment';

export function convertTime(time) {
  const d = moment(time).format('MMM Do, h:mm a');

  return d;
}

export function createId() {
  const id = (Math.random() * 10 ** 17).toString();
  return id;
}
