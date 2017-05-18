import React from 'react';
import { connect } from "react-redux"

@connect((store) => {
    return {
    };
})
export default class Registration extends React.Component {
    render() {
        return (
            <div>
                <form action="/signup" method="post">
                    <div>
                        <label for='regEmail'>Email:</label>
                        <input type='email' name='email' id='regEmail' required />
                    </div>
                    <div>
                        <label for='regUsername'>Username:</label>
                        <input type='text' name='username' id='regUsername' required />
                    </div>
                    <div>
                        <label for='regPassword'>Password:</label>
                        <input type='password' name='password' id='regPassword' pattern=".{6,}"  title="6 characters minimum" required />
                    </div>
                    <div>
                        <input type='submit' value='Send' />
                    </div>
                </form>
            </div>
        )
    }
}