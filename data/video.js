class Video
{
  #videoCode;
  #thumbnail;
  #title;
  #length;
  #creator;
  #creatorPfp;
  #views;
  #dateReleased;

  constructor(videoDetails)
  {
    this.#videoCode = videoDetails.code;
    this.#thumbnail = videoDetails.thumbnail;
    this.#title = videoDetails.title;
    this.#length = videoDetails.length;
    this.#creator = videoDetails.creator;
    this.#creatorPfp = videoDetails.creatorPfp;
    this.#views = videoDetails.views;
    this.#dateReleased = videoDetails.dateReleased;
  }

  getVideoCode()
  {
    return this.#videoCode;
  }

  getThumbnail()
  {
    return this.#thumbnail;
  }

  getTitle()
  {
    return this.#title;
  }

  getLength()
  {
    return this.#length;
  }

  getCreator()
  {
    return this.#creator;
  }

  getCreatorPfp()
  {
    return this.#creatorPfp;
  }

  getViews()
  {
    return this.#views;
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
    thumbnail: 'german-reacts-to-car-chase.avif',
    title: 'German Reacts to the Funniest American Police Chase Ever',
    length: '28:09',
    creator: 'ohnepixel raw',
    creatorPfp: 'ohnepixel-raw.jpg',
    views: '119k',
    dateReleased: '2026-06-11'
  },
  
  {
    code: 'lyr5ff5MlQc',
    thumbnail: 'scariest-co-op-game.avif',
    title: 'The Scariest Co-op Game I Have Ever Played',
    length: '2:21:51',
    creator: 'ohnepixel raw',
    creatorPfp: 'ohnepixel-raw.jpg',
    views: '192k',
    dateReleased: '2026-06-16'
  },

  {
    code: 'k9KUUOjbYt4',
    thumbnail: 'streaming-peak.avif',
    title: 'I streamed PEAK until we beat it... It was a disaster...',
    length: '2:04:27',
    creator: 'ohnepixel raw',
    creatorPfp: 'ohnepixel-raw.jpg',
    views: '205',
    dateReleased: '2025-07-10'
  },

  {
    code: '1Rmnnu_ZDL8',
    thumbnail: 'plays-forza-for-first-time.avif',
    title: 'Driving Noob Plays Forza For The First Time Ever...',
    length: '1:11:55',
    creator: 'ohnepixel raw',
    creatorPfp: 'ohnepixel-raw.jpg',
    views: '415k',
    dateReleased: '2026-05-27'
  },

  {
    code: '4GqFdf3gFfo',
    thumbnail: 'react-to-skibidi-toilet.avif',
    title: "I watched the entirety of skibidi toilet, it's not what you expect",
    length: '3:27:08',
    creator: 'ohnepixel',
    creatorPfp: 'ohnepixel.jpg',
    views: '953k',
    dateReleased: '2025-01-02'
  },

  {
    code: 'KLmDAH0ppp8',
    thumbnail: 'hawaii-vs-japan.avif',
    title: "I watched the entirety of skibidi toilet, it's not what you expect",
    length: '23:56',
    creator: 'vb K Har',
    creatorPfp: 'vbK.jpg',
    views: '228k',
    dateReleased: '2023-11-15'
  },

  {
    code: 'WU0GteluwQc&t',
    thumbnail: 'lbsu-vs-ucla.avif',
    title: "Long Beach vs UCLA 2025 Men's Volleyball",
    length: '26:12',
    creator: 'moomoocowjonny',
    creatorPfp: 'moomoocowjonny.jpg',
    views: '738k',
    dateReleased: '2025-02-08'
  },

  {
    code: 'TLw-K5OZOHo&t',
    thumbnail: 'minecreaft-with-horror-mods.avif',
    title: "Minecraft, But We Installed Way Too Many Horror Mods",
    length: '59:48',
    creator: 'ohnepixel raw',
    creatorPfp: 'ohnepixel-raw.jpg',
    views: '422k',
    dateReleased: '2026-04-06'
  },

  {
    code: 'flXs_joCP9c',
    thumbnail: 'challenger-coaching-league.avif',
    title: "Challenger Player Has a Meltdown Trying to Coach Jynxzi & ohnepixel",
    length: '1:55:30',
    creator: 'ohnepixel',
    creatorPfp: 'ohnepixel.jpg',
    views: '87k',
    dateReleased: '2026-05-21'
  },

  {
    code: 'Zrua1Qvv0Nw',
    thumbnail: 'opening-tf2-cases.avif',
    title: "ohnepixel gets insanely lucky opening TF2 cases",
    length: '21:27',
    creator: 'ohnepixel raw',
    creatorPfp: 'ohnepixel-raw.jpg',
    views: '1.2M',
    dateReleased: '2023-11-13'
  },

  {
    code: 'qjXJsr7QHGZKhj9c',
    thumbnail: 'valorant-ohnepixel.avif',
    title: "every time Valorant shocked ohnepixel",
    length: '35:32',
    creator: 'ohnepixel',
    creatorPfp: 'ohnepixel.jpg',
    views: '1.2M',
    dateReleased: '2025-10-09'
  },

  {
    code: 'zHFsy2tUgRZM_lSw',
    thumbnail: 'geoguesser-noob-with-ai.avif',
    title: "can a geoguessr noob beat a geoguessr pro using ai?",
    length: '46:21',
    creator: 'ohnepixel raw',
    creatorPfp: 'ohnepixel-raw.jpg',
    views: '727k',
    dateReleased: '2025-10-13'
  },

  {
    code: 'C01uehFQoHo',
    thumbnail: 'grow-a-garden-with-admin.avif',
    title: "I Play Grow a Garden, but the Admin Trolls Me",
    length: '1:07:52',
    creator: 'ohnepixel',
    creatorPfp: 'ohnepixel.jpg',
    views: '627k',
    dateReleased: '2025-07-16'
  },

  {
    code: 'sJw8Yt1M35I',
    thumbnail: 'knife-trade-ups.avif',
    title: "ohnepixel loses his mind doing knife trade-ups",
    length: '39:42',
    creator: 'ohnepixel raw',
    creatorPfp: 'ohnepixel-raw.jpg',
    views: '464k',
    dateReleased: '2025-12-22'
  },

  {
    code: 'obCCyKwjMUs',
    thumbnail: 'uci-vs-lbsu.avif',
    title: "UCI vs Long Beach 2025 REMATCH",
    length: '16:29',
    creator: 'moomoocowjonny',
    creatorPfp: 'moomoocowjonny.jpg',
    views: '225k',
    dateReleased: '2025-04-02'
  },

  {
    code: 'LOBDsnLe2wc',
    thumbnail: 'ohnepixel-rplace.avif',
    title: "This Unhinged r/place Experiment Has Been Going on for Years...",
    length: '10:52',
    creator: 'ohnepixel raw',
    creatorPfp: 'ohnepixel-raw.jpg',
    views: '112k',
    dateReleased: '2026-05-22'
  },

  {
    code: 'WbUoomI6i2Q',
    thumbnail: 'ucla-vs-usc.avif',
    title: "UCLA at USC 2026",
    length: '29:38',
    creator: 'moomoocowjonny',
    creatorPfp: 'moomoocowjonny.jpg',
    views: '101k',
    dateReleased: '2026-03-04'
  },

  {
    code: 'uMpo11sFuUs',
    thumbnail: 'rating-viewer-bases.avif',
    title: "Rating My Viewers Bases, But I Keep Getting Trolled",
    length: '1:37:04',
    creator: 'ohnepixel',
    creatorPfp: 'ohnepixel.jpg',
    views: '370k',
    dateReleased: '2026-04-25'
  },

  {
    code: '9636GP0uuxo',
    thumbnail: 'teresaki-tournament.avif',
    title: "did we FINALLY do it? (Teresaki Tournament)",
    length: '33:29',
    creator: 'Isaiah Espinoza',
    creatorPfp: 'isaiah-pfp.jpg',
    views: '86k',
    dateReleased: '2026-01-05'
  },

  {
    code: '1N-TaPybEOQ',
    thumbnail: 'beating-elden-ring.avif',
    title: "I tried beating Elden Ring. It was a mistake...",
    length: '4:46:26',
    creator: 'ohnepixel raw',
    creatorPfp: 'ohnepixel-raw.jpg',
    views: '395k',
    dateReleased: '2024-07-09'
  },

  {
    code: 'MxV5Sjm5xok',
    thumbnail: 'ohnepixel-famous-clips.avif',
    title: "even more clips that made ohnepixel famous",
    length: '18:14',
    creator: 'ohnepixel raw',
    creatorPfp: 'ohnepixel-raw.jpg',
    views: '960k',
    dateReleased: '2026-02-24'
  },

  {
    code: 'GZbsPEaroTw',
    thumbnail: '2-vs-1-rocket-league.avif',
    title: "2 Noobs vs 1 Pro, But We Make it Impossible For Him...",
    length: '1:51:43',
    creator: 'ohnepixel',
    creatorPfp: 'ohnepixel.jpg',
    views: '119k',
    dateReleased: '2026-05-23'
  },

  {
    code: 'LIWZcsyC65k',
    thumbnail: 'fixing-forza-wheel.avif',
    title: "ohnepixel Loses It Trying to Fix His NEW Wheel For 3 Hours Again...",
    length: '46:06',
    creator: 'ohnepixel raw',
    creatorPfp: 'ohnepixel-raw.jpg',
    views: '166k',
    dateReleased: '2026-05-26'
  },

  {
    code: 'fRsUVoJEC2A',
    thumbnail: 'bounciest-team.avif',
    title: "The BOUNCIEST Open Gym Volleyball Team that couldn't win?",
    length: '20:22',
    creator: 'MK3Volleyball',
    creatorPfp: 'mk3volleyball.jpg',
    views: '61k',
    dateReleased: '2026-05-28'
  },
]

videos = videos.map((videoDetails) =>
{
  return new Video(videoDetails);
});