(function IIFE() {
  const list = [
  {
    id: 1,
    url: "stellinearized.github.io/1 Above the Treetops.mp3",
    author: "Jun-Hee Lee - Maplestory",
    title: "Page 1 - Above the Treetops (Lith Harbor)",
    cover: "http://cdn.atrera.com/images/cover_yz2mak.jpg" },

  {
    id: 2,
    url: "stellinearized.github.io/2 Tropos by Day.mp3",
    author: "Jonathan Geer - Owlboy",
    title: "Page 2 - Tropos by Day",
    cover: "xxxxxx" },

  {
    id: 3,
    url: "http://cdn.atrera.com/audio/Marcel_Pequel_-_03_-_Three.mp3",
    author: "Christopher Larkin - Hollow Knight",
    title: "Page 3 - City of Tears",
    cover: "http://cdn.atrera.com/images/cover_yz2mak.jpg" },

  {
    id: 4,
    url: "http://cdn.atrera.com/audio/Marcel_Pequel_-_04_-_Four.mp3",
    author: "Keisuke Ito - Pokémon Super Mystery Dungeon",
    title: "Page 4 - Ancient Barrow",
    cover: "http://cdn.atrera.com/images/cover_yz2mak.jpg" },

  {
    id: 5,
    url: "http://cdn.atrera.com/audio/Marcel_Pequel_-_05_-_Five.mp3",
    author: "Ryo Nagamatsu - The Legend of Zelda: A Link Between Worlds",
    title: "Page 5 - Ice Ruins",
    cover: "http://cdn.atrera.com/images/cover_yz2mak.jpg" },

  {
    id: 6,
    url: "http://cdn.atrera.com/audio/Marcel_Pequel_-_06_-_Six.mp3",
    author: "Curtis Schweitzer - Starbound",
    title: "Page 6 - Casiopeia",
    cover: "http://cdn.atrera.com/images/cover_yz2mak.jpg" },

  {
    id: 7,
    url: "http://cdn.atrera.com/audio/Marcel_Pequel_-_07_-_Seven.mp3",
    author: "Motoi Sakuraba - Tales of Symphonia: Dawn of the New World",
    title: "Page 7 - Ginnungagap ~Rip in the world~",
    cover: "http://cdn.atrera.com/images/cover_yz2mak.jpg" },

  {
    id: 8,
    url: "http://cdn.atrera.com/audio/Marcel_Pequel_-_08_-_Eight.mp3",
    author: "Michael Kelly - VA-11 Hall-A",
    title: "Page 8 - You've Got Me",
    cover: "http://cdn.atrera.com/images/cover_yz2mak.jpg" },

  {
    id: 9,
    url: "http://cdn.atrera.com/audio/Marcel_Pequel_-_09_-_Nine.mp3",
    author: "nK - Momodora: Reverie Under the Moonlight",
    title: "Page 9 - Sunken Ruin",
    cover: "http://cdn.atrera.com/images/cover_yz2mak.jpg" },
  {
    id: 10,
    url: "http://cdn.atrera.com/audio/Marcel_Pequel_-_09_-_Nine.mp3",
    author: "Lena Raine - Celeste",
    title: "Page 10 - Quiet and Falling",
    cover: "http://cdn.atrera.com/images/cover_yz2mak.jpg" },
  {
    id: 11,
    url: "http://cdn.atrera.com/audio/Marcel_Pequel_-_09_-_Nine.mp3",
    author: "Kevin Penkin - Made in Abyss",
    title: "Page 11 - Swings and Roundabouts",
    cover: "http://cdn.atrera.com/images/cover_yz2mak.jpg" },
  {
    id: 12,
    url: "http://cdn.atrera.com/audio/Marcel_Pequel_-_09_-_Nine.mp3",
    author: "Jun-Hee Lee - Maplestory",
    title: "Page 12 - Shinin' Harbor (Orbis)",
    cover: "http://cdn.atrera.com/images/cover_yz2mak.jpg" }];



  let currentId = 0;
  let isPlaying = false;
  let isLoop = false;
  let isShuffle = false;
  let currentAudio = "music1";
  let timer = null;
  let loopOne = true;

  const currentTimeIndicator = document.querySelector(".music-time__current");
  const leftTimeIndicator = document.querySelector(".music-time__last");
  const progressBar = document.getElementById("length");
  const playBtn = document.querySelector(".play");
  const cover = document.querySelector(".cover");
  const title = document.querySelector(".music-player__title");
  const author = document.querySelector(".music-player__author");

  const loopBtn = document.getElementById("loop");
  const shuffleBtn = document.getElementById("shuffle");
  const nextBtn = document.getElementById("forward");
  const prevBtn = document.getElementById("backward");
  const backwardBtn = document.getElementById("prev");
  const forwardBtn = document.getElementById("next");
  const progressDiv = document.getElementById("progress");

  function play(e) {
    if (!isPlaying) {
      // console.log('play');
      e.target.src =
      "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/pause.svg";
      e.target.alt = "Pause";
      isPlaying = true;
      document.getElementById(currentAudio).play();
      showTime();
    } else {
      // console.log('pause');
      e.target.src =
      "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/play.svg";
      e.target.alt = "Play";
      document.getElementById(currentAudio).pause();
      isPlaying = false;
      clearInterval(timer);
    }
  }

  function changeBar() {
    const audio = document.getElementById(currentAudio);
    const percentage = (audio.currentTime / audio.duration).toFixed(3);
    progressBar.style.transition = "";
    // console.log(audio.currentTime);

    //set current time
    const minute = Math.floor(audio.currentTime / 60);
    const second = Math.floor(audio.currentTime % 60);
    const leftTime = audio.duration - audio.currentTime;
    currentTimeIndicator.innerHTML =
    ("0" + minute).substr(-2) + ":" + ("0" + second).substr(-2);

    //set left time
    const leftMinute = Math.floor(leftTime / 60);
    const leftSecond = Math.floor(leftTime % 60);

    leftTimeIndicator.innerHTML =
    ("0" + leftMinute).substr(-2) + ":" + ("0" + leftSecond).substr(-2);

    //set time bar
    progressBar.style.width = percentage * 100 + "%";
  }

  function showTime() {
    timer = setInterval(() => changeBar(), 500);
  }

  function nextMusic(mode) {
    playBtn.src =
    "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/play.svg";
    playBtn.alt = "Play";
    document.getElementById(currentAudio).pause();
    isPlaying = false;
    clearInterval(timer);

    if (mode === "next") {
      if (currentId != list.length - 1) {
        currentId = currentId + 1;
        init();
      }
    } else {
      if (currentId != 0) {
        currentId = currentId - 1;
        init();
      }
    }

    // console.log('play');
    playBtn.src =
    "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/pause.svg";
    playBtn.alt = "Pause";
    isPlaying = true;
    document.getElementById(currentAudio).play();
    showTime();
  }

  function shuffle(e) {
    isShuffle = !isShuffle;
    if (isShuffle) {
      e.target.parentNode.classList.add("is-loop");
    } else {
      e.target.parentNode.classList.remove("is-loop");
    }
  }

  function backward() {
    const audio = document.getElementById(currentAudio);
    audio.currentTime -= 5;
    if (!isPlaying) {
      changeBar();
    }
  }

  function forward() {
    const audio = document.getElementById(currentAudio);
    audio.currentTime += 5;
    if (!isPlaying) {
      changeBar();
    }
  }

  function stopMusic() {
    playBtn.src =
    "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/play.svg";
    playBtn.alt = "Play";
    isPlaying = false;
  }

  function goToNextMusic() {
    let newId = currentId;
    while (isShuffle && !loopOne && newId === currentId) {
      newId = Math.floor(Math.random() * Math.floor(list.length - 1));
    }

    if (!isShuffle && !loopOne) {
      currentId = currentId + 1 > list.length - 1 ? 0 : currentId + 1;
    }
    if (!isShuffle && loopOne) {
      currentId = currentId;
    }

    if (isShuffle) {
      currentId = newId;
    }
    init();
    document.getElementById(currentAudio).play();
  }

  function loop(e) {
    const audio = document.getElementById(currentAudio);

    if (!isLoop && !loopOne) {
      isLoop = true;
      loopOne = false;
      // console.log('is loop');
      e.target.parentNode.classList.add("is-loop");
      e.target.src =
      "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/loop.svg";
      audio.loop = false;
      audio.onended = e => goToNextMusic();
      console.log(isLoop, loopOne);
    } else if (isLoop && !loopOne) {
      // console.log('is loop one');
      isLoop = true;
      loopOne = true;
      e.target.parentNode.classList.add("is-loop");
      e.target.src =
      "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/loopone.svg";
      audio.loop = true;
      audio.onended = e => goToNextMusic();
      console.log(isLoop, loopOne);
    } else {
      // console.log('not loop');
      isLoop = false;
      loopOne = false;
      e.target.parentNode.classList.remove("is-loop");
      e.target.src =
      "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/loop.svg";
      audio.loop = false;
      audio.onended = e => stopMusic();
      console.log(isLoop, loopOne);
    }
  }

  function progress(e) {
    const audio = document.getElementById(currentAudio);
    //get current position and minus progress bar's x position to get current position in progress bar
    const pos =
    (e.pageX - progressDiv.getClientRects()[0].x) /
    progressDiv.getClientRects()[0].width;
    audio.currentTime = pos * audio.duration;
    changeBar();
  }

  function init() {
    //reset music duration and setup audio
    const audio =
    document.getElementById(currentAudio) === null ?
    new Audio() :
    document.getElementById(currentAudio);
    audio.src = list[currentId].url;
    audio.id = currentAudio;
    document.getElementById(currentAudio) === null ?
    document.body.appendChild(audio) :
    "";

    progressBar.style.transition = "none";
    progressBar.style.width = "0%";
    document.getElementById(currentAudio).currentTime = 0;

    title.innerHTML = list[currentId].title;
    author.innerHTML = list[currentId].author;
    cover.src = list[currentId].cover;

    //set current time
    audio.addEventListener("loadedmetadata", function () {
      const leftMinute = Math.floor(audio.duration / 60);
      const leftSecond = Math.floor(audio.duration % 60);
      currentTimeIndicator.innerHTML = "00:00";
      leftTimeIndicator.innerHTML =
      ("0" + leftMinute).substr(-2) + ":" + ("0" + leftSecond).substr(-2);
      progressBar.style.transition = "";
    });

    //set loop
    document.getElementById(currentAudio).onended = e => goToNextMusic(e);
  }

  playBtn.addEventListener("click", play);
  loopBtn.addEventListener("click", loop);

  shuffleBtn.addEventListener("click", shuffle);
  forwardBtn.addEventListener("click", forward);
  backwardBtn.addEventListener("click", backward);

  prevBtn.addEventListener("click", e => nextMusic("prev"));
  nextBtn.addEventListener("click", e => nextMusic("next"));
  progressDiv.addEventListener("click", e => {
    progress(e);
  });

  init();
})();
