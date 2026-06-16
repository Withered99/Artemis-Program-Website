// Audio Persistent Sync Code
const audio = document.getElementById('myAudio');

if (audio) {
    // 1. Check if there is a saved time and state on page load
    const savedTime = localStorage.getItem('audioTime');
    const isPlaying = localStorage.getItem('audioPlaying') === 'true';

    if (savedTime) {
        audio.currentTime = parseFloat(savedTime);
    }

    // Attempt to resume playback if it was playing on the last page
    if (isPlaying) {
        audio.play().catch(error => {
            console.log("Autoplay blocked by browser. User must click the page first.");
        });
    }

    // 2. Continually save the track time as it plays
    audio.addEventListener('timeupdate', () => {
        localStorage.setItem('audioTime', audio.currentTime);
    });

    // 3. Track if the user paused or played the music
    audio.addEventListener('play', () => {
        localStorage.setItem('audioPlaying', 'true');
    });

    audio.addEventListener('pause', () => {
        localStorage.setItem('audioPlaying', 'false');
    });
}
