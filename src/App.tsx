import React from "react";
import Tasks from "./pages/Tasks";
import {initData} from "./data/init-data";
import {Container} from "react-bootstrap";

function App() {
    return (
        <Container className="p-3">
            <Tasks tasks={initData}/>
        </Container>
    )
}

export default App;