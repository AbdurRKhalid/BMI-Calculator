import React from "react";
import ReactDOM from "react-dom";
import BmiShower from "./BmiShower";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCompleteBMI: false,
            BMI: null,
            name: null,
            age: null,
            height: null,
            weight: null
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    handleFormSubmit(event) {
        event.preventDefault();
        let enteredName = event.target.elements.name.value.trim();
        let enteredAge = event.target.elements.age.value.trim();
        let enteredHeight = event.target.elements.height.value.trim();
        let enteredWeight = event.target.elements.weight.value.trim();
        let calculatedBMI = enteredWeight / (enteredHeight * enteredHeight);
        this.setState({ showCompleteBMI: true, BMI: calculatedBMI, name: enteredName, age: enteredAge, height: enteredHeight, weight: enteredWeight }, () => {
            console.log(this.state.name, this.state.age, this.state.height, this.state.weight, this.state.BMI);
        });
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" class="form-control" placeholder="Enter your Name" style={{ margin: "10px" }} id="name"></input>
                    <input type="number" class="form-control" placeholder="Enter your Age" style={{ margin: "10px" }} id="age"></input>
                    <input type="number" step="0.01" class="form-control" placeholder="Enter your Height (ms)" style={{ margin: "10px" }} id="height"></input>
                    <input type="number" class="form-control" placeholder="Enter your Weight (Kgs)" style={{ margin: "10px" }} id="weight"></input>
                    <button type="submit" class="btn btn-success container" style={{ margin: "10px" }}>Claculate BMI!</button>
                </form>
                {this.state.showCompleteBMI && <BmiShower name={this.state.name} calculatedBIM={this.state.BMI} />}
            </div>
        )
    }
}

export default Form;