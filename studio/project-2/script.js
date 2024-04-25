// console.log(collection[0].material)

// let materiallist = document.getElementById("material_list");
// console.log(materiallist);

// for (let i = 0; i < collection.length; i++) {

// }

//all song data
let jsonData = [
    {
      "songName": "America's Boy",
      "artistName": "Broadcast",
      "genre": "Psychadelic",
      "listenedToTheMost": "Fast walking in the city",
      "favoriteLyric": "“Rockets on we're arm in arm”",
      "year": 2005,
      "image": "America's-Boy",
      "songLink": "https://open.spotify.com/track/31cQKr1hxHfIWVfcnuNzrQ?si=dd338e264fa04b0f"
    },
    {
      "songName": "Back, Baby",
      "artistName": "Jessica Pratt",
      "genre": "Folk",
      "listenedToTheMost": "Laying in bed with my boyfriend",
      "favoriteLyric": "\"And sometimes I pray for the rain\"",
      "year": 2015,
      "image": "Back-Baby",
      "songLink": "https://open.spotify.com/track/6qPr2b9A2aw4n0rbDoUFUg?si=d9197d8fb3934d6f"
    },
    {
      "songName": "Beetlebum",
      "artistName": "Blur",
      "genre": "Rock",
      "listenedToTheMost": "Driving anywhere",
      "favoriteLyric": "“And when she lets me slip away She turns me on and all my violence gone”",
      "year": 1997,
      "image": "Beetlebum",
      "songLink": "https://open.spotify.com/track/4OHVCeQYPncEwZOtNAJZZx?si=481b97035db841bb"
    },
    {
      "songName": "Body by Crystal",
      "artistName": "Spike Fuck",
      "genre": "Aussie Rock",
      "listenedToTheMost": "Morning Stroll",
      "favoriteLyric": "“Your mood swings your penchant for methamphetamine”",
      "year": 2019,
      "image": "Body-by-Crystal",
      "songLink": "https://open.spotify.com/track/1IGZyCqalEv1ZyAyCSpmsZ?si=0d1f683ad5774909"
    },
    {
      "songName": "Boys In the Better Land",
      "artistName": "Fonatines D.C. ",
      "genre": "Rock (irish)",
      "listenedToTheMost": "Cramming out homework or at the gym",
      "favoriteLyric": "\"If you're a rock star, porn star, superstar\"",
      "year": 2019,
      "image": "Boys-In-the-Better-Land",
      "songLink": "https://open.spotify.com/track/2dxXKqqpSV4eCgPxC6t8mn?si=d6377f5b630344ac"
    },
    {
      "songName": "Caustic Cross",
      "artistName": "Beach Fossils",
      "genre": "Alt Rock",
      "listenedToTheMost": "Walking in the city",
      "favoriteLyric": "“And in my head I know I finally found a way”",
      "year": 2013,
      "image": "Caustic-Cross",
      "songLink": "https://open.spotify.com/track/4uZXZbMOiOwzk1LF9PxUkh?si=0674ab06bfa54aa0"
    },
    {
      "songName": "Chelsea Daggers",
      "artistName": "The Fratellis",
      "genre": "Indie",
      "listenedToTheMost": "getting ready ",
      "favoriteLyric": "\"I was good, she was hot\"",
      "year": 2007,
      "image": "Chelsea-Daggers",
      "songLink": "https://open.spotify.com/track/3ItzRpwvKtkDSNdRSjXu7Z?si=47553ffe7f1d431f"
    },
    {
      "songName": "Chrono Trigger",
      "artistName": "Tommy Richman",
      "genre": "Experimental",
      "listenedToTheMost": "When I have to get somewhere QUICK",
      "favoriteLyric": "\"I kinda wanna pick up on a couple things",
      "year": 2021,
      "image": "Chrono-Trigger",
      "songLink": "https://open.spotify.com/track/7iQjVmkP6zGWz7U3ITaKKO?si=69828d4b8fee4b4e"
    },
    {
      "songName": "Come Back",
      "artistName": "Alex G",
      "genre": "Shoegaze",
      "listenedToTheMost": "Laying in bed",
      "favoriteLyric": "\"Wish I could touch the ground\"",
      "year": 2012,
      "image": "Come-Back",
      "songLink": "https://open.spotify.com/track/45lZSJkaVUL4IO04uZo63t?si=61c0b71463a64516"
    },
    {
      "songName": "Cronenberg",
      "artistName": "Surf Curse",
      "genre": "Surf Rock",
      "listenedToTheMost": "Running",
      "favoriteLyric": "\"I wish we could talk\"",
      "year": 2017,
      "image": "Cronenberg",
      "songLink": "https://open.spotify.com/track/2GIi8hqrrJbgMODQncpYBz?si=c7508b77115b4253"
    },
    {
      "songName": "Drunk in LA",
      "artistName": "Beach House",
      "genre": "Alt/Indie",
      "listenedToTheMost": "Long late-night drive melancholy",
      "favoriteLyric": "“I had a good run playing horses in my mind”",
      "year": 2018,
      "image": "Drunk-in-LA",
      "songLink": "https://open.spotify.com/track/76XDNJIQpP9WGO5XASGBww?si=3afc3072086f4b36"
    },
    {
      "songName": "Duk Koo Kim",
      "artistName": "Sun Kil Moon",
      "genre": "Folk Rock",
      "listenedToTheMost": "Uber home from Brooklyn",
      "favoriteLyric": "\"Woken up from a dream last night\"",
      "year": 2003,
      "image": "Duk-Koo-Kim",
      "songLink": "https://open.spotify.com/track/5LlfYiHiK7xYMuP6NYaR5w?si=5543e4cb148f4a7a"
    },
    {
      "songName": "Eternal Summer",
      "artistName": "The Strokes",
      "genre": "Alt Rock",
      "listenedToTheMost": "Driving down to the beach, its summer time",
      "favoriteLyric": "\"Summer is coming, it's here to stay\"",
      "year": 2020,
      "image": "Eternal-Summer",
      "songLink": "https://open.spotify.com/track/6IRzBP4gVoV4D2zHmocoWy?si=621335ad31984694"
    },
    {
      "songName": "Femme Fatale",
      "artistName": "The Velvet Underground, Nico",
      "genre": "Rock",
      "listenedToTheMost": "Sleeping in",
      "favoriteLyric": "\"Youre number 37 have a look\"",
      "year": 1967,
      "image": "Femme-Fatale",
      "songLink": "https://open.spotify.com/track/3PG7BAJG9WkmNOJOlc4uAo?si=9c0136ae75c940ac"
    },
    {
      "songName": "Kicker",
      "artistName": "Alex G",
      "genre": "Shoegaze",
      "listenedToTheMost": "Anything tbh",
      "favoriteLyric": "“Thinking \"Hey, maybe we should turn this boat around””",
      "year": 2015,
      "image": "Kicker",
      "songLink": "https://open.spotify.com/track/0J3fUMKfyeH6lQ6u7a2jnj?si=c5905dfc15bb4796"
    },
    {
      "songName": "Last Train to London",
      "artistName": "Electric Light Orchestra",
      "genre": "Rock",
      "listenedToTheMost": "Cooking & Dancing",
      "favoriteLyric": "“But I really want tonight to last forever”",
      "year": 1972,
      "image": "Last-Train-to-London",
      "songLink": "https://open.spotify.com/track/3kglRq6t6F0ZUs1SO5jKFf?si=7831f4dead384a23"
    },
    {
      "songName": "Lavender Buds",
      "artistName": "MF DOOM",
      "genre": "Hip Hop",
      "listenedToTheMost": "Anytime of day in the spring",
      "favoriteLyric": "\"I just lie awake and think of pleasent nights we spent\"",
      "year": 2006,
      "image": "Lavender-Buds",
      "songLink": "https://open.spotify.com/track/7gMsgre9fYLEzbVAoj5WSH?si=a584d146aa594a35"
    },
    {
      "songName": "Listen to Your Friends",
      "artistName": "Declan Mckenna",
      "genre": "Indie/Alt",
      "listenedToTheMost": "With my best friend in my car",
      "favoriteLyric": "\"I love you every other day\"",
      "year": 2017,
      "image": "Listen-to-Your-Friends",
      "songLink": "https://open.spotify.com/track/4mvPRLDf0ZedTzzXaXEavJ?si=91a1f498565a4dc4"
    },
    {
      "songName": "Lorelai",
      "artistName": "Cocteau Twins",
      "genre": "Dream Pop",
      "listenedToTheMost": "Dancing and Spining in a Circle",
      "favoriteLyric": "\"...\"",
      "year": 1984,
      "image": "Lorelai",
      "songLink": "https://open.spotify.com/track/1ZnXuijpwEBjhNxpEnb8WH?si=c5dcbd4385554666"
    },
    {
      "songName": "My Blueberry Life ",
      "artistName": "Current Joys",
      "genre": "Alt/Indie",
      "listenedToTheMost": "About to take off on a plane",
      "favoriteLyric": "“My blueberry life, It isn't so nice”",
      "year": 2014,
      "image": "My-Blueberry-Life",
      "songLink": "https://open.spotify.com/track/498pdyZakHVgo9RqnuQooT?si=849a9737625541c5"
    },
    {
      "songName": "New Horse",
      "artistName": "Slow Pulp",
      "genre": "Shoegaze",
      "listenedToTheMost": "Driving really fast on an empty highway ",
      "favoriteLyric": "“If I could treat myself better, I know I'm still getting better”",
      "year": 2020,
      "image": "New-Horse",
      "songLink": "https://open.spotify.com/track/61JUm4wjJZzp3emm9q3BuH?si=6576ba97c648480a"
    },
    {
      "songName": "Nothing Like",
      "artistName": "Mannequin Pussy",
      "genre": "American Punk",
      "listenedToTheMost": "Walking home after a night out",
      "favoriteLyric": "\"I spin round you\"",
      "year": 2024,
      "image": "Nothing-Like",
      "songLink": "https://open.spotify.com/track/7sWKIQsoW2dlKMNobxXoXp?si=a437d86f3cf14e63"
    },
    {
      "songName": "Onie",
      "artistName": "The Electric Prunes",
      "genre": "Pyschadelic Rock",
      "listenedToTheMost": "A nice chippy spring stroll",
      "favoriteLyric": "\"Do all the fun things, seek out the laughter\"",
      "year": 1967,
      "image": "Onie",
      "songLink": "https://open.spotify.com/track/0Aa6hHw9x7pRbifLrVHqfd?si=f960a92aee904623"
    },
    {
      "songName": "Origami",
      "artistName": "binki",
      "genre": "Alt/Indie",
      "listenedToTheMost": "When I want to feel something (laughing crying emoji)",
      "favoriteLyric": "\"Coulda been an astronaut, couldve been like armstrong\"",
      "year": 2023,
      "image": "Origami",
      "songLink": "https://open.spotify.com/track/5XXVmFsNpBpvNBpzXWdqqQ?si=73163faa065b447f"
    },
    {
      "songName": "Par 5",
      "artistName": "Kitty Craft",
      "genre": "Alt/Indie",
      "listenedToTheMost": "Sunbathing outside in the summer",
      "favoriteLyric": "\"Fill up on Oreo High\"",
      "year": 1998,
      "image": "Par-5",
      "songLink": "https://open.spotify.com/track/1FBEnYsjuL5pjKyjLtgtf4?si=760d8ef624c641b7"
    },
    {
      "songName": "Paris 2004",
      "artistName": "Peter Bjorn and John",
      "genre": "Baroque-pop",
      "listenedToTheMost": "In paris with my boyfriend",
      "favoriteLyric": "\"You paint a ring on my finger with your black marker-pen\"",
      "year": 2006,
      "image": "Paris-2004",
      "songLink": "https://open.spotify.com/track/6ZTugqqwUAtGc6paIOkDF4?si=ad3e5b4c29c948d3"
    },
    {
      "songName": "Please",
      "artistName": "jagger finn",
      "genre": "Indie",
      "listenedToTheMost": "On the plane flying home ",
      "favoriteLyric": "\"And I guess this will be the right thing for us\"",
      "year": 2019,
      "image": "Please",
      "songLink": "https://open.spotify.com/track/3yR2neLio3L6Jt6xYP0dVd?si=578ac23d9b224052"
    },
    {
      "songName": "See You Later, I'm Gone",
      "artistName": "Robert Lester Folsom",
      "genre": "Country/Folk",
      "listenedToTheMost": "Sitting on my roof with my boyfriend",
      "favoriteLyric": "\"And pretty soon they'll flutter down\"",
      "year": 2014,
      "image": "See-You-Later-I'm-Gone",
      "songLink": "https://open.spotify.com/track/4p6GZUl0cxYCTYw0gokzUW?si=dd3333ff81b54742"
    },
    {
      "songName": "Silence Is Loud",
      "artistName": "Nia Archives",
      "genre": "Brit Jungle",
      "listenedToTheMost": "RUNNING",
      "favoriteLyric": "\"I ain't got\"",
      "year": 2024,
      "image": "Silence-Is-Loud",
      "songLink": "https://open.spotify.com/track/1LqFMtMW44W8XQ1OtV43gg?si=0aaaf070b792482d"
    },
    {
      "songName": "Spiderhead",
      "artistName": "Cage The Elephant",
      "genre": "Indie/Alt",
      "listenedToTheMost": "Getting ready pregame",
      "favoriteLyric": "\"I think your mother wants me dead\"",
      "year": 2013,
      "image": "Spiderhead",
      "songLink": "https://open.spotify.com/track/5r5Lj2MkgwQJz6TaBdL865?si=1d85e85b953946d7"
    },
    {
      "songName": "Sutphin Boulevard",
      "artistName": "Blood Orange",
      "genre": "Alt/Indie",
      "listenedToTheMost": "Fast walking in the city",
      "favoriteLyric": "\"Mother, See you in the may when i'm a boy\"",
      "year": 2011,
      "image": "Sutphin-Boulevard",
      "songLink": "https://open.spotify.com/track/2NtqI3Ylig7bB36esIwYuE?si=131259caaf614c19"
    },
    {
      "songName": "Tearjerker",
      "artistName": "Small Forward",
      "genre": "Indie Rock",
      "listenedToTheMost": "Sitting by the water",
      "favoriteLyric": "\"When you look me in the eyes dear, what will you do?",
      "year": 2018,
      "image": "Tearjerker",
      "songLink": "https://open.spotify.com/track/5nradlxm7nAzQVjRWXK8rG?si=4adecce295134a51"
    },
    {
      "songName": "The Thing",
      "artistName": "Pixies",
      "genre": "Alt Rock",
      "listenedToTheMost": "Long drive down the coast",
      "favoriteLyric": "“At least I must just go and say, \"Hello”",
      "year": 1990,
      "image": "The-Thing",
      "songLink": "https://open.spotify.com/track/16EKGMPGE3f6X3p18CjtkB?si=0162c04bbcae4445"
    },
    {
      "songName": "Trees and Flowers",
      "artistName": "Strawberry Switchblade",
      "genre": "New Wave Pop",
      "listenedToTheMost": "Getting ready in the morning as the sun shines down",
      "favoriteLyric": "\"Ba-ba-ba-ba-ba-ba,ba-ba-ba-ba-ba-ba, ooh\"",
      "year": 1982,
      "image": "Trees-and-Flowers",
      "songLink": "https://open.spotify.com/track/39VxarnBZV8POFPXvnAD2U?si=8039cc23d2774bec"
    },
    {
      "songName": "Velvet Ring",
      "artistName": "Big Thief",
      "genre": "Indie Folk",
      "listenedToTheMost": "Wakign up early morning",
      "favoriteLyric": "\"Ben, he loved her like he loved no one\"",
      "year": 2016,
      "image": "Velvet-Ring",
      "songLink": "https://open.spotify.com/track/3oBNQdDbNrs8wQbcZ3BXwP?si=0064183e06004175"
    },
    {
      "songName": "Waves-Tame Impala Remix",
      "artistName": "Miguel, Tame Impala",
      "genre": "Indie Pop",
      "listenedToTheMost": "Driving down to the beach, its summer time",
      "favoriteLyric": "\"Do you got that ocean?\"",
      "year": 2016,
      "image": "Waves-Tame-Impala-Remix",
      "songLink": "https://open.spotify.com/track/3lB0GMiI5KxDbTOG8V3bOx?si=6bf80ef63ecb497d"
    },
    {
      "songName": "You're Not The Only One I Know",
      "artistName": "The Sundays",
      "genre": "Dream Pop",
      "listenedToTheMost": "Walking around the city morning",
      "favoriteLyric": "\"And I'm too proud to talk to you anyway\"",
      "year": 1990,
      "image": "You're-Not-The-Only-One-I-Know",
      "songLink": "https://open.spotify.com/track/6PmbpHTKSmKP3FuMIbjttI?si=d3f4460bc204407d"
    },
    {
      "songName": "Your Own",
      "artistName": "SALES",
      "genre": "Indie Pop",
      "listenedToTheMost": "With my best friend sophia",
      "favoriteLyric": "\"You're a long way from home, and the feeling's so loud\"",
      "year": 2018,
      "image": "Your-Own",
      "songLink": "https://open.spotify.com/track/3axNvNVXW11vfhQrNdbCOV?si=a9cdf38d6e9143f5"
    },
    {
      "songName": "yrstruly (CFCF remix)",
      "artistName": "The Hellp",
      "genre": "Dance/Electronic",
      "listenedToTheMost": "Walking like so so fast ",
      "favoriteLyric": "\"I'm still in the city\"",
      "year": 2022,
      "image": "yrstruly-(CFCF remix)",
      "songLink": "https://open.spotify.com/track/4NIUIDCnoIutrRS2kGYOj5?si=31d7541271a942a3"
    }
   ]

