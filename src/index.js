import React from 'react';
import ReactDOM from 'react-dom/client';
import BackStage from './BackStage';
import "./scss/_bs.scss";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> 
    <BrowserRouter>
    <BackStage />
  </BrowserRouter>
  </Provider>

);
