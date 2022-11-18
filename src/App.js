import './App.css';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RegSignIn from './components/RegSignIn/RegSignIn'
import RegSignUp from "./components/RegSignUp/RegSignUp";
import Dialogs from './components/Dialogs/Dialogs';
import {Context} from "./context"
import { useState } from 'react';
function App() {
  let usersDialog = [
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

  let users =[];
  let currentUser = [];


  return (
      <BrowserRouter>
          <Context.Provider value={{ usersDialog, users, currentUser }}>
              <div className="App">
                  <Nav />
                  <div className="body">
                      <Routes>
                          <Route path="/" element={<Profile />} />
                          <Route path="/dialogs*" element={<Dialogs />} />
                          <Route path="/dialogs/:id" element={<Dialogs />} />
                          <Route path="/sign-in" element={<RegSignIn />} />
                          <Route path="/sign-up" element={<RegSignUp />} />
                      </Routes>
                  </div>
              </div>
          </Context.Provider>
      </BrowserRouter>
  )
}

export default App;
