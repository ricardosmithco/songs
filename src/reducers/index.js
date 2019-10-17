import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'No Woman No Cry', Artist: 'Bob Marley', duration: '4:05'},
        {title: 'Toast', Artist: 'Koffee', duration: '3:25'},
        {title: 'No weapon', Artist: 'Fred Hammond', duration: '3:45'}
    ];
};
// ------------------------------------------------------------------

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};
// ------------------------------------------------------------------

export default combineReducers({ // keys in this object are keys in our state object
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
// ------------------------------------------------------------------