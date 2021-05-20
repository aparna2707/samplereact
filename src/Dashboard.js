import React from 'react';
import Hello from './Hello';
import  './Dashboard.css'
class Dashboard extends React.Component{
    state = {/*SPECIAL OBJECT IN REACT*/
        username: '',
        password: '',
        amount:''
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
    amountChange = (event) => {
        this.setState({
            amount: event.target.value
        })
    }


    handleSubmit1 = (event) => {/*CLICK EVENT IN REACT IE LIKE ONCLICK EVENT IN ANGULAR*/
       alert("your account is credited with:"+this.state.amount)
       event.preventDefault();
    }
    handleSubmit2 = (event) => {/*CLICK EVENT IN REACT IE LIKE ONCLICK EVENT IN ANGULAR*/
        alert("your account is debited with:"+this.state.amount)
        event.preventDefault();
     
     }
    render() {
        return <div className="Register">
 <h1>Welcome To SBM Bank</h1>
            <form onSubmit={this.handleSubmit1}>
               <h2>Cash deposit form</h2>
                {/* <h2>username: {this.state.username}</h2> */}
                <Hello name={this.state.username}/>
                <input onChange={this.acnoChange} type="text" name="acno" placeholder="enter your account number" /><br></br>
                <input onChange={this.passwordChange} type="password" name="password" placeholder="enter your password" /><br></br>
                <input onChange={this.amountChange} type="text" name="amount" placeholder="enter your deposit amount" /><br></br>
                <input class="btn btn-success" type="submit" value="deposit" />

            </form>
            <form onSubmit={this.handleSubmit2}>
               <h2>Cash withdraw form</h2>
                {/* <h2>username: {this.state.username}</h2> */}
                <Hello name={this.state.username}/>
                <input onChange={this.acnoChange} type="text" name="acno" placeholder="enter your account number" /><br></br>
                <input onChange={this.passwordChange} type="password" name="password" placeholder="enter your password" /><br></br>
                <input onChange={this.amountChange} type="text" name="amount" placeholder="enter your withdraw amount" /><br></br>
                <input class="btn btn-success" type="submit" value="withdraw" />

            </form>
        </div>
    }
}

export default  Dashboard;
