import './App.css';
import Login from "./views/Login";
import Overview from "./views/Overview";
import Rate from "./views/Rate";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

function getLoginCookie() {
    const sCookie = ""; //TODO implement cookie handling
    return sCookie;
}

function isLoggedIn() {
    return !!getLoginCookie();
}

function initRoute() {
    if (isLoggedIn()) {
        //TODO nav to menu
    } else {
        //...
    }
}

function App() {
    initRoute();

    return (
        <div className={"content"}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/overview" element={<Overview/>}/>
                    <Route path="/rate" element={<Rate/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )

}

export default App;
