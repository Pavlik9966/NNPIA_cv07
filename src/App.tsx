import React from "react";
import Tasks from "./pages/Tasks";
import {Container} from "react-bootstrap";
import Header from "./components/ui/Header";
import './App.css'
import {Provider} from "react-redux";
import store from "./features/store";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import TaskDetail from "./pages/TaskDetail";

function App() {
    return (
        <Provider store={store}>
            <Container className="p-3">
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path={"/task"} element={<Tasks/>}/>
                        <Route path={"/task/:id"} element={<TaskDetail/>}/>
                    </Routes>
                </BrowserRouter>
            </Container>
        </Provider>
    )
}

export default App;