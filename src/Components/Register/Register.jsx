import React, { Component } from 'react'
import axios from 'axios'
export default class Register extends Component {
    user={
        first_name:"",
        last_name:"",
        email:"",
        password:""
    }
    getFormData=(e)=>{
        this.user[e.target.name]= e.target.value; 
        // console.log(e.user);
    }
    sendData= async (e)=>{
        e.preventDefault()
        let{data} = await axios.post("https://route-egypt-api.herokuapp.com/signup",this.user)
        console.log(data);
        if(data.message==="sucsess"){
            e.target.reset();
        }
    }
    render() {
        return (
            <>
                <div className="w-75 mx-auto my-5">
                    <form onSubmit={this.sendData}>
                        <input onChange={this.getFormData} type="text" name="first_name" placeholder="First Name" className="form-control mt-3" />
                        <input onChange={this.getFormData} type="text" placeholder="Last Name" name="last_name" className="form-control mt-3" />
                        <input onChange={this.getFormData} type="email" placeholder="Email" name="email" className="form-control mt-3" />
                        <input onChange={this.getFormData} type="password" placeholder="Password" name="password" className="form-control mt-3" />
                        <button className="btn btn-info float-right mt-3">Register</button>
                    </form>
                </div>
            </>
        )
    }
}
