import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as counterActions from 'store/modules/counter';
import { bindActionCreators } from 'redux';
import CounterList from 'components/CounterList';
import { getRandomColor } from 'utils';

class CounterListContainer extends Component {
  handleIncrement = (index) => {
    const { CounterActions } = this.props;
    CounterActions.increment(index);
  }

  handleDecrement = (index) => {
    const { CounterActions } = this.props;
    CounterActions.decrement(index);
  }

  handleSetColor = (index) => {
    const { CounterActions } = this.props;
    CounterActions.setColor({
      index: index,
      color: getRandomColor()
    });
  }
  
  render() {
    const { counters } = this.props;
    const {
      handleIncrement,
      handleDecrement,
      handleSetColor
    } = this;

    return (
      <CounterList
        counters={counters}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onSetColor={handleSetColor}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  counters: state.counter.counters
});

const mapDispatchToProps = (dispatch) => ({
  CounterActions: bindActionCreators(counterActions, dispatch)
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterListContainer);