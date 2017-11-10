import moment from 'moment';

export function convertTime(time) {
  const d = moment(time)
    .utc()
    .calendar(null, {
      sameDay: '[Today]',
      nextDay: '[Tomorrow]',
      nextWeek: 'dddd',
      lastDay: '[Yesterday]',
      lastWeek: '[Last] dddd',
      sameElse: 'MMMM Do YYYY, h:mm A'
    });

  return d;
}

export function createId() {
  const id = Math.random() * 10 ** 17;
  return id;
}
