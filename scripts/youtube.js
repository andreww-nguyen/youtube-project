import { videos } from '../data/videos.js'
import { shorts } from '../data/shorts.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

let noSideBar = false;
let showSmallSideBar = false;
let underWindowWidth = false;


renderVideoGrid(getVideosPerRow(window.innerWidth));
renderShortsGrid(getShortsPerRow(window.innerWidth));
handleScreenSizeSideBar(window.innerWidth);
renderSideBar();


window.addEventListener('resize', () =>
{
  renderVideoGrid(getVideosPerRow(window.innerWidth));
  renderShortsGrid(getShortsPerRow(window.innerWidth));

  // handle screen sizing for sidebar
  handleScreenSizeSideBar(window.innerWidth);
  console.log(`under window size: ${underWindowWidth}`);
  console.log(`sidebar showing: ${showSmallSideBar}`);
  console.log(`no sidebar: ${noSideBar}`);
  renderSideBar();
});


document.querySelector('.js-hamburger-menu-container').addEventListener('click', () =>
{
  console.log('clicked menu icon');

  // change status of small side bar
  if (!showSmallSideBar)
    showSmallSideBar = true;
  else if (showSmallSideBar)
    showSmallSideBar = false;

  // render the sidebar
  renderSideBar();
});

function renderSideBar()
{
  if (noSideBar)
  {
    document.body.style = "padding-left: 16px";

    document.querySelector('.js-big-sidebar-v2').classList.remove('displayed');
    document.querySelector('.js-grey-background').classList.remove('displayed');
    document.querySelector('.js-small-sidebar').classList.remove('displayed');
    document.querySelector('.js-big-sidebar').classList.remove('displayed');
  }

  else if (showSmallSideBar && !underWindowWidth)
  {
    // show small sidebar
    document.querySelector('.js-small-sidebar').classList.add('displayed');

    // change margins to adjust for sidebar
    document.body.style = "padding-left: 90px";

    // hide the other sidebars
    document.querySelector('.js-big-sidebar').classList.remove('displayed');
    document.querySelector('.js-big-sidebar-v2').classList.remove('displayed');
    document.querySelector('.js-grey-background').classList.remove('displayed');
  }

  else if (showSmallSideBar && underWindowWidth)
  {
    // show small sidebar
    document.querySelector('.js-small-sidebar').classList.add('displayed');

    // change margins to adjust for sidebar
    document.body.style = "padding-left: 90px";

    // hide the other sidebars
    document.querySelector('.js-big-sidebar').classList.remove('displayed');
    document.querySelector('.js-big-sidebar-v2').classList.remove('displayed');
    document.querySelector('.js-grey-background').classList.remove('displayed');

  }

  else if (!showSmallSideBar && !underWindowWidth)
  {
    // display the big sidebar
    document.querySelector('.js-big-sidebar').classList.add('displayed');

    // change margins to adjust for sidebar
    document.body.style = "padding-left: 260px";

    // hide the other sidebars
    document.querySelector('.js-small-sidebar').classList.remove('displayed');
    document.querySelector('.js-big-sidebar-v2').classList.remove('displayed');
    document.querySelector('.js-grey-background').classList.remove('displayed');
  }

  else if (!showSmallSideBar && underWindowWidth)
  {
    // display big sidebar v2 and the grey overlay
    document.querySelector('.js-big-sidebar-v2').classList.add('displayed');
    document.querySelector('.js-grey-background').classList.add('displayed');

    // hide the other sidebars
    document.querySelector('.js-small-sidebar').classList.remove('displayed');
    document.querySelector('.js-big-sidebar').classList.remove('displayed');
  }
}


/**
 * 
 * @param {*} shortsPerRow 
 */
function renderShortsGrid(shortsPerRow)
{
  let shortsGridHTML = '';
  for (let i = 0; i < shortsPerRow; i++)
  {
    let short = shorts[i];
    shortsGridHTML += 
    `
      <a href="https://www.youtube.com/shorts/${short.getShortsCode()}">
        <div class="shorts-preview">
          <div class="shorts-thumbnail-row">
            <img class="shorts-thumbnail" src="../shorts-thumbnails/${short.getThumbnail()}">
          </div>

          <div class="shorts-info">
            <div class="shorts-title">
              ${short.getTitle()}
            </div>

            <button class="icon-area shorts-menu-button-5">
              <svg xmlns="http://www.w3.org/2000/svg"
              height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true">
                <path d="M12 4a2 2 0 100 4 2 2 0 000-4Zm0 6a2 2 0 100 4 2 2 0 000-4Zm0 6a2 2 0 100 4 2 2
                  0 000-4Z">
                </path>
              </svg>
            </button>
          </div>

          <div class="shorts-views">
            ${short.getViews()} views
          </div>
        </div>
      </a>
    `;
  };

  document.querySelector('.js-shorts-grid').innerHTML = shortsGridHTML;
}

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
  else if (windowWidth <= 1099)
    return 2;
  else if (windowWidth <= 1999)
    return 3;
  else if (windowWidth > 1999)
    return 4;
}

/**
 * 
 * @param {*} windowWidth 
 */
function getShortsPerRow(windowWidth)
{
  if (windowWidth <= 560)
    return 2;
  else if (windowWidth <= 1099)
    return 3;
  else if (windowWidth <= 1999)
    return 5;
  else if (windowWidth > 1999)
    return 6;
}

function handleScreenSizeSideBar(windowWidth)
{
  // size dimensions
  // no sidebar
  if (windowWidth <= 789)
  {
    noSideBar = true;
    showSmallSideBar = false;
    underWindowWidth = true;
  }

  // small sidebar with big sidebar v2
  else if (windowWidth <= 1349)
  {
    noSideBar = false;
    showSmallSideBar = true;
    underWindowWidth = true;
  }

  // small sidebar with big sidebar
  else if (windowWidth > 1349)
  {
    noSideBar = false;
    showSmallSideBar = false;
    underWindowWidth = false;
  }
}