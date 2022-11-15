import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let usersItems = [
  {id: 1, name: "Адиль Токен"},
  {id: 2, name: "Чингиз Ахулбай"},
  {id: 3, name: "Асхат Каим"},
  {id: 4, name: "Алия Шахуали"},
  {id: 5, name: "Тамерлан Жайсанов"},
  {id: 6, name: "Айнур Даулетова"},
  {id: 7, name: "Бауыржан Рахманбек"},
  {id: 8, name: "Ермек Тауекелов"},
  {id: 9, name: "Нурлан Танирберген"},
  {id: 10, name: "Жанибек Мухамедкали"}
]
root.render(
  <React.StrictMode>
    <App usersItems={usersItems}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
