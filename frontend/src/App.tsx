import React from "react";
import { Router, UserContext } from "./context";
import "./global.scss";

function App() {
    return (
        <>
            <UserContext>
                <Router />
            </UserContext>
        </>
    );
}

export default App;
