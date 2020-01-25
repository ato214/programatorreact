import React from 'react';


// class Car  extends React.Component {
//     render () {
//         if (this.props.brand == 'Toyota'){
//             return <h2>I am a amazing {this.props.brand}</h2>
//         } else {
//             return <h2>I am a terrible {this.props.brand}</h2>
//         }
//
//     }
//     }


class Car  extends React.Component {
    render () {
        var opinion;
        if (this.props.brand == 'Toyota'){
            opinion = "amazing"
        }
            return <h2>I am {opinion} {this.props.brand}</h2>
        }
}

    export default class Garage extends React.Component {
    render() {

    var carname = prompt ("What is your car brand?");

        return  (
            <div>
                <h1>Who lives in my Garage?</h1>
                <Car brand = {carname}/>
            </div>
        )
    }
}