import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'; //for state, dispatch
import spinnerActionCreators from './actions';

const Spinner = () => {
    // const {value, dispatch, up, down} = props;
    const [delta, setDelta] = useState(0);
    const value = useSelector( storeState => storeState );
    const dispatch = useDispatch();
    const {up, down} = spinnerActionCreators;

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