//the left container that holds all the songs
let songList = document.querySelector(".song-list");

//creates a div for all the songs within jsonData
for (let i = 0; i < jsonData.length; i++){
    let songContainer =  document.createElement("div");
    songContainer.classList.add("songsPreview");
    songContainer.setAttribute('data-release-year', jsonData[i].year);
    songContainer.setAttribute("number", i);

    let songTitle = document.createElement("div");
    songTitle.textContent = jsonData[i].songName;
    songContainer.appendChild(songTitle);

    let songAuthor = document.createElement("div");
    songAuthor.textContent = jsonData[i].artistName;
    songContainer.appendChild(songAuthor);

    let songYear = document.createElement("div");
    songYear.textContent = jsonData[i].year;
    // songYear.classList.add("hidden");
    songContainer.appendChild(songYear);

    songList.appendChild(songContainer);

    // songContainer.addEventListener("click", function(){
    //   console.log("test")
    //   songYear.style.display = "flex";
    // })

    songContainer.addEventListener("mouseover", function() {


        let spotifyCover = document.getElementById("cover");
        let spotifyTitle = document.getElementById("title");
        let spotifyArtist = document.getElementById("artist");
        let spotifyLink = document.getElementById("songLink");
        let spotifyListenTo = document.getElementById("listenTo");
        let spotifyLyric = document.getElementById("lyric");




        const number = songContainer.getAttribute("number");

        // let currentSong = document.getElementById(number);
        // console.log(currentSong.toString();

        spotifyLink.setAttribute("href",jsonData[number].songLink);

      
        spotifyCover.src = "album-covers/"+jsonData[number].image+".jpeg";
        spotifyTitle.textContent = jsonData[number].songName;
        spotifyArtist.textContent = jsonData[number].artistName;
        spotifyListenTo.textContent = jsonData[number].listenedToTheMost;
                spotifyLyric.textContent = jsonData[number].favoriteLyric;

        // spotifyLyric.textContent = jsonData[number].favoriteLyric;

      });
    }

