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

  getDateReleased()
  {
    return this.#dateReleased;
  }
}

export let videos =
[
  {
    code: 'RjfQJlMeh1o',
    thumbnailImage: 'german-reacts-to-car-chase.avif',
    title: 'German Reacts to the Funniest American Police Chase Ever',
    length: '28:09',
    creator: 'ohnepixel raw',
    creatorPfp: 'ohnepixel-raw.jpg',
    views: '119k',
    dateReleased: '2026-06-11'
  },

  {
    code: 'k9KUUOjbYt4',
    thumbnailImage: 'streaming-peak.avif',
    title: 'I streamed PEAK until we beat it... It was a disaster...',
    length: '2:04:27',
    creator: 'ohnepixel raw',
    creatorPfp: 'ohnepixel-raw.jpg',
    views: '205',
    dateReleased: '2025-07-10'
  },

  {
    code: '1Rmnnu_ZDL8',
    thumbnailImage: 'plays-forza-for-first-time.avif',
    title: 'Driving Noob Plays Forza For The First Time Ever...',
    length: '1:11:55',
    creator: 'ohnepixel raw',
    creatorPfp: 'ohnepixel-raw.jpg',
    views: '415k',
    dateReleased: '2026-05-27'
  },

  {
    code: '4GqFdf3gFfo',
    thumbnailImage: 'react-to-skibidi-toilet.avif',
    title: "I watched the entirety of skibidi toilet, it's not what you expect",
    length: '1:11:55',
    creator: 'ohnepixel raw',
    creatorPfp: 'ohnepixel-raw.jpg',
    views: '415k',
    dateReleased: '2025-01-02'
  }
]

videos = videos.map((videoDetails) =>
{
  return new Video(videoDetails);
});