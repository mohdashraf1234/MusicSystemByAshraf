
const playlist = [
    { title: "O Mahi song ", artist: "Arijit Singh", image: "./images/Omahi.jpg", audio: "./songs/O Mahi O Mahi(PagalWorld.com.cm).mp3" },
    { title: "Chaleya", artist: "Ariji singh", image: "./images/Chaleya.jpg", audio: "./songs/Chaleya(PagalWorld.com.cm).mp3" },
    { title: "Maan meri jaan", artist: "King", image: "./images/MaanMeriJaan.jpg", audio: "./songs/Maan Meri Jaan(PagalWorld.com.cm).mp3" },
    { title: "Pahle bhi main", artist: "Raj shekhar", image: "./images/AnimalSong.jpg", audio: "./songs/Pehle Bhi Main(PagalWorld.com.cm).mp3" },
    { title: "Phir na aisi raat song", artist: "Arijit singh", image: "./images/PhirNaAisiRaatAegi.jpg", audio: "./songs/Phir Na Aisi Raat Aayegi(PagalWorld.com.cm).mp3" },
    // Add more songs here
    
    { title: "Saari Duniya Jalaa Denge(PagalWorld.com.cm)", artist: "B Praak and Jaan", image: "./images/AnimalSong.jpg", audio: "./songs/Saari Duniya Jalaa Denge(PagalWorld.com.cm).mp3" },
    { title: "Tere Hawaale", artist: "Arijit Singh and Shilpa Rao", image: "./images/TereHawale.jpg", audio: "./songs/Tere Hawaale(PagalWorld.com.cm).mp3" },
    { title: "Tu Hai Kahan", artist: "Usman Ahad", image: "./images/AnimalSong.jpg", audio: "./songs/Tu Hai Kahan(PagalWorld.com.cm).mp3" },
    { title: "Ve Haniya", artist: "Sargun Mehta", image: "./images/Vehaniya.jpg", audio: "./songs/Ve Haniya(PagalWorld.com.cm).mp3" },
    { title: "Humdard - Lofi Song (Slowed Reverb) Arijit Singh", artist: "Areijit singh", image: "./images/humdard.jpg", audio: "/songs/Humdard - Lofi Song (Slowed Reverb) Arijit Singh - Ek Villain.mp3" }

];

let currentAudio = null;

const playlistContainer = document.getElementById('playlist');

playlist.forEach(song => {
    const songElement = document.createElement('div');
    songElement.classList.add('song');
    songElement.innerHTML = `
        <img src="${song.image}" alt="${song.title}">
        <h3>${song.title}</h3>
        <p>${song.artist}</p>
        <audio id="${song.title.replace(/\s+/g, '')}" src="${song.audio}" type="audio/mpeg"></audio>
        <div class="audio-controls">
            <button onclick="toggleSong('${song.title.replace(/\s+/g, '')}')">Play/Pause</button>
            <button onclick="skipSong('${song.title.replace(/\s+/g, '')}')">Skip</button>
        </div>
        <div class="progress-bar">
            <div class="time-bar" id="${song.title.replace(/\s+/g, '')}-time"></div>
        </div>
    `;
    playlistContainer.appendChild(songElement);
});

function toggleSong(id) {
    const audio = document.getElementById(id);

    if (audio !== currentAudio) {
        if (currentAudio) {
            currentAudio.pause();
        }
        audio.play();
        updateProgressBar(id);
        currentAudio = audio;
    } else {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }
}

function skipSong(id) {
    const audio = document.getElementById(id);
    audio.currentTime += 10; // Skips 10 seconds
    updateProgressBar(id);
}

function updateProgressBar(id) {
    const audio = document.getElementById(id);
    const progressBar = document.getElementById(`${id}-time`);
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progress}%`;

    // Update progress bar every second
    setInterval(() => {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progress}%`;
    }, 1000);
}



