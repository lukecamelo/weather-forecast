import React, {Component} from 'react';
import Block from '../../components/Block/Block';
import './Frame.css';

class Frame extends Component {
    render () {
        return (
            <div className="Frame">
                <Block/>
                <Block/>
                <Block/>
                <Block/>
                <Block/>
            </div>
        );
    }
}

export default Frame;