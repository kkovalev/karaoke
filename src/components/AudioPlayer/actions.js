import jsonData from '../../json';

const data = jsonData.map(phrase => ({...phrase, timeEnd: phrase.words[phrase.words.length - 1].timeEnd}))

function togglePlayPause() {
    return function(dispatch, getState){
        const {isPlaying} = getState();

          dispatch({
            type: 'SET_PLAYING_STATE',
            payload: !isPlaying,
        });
    }
}

function handleTimeUpdate({target}){
    return function(dispatch, getState){
            const time = Number(target.currentTime.toFixed(2));

            // markedTime
            const currentPhrase = data.find(({timeStart, timeEnd}) => timeStart < time && timeEnd > time );

            if (currentPhrase) {
                const currentWord = currentPhrase.words.find(({timeStart, timeEnd}) => timeStart < time && timeEnd > time );

                if (currentWord) {
                    console.log(currentWord.word)

                    dispatch({
                        type: 'SET_MARKED_TIME',
                        payload: currentWord.timeStart
                    });
                } else {
                    dispatch({
                        type: 'SET_MARKED_TIME',
                        payload: ''
                    });
                }
            } else {
                dispatch({
                    type: 'SET_MARKED_TIME',
                    payload: ''
                });
            }

            // dispatch({
            //     type: 'TIME_UPDATE',
            //     payload: time
            // });
    }
}

export { togglePlayPause, handleTimeUpdate };
