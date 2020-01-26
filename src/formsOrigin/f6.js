import React from 'react';

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            age: null,
            errormessage: '',
            errormessage2: '',
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';
        let errName = '';

        if (nam === "age") {
            if (val != "" && !Number(val)) {
                err = <strong>Your age must be a number</strong>;
            }
            this.setState({errormessage: err});
        }
        if (nam === "username") {
                if (val.length < 2) {
                    errName = <strong>Your name is too short</strong>;

                }
            this.setState({errormessage2: errName});
        }
        this.setState({[nam]: val});
    }

    render() {
        return (
            <form>
                <h1>Hello {this.state.username} {this.state.age}</h1>
                <p>Enter your name:</p>
                <input
                    type='text'
                    name='username'
                    onChange={this.myChangeHandler}
                />
                {this.state.errormessage2}

                <p>Enter your age:</p>
                <input
                    type='text'
                    name='age'
                    onChange={this.myChangeHandler}
                />
                {this.state.errormessage}


            </form>
        );
    }
}