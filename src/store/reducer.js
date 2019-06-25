import initialState from './initialState';

function unhandledAction(state, action) {
    return console.warn('Unhandled action:', action.type), state;
}

const Reducer = {
    SET_PLAYING_STATE(state, { payload }) {
        return {
            ...state,
            isPlaying: payload,
        };
    },
};

export default (state = initialState, action) =>
    (Reducer[action.type] || unhandledAction)(state, action);
