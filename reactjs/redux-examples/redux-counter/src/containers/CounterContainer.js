import React, { Component } from 'react';
import Counter from 'components/Counter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from 'store/modules/counter';
import { getRandomColor } from 'utils';

class CounterContainer extends Component {
  handleIncrement = () => {
    const { CounterActions } = this.props;
    CounterActions.increment();
  }

  handleDecrement = () => {
    const { CounterActions } = this.props;
    CounterActions.decrement();
  }

  handleSetColor = () => {
    const { CounterActions } = this.props;
    const color = getRandomColor();
    CounterActions.setColor(color);
  }

  render() {
    const { number, color } = this.props;
    const {
      handleIncrement,
      handleDecrement,
      handleSetColor
    } = this;

    return (
      <Counter
        number={number}
        color={color}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onSetColor={handleSetColor}
      />
    );
  }
}; 

const mapStateToProps = (state) => ({
  number: state.counter.number,
  color: state.counter.color
});

/*
const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(CounterActions.increment()),
  onDecrement: () => dispatch(CounterActions.decrement()),
  onSetColor: (color) => dispatch(CounterActions.setColor(color))
});
*/

const mapDispatchToProps = (dispatch) => ({
  CounterActions: bindActionCreators(counterActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);