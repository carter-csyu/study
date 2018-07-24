import { createAction, handleActions } from 'redux-actions';

// Action types
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const SET_COLOR = 'counter/SET_COLOR';

// Action creators
/*
export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});

export const setColor = (color) => ({
  type: SET_COLOR,
  color
});
*/

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const setColor = createAction(SET_COLOR, color => color);

// init state
const initialState = {
  number: 0,
  color: 'black'
};

// reducer
/*
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        number: state.number + 1
      };
    case DECREMENT:
      return {
        ...state,
        number: state.number - 1
      }
    case SET_COLOR:
      return {
        ...state,
        color: action.color
      }
    default:
      return state;
  }
};
*/

export default handleActions({
  [INCREMENT]: (state, action) => {
    return {
      ...state,
      number: state.number + 1
    };
  },
  [DECREMENT]: (state, action) => {
    return {
      ...state,
      number: state.number - 1
    };
  },
  [SET_COLOR]: (state, action) => {
    return {
      ...state,
      color: action.payload
    }
  }
}, initialState);
