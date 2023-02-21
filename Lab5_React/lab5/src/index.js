import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


class Topic extends React.Component {
  render() {
    return <div id="food"><center>โหวตอาหาร</center></div>;
  }
}

const PlusButton = ({ count, increaseCount }) => {
  const handleClick = () => {
    if (count < 10) {
      increaseCount(count + 1);
    }
    else if (count === 10)
    {
      alert("Cannot vote more")
    }
  };

  return (
    <button className="upvote" onClick={handleClick}>
      Click to Vote
    </button>
  );
};

const MinusButton = ({ count, decreaseCount }) => {
  const handleClick = () => {
    if (count > 0) {
      decreaseCount(count - 1);
    }
    else if (count === 0)
    {
      alert("Cannot Unvote")
    }
  };

  return (
    <button className="downvote" onClick={handleClick}>
      Click to Unvote
    </button>
  );
};

const Counter = ({ count }) => {

  let countText;
  if (count === 0) {
    countText = 'MIN';
  } else if (count === 10) {
    countText = 'MAX';
  } else if (count >= 1 && count <= 9) {
    countText = count;
  }

  return (
    <div className='boxCount'>
      <p>
      {countText}
      </p>
    </div>
  );
};



class Box extends React.Component {



  constructor(props){
    super(props);
    this.state = {count: 0};
  }

  render() {
  return (
    <div className="box">
      <img src="padKrapao.jpg" alt="padKrapaoMoo" />
      <p id="head">อาหารคาว</p>
      <p id="subhead">ข้าวกะเพราไก่ไข่ดาว</p>
      <p id="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br></br><br></br><br></br><br></br><br></br>
      <div className="container">
        <PlusButton count={this.state.count} increaseCount={(count) => this.setState({count})}/>
        <Counter count={this.state.count} />
        <MinusButton count={this.state.count} decreaseCount={(count) => this.setState({count})}/>
      </div>
    </div>
  );
  }
};

root.render(
  <React.StrictMode>
    <Topic />
    <Box />
  </React.StrictMode>
);

reportWebVitals();
