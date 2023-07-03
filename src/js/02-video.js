import Player from '@vimeo/player';

const timer = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', timing);

// player.getVideoTitle().then(onTime(title) {
//    console.log('title:', title);
// });

function timing(data){
   localStorage.setItem(timer, JSON.stringify(data))
}

// timeupdate
// Triggered as the currentTime of the video updates. It generally fires every 250ms, but it may vary depending on the browser.
// {
//     duration: 61.857
//     percent: 0.049
//     seconds: 3.034
// }

// const player = new Player('handstick', {
//     id: 19231868,
//     width: 640
// });

// player.on('play', function() {
//     console.log('played the video!');
// });

// const onPlay = function(data) {
//    // data is an object containing properties specific to that event
// };

// player.on('play', onPlay);



