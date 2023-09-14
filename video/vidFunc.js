

var videos = document.querySelectorAll('.video video');

videos.forEach(video => {
    video.addEventListener('click', () => {
        videos.forEach(otherVideo => {
            if (otherVideo !== video) {
                otherVideo.pause();
                otherVideo.currentTime = 0;
            }
        });

        video.classList.toggle('active');

        if (video.paused) {
            video.play();
        } else {
            video.pause();
            video.currentTime = 0;
        }
    });
});




