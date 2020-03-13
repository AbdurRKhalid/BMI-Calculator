import React from "react";
import ReactDOM from "react-dom";

const BmiShower = (props) => (
    (
        <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">{props.name}</h4>
            <hr></hr>
            <p>Your Calculated BMI is {props.calculatedBIM}</p>
            <hr></hr>
            <p class="mb-0">Take Care of Your Health, because Health is Wealth!</p>
        </div>
    )
)

export default BmiShower;