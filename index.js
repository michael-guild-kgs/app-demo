import React from "react";
import ReactDOM from "react-dom";
import Chart from './src/chart'


const App = () => {
    return (
        <div>
            hi
            <Chart/>
        </div>
    )
};
ReactDOM.render(<App />, document.getElementById("app"));