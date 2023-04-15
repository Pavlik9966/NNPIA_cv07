import React from "react";
import Tasks from "./pages/Tasks";
import {Container} from "react-bootstrap";

function App() {
    return (
        <Container className="p-3">
            <Tasks/>
        </Container>
    )
}

export default App;