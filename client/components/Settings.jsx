import React from 'react';

import { Form, FormGroup, ControlLabel, FormControl, Col, Button } from 'react-bootstrap';

export default function Settings(props) {
    if(props.obj) {
        return  (
            <Form horizontal>
                <FormGroup controlId="formHorizontalUsername">
                    <Col componentClass={ControlLabel} sm={2}>
                        Username:
                    </Col>
                    <Col sm={10}>
                        <FormControl type='text' name='username' value={props.obj.username} onChange={props.changeUsername} />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalFullname">
                    <Col componentClass={ControlLabel} sm={2}>
                        Fullname:
                    </Col>
                    <Col sm={10}>
                        <FormControl type='text' name='fullname' value={props.obj.fullname} onChange={props.changeFullname} />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalCity">
                    <Col componentClass={ControlLabel} sm={2}>
                        City:
                    </Col>
                    <Col sm={10}>
                        <FormControl type='text' name='city' value={props.obj.city} onChange={props.changeCity} />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalState">
                    <Col componentClass={ControlLabel} sm={2}>
                        State:
                    </Col>
                    <Col sm={10}>
                        <FormControl type='text' name='state' value={props.obj.state} onChange={props.changeState} />
                    </Col>
                </FormGroup>
                <div>
                    <Button bsStyle="success" type='button' onClick={props.chlickSave} block >Save</Button>
                </div>
            </Form>
        )
    } else {
        return <p></p>
    }
}