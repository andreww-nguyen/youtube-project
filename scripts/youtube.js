import { videos } from '../data/videos.js'
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';


let videosPerRow = getVideosPerRow(window.innerWidth);
renderVideoGrid(videosPerRow);

window.addEventListener('resize', () =>
{
  videosPerRow = getVideosPerRow(window.innerWidth);
  renderVideoGrid(videosPerRow);
});

/**
 * 
 * @param {*} videosPerRow 
 */
function renderVideoGrid(videosPerRow)
{
  let videoGridHTML = '';
  for (let i = 0; i < videosPerRow; i++)
  {
    // generate the HTML for the video
    videoGridHTML += generateVideoHTML(videos[i])
  }
  document.querySelectorAll('.js-video-grid')[0].innerHTML = videoGridHTML;
  videoGridHTML = '';

  // generate HTML for bottom videos
  for (let i = videosPerRow; i < videos.length; i++)
  {
    // generate the HTML for the video
    videoGridHTML += generateVideoHTML(videos[i])
  }
  document.querySelectorAll('.js-video-grid')[1].innerHTML = videoGridHTML;
}

/**
 * 
 * @param {*} video 
 * @returns 
 */
function generateVideoHTML(video)
{
  return `
    <a href="https://www.youtube.com/watch?v=${video.getVideoCode()}">
      <div class="video-preview">
        <div class="thumbnail-row">
          <img class="thumbnail" src="../thumbnails/${video.getThumbnail()}">

          <div class="video-time">
            ${video.getLength()}
          </div>
        </div>

        <div class="video-info-grid">
          <div class="channel-picture">
            <img class="profile-pic" src="../pfps/${video.getCreatorPfp()}">
          </div>

          <div class="video-info">
            <p class="video-title">
              ${video.getTitle()}
            </p>
    
            <p class="channel-name">
              ${video.getCreator()}
            </p>
        
            <p class="video-stats">
              ${video.getViews()} views &#183; ${calculateElapsedTime(video.getDateReleased())} ago
            </p>
          </div>
        </div>
      </div>
    </a>
  `;
}

/**
 * 
 * @param {*} dateReleased 
 * @returns 
 */
function calculateElapsedTime(dateReleased)
{
  const today = dayjs();
  let timeBetween = today.diff(dateReleased, 'day');
  let timeFormat = 'days'

  // years
  if (timeBetween >= 365)
  {
    timeBetween /= 365;
    timeFormat = 'year';
  }

  // months
  else if (timeBetween >= 30)
  {
    timeBetween /= 30;
    timeFormat = 'month';
  }

  // weeks
  else if (timeBetween >= 7)
  {
    timeBetween /= 7;
    timeFormat = 'week';
  }

  // days
  else if (timeBetween < 7)
    timeFormat = 'day';

  // grammar rules
  if (Math.floor(timeBetween) !== 1)
    timeFormat += 's';

  // return the date elasped as a string
  return `${Math.floor(timeBetween)} ${timeFormat}`;
}

/**
 * 
 * @param {*} windowWidth 
 * @returns 
 */
function getVideosPerRow(windowWidth)
{
  if (windowWidth <= 560)
    return 1; 
  else if (windowWidth > 560 && windowWidth <= 1099)
    return 2;
  else if (windowWidth > 1099 && windowWidth <= 1999)
    return 3;
  else if (windowWidth > 1999)
    return 4;
}

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