document.getElementById("showMore").addEventListener('click', function() {
    let moreInfo = document.getElementById('moreInfo');
    if (moreInfo.classList.contains('hidden')) {
      moreInfo.classList.remove('hidden');
    } else {
      moreInfo.classList.add('hidden');
    }
});

const sixtiesEighties = ["1960", "1961", "1962", 1963, 1964, 1965, 1966, "1967", 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, "1982", 1983, 1984, 1985, 1986, 1987, 1988, 1989];
const ninetiesZeros = ["1990", "1991", "1992", "1993", "1994", "1995", "1996", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2008", "2009"];
const tensTwenties = ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", 2024];

const decadeOne = document.getElementById("sixtiesEighties");
const decadeTwo = document.getElementById("ninetiesZeros");
const decadeThree = document.getElementById("tensTwenties");

const songs = document.querySelectorAll('.songsPreview'); // Fix the selector to '.songPreview'

decadeOne.addEventListener("click", function(){
    console.log("filtered");
    
    songs.forEach(song => {
      const releaseYear = song.getAttribute('data-release-year');
      song.style.display="flex";

      if (releaseYear && !sixtiesEighties.includes(releaseYear)) {
        song.style.display="none";
        console.log("filtered2");
        // Do something with the filtered song
      }
    });
});

decadeTwo.addEventListener("click", function(){
  console.log("filtered");
  
  songs.forEach(song => {
    const releaseYear = song.getAttribute('data-release-year');
  
    song.style.display="flex";

    if (releaseYear && !ninetiesZeros.includes(releaseYear)) {
      song.style.display="none";
      console.log("filtered2");
      // Do something with the filtered song
    }
  });
});

decadeThree.addEventListener("click", function(){
  console.log("filtered");
  
  songs.forEach(song => {
    const releaseYear = song.getAttribute('data-release-year');
    song.style.display="flex";
  
    if (releaseYear && !tensTwenties.includes(releaseYear)) {
      song.style.display="none";
      console.log("filtered2");
      // Do something with the filtered song
    }
  });
});

document.getElementById("reset").addEventListener("click", function(){
  songs.forEach(song => {
    song.style.display="flex";

  })

  
});


