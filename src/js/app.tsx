import * as React from "react";
import * as ReactDOM from "react-dom";
import "theme.scss";
import MainContainer from "./containers/MainContainer";


const rootId: string = "root";

const render = () => ReactDOM.render(
    <MainContainer/>,
    document.getElementById(rootId)
);

render();
