import jsonData from '../../json';

// const data = jsonData.map(phrase => ({...phrase, timeEnd: phrase.words[phrase.words.length - 1].timeEnd}))
const data = jsonData.reduce((acc, {words}) => [...acc, ...words], []);

function onTimeUpdate({target}){
    return function(dispatch, getState){
            const time = Number(target.currentTime.toFixed(2));
            const currentWord = data.find(({timeStart, timeEnd}) => timeStart < time && timeEnd > time );

            if (currentWord !== undefined) {
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
    }
}

export { onTimeUpdate };
