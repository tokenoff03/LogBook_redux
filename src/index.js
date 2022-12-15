import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Context} from "./context";
import store from "./redux/redux-store";
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));

localStorage.setItem(
  "logInfo",
  JSON.stringify({
    users: [{ login: "ad1lek", password: 123123, isAuth: false }],
  })
);   

let rerenderEntireTree = ()=> {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
      <App/>
      </Provider>
    </React.StrictMode>
  );
}
rerenderEntireTree();

store.subscribe(()=>{
  let state = store.getState();
  rerenderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
