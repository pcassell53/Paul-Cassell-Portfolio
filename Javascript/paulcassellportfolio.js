// below listed default settings
AOS.init({
// Global settings:
disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
initClassName: 'aos-init', // class applied after initialization
animatedClassName: 'aos-animate', // class applied on animation
useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
disableMutationObserver: false, // disables automatic mutations' detections (advanced)
debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
offset: 120, // offset (in px) from the original trigger point
delay: 0, // values from 0 to 3000, with step 50ms
duration: 400, // values from 0 to 3000, with step 50ms
easing: 'ease', // default easing for AOS animations
once: true, // whether animation should happen only once - while scrolling down
mirror: false, // whether elements should animate out while scrolling past them
anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
easing: 'ease-out-back',
duration: 800,
delay: 300,
disable: 'mobile'
});
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
if(!menuOpen) {
menuBtn.classList.add('open');
menuOpen = true;
} else {
menuBtn.classList.remove('open');
menuOpen = false;
}
});

// Youtube Playlist
const playlist = [
    { videoId: 'zt92o57Bpg8', title: 'Video 1' },
    { videoId: 'r8vQqPbDwHk', title: 'Video 2' },
    { videoId: 'kcC86GYGmC4', title: 'Video 3' },
    { videoId: 'ezryI4QkXEE', title: 'Video 4' }
    // Add more videos to the playlist as needed
];

const playerContainer = document.getElementById('player');
const playlistContainer = document.getElementById('playlist');
let player;
let firstLoad = true; // Track if it's the first load

// Create video items in the playlist
playlist.forEach(function(video) {
    createPlaylistItem(video, playlistContainer);
});

// Load the YouTube Iframe API asynchronously
function loadYouTubeIframeAPI() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Called when the YouTube Iframe API is ready
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        playerVars: {
            rel: 0
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });
}

// Called when the player is ready to play videos
function onPlayerReady(event) {
    // Load the first video but don't autoplay if it's the first load
    if (playlist.length > 0 && firstLoad) {
        loadVideo(playlist[0].videoId);
        firstLoad = false;
    }
}

// Function to load a video into the player
function loadVideo(videoId) {
    player.loadVideoById(videoId);
}

// Function to create a playlist item
function createPlaylistItem(video, container) {
    // Create a list item for each video
    const listItem = document.createElement('li');
    listItem.dataset.videoId = video.videoId;
    listItem.classList.add('playlist-item');

    // Create a thumbnail image element
    const thumbnail = document.createElement('img');
    thumbnail.src = `https://img.youtube.com/vi/${video.videoId}/0.jpg`;
    thumbnail.alt = 'Video Thumbnail';
    thumbnail.classList.add('thumbnail');
    listItem.appendChild(thumbnail);

    // Create the video title element
    const videoTitle = document.createElement('span');
    videoTitle.textContent = video.title;
    videoTitle.classList.add('video-title');
    listItem.appendChild(videoTitle);

    // Add a click event listener to load the video
    listItem.addEventListener('click', function() {
        loadVideo(video.videoId);
    });

    // Append the list item to the container
    container.appendChild(listItem);
}

// Called when the player state changes
function onPlayerStateChange(event) {
    // If the video is unstarted (just loaded), pause it and mute it
    if (event.data === YT.PlayerState.UNSTARTED) {
        player.pauseVideo();
        player.mute();
    }
}

// Load the YouTube Iframe API
loadYouTubeIframeAPI();
// Youtube Playlist

// Card Flip
function flipCard(card) {card.classList.toggle('flipped');}