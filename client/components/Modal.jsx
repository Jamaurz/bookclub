import React, {Component}  from 'react'
import {modal} from 'react-redux-modal'

export default class myModalComopnent extends Component {
    constructor(props) {
        super(props);
        console.log('## MODAL DATA AND PROPS:', this.props);
    }

    removeThisModal() {
        this.props.removeModal();
    }

    addDbBook(item) {
        this.props.addDbBook(item);
        this.removeThisModal()
    }

    render() {
        return (
            <div>
                <p>this is my modal</p>
                <div>{
                    this.props.content.map((item, index)=> {
                        return (
                            <div key={index}>
                                <h3>{item.title}</h3>
                                <img src={item.thumbnail} alt={item.title} />
                                <input type="button" onClick={() => { this.addDbBook(item)}} value='add' />
                            </div>
                        )})}
                </div>
            </div>
        );
    }
}