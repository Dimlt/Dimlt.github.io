jQuery(function($){
	const ap = new APlayer({
		container: document.getElementById('aplayer'),
		fixed: true,
		listFolded: true,
		listMaxHeight: 200,
		lrcType: 3,
		audio: [
			{
				name: 'WIND FLOWER（AKEN Remix）',
				artist: 'AKEN',
				url: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.0.9/musics/MAMAMOO-WIND FLOWER（AKEN Remix）-AKEN.mp3',
				cover: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.0.9/musics/MAMAMOO-WIND FLOWER（AKEN Remix）-AKEN.jpg',
				lrc: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.0.9/musics/MAMAMOO-WIND FLOWER（AKEN Remix）-AKEN.lrc',
			},
			{
				name: 'Family Affair',
				artist: 'Mary J. Blige',
				url: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.0.9/musics/Family Affair-Mary J. Blige.mp3',
				cover: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.0.9/musics/Family Affair-Mary J. Blige.jpg',
				lrc: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.0.9/musics/Family Affair-Mary J. Blige.lrc',
			},
			{
				name: '冷咖啡',
				artist: '李迦南Doc,尚先生',
				url: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.0.9/musics/冷咖啡-李迦南Doc,尚先生.mp3',
				cover: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.0.9/musics/冷咖啡-李迦南Doc,尚先生.jpg',
				lrc: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.0.9/musics/冷咖啡-李迦南Doc,尚先生.lrc',
			},
			{
				name: 'Easy Come Easy Go',
				artist: '蔡健雅,MC Hotdog',
				url: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.0.9/musics/Easy Come Easy Go-蔡健雅,MC Hotdog.mp3',
				cover: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.0.9/musics/Easy Come Easy Go-蔡健雅,MC Hotdog.jpg',
				lrc: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.0.9/musics/Easy Come Easy Go-蔡健雅,MC Hotdog.lrc',
			},
			{
				name: 'Old Town Road (Remix)',
				artist: 'Lil Nas X,Billy Ray Cyrus',
				url: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.0.9/musics/Old Town Road (Remix)-Lil Nas X,Billy Ray Cyrus.mp3',
				cover: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.0.9/musics/Old Town Road (Remix)-Lil Nas X,Billy Ray Cyrus.jpg',
				lrc: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.0.9/musics/Old Town Road (Remix)-Lil Nas X,Billy Ray Cyrus.lrc',
			},
			{
				name: 'Down',
				artist: 'Marian Hill',
				url: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.0.9/musics/Down-Marian Hill.mp3',
				cover: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.0.9/musics/Down-Marian Hill.jpg',
				lrc: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.0.9/musics/Down-Marian Hill.lrc',
			}
		]
	});
	
});