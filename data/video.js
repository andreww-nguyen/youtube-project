class Video
{
  #videoCode;
  #thumbnailImage;
  #title;
  #length;
  #creator;
  #creatorPfp;
  #views;
  #dateReleased;

  constructor(videoDetails)
  {
    this.#videoCode = videoDetails.code;
    this.#thumbnailImage = videoDetails.thumbnailImage;
    this.#title = videoDetails.title;
    this.#length = videoDetails.length;
    this.#creator = videoDetails.creator;
    this.#creatorPfp = videoDetails.creatorPfp;
    this.#views = videoDetails.views;
    this.#dateReleased = videoDetails.dateReleased;
  }
}

export let videos =
[
  {
    code: 'v=1Rmnnu_ZDL8',
    thumbnailImage: 'plays-forza-for-first-time.avif',
    title: 'Driving Noob Plays Forza For The First Time Ever...',
    length: '1:11:55',
    creator: 'ohnepixel raw',
    creatorPfp: 'ohnepixel-raw.jpg',
    views: '415k',
    dateReleased: '4 weeks ago'
  }
]

videos = videos.map((videoDetails) =>
{
  return new Video(videoDetails);
});