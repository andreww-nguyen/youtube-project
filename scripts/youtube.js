import { videos } from '../data/video.js'
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';


console.log(videos);


// const date1 = dayjs('2026-08-16');
// const today = dayjs();

// // Get difference in days
// let timeBetween = today.diff(date1, 'day');
// let timeFormat = 'days'

// console.log(timeBetween);
// if (timeBetween > 365)
// {
//   timeBetween /= 365;
//   timeFormat = 'year';
// }
// else if (timeBetween < 365 && timeBetween > 30)
// {
//   timeBetween /= 30;
//   timeFormat = 'month';
// }
// else if (timeBetween < 30 && timeBetween > 7)
// {
//   timeBetween /= 7;
//   timeFormat = 'week';
// }
// else if (timeBetween < 7)
// {
//   timeFormat = 'day';
// }

// // grammar rules
// if (timeBetween !== 1)
// {
//   timeFormat += 's';
// }

// console.log(`${Math.floor(timeBetween)} ${timeFormat}`)