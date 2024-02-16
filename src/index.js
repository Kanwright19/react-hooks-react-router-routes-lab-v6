import React from "react";
import  ReactDOM  from "react-dom/client";
import routes  from "./routes";
import { BrowserRouter, RouterProvider } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
    <RouterProvider routes ={routes} />
    </BrowserRouter>,
    document.getElementById("root")
);