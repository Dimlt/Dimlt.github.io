var aplyer;
jQuery(function($){
	aplyer = new APlayer({
		container: document.getElementById('aplayer'),
		fixed: true,
		listFolded: true,
		listMaxHeight: 200,
		lrcType: 3,
		audio: [
			{
				name: 'Down',
				artist: 'Marian Hill',
				url: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.2.4/musics/Down-Marian Hill.mp3',
				cover: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.2.4/musics/Down-Marian Hill.jpg',
				lrc: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.2.4/musics/Down-Marian Hill.lrc',
			},
			{
				name: 'Easy Come Easy Go',
				artist: '蔡健雅,MC Hotdog',
				url: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.2.4/musics/Easy Come Easy Go-蔡健雅,MC Hotdog.mp3',
				cover: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.2.4/musics/Easy Come Easy Go-蔡健雅,MC Hotdog.jpg',
				lrc: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.2.4/musics/Easy Come Easy Go-蔡健雅,MC Hotdog.lrc',
			},
			{
				name: 'Family Affair',
				artist: 'Mary J. Blige',
				url: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.2.4/musics/Family Affair-Mary J. Blige.mp3',
				cover: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.2.4/musics/Family Affair-Mary J. Blige.jpg',
				lrc: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.2.4/musics/Family Affair-Mary J. Blige.lrc',
			},
			{
				name: 'MAMAMOO-WIND FLOWER（AKEN Remix）',
				artist: 'AKEN',
				url: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.2.4/musics/MAMAMOO-WIND FLOWER（AKEN Remix）-AKEN.mp3',
				cover: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.2.4/musics/MAMAMOO-WIND FLOWER（AKEN Remix）-AKEN.jpg',
				lrc: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.2.4/musics/MAMAMOO-WIND FLOWER（AKEN Remix）-AKEN.lrc',
			},
			{
				name: 'Old Town Road (Remix)',
				artist: 'Lil Nas X,Billy Ray Cyrus',
				url: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.2.4/musics/Old Town Road (Remix)-Lil Nas X,Billy Ray Cyrus.mp3',
				cover: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.2.4/musics/Old Town Road (Remix)-Lil Nas X,Billy Ray Cyrus.jpg',
				lrc: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.2.4/musics/Old Town Road (Remix)-Lil Nas X,Billy Ray Cyrus.lrc',
			},
			{
				name: '冷咖啡',
				artist: '李迦南Doc,尚先生',
				url: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.2.4/musics/冷咖啡-李迦南Doc,尚先生.mp3',
				cover: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.2.4/musics/冷咖啡-李迦南Doc,尚先生.jpg',
				lrc: 'https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.2.4/musics/冷咖啡-李迦南Doc,尚先生.lrc',
			}
		]
	});
	
});


// 输入音乐列表序号(从0开始),切换音乐,并播放
function switch_song(num){
	aplyer.list.switch(num);
	aplyer.play();
}
