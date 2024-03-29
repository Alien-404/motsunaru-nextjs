import moment from 'moment-timezone';

export default function handler(req, res) {
  const data_time = 1662981377 * 1000;
  moment.locale('en');
  const default_date = moment(data_time).format('h:mm:ss a, MMMM Do YYYY');
  const full_date = moment(data_time).format('H:mm:ss a, MMMM Do YYYY');
  const current_date = moment()
    .tz('America/New_York')
    .format('H:mm:ss a, MMMM Do YYYY');
  res.status(200).json({
    locale_date: moment.tz.guess(),
    current_date,
    default_date,
    full_date,
  });
}
