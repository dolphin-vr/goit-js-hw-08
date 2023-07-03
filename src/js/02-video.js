import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const timer = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const position = JSON.parse(localStorage.getItem(timer)) || {seconds: 0};
console.log('position = ', position);
console.log('position.seconds = ', position.seconds);

player.setCurrentTime(position.seconds);


player.on('timeupdate', throttle(timing, 1000));

function timing(data){
   localStorage.setItem(timer, JSON.stringify(data))
}
