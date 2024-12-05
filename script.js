const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  console.log('Hamburger menu clicked!');
  navLinks.classList.toggle('active');
  console.log('Current nav-links class list:', navLinks.classList);
});

const video = document.getElementById('whisky-video');
const videoControl = document.getElementById('video-control');

if (video && videoControl) {

  video.loop = true;

  videoControl.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      videoControl.textContent = 'Pause Video';
    } else {
      video.pause();
      videoControl.textContent = 'Play Video';
    }
  });

  video.addEventListener('play', () => {
    videoControl.style.display = 'none';
  });

  video.addEventListener('pause', () => {
    videoControl.style.display = 'block';
  });
}