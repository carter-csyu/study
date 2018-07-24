import { createAction, handleActions } from 'redux-actions';

// Action types
const CREATE = 'counter/CREATE';
const REMOVE = 'counter/REMOVE';

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

export const create = createAction(CREATE, color => color);
export const remove = createAction(REMOVE);

export const increment = createAction(INCREMENT, index => index);
export const decrement = createAction(DECREMENT, index => index);
export const setColor = createAction(SET_COLOR, ({color, index}) => ({color, index}));

// init state
const initialState = {
  counters: [{
    number: 0,
    color: 'black'
  }]
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
  [CREATE]: (state, action) => {
    const { counters } = state;

    return {
      counters: [
        ...counters,
        {
          number: 0,
          color: action.color
        }
      ]
    }
  },
  [REMOVE]: (state, action) => {
    const { counters } = state;

    return {
      counters: counters.slice(0, counters.length - 1)
    }
  },
  [INCREMENT]: (state, { payload: index }) => {
    const { counters } = state;
    
    return {
      counters: [
        ...counters.slice(0, index),
        {
          ...counters[index],
          number: counters[index].number + 1
        },
        ...counters.slice(index + 1, counters.length)
      ]
    };
  },
  [DECREMENT]: (state, { payload: index }) => {
    const { counters } = state;

    return {
      counters: [
        ...counters.slice(0, index),
        {
          ...counters[index],
          number: counters[index].number - 1
        },
        ...counters.slice(index + 1, counters.length)
      ]
    }

  },
  [SET_COLOR]: (state, { payload: counter }) => {
    const { counters } = state;

    return {
      counters: [
        ...counters.slice(0, counter.index),
        {
          ...counters[counter.index],
          color: counter.color
        },
        ...counters.slice(counter.index + 1, counters.length)
      ]
    }
  }
}, initialState);
