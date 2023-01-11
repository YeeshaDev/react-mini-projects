import { createSlice } from '@reduxjs/toolkit';

//seting the initial states for each the features in the music player
const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: '',
};

//Setting the name 'player' is important to be able to access the features created when it is time to use the useSelector
//the reducers is used to set our features for the store
const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    //The optional chaining syntax(?.) ius used here alot to be able to avoid throwing of errors
    //it helps to manage the errors easily by giving off  undefined instead of throwing unneccessary errors
    //setting the function for the active song/music that will be playing
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;
//This conditions is set to enable the must to start when the play button is clicked
      if (action.payload?.data?.tracks?.hits) {
        state.currentSongs = action.payload.data.tracks.hits;
      } else if (action.payload?.data?.properties) {
        state.currentSongs = action.payload?.data?.tracks;
      } else {
        state.currentSongs = action.payload.data;
      }

      state.currentIndex = action.payload.i;
      state.isActive = true;
    },
//setting the state to enable the current music playing to be go to the next music on the queue
//else it should continue playing the current song
    nextSong: (state, action) => {
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },
//setting the state to enable the current music playing to be go to the previous music played
//else it should continue playing the current song
    prevSong: (state, action) => {
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },
//pausing and playing the current music playing
    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },
//ythis is used to set the genre list i.e the types of songs
    selectGenreListId: (state, action) => {
      state.genreListId = action.payload;
    },
  },
});
//exporting the features created so we can have access to them in other files
export const { setActiveSong, nextSong, prevSong, playPause, selectGenreListId } = playerSlice.actions;

export default playerSlice.reducer;
