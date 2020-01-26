import React from 'react';

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            age: null,
        };
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        let age = this.state.age;
        if (!Number(age)) {
            alert("Your age must be a number");
        }
    }


    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    render() {
        return (
            <form onSubmit={this.mySubmitHandler}>

                <p>Enter your name</p>
                <input
                    type='text'
                    name='username'
                    onChange={this.myChangeHandler}/>


                <p>Enter your age</p>
                <input
                    type='text'
                    name='age'
                    onChange={this.myChangeHandler}/>

                <br/>
                <br/>
                <input type='submit' value='Sprawdź'/>
            </form>

        )
    }
}