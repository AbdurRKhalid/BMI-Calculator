import React from "react";
import ReactDOM from "react-dom";

const Header = () => (
    (
        <div className="jumbotron jumbotron-fluid" style={{backgroundColor: "#4169e1", color:"white"}}>
            <div className="container">
                <h1 className="display-4">Welcome to BMI Calculator</h1>
                <p className="lead">Calculate your Body to Mass Index, in-order to check your Health Status.</p>
            </div>
        </div>
    )
);


export default Header;