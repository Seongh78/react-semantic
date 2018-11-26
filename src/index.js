import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import { createBrowserHistory } from "history";
// 라우터
import { 
    BrowserRouter, 
    Route, 
    Switch 
} from "react-router-dom";
// 라우트
import indexRoutes from "./routes";
// Semantic - UI
import "semantic-ui-css/semantic.min.css";


const view = (
    <BrowserRouter>
        <Switch>
            {indexRoutes.map((prop, index)=>{
                return <Route path={prop.path} key={index} component={prop.component} />
            })}
        </Switch>
    </BrowserRouter>
);
ReactDOM.render(view, document.getElementById("root"));

serviceWorker.unregister();
