import React, {Component} from 'react';
import './DayList.css'

class DayList extends Component {
  
    render() {
        return (
            <div className='DayList'>
                <span>{this.props.day}</span>
                {/* <div className='currentWeather'></div> */}
                <div>Sunny</div>
                <span className='temp'>{this.props.temp}</span>
            </div>
        );
    }
} 
    


export default DayList;