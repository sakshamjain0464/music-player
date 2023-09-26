// For scroll Effect
let song_list = document.querySelector('.song-list');

function show_scrollbar(){
    song_list.classList.add('scroll-visible');
}

function hide_scrollbar(){
    song_list.classList.remove('scroll-visible');
}

const list = [
    {song_id : 1, song_name : "Apna Banale - Bhediya", artists : "Sachin Jigar, Arijit Singh", file_path : "./songs/song-1.mp3", cover_path : "./covers/cover-1.jpg"},
    {song_id : 2, song_name : "Daru Badnam", artists : "Kamal Kahlon, Param Singh", file_path : "./songs/song-2.mp3", cover_path : "./covers/cover-2.jpg"},
    {song_id : 3, song_name : "Hauge Hauge - Oggy", artists : "El Salsafiore", file_path : "./songs/song-3.mp3", cover_path : "./covers/cover-3.jpg"},
    {song_id : 4, song_name : "Tujhme Rab Dikhta Hai - Rab Ne Banadi Jodi", artists : "Roop Kumar Rathod", file_path : "./songs/song-4.mp3", cover_path : "./covers/cover-4.jpg"},
    {song_id : 5, song_name : "Nit Khair Manga - Raid", artists : "Rahat Fateh Ali Khan", file_path : "./songs/song-5.mp3", cover_path : "./covers/cover-5.jpg"},
    {song_id : 6, song_name : "Barish Ban Jana", artists : "Payal Dev, Stebien Ben", file_path : "./songs/song-6.mp3", cover_path : "./covers/cover-6.jpg"},
    {song_id : 7, song_name : "Halki Si Barsaat", artists : "Saaj Bhatt", file_path : "./songs/song-7.mp3", cover_path : "./covers/cover-7.jpg"},
    {song_id : 8, song_name : "Besabriyaan - MS Dhoni The Untold Story", artists : "Armaan Malik", file_path : "./songs/song-8.mp3", cover_path : "./covers/cover-8.jpg"},
    {song_id : 9, song_name : "Shiddat Title Track - Shiddat", artists : "Manan Bharadwaj", file_path : "./songs/song-9.mp3", cover_path : "./covers/cover-9.jpg"},
    {song_id : 10, song_name : "Raatan Lambiyan - Shershah", artists : "Jubin Nautiyal", file_path : "./songs/song-10.mp3", cover_path : "./covers/cover-10.jpg"},
    {song_id : 11, song_name : "Kiston - Roohi", artists : "Jubin Nautiyal", file_path : "./songs/song-11.mp3", cover_path : "./covers/cover-11.jpg"},
    {song_id : 12, song_name : "Kesariya - Bhrahmastra", artists : "Arijit Singh", file_path : "./songs/song-12.mp3", cover_path : "./covers/cover-12.jpg"},
    {song_id : 13, song_name : "Udd Ja Kaale Kawan - Gadar-2", artists : "Udit Narayan", file_path : "./songs/song-13.mp3", cover_path : "./covers/cover-13.jpg"},
    {song_id : 14, song_name : "Jai Shree Ram - Adipurush", artists : "Ajay-Atul", file_path : "./songs/song-14.mp3", cover_path : "./covers/cover-14.jpg"},
    {song_id : 15, song_name : "Deva Deva - Bhrahmastra", artists : "Arijit Singh", file_path : "./songs/song-15.mp3", cover_path : "./covers/cover-15.jpg"}
]

const songs = document.querySelector('ul');
songs.classList.add('songs');

list.forEach((value)=>{
    let song = document.createElement('li');
    song.innerHTML = `<div class="song-img">
                    <img src="${value.cover_path}" alt="">
                    </div>
                    <div class="song-details">
                    <p class="song-name">${value.song_name}</p>
                    <p class="artists">${value.artists}</p>
                    </div>
                    <div class="song-btn">
                    <i class="fa fa-play"></i>
                    </div>`;
    song.setAttribute('id', `${value.song_id}`);
    song.setAttribute('class', `song`);
    songs.append(song);
    console.log(song);
})

// Music Playing
let currentSongIndex = 1; 
let currentAudio = new Audio(list[currentSongIndex].file_path);
currentAudio.play()

// Now Playing
const nowPlayingCover = document.querySelector(".current-song-img img");
const nowPlayingName = document.querySelector(".current-song-name h1");
const nowPlayingArtists = document.querySelector(".current-song-name p");

// Function to change now playing song
function changeNowPlaying(){
    nowPlayingCover.setAttribute("src", list[currentSongIndex].cover_path);
    nowPlayingName.innerHTML = list[currentSongIndex].song_name;
    nowPlayingArtists.innerHTML = list[currentSongIndex].artists;
}

