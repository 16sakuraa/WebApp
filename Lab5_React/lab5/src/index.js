import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const h = <div><h1>SW Studio</h1></div>;
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
root.render(<Topic/>);

// const PlusButton = ({count, increaseCount}) => {
//   return(
//     <button className="upvote" onClick={() => increaseCount(count + 1)}>Click to Vote</button>
//   )
// };

const PlusButton = ({ count, increaseCount }) => {
  const handleClick = () => {
    if (count < 10) {
      increaseCount(count + 1);
    }
  };

  return (
    <button className="upvote" onClick={handleClick}>
      Click to Vote
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
      <center>{countText}</center>
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
      <img src="/960x0.jpg" alt="hutao" />
      <p id="head">อาหารคาว</p>
      <p id="subhead">hutao</p>
      <p id="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br></br>
      <PlusButton count={this.state.count} increaseCount={(count) => this.setState({count})}/>
      <Counter count={this.state.count} />
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
