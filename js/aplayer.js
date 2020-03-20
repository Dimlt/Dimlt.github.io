jQuery(function($){
	const ap = new APlayer({
    container: document.getElementById('aplayer'),
	fixed: true,
	listFolded: true,
	listMaxHeight: 90,
	lrcType: 3,
    audio: [
        {
            name: 'Wind flower',
            artist: 'Mamamoo',
            url: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io/musics/Max Oazo _ Moonessa - Once upon a Time.mp3',
            cover: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io/musics/Mamamoo-Wind flower.jpg',
            lrc: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io/musics/Max Oazo _ Moonessa - Once upon a Time.lrc',
        }
    ]
});
	
});