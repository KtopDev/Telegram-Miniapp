import './App.css';
import {useCallback, useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import {Route, Routes, useNavigate} from "react-router-dom";
import Main from "./screens/main/MainScreen";
import {PATH_DETAIL, PATH_SERVER} from "./constants/Paths";
import {PATH_TEST} from "./constants/Paths";
import ServerScreen from "./screens/server/ServerScreen";
import TestScreen from "./screens/server/TestScreen";
import DetailScreen from "./screens/server/DetailScreen";

function App() {
    const {webApp} = useTelegram()
    const navigate = useNavigate();

    const onBackClick = useCallback(() => {
        navigate(-1)
    }, [navigate])

    const onMainClick = useCallback(() => {
        webApp.showAlert("Main button click")
    }, [webApp])

    useEffect(() => {
        webApp.ready()
        webApp.BackButton.onClick(onBackClick)
        webApp.MainButton.onClick(onMainClick)
        return () => {
            webApp.BackButton.offClick(onBackClick)
            webApp.MainButton.offClick(onMainClick)
        };
    }, [webApp])

    return (
        <div className="App">
            <Routes>
                <Route index element={<Main/>}/>
                <Route path={PATH_SERVER} element={<ServerScreen/>}/>
                <Route path={PATH_TEST} element={<TestScreen/>}/>
                <Route path={PATH_DETAIL} element={<DetailScreen/>}/>
            </Routes>
        </div>
    );
}

export default App;
