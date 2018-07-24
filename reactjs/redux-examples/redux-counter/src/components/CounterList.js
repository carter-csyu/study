import React from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';
import './CounterList.css';

const CounterList = ({counters, onIncrement, onDecrement, onSetColor}) => {
  const counterList = counters.map(
    (counter, index) => (
      <Counter
        key={index}
        index={index}
        {...counter}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onSetColor={onSetColor}
      />
    )
  );
  
  return (
    <div className="CounterList">
      {counterList}
    </div>
  );
};

CounterList.defaultProps = {
  counters: [],
  onIncrement: () => console.warn('onIncrement not defined'),
  onDecrement: () => console.warn('onDecrement not defined'),
  onSetColor: () => console.warn('onSetColor not defined'),
};

CounterList.propTypes = {
  counters: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string,
    number: PropTypes.number
  })),
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func
};

export default CounterList;