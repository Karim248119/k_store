import React from "react";
import Clock from "./clock";

const Timer = () =>
{
    let deadline = "January, 10, 2024";

    return (
        <div className="App">
            <Clock deadline={ deadline } />
        </div>
    );
};

export default Timer;
