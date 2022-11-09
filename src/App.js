import './App.css';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from './components/Registration/Registration'
function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Nav/>
        <div className='body'>
       
          <Routes>
            <Route path='/' element={<Profile/>}/>
            <Route path="/message" ></Route>
            <Route path='/sign-in' element={<Registration/>}/>
          </Routes>
          
        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
