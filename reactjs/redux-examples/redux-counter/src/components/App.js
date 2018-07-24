import React, { Component } from 'react';
import Buttons from './Buttons';
import CounterListContainer from 'containers/CounterListContainer';
import * as counterActions from 'store/modules/counter';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { onCreate, onRemove } = this.props;

    return (
      <div>
        <Buttons 
          onCreate={onCreate}
          onRemove={onRemove}
        />
        <CounterListContainer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onCreate: () => dispatch(counterActions.create('black')),
  onRemove: () => dispatch(counterActions.remove())
});

export default connect(undefined, mapDispatchToProps)(App);
