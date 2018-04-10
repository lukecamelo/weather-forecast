import React from 'react';
import './Form.css';

class Form extends React.Component {
    render() {
        return(
            <form onSubmit={this.props.getWeather} className='Form'>
                <input type="text" name='city' placeholder='city' />
                <input type="text" name='country' placeholder='country' />
                <button>Get Weather</button>
            </form>
        )
    }
}

export default Form;