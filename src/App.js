import "./App.css"
import Nav from "./components/Nav/Nav"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import RegSignIn from "./components/RegSignIn/RegSignIn"
import RegSignUp from "./components/RegSignUp/RegSignUp"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import NewsContainer from "./components/News/NewsContainer"
import { createContext, useEffect, useState } from "react"
import ProfileContainer from "./components/Profile/ProfileContainer"
import UsersContainer from "./components/Users/UsersContainer"
import ErrorBoundary from "./components/ErrorBoundary";
import { MyContext } from "./context";
import React from "react"
function App() {
    const СlonedNav = React.cloneElement(<Nav/>, {
        logoName: "LogBook"
      });
    const [isAuth, setIsAuth] = useState(false);
    
    const logInfo = JSON.parse(localStorage.getItem("logInfo")) || []

    useEffect(() => {
        logInfo.users.forEach((user) => {
            if (user.isAuth) {
                setIsAuth(true)
            }
        })
    }, [])
    
    return (
        <BrowserRouter>
            <MyContext.Provider value={{ isAuth, setIsAuth }}>

        
            <div className="App">
                {СlonedNav}
                <div className="body">
                    <ErrorBoundary>
                        <Routes>
                            <Route path="/" element={<ProfileContainer />} />
                            <Route path="/dialogs*" element={<DialogsContainer />} />
                            <Route path="/news" element={<NewsContainer />} />
                            <Route path="/sign-in" element={<RegSignIn setIsAuth={setIsAuth} />} />
                            <Route path="/sign-up" element={<RegSignUp />} />
                            <Route path="/users" element={<UsersContainer/>}/>
                        </Routes>
                    </ErrorBoundary>
                </div>
            </div>
            </MyContext.Provider>
        </BrowserRouter>
    )
}

export default App
