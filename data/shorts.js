class Short
{
  #shortsCode;
  #thumbnail;
  #title;
  #views;

  constructor(shortsDetails)
  {
    this.#shortsCode = shortsDetails.code;
    this.#thumbnail = shortsDetails.thumbnail;
    this.#title = shortsDetails.title;
    this.#views = shortsDetails.views;
  }

  getShortsCode()
  {
    return this.#shortsCode;
  }

  getThumbnail()
  {
    return this.#thumbnail;
  }

  getTitle()
  {
    return this.#title;
  }

  getViews()
  {
    return this.#views;
  }
}

export let shorts = 
[
  {
    code: 'J096BP85o_U',
    thumbnail: 'dillon-klein-montage.avif',
    title: "Dillon Klein leads Trojans to #3 in the nation. #ncaavolleyball #usc #volleyball #haikyuuxyn",
    views: '22k'
  },
  
  {
    code: '7pfDf-Udx2c',
    thumbnail: 'ohnepixel-artist.avif',
    title: `"be your own biggest fan" 💀`,
    views: '1.7M'
  },

  {
    code: 'mIYeMJPZq_A',
    thumbnail: 'moni-nikolov-montage.avif',
    title: `Undefeated season? #LongBeachState #MoniNikolov #ncaavolleyball #volleyball`,
    views: '16k'
  },

  {
    code: 'XvtkAdn6pTE',
    thumbnail: 'mk-3-hitting.avif',
    title: `Destined to Hit😈#volleyball #vertical`,
    views: '189k'
  },

  {
    code: 'C0am1M4eu2s',
    thumbnail: 'ohnepixel-igl.avif',
    title: `this gotta be scripted 💀`,
    views: '758k'
  },

  {
    code: 'CnsgsREEj7I',
    thumbnail: 'favorite-song.avif',
    title: "Simeon “Moni” Nikolov 🇧🇬 #ncaavolleyball #volleyball",
    views: '2.1K'
  }
]

shorts = shorts.map((shortDetails) =>
{
  return new Short(shortDetails);
});