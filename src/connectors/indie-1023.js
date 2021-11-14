'use strict';

const filter = MetadataFilter.createFilter({ album: removeAlbumPrefix });

Connector.playerSelector = 'div.audio__liveStream--indie';
Connector.trackSelector = '.audio__liveStream--indie .listenLiveTitle__heading--86Ibg';
Connector.artistSelector = '.audio__liveStream--indie .listenLiveTitle__artist--HAGAk';
Connector.isPlaying = () => $('.gtmLiveStream_indie button.playButton span.playPauseButton__icon--3pd1K').hasClass('playPauseButton__pause--1HBGc');
Connector.albumSelector = '.audio__liveStream--indie .listenLiveTitle__meta---u1Kq';
Connector.onReady = Connector.onStateChanged;

Connector.applyFilter(filter);

function removeAlbumPrefix(text) {
	return text.replace('Album: ', '');
}
