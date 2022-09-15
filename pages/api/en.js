import moment from 'moment/moment';

export default function handler(req, res) {
  const data_time = 1662981377 * 1000;
  const default_date = moment(data_time).format('h:mm:ss a, MMMM Do YYYY');
  const full_date = moment(data_time).format('H:mm:ss a, MMMM Do YYYY');
  res.status(200).json({
    default_date,
    full_date,
  });
}
