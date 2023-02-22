import React from 'react';
import PlusButton from './PlusButton';
import MinusButton from './MinusButton';
import Counter from './Counter';

class Box extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
  
    render() {
    const { imgSrc, imgAlt ,headerText, subHeaderText, mainText } = this.props;
  
      return (
        <div className="box">
          <img src={imgSrc} alt={imgAlt} />
          <br />
          <p id="head">{headerText}</p>
          <p id="subhead">{subHeaderText}</p>
          <p id="text">{mainText}</p>
          <br />
          <br />
          <br />
          <br />
          <div className="container">
            <PlusButton
              count={this.state.count}
              increaseCount={(count) => this.setState({ count })}
            />
            <Counter count={this.state.count} />
            <MinusButton
              count={this.state.count}
              decreaseCount={(count) => this.setState({ count })}
            />
          </div>
        </div>
      );
    }
  }

export default Box;