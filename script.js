let song_list = document.querySelector('.song-list')

function show_scrollbar(){
    song_list.classList.add('scroll-visible')
}

function hide_scrollbar(){
    song_list.classList.remove('scroll-visible')
}