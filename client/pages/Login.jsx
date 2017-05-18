import React from 'react';
import { connect } from "react-redux"

@connect((store, ownProps) => {
    return {
    };
})
export default class Login extends React.Component {
    render() {
        return (
            <div>
                <form action="/login" method="post">
                    <div>
                        <label for='loginEmail'>Email:</label>
                        <input type='email' name='username' id='loginEmail' required />
                    </div>
                    <div>
                        <label for='loginPassword'>Password:</label>
                        <input type='password' name='password' id='loginPassword' required />
                    </div>
                    <div>
                        <input type='submit' value='Log In'/>
                    </div>
                </form>
            </div>
        )
    }
}