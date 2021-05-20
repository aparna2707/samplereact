import React from 'react';
import './Login.css';
import Hello from './Hello';
import { withRouter } from 'react-router-dom';
import bankservices from './services/bankservice';

/*props are used only in class based*/
/*here data is written in the form of jsx (javascript and xml )ie both html code and js code can be written in the same file.*/
class Login extends React.Component {
    state = {/*SPECIAL OBJECT IN REACT*/
        acno: '',
        password: ''
    }
    acnoChange = (event) => {
        this.setState({
            acno: event.target.value
        })
    }
    passwordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = (event) => {/*CLICK EVENT IN REACT IE LIKE ONCLICK EVENT IN ANGULAR*/
        event.preventDefault();/**prevents from updating your data in url */
       bankservices.Login({
           acno:this.state.acno,
           password:this.state.password
       })

       .then(data=>{
        this.props.history.push("/dashboard");
       })
       /**navigate cheyyan use cheyyunnathu class basedil */
    
       .catch(error=>{
           alert(error.response.data.message);
    })

    
}


    render() {
        return <div className="login">

            <form onSubmit={this.handleSubmit}>
                <h1>Login SBM Bank</h1>
                {/* <h2>username: {this.state.username}</h2> */}
                <Hello name={this.state.username} /> {/*props value passing */}
                <input onChange={this.acnoChange} type="text" name="acno" placeholder="enter your account number" /><br></br>
                <input onChange={this.passwordChange} type="password" name="password" placeholder="enter your password" /><br></br>
                <input class="btn btn-success" type="submit" value="Login" />

            </form>
        </div>
    }
}

// export default Login;
export default withRouter(Login);