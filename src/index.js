import React, {createContext} from 'react';
import {render} from 'react-dom';
// import {colors as colors} from "./color-data.json"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ColorProvider from './component/color-hooks';

//새로운 컨텍스트 객체 생성
// export const ColorContext = createContext();

render(
    <ColorProvider>
      <App />
    </ColorProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
