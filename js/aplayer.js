jQuery(function($){
	const ap = new APlayer({
    container: document.getElementById('aplayer'),
	fixed: true,
	listFolded: true,
	listMaxHeight: 90,
	lrcType: 3,
    audio: [
        {
            name: 'name1',
            artist: 'artist1',
            url: 'music/AKEN - MAMAMOO-WIND FLOWER（AKEN Remix）.mp3',
            cover: 'cover1.jpg',
            //lrc: 'lrc1.lrc',
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