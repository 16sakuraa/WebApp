import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Box from './Box';

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

const Box1 = () => {
  return (
    <div>
      <Box
        imgSrc="padKrapao.jpg"
        imgAlt="padKrapaoMoo"
        headerText="อาหารคาว"
        subHeaderText="ข้าวกะเพราไก่ไข่ดาว" 
        mainText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
    </div>
  );
};

const Box2 = () => {
  return (
    <div>
      <Box
        imgSrc="guyFriedRice.jpg"
        imgAlt="Fried Rice"
        headerText="อาหารคาว"
        subHeaderText="ข้าวผัด" 
        mainText="Gravida dictum fusce ut placerat orci. Vitae congue mauris rhoncus aenean. Erat nam at lectus urna duis. Ut sem nulla pharetra diam sit amet. Sit amet nisl suscipit adipiscing bibendum est ultricies integer."/>
    </div>
  );
}; 


const Box3 = () => {
  return (
    <div>
      <Box
        imgSrc="mangostickyrice2.jpg"
        imgAlt="Mango Sticky Rice"
        headerText="ของหวาน"
        subHeaderText="ข้าวเหนียวมะม่วง" 
        mainText="Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Tincidunt eget nullam non nisi. Vitae nunc sed velit dignissim sodales ut. Eleifend donec pretium vulputate sapien nec sagittis. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus."/>
    </div>
  );
}; 


root.render(
  <React.StrictMode>
    <Topic />
    <Box1 />
    <Box2 />
    <Box3 />
  </React.StrictMode>
);

reportWebVitals();
