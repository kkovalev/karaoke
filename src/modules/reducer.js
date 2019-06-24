const initialState = {
  markedTime: "0.0"
};

function unhandledAction(state, action) {
  return console.warn("Unhandled action:", action.type), state;
}

const Reducer = {
  MarkTime(state, { payload }) {
    return {
      ...state,
      markedTime: payload,
    };
  }
};

export default (state = initialState, action) =>
  (Reducer[action.type] || unhandledAction)(state, action);
