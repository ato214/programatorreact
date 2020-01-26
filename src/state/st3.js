import React from 'react';

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1977,
            counter: 0
        };
    }


        requestColor = () => {
        let color = prompt("Wpisz kolor");
        this.changeColor(color);
    }


        changeColor = (color) => {
        this.setState({color: color, counter: this.state.counter + 1});
            }

    render (){
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p> It is a {this.state.color} {this.state.model} from {this.state.year}.</p>
                <button type="button" onClick={(this.requestColor)}>Change color</button>

                <button type="button" onClick={(this.props.runEngine)}>Run engine</button>
                <p>Counter: {this.state.counter}</p>
            </div>
        )
    }
};

export default class Garage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counterGarage: 0
        };
    }
    handleClick =() => {
        this.setState({counterGarage: this.state.counterGarage + 1});
    }

    render(){
        return (
            <div>
                <Car runEngine = {this.handleClick}/>
                <p>Uruchomiono {this.state.counterGarage} razy</p>
            </div>
        );
    }
}