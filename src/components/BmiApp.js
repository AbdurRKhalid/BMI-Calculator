import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Form from "../components/Form";

export default class BmiApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Form/>
            </div>
        )
    }
}