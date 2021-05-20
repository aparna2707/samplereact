import axios from 'axios'/**axios vechanu API call cheyyunnathu */
const baseUrl = "http://localhost:8000"

 const Login = (data)=>{
    return axios.post(baseUrl+"/Login". data ,{
        withCredentials:true
    })
   
}
const Deposit = (data)=>{
    return axios.post(baseUrl+"/Login",data ,{
        withCredentials:true
    })
   
}
export default{
     Login,
     Deposit
    }