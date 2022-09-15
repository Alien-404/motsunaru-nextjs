import moment from 'moment-timezone';

export default function handler(req, res) {
  const data_time = 1662981377 * 1000;

  // format months
  moment.updateLocale('en', {
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'Augustussss',
      'Septemberer',
      'October',
      'November',
      'December',
    ],
  });

  const default_date = moment(data_time)
    .tz('Asia/Jakarta')
    .format('h:mm:ss a, dddd MMMM Do YYYY');
  const full_date = moment(data_time)
    .tz('Asia/Jakarta')
    .format('H:mm:ss a, dddd MMMM Do YYYY');
  const current_date = moment()
    .tz('Asia/Bangkok')
    .format('H:mm:ss a, dddd MMMM Do YYYY');
  res.status(200).json({
    locale_date: moment.tz.guess(),
    current_date,
    default_date,
    full_date,
  });
}
