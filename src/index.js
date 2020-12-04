import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store.js'
import { Provider } from 'react-redux';


let renderTree = (store) => {
  ReactDOM.render(
    <BrowserRouter >
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter >,
    document.getElementById('root')
  );
}
renderTree(store);
store.subscribe(() => {
  renderTree(store);
});
window.store = store;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
