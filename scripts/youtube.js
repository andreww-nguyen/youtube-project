import { videos, shuffleArray } from '../data/videos.js'
import { shorts } from '../data/shorts.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';


let noSideBar = false;
let showSmallSideBar = false;
let underWindowWidth = false;

const noSidebarQuery = window.matchMedia('(max-width: 789px)');
const compactSidebarQuery = window.matchMedia('(min-width: 790px) and (max-width: 1349px)');

noSidebarQuery.addEventListener('change', handleScreenSizeSideBar);
compactSidebarQuery.addEventListener('change', handleScreenSizeSideBar);

// randomize the order of the videos and shorts
shuffleArray(videos);
shuffleArray(shorts);

// render stuff
renderVideoGrid(getVideosPerRow(window.innerWidth));
renderShortsGrid(getShortsPerRow(window.innerWidth));
setShortsAnchor(getShortsPerRow(window.innerWidth))
handleScreenSizeSideBar(window.innerWidth);
renderSideBar();


function setShortsAnchor(shortsPerRow)
{
  for (let i = 0; i < shortsPerRow; i++)
  {
    let short = shorts[i]
    document.querySelector(`.shorts-menu-button-${short.getShortsCode()}`).style.anchorName
      = `--${short.getShortsCode()}`
  
      document.querySelector(`.shorts-menu-${short.getShortsCode()}`).style.positionAnchor = 
      `--${short.getShortsCode()}`

      document.querySelector(`.shorts-info-${short.getShortsCode()}`).style.anchorName =
      `--info-${short.getShortsCode()}`;

      document.querySelector(`.shorts-menu-button-${short.getShortsCode()}`).style.positionAnchor = 
      `--info-${short.getShortsCode()}`;
  }
}

document.querySelectorAll('.js-dismiss-button').forEach((button) =>
{
  const dialog = button.closest('dialog');
  const dialogId = dialog.id;
  const openButton = document.querySelector(`[data-target="${dialogId}"]`);

  button.addEventListener('click', () =>
  {
    dialog.close();
    openButton.focus();
  });
});

document.querySelectorAll('.js-modal-button').forEach((link) =>
{
  const dialogId = link.dataset.targetId;
  const dialog = document.querySelector(`#${dialogId}`);

  // opening the modal
  link.addEventListener('click', () =>
  {
    dialog.showModal();
  });
});


document.querySelectorAll('.js-menu-link').forEach((link) =>
{
  link.addEventListener('click', () =>
  {
    // hide the menu popover when we open up a new popover
    document.getElementById('profile-menu').hidePopover();
  });
});

document.querySelectorAll('.js-back-to-menu').forEach((element) =>
{
  element.addEventListener('click', () =>
  {
    // retrieve the element id from the dataset attribute
    const elementId = element.dataset.elementId;
    
    // hide the current menu
    document.getElementById(elementId).hidePopover();
  });
});


document.querySelector('.js-big-sidebar-v2').querySelector('.js-show-less').addEventListener('click', () =>
{
  document.querySelector('.js-big-sidebar-v2').querySelectorAll('.extra').forEach((link) =>
  {
    link.classList.remove('displayed');
  });

  // display the show more link again
  document.querySelector('.js-big-sidebar-v2').querySelector('.js-show-more').style.display = 'flex';
}); 

document.querySelector('.js-big-sidebar-v2').querySelector('.js-show-more').addEventListener('click', () =>
{
  // show all the extra links
  document.querySelector('.js-big-sidebar-v2').querySelectorAll('.extra').forEach((link) =>
  {
    link.classList.add('displayed');
  });

  // hide the show more link
  document.querySelector('.js-big-sidebar-v2').querySelector('.js-show-more').style.display = 'none';
});

document.querySelector('.js-big-sidebar').querySelector('.js-show-less').addEventListener('click', () =>
{
  document.querySelector('.js-big-sidebar').querySelectorAll('.extra').forEach((link) =>
  {
    link.classList.remove('displayed');
  });

  // display the show more link again
  document.querySelector('.js-big-sidebar').querySelector('.js-show-more').style.display = 'flex';
});

