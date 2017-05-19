import React from 'react';

import { Grid, Alert } from 'react-bootstrap';

export default function Message(props) {
    if(props.msg != '') {
        return (
            <Grid>
                <Alert>{props.msg}</Alert>
            </Grid>
        )
    } else {
        return <i></i>
    }
}