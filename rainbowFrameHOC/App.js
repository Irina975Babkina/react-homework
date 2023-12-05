import React from 'react';
import ReactDOM from 'react-dom';
import MainBlock from './components/MainBlock';

const text = "Жили-были ежики";
const caption1 = "Автор";
const caption2 = "Год написания";

ReactDOM.render(
  <MainBlock 
    text = {text}
    caption1 ={caption1}
    caption2 ={caption2}
  />
  , document.getElementById('container') 
);

