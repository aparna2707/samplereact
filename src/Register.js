import React from 'react';
import './Register.css'
import Hello from './Hello';

class Register extends React.Component {


    state = {/*SPECIAL OBJECT IN REACT*/
        acno:'',
        username: '',
        password: ''
    }
    acnoChange=(event)=>{
        this.setState({
            acno:event.target.value
        })
    }
    usernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    passwordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = (event) => {/*CLICK EVENT IN REACT IE LIKE ONCLICK EVENT IN ANGULAR*/
      
        event.preventDefault();
        this.props.history.push("/Login")
    }

    render() {
        return <div className="Register">

            <form onSubmit={this.handleSubmit}>
                <h1>Register SBM Bank</h1>
                {/* <h2>username: {this.state.username}</h2> */}
                <Hello name={this.state.username}/>
                <input onChange={this.acnoChange} type="text" name="acno" placeholder="enter your account number" /><br></br>
                <input onChange={this.usernameChange} type="text" name="username" placeholder="enter your username" /><br></br>
                <input onChange={this.passwordChange} type="password" name="password" placeholder="enter your password" /><br></br>
                <br></br>
                <input class="btn btn-success" type="submit" value="Register" />

            </form>
        </div>
    }
}

export default Register;
