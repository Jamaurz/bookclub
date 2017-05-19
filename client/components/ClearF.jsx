import React from 'react';

import { Clearfix } from 'react-bootstrap';

export default function ClearF(props) {
    if(props.index) {
        return (
            <Clearfix visibleMdBlock visibleLgBlock></Clearfix>
        )
    } else {
        return <i></i>
    }
}