function togglePlayPause() {
    return function(dispatch, getState){
        const {isPlaying} = getState();

          dispatch({
            type: 'SET_PLAYING_STATE',
            payload: !isPlaying,
        });
    }
}
export { togglePlayPause };
