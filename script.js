document.addEventListener('DOMContentLoaded', () => {
  const musicPlayer = document.getElementById('music-player');
  const progressBar = document.getElementById('progress-bar');

  musicPlayer.addEventListener('timeupdate', () => {
    // Update the progress bar value based on the current playback time
    const currentTime = musicPlayer.currentTime;
    const duration = musicPlayer.duration;
    const progressPercentage = (currentTime / duration) * 100;
    progressBar.value = progressPercentage;
  });

  progressBar.addEventListener('input', () => {
    // Seek to the selected position when the progress bar is adjusted
    const seekTime = (progressBar.value / 100) * musicPlayer.duration;
    musicPlayer.currentTime = seekTime;
  });

  const playButton = document.getElementById('play-button');

  playButton.addEventListener('click', () => {
    if (musicPlayer.paused) {
      // If the audio is paused, play it
      musicPlayer.play();
      playButton.classList.remove('fa-circle-pause');
      playButton.classList.add('fa-circle-play');
    } else {
      // If the audio is playing, pause it
      musicPlayer.pause();
      playButton.classList.remove('fa-circle-play');
      playButton.classList.add('fa-circle-pause');
    }
  });

  musicPlayer.addEventListener('play', () => {
    playButton.classList.remove('fa-circle-play');
    playButton.classList.add('fa-circle-pause');
  });

  musicPlayer.addEventListener('pause', () => {
    playButton.classList.remove('fa-circle-pause');
    playButton.classList.add('fa-circle-play');
  });
});
