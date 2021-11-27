import React from "react";
import ReactDOM from "react-dom";
import  Header from "./components/Header";

import "./index.css";

const HeaderChildComponent = () =><div class="container">
    <div class="esh-app-header-promo">
        <span class="esh-app-header-promo-title">All T-SHIRTS</span>
        <span class="esh-app-header-promo-subtitle">On sale this weekend</span>
    </div>
    
</div>;

const App = () => <div class="container"><Header url="/catalog" component={<HeaderChildComponent></HeaderChildComponent>}></Header></div>;

ReactDOM.render(<App />, document.getElementById("app"));
