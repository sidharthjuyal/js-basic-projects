const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const btns = document.querySelectorAll("button");

for(let i=0;i<btns.length;i++)
{
    btns[i].addEventListener("click",()=>{
        stopSongs();
        document.getElementById(sounds[i]).play();
    });
}

function stopSongs() {
    for(sound of sounds) 
    // accessing elements of sounds (audio ID's)
    {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    }
}