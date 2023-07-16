// 유튜브 API
const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoID: 'An6LvWQuj_8', //최소 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: 'An6LvWQuj_8',
    },
    events: {
      onReady: function (event) {
        event.target.mute();
      },
    },
  });
}

onYouTubeIframeAPIReady();
