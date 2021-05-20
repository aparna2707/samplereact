/*in functional components we cannot use state so we use hooks to access the properties of class
 usestate is  the hook to used to access the  components of the class. hooks are used only in function based*/

import Hello from './Hello';

import React ,{useState} from 'react';

import {useHistory} from 'react-router-dom';

function Loginfunctional(){
const history=useHistory();
const names=["anu", "neenu"];/**declaring an array */
    const [username,setUsername]=useState('') ;

     const usernameChange=(event) =>
        {
            setUsername(event.target.value)
        }

    const [password,setPassword]=useState('') 
         const passwordChange=(event) =>
             {
                 setPassword(event.target.value)
                               }

    /*  state={} define cheyyan pattilla ithnu pakaram define cheyyunnathu ingane,.
     use stateine call cheyyumbol athu return cheyyunna oru array aanu athile first element aanu username */
/*nammal this.setstateinu pakaram use cheyyunna function aanu setusername.\
 nammukku return kiitunna value store cheyyan anu setusername upayogikkunnathu
 */
 const handleSubmit=(event)=>{
    alert("username:"+username)
    alert("password:"+password)
    event.preventDefault();
    history.push("/dashboard")
}


    return   <div className="Loginfunctional">

            <form onSubmit={handleSubmit}>
                {/* {
                    names.map(names=><h1>{names}</h1>)/*printing an array each element gets printed */
                } 
                <h1>Login SBM Bank</h1>
                {/* <h2>username: {username}</h2> */}
                <Hello name={username}/>
                <input onChange={usernameChange} type="text" name="username" placeholder="enter your username"/><br></br>
                <input onChange={passwordChange} type="password" name="password" placeholder="enter your password"/><br></br>
                <input class="btn btn-success" type="submit"  value="Login" />

            </form>
        </div>
}

export default Loginfunctional;