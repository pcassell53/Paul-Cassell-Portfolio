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
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

// Youtube Playlist
const playlist = [{ "videoId": "Je_g4JRhh4c", "title": "#3 Ohio State vs Michigan State | Full Game Highlights | 2024 College Football Highlights", "thumbnail": "https://img.youtube.com/vi/Je_g4JRhh4c/sddefault.jpg" }, { "videoId": "5gMxNZxQ6GY", "title": "#9 Penn State vs #19 Illinois | Full Game Highlights | 2024 College Football Highlights", "thumbnail": "https://img.youtube.com/vi/5gMxNZxQ6GY/sddefault.jpg" }, { "videoId": "-LYLUkUFvMs", "title": "Nebraska vs Purdue | Full Game Highlights | 2024 College Football Highlights", "thumbnail": "https://img.youtube.com/vi/-LYLUkUFvMs/sddefault.jpg" }, { "videoId": "oB2E-bNT8ds", "title": "Arizona Wildcats vs. Utah Utes | Full Game Highlights | ESPN College Football", "thumbnail": "https://img.youtube.com/vi/oB2E-bNT8ds/sddefault.jpg" }];
const playerContainer = document.getElementById('player');
const playlistContainer = document.getElementById('playlist');

function loadVideo(videoId) {
    playerContainer.src = `https://www.youtube.com/embed/${videoId}?rel=0`;
}

function createPlaylistItem(video, container) {
    const listItem = document.createElement('li');
    listItem.dataset.videoId = video.videoId;
    listItem.classList.add('playlist-item');
    const thumbnail = document.createElement('img');
    thumbnail.src = video.thumbnail;
    thumbnail.alt = 'Video Thumbnail';
    thumbnail.classList.add('thumbnail');
    listItem.appendChild(thumbnail);
    const videoTitle = document.createElement('span');
    videoTitle.textContent = video.title;
    videoTitle.classList.add('video-title');
    listItem.appendChild(videoTitle);
    listItem.addEventListener('click', () => {
        loadVideo(video.videoId);
    });
    container.appendChild(listItem);
}
playlist.forEach(video => {
    createPlaylistItem(video, playlistContainer);
});
loadVideo(playlist[0].videoId);
// Youtube Playlist

// Card Flip
function flipCard(card) { card.classList.toggle('flipped'); }