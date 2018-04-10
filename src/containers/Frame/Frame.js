import React, {Component} from 'react';
// import DayList from '../../components/Block/DayList';
import Form from '../../components/Form';
import './Frame.css';

class Frame extends Component {

    // constructor(props){
    //     super(props);
    // }

    render () {
        return (
            <div className="Frame">

                <h1 style={{'color': 'white'}}>
                    {this.props.city}, {this.props.country} | looks like: {this.props.description}
                </h1>
                {/* TODO fix the 404 warning/error that displays before user enters a city. */}
                <img src={"http://openweathermap.org/img/w/" + this.props.iconCode + ".png"} alt=""/>

                <Form getWeather={this.props.getWeather} />

            </div>
        );
    }
}

export default Frame;