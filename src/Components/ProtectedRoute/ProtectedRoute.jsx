import React, { Component } from 'react'
import { Route ,Redirect} from 'react-router-dom';
import jwt_decode from "jwt-decode";

export default class ProtectedRoute extends Component {
    render() {
        let token = localStorage.getItem('token')
        try{
            var decoded = jwt_decode(token);
        console.log(decoded);
        }
        catch(error){
            localStorage.clear();
            return (
                <div>
                    <Redirect to ='/login' />
                </div>
            )
        }
        if (token) {
            return (
                <div>
                    <Route path={this.props.path} component={this.props.component} />
                </div>
            )   
        }
        else {
            return (
                <div>
                    <Redirect to ='/login' />
                </div>
            )
        }
    }
}
