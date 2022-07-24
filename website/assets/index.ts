import MediaPlayer from '@nic-hawk/mediaplayer';
import AutoPlay from '@nic-hawk/mediaplayer/lib/plugins/autoplay';
import AutoPause from '@nic-hawk/mediaplayer/lib/plugins/autoPause';
import Ads from '@nic-hawk/mediaplayer/lib/plugins/Ads/index';


// capturamos btn y video del html
const video:HTMLVideoElement = document.querySelector('video')!;
const btnplay:HTMLElement = document.getElementById('play')!;
const btnmute:HTMLElement = document.getElementById('mute')!;

// btns
video.controls = true;
btnplay.onclick = () => player.togglePlay();
btnmute.onclick = () => player.toggleMute();


// instanciamos el objeto con el de tipo video(constante) 
const player = new MediaPlayer({ 
    el: video, 
    plugins:[
        // new AutoPlay()
        new AutoPause(),
        new Ads()
    ] 
});


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../sw.js').catch(error => {
        console.log(error.message);
    });
}

