import React, {useState} from 'react';

const Spinner = ({value, dispatch, up, down}) => {
    // const {value, dispatch, up, down} = props;
    const [delta, setDelta] = useState(0);
    return (
        <div>
            <h3>Spinner</h3>
            <hr />
            <label>Delta: </label><br/>
            <input type = 'number' 
            onChange = { (evt) => 
                setDelta(parseInt(evt.target.value) || 0 ) 
                } />
            <br />
            <input type = "button" value = "down" onClick = {() => {  dispatch(up(delta)) }}/>
            <span> [ {value} ] </span>
            <input type = 'button' value = 'up' onClick = {() => { dispatch(down(delta))} }/>
        </div>
    );
};

export default Spinner;