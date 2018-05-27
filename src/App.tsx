import * as React from "react";
import * as ReactDOM from "react-dom";
import {Roadmapview} from "./Components/Roadmapview";

export function initialize(): void {
    ReactDOM.render(
        <Roadmapview />, 
        document.getElementById("root")
    )
}