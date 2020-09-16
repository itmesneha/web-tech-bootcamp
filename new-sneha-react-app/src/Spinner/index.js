import React, {Component} from 'react';

class Spinner extends Component {
    state = {
        delta : 0
    }

    onUpClick = () => {
        const {delta} = this.state; //when you're getting values from the state..get it with the curly braces
        const up_action = this.props.up(delta);
        this.props.dispatch(up_action);
    };

    onDownClick = () => {
        const {delta} = this.state;
        const down_action = this.props.down(delta);
        this.props.dispatch(down_action);
    };
   
    render() {
        const { value } = this.props;
        return (
            <div>
                <h3>Spinner</h3>
                <hr />
                <label>Delta: </label><br/>
                <input type = 'number' onChange = { (evt) => this.setState({ delta : parseInt(evt.target.value) || 0 }) } /><br />
                <input type = "button" value = "down" onClick = {this.onDownClick}/>
                <span> [ {value} ] </span>
                <input type = 'button' value = 'up' onClick = {this.onUpClick}/>
            </div>
        );
    };
};

export default Spinner;