import React, { Component } from 'react';
import './Palette.css';
import Color from './Color';

class Palette extends Component {
  static defaultProps = {
    color: '#343a40',
    colors: [],
    onClick: () => console.warn('onClick function is not defined')
  }

  render() {
    const { colors, onClick } = this.props;

    console.log(this.props.color);
    const colorList = colors.map(
      color => (
        <Color 
          key={color}
          color={color}
          activeColor={this.props.color}
          onClick={onClick}
        />
      )
    );

    return (
      <div className="palette">
        {colorList}
      </div>
    )
  }
}

export default Palette;