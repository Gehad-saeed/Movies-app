import React, { Component } from 'react'
import axios from 'axios'

export default class LogIn extends Component {
    state ={errorMessage:""}
    user={
        email:"",
        password:""
    }
    getFormData=(e)=>{
        this.user[e.target.name]= e.target.value; 
        // console.log(e.user);
    }
    sendData= async (e)=>{
        e.preventDefault()
        let{data} = await axios.post("https://route-egypt-api.herokuapp.com/signin",this.user)
        console.log(data);
        console.log(this.props);

        if(data.message==="success"){
            localStorage.setItem("token",data.token);
            this.props.history.push("/home")
        }
        else {
this.setState({
    errorMessage:data.message
})
        }
    }
    render() {
        // console.log(this.props);
        return (
            <>
                <div className="w-75 mx-auto my-5">
                    <form onSubmit={this.sendData}>
                        <input onChange={this.getFormData} type="email" placeholder="Email" name="email" className="form-control mt-3" />
                        <input onChange={this.getFormData} type="password" placeholder="Password" name="password" className="form-control mt-3" />
                        <div className="alert alert-danger mt-3">
                            {this.state.errorMessage}
                        </div>
                        <button className="btn btn-info float-right mt-3">Login</button>
                    </form>
                </div>
            </>
        )
    }
}
