let audio = document.getElementById('audio');

const sounds = ['doorbell.wav', 'cat-meow.wav', 'dog-bark.wav', 'attention-whistle'];

document.addEventListener('click',function(){
    const randomIndex = Math.floor(Math.random() * sounds.length);
    audio.src = sounds[randomIndex];
    audio.play();
})