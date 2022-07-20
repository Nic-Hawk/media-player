import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/autoplay.js';
import AutoPause from './plugins/autoPause.js';

// capturamos btn y video del html
const video = document.querySelector('video');
const btnplay = document.getElementById('play');
const btnmute = document.getElementById('mute');

// btns
btnplay.onclick = () => player.togglePlay();
btnmute.onclick = () => player.toggleMute();


// instanciamos el objeto con el de tipo video(constante) 
const player = new MediaPlayer({ 
    el: video, 
    plugins:[
        // new AutoPlay()
        new AutoPause()
    ] 
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../sw.js').catch(error => {
        console.log(error.message);
    });
}


