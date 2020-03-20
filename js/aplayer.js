jQuery(function($){
	const ap = new APlayer({
    container: document.getElementById('aplayer'),
	fixed: true,
	listFolded: true,
	listMaxHeight: 90,
	lrcType: 3,
    audio: [
        {
            name: 'Mamamoo-Wind flower',
            artist: 'Mamamoo',
            url: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io/musics/Mamamoo-Wind flower.mp3',
            cover: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io/musics/Mamamoo-Wind flower.jpg',
            lrc: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io/musics/Mamamoo-Wind flower.lrc',
        },
        {
            name: 'name2',
            artist: 'artist2',
            url: 'url2.mp3',
            cover: 'cover2.jpg',
            lrc: 'lrc2.lrc',
        }
    ]
});
	
});