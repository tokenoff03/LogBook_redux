import "./App.css"
import Nav from "./components/Nav/Nav"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import RegSignIn from "./components/RegSignIn/RegSignIn"
import RegSignUp from "./components/RegSignUp/RegSignUp"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import NewsContainer from "./components/News/NewsContainer"
import { useEffect, useState } from "react"
import ProfileContainer from "./components/Profile/ProfileContainer"
import UsersContainer from "./components/Users/UsersContainer"

function App() {
    const [isAuth, setIsAuth] = useState(false)
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
            <div className="App">
                <Nav isAuth={isAuth} setIsAuth={setIsAuth} />
                <div className="body">
                    <Routes>
                        <Route path="/" element={<ProfileContainer />} />
                        <Route path="/dialogs*" element={<DialogsContainer />} />
                        <Route path="/news" element={<NewsContainer />} />
                        <Route path="/sign-in" element={<RegSignIn setIsAuth={setIsAuth} />} />
                        <Route path="/sign-up" element={<RegSignUp />} />
                        <Route path="/users" element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
