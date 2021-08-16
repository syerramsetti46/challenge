import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import AppConnector from "./connectors/AppConnector";
import {store,history} from './store';
import { ConnectedRouter } from 'connected-react-router';


ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppConnector />
      </ConnectedRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
