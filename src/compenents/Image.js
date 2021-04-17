import React, { Component } from 'react';

class Image extends Component {

    constructor(props){
        super(props)
    }
    render() {
        const source = require('../' + this.props.source) ;
        return (
            <div>
                <img src={source}  alt=""/>
            </div>
        );
    }
}

export default Image;