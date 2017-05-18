import React from 'react';
import { Link } from 'react-router';

export default function Settings(props) {
    if(props.obj) {
        return  (
            <form>
                <div>
                    <label for='setUsername'>Username:</label>
                    <input type='text' name='username' id='setUsername' value={props.obj.username} onChange={props.changeUsername} />
                </div>
                <div>
                    <label for='setFullname'>Fullname:</label>
                    <input type='text' name='fullname' id='setFullname' value={props.obj.fullname} onChange={props.changeFullname} />
                </div>
                <div>
                    <label for='setCity'>City:</label>
                    <input type='text' name='city' id='setCity' value={props.obj.city} onChange={props.changeCity} />
                </div>
                <div>
                    <label for='setState'>State:</label>
                    <input type='text' name='state' id='setState' value={props.obj.state} onChange={props.changeState} />
                </div>
                <div>
                    <input type='button' value='Save' onClick={props.chlickSave} />
                </div>
            </form>
        )
    } else {
        return <p></p>
    }
}