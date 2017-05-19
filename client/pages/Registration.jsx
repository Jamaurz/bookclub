import React from 'react';
import { connect } from "react-redux"

import { Form, FormGroup, ControlLabel, FormControl, Grid, Col, Button } from 'react-bootstrap';

@connect((store) => {
    return {
    };
})
export default class Registration extends React.Component {
    render() {
        return (
            <Grid>
                <Form action="/signup" method="post" horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Email:
                        </Col>
                        <Col sm={10}>
                            <FormControl type='email' name='email' required />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalUsername">
                        <Col componentClass={ControlLabel} sm={2}>
                            Username:
                        </Col>
                        <Col sm={10}>
                            <FormControl type='text' name='username' required />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password:
                        </Col>
                        <Col sm={10}>
                            <FormControl type='password' name='password' pattern=".{6,}"  title="6 characters minimum" required />
                        </Col>
                    </FormGroup>
                    <Button type='submit' block>Send</Button>
                </Form>
            </Grid>
        )
    }
}