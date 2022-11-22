import './App.css';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RegSignIn from './components/RegSignIn/RegSignIn'
import RegSignUp from "./components/RegSignUp/RegSignUp";
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
function App() {
  
  return (
    <BrowserRouter >
        <div className="App">
          <Nav/>
          <div className='body'>
            <Routes>
              <Route path='/' element={<Profile/>}/>
              <Route path="/dialogs*" element={<Dialogs/>}/>
              <Route path='/news' element={<News/>}/>
              <Route path='/sign-in' element={<RegSignIn/>}/>
              <Route path='/sign-up' element={<RegSignUp/>}/>
            </Routes>
            
          </div>
          
        </div>
      
    </BrowserRouter>
  );
}

export default App;
