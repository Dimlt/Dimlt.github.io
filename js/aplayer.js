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
            artist: 'MAMAMOO',
            url: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.0.2/musics/MAMAMOO-WIND FLOWER（AKEN Remix）-AKEN.mp3',
            cover: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.0.2/musics/MAMAMOO-WIND FLOWER（AKEN Remix）-AKEN.jpg',
            lrc: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.0.2/musics/MAMAMOO-WIND FLOWER（AKEN Remix）-AKEN.lrc',
        },
		
    ]
});
	
});