document.querySelector('.js-big-sidebar').querySelector('.js-show-more').addEventListener('click', () =>
{
  // show all the extra links
  document.querySelector('.js-big-sidebar').querySelectorAll('.extra').forEach((link) =>
  {
    link.classList.add('displayed');
  });

  // hide the show more link
  document.querySelector('.js-big-sidebar').querySelector('.js-show-more').style.display = 'none';
});



window.addEventListener('resize', () =>
{
  renderVideoGrid(getVideosPerRow(window.innerWidth));
  renderShortsGrid(getShortsPerRow(window.innerWidth));
  setShortsAnchor(getShortsPerRow(window.innerWidth))
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

          <div class="shorts-info shorts-info-${short.getShortsCode()} ">
            <div class="shorts-title">
              ${short.getTitle()}
            </div>
          </div>

          <div class="shorts-views">
            ${short.getViews()} views
          </div>
        </div>
      </a>

      <button popovertarget="shorts-menu-${short.getShortsCode()}" 
      class="icon-area js-shorts-menu-button shorts-menu-button shorts-menu-button-${short.getShortsCode()}"
      data-short-code="${short.getShortsCode()}">
        <svg xmlns="http://www.w3.org/2000/svg"
        height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true">
          <path d="M12 4a2 2 0 100 4 2 2 0 000-4Zm0 6a2 2 0 100 4 2 2 0 000-4Zm0 6a2 2 0 100 4 2 2
            0 000-4Z">
          </path>
        </svg>
      </button>

      <div popover id="shorts-menu-${short.getShortsCode()}" 
      class="shorts-menu shorts-menu-${short.getShortsCode()}"
      data-short-code="${short.getShortsCode()}">
        <div class="pop-up-link">
          <div class="pop-up-icon-area">
            <svg xmlns="http://www.w3.org/2000/svg"
            height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true">
              <path d="M2 2.864v6.277a.5.5 0 00.748.434L9 6.002 2.748 2.43A.5.5 0 002 2.864ZM21 5h-9a1 1
                0 100 2h9a1 1 0 100-2Zm0 6H9a1 1 0 000 2h12a1 1 0 000-2Zm0 6H9a1 1 0 000 2h12a1 1 0
                000-2Z">
              </path>
            </svg>
          </div>

          <div class="pop-up-desc">
            Add to queue
          </div>
        </div>

        <div class="pop-up-link">
          <div class="pop-up-icon-area">
            <svg xmlns="http://www.w3.org/2000/svg"
            height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true">
              <path d="m4 2.999-.146.073A1.55 1.55 0 003 4.454v16.545a1 1 0 102 0v-6.491a7.26 7.26 0
                016.248.115l.752.376a8.94 8.94 0 008 0l.145-.073c.524-.262.855-.797.855-1.382V4.458a1.21
                1.21 0 00-1.752-1.083 7.26 7.26 0 01-6.496 0L12 2.999a8.94 8.94 0 00-8 0Zm7.105
                1.79v-.002l.752.376A9.26 9.26 0 0019 5.641v7.62a6.95 6.95 0 01-6.105-.052l-.752-.376A9.261 9.261
                0 005 12.355v-7.62a6.94 6.94 0 016.105.054Z">
              </path>
            </svg>
          </div>

          <div class="pop-up-desc">
            Report
          </div>
        </div>

        <div class="pop-up-link">
          <div class="pop-up-icon-area">
            <svg xmlns="http://www.w3.org/2000/svg"
            height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true">
              <path d="M19 2H5a4 4 0 00-4 4v10a4 4 0 004 4h2v1.604a1.41 1.41 0 002.095 1.232L14.2 20H19a4
                4 0 004-4V6a4 4 0 00-4-4ZM5 4h14a2 2 0 012 2v10a2 2 0 01-2 2h-5.318l-.453.252L9 20.6V18H5a2
                2 0 01-2-2V6a2 2 0 012-2Zm7 2a1 1 0 00-1 1v4.5a1 1 0 002 0V7a1 1 0 00-1-1Zm0 7.75a1.25 1.25
                0 100 2.5 1.25 1.25 0 000-2.5Z">
              </path>
            </svg>
          </div>

          <div class="pop-up-desc">
            Send feedback
          </div>
        </div>
      </div>
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