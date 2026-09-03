import { videos } from '../data/videos.js'
import { shorts } from '../data/shorts.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

let noSideBar = false;
let showSmallSideBar = false;
let underWindowWidth = false;

const noSidebarQuery = window.matchMedia('(max-width: 789px)');
const compactSidebarQuery = window.matchMedia('(min-width: 790px) and (max-width: 1349px)');

noSidebarQuery.addEventListener('change', handleScreenSizeSideBar);
compactSidebarQuery.addEventListener('change', handleScreenSizeSideBar);

// render stuff
renderVideoGrid(getVideosPerRow(window.innerWidth));
renderShortsGrid(getShortsPerRow(window.innerWidth));
handleScreenSizeSideBar(window.innerWidth);
renderSideBar();

window.addEventListener('resize', () =>
{
  renderVideoGrid(getVideosPerRow(window.innerWidth));
  renderShortsGrid(getShortsPerRow(window.innerWidth));

  // handle screen sizing for sidebar
  console.log(`under window size: ${underWindowWidth}`);
  console.log(`sidebar showing: ${showSmallSideBar}`);
  console.log(`no sidebar: ${noSideBar}`);
});

window.addEventListener('click', (event) =>
{
  if (clickedOutside(event) && !showSmallSideBar)
  {
    showSmallSideBar = true;
    document.querySelector('.js-small-sidebar').classList.add('displayed');
    document.body.style = "padding-left: 90px";
    
    document.querySelector('.js-big-sidebar-v2').classList.remove('displayed');
    document.querySelector('.js-grey-background').classList.remove('displayed');
  }
  else if (clickedOutside(event) && noSideBar)
  {
    document.querySelector('.js-big-sidebar-v2').classList.remove('displayed');
    document.querySelector('.js-grey-background').classList.remove('displayed');
    document.querySelector('.js-small-sidebar').classList.remove('displayed');
    document.querySelector('.js-big-sidebar').classList.remove('displayed');
  }
})

document.querySelector('.js-hamburger-menu-container-v2').addEventListener('click', () =>
{
  if (!showSmallSideBar)
    showSmallSideBar = true;
  else if (showSmallSideBar)
    showSmallSideBar = false;

  renderSideBar();
});

document.querySelector('.js-hamburger-menu-container').addEventListener('click', () =>
{
  // change status of small side bar
  if (!showSmallSideBar)
    showSmallSideBar = true;
  else if (showSmallSideBar)
    showSmallSideBar = false;

  // render the sidebar
  renderSideBar();

  // handle case where screen size is low enough for no sidebar but user clicks
  // hamburger icon
  if (noSideBar)
  {
    document.querySelector('.js-big-sidebar-v2').classList.add('displayed');
    document.querySelector('.js-grey-background').classList.add('displayed');
  }
});

function clickedOutside(event)
{
  if (document.querySelector('.js-grey-background').contains(event.target))
    return true;
}

function renderSideBar()
{
  // hide all the the sidebars
  document.querySelector('.js-big-sidebar-v2').classList.remove('displayed');
  document.querySelector('.js-grey-background').classList.remove('displayed');
  document.querySelector('.js-small-sidebar').classList.remove('displayed');
  document.querySelector('.js-big-sidebar').classList.remove('displayed');

  if (noSideBar)
    document.body.style.paddingLeft = "16px";

  else if (showSmallSideBar && !underWindowWidth)
  {
    document.querySelector('.js-small-sidebar').classList.add('displayed');
    document.body.style = "padding-left: 90px";
  }

  else if (showSmallSideBar && underWindowWidth)
  {
    document.querySelector('.js-small-sidebar').classList.add('displayed');
    document.body.style = "padding-left: 90px";
  }

  else if (!showSmallSideBar && !underWindowWidth)
  {
    document.querySelector('.js-big-sidebar').classList.add('displayed');
    document.body.style = "padding-left: 260px";
  }

  else if (!showSmallSideBar && underWindowWidth)
  {
    document.querySelector('.js-big-sidebar-v2').classList.add('displayed');
    document.querySelector('.js-grey-background').classList.add('displayed');
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
  if (noSidebarQuery.matches)
  {
    noSideBar = true;
    showSmallSideBar = false;
    underWindowWidth = true;
  }
  else if (compactSidebarQuery.matches)
  {
    noSideBar = false;
    showSmallSideBar = true;
    underWindowWidth = true;
  }
  else
  {
    noSideBar = false;
    showSmallSideBar = false;
    underWindowWidth = false;
  }

  renderSideBar();
}