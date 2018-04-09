import React, {Component} from 'react';
import DayList from '../../components/Block/DayList';
import './Frame.css';

const input = () => {
    return (
        <input type="text"/>
    );
}

class Frame extends Component {
    render () {
        return (
            <div className="Frame">
                <DayList 
                day={'monday'}
                temp={'60F'}/>
                <DayList 
                day={'tuesday'}
                temp={'60F'}/>
                <DayList 
                day={'wednesday'}
                temp={'60F'}/>
                <DayList 
                day={'thursday'}
                temp={'60F'}/>
                <DayList 
                day={'friday'}
                temp={'60F'}/>
            </div>
        );
    }
}

export default Frame;