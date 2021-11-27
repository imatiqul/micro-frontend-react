import React from "react";
import ReactDOM from "react-dom";

import  BasketStatus from "./screens/Basket/components/BasketStatus";

import "./index.css";

const App = () => <div className="container"><div className="row">
    
    <section className="d-flex align-content-center justify-content-between">
    <BasketStatus badge={4}></BasketStatus>            
            </section>
    </div></div>;

ReactDOM.render(<App />, document.getElementById("app"));
