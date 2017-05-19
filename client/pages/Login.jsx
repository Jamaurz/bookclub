import React from 'react';
import { connect } from "react-redux"

import { Form, FormGroup, ControlLabel, FormControl, Grid, Col, Button } from 'react-bootstrap';

@connect((store, ownProps) => {
    return {
    };
})
export default class Login extends React.Component {
    render() {
        return (
            <Grid>
                <Form action="/login" method="post" horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Email:
                        </Col>
                        <Col sm={10}>
                            <FormControl type='email' name='username' required />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password:
                        </Col>
                        <Col sm={10}>
                            <FormControl type='password' name='password' required />
                        </Col>
                    </FormGroup>
                    <Button bsStyle="primary" type='submit' block>Log In</Button>
                </Form>
            </Grid>
        )
    }
}