import React, { Fragment, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './index.css'
import bugActionCreators from './actions';

const BugTracker = () => {
    const bugs =   useSelector( storeState => storeState.bugsState);  //useSelector is the way to access the data from the store in the component
    // console.table(bugs);
    const { load } = bugActionCreators;
    const dispatch = useDispatch();
    useEffect(() => {               //to load on demand. to use effect in lifecycle component.
        dispatch(load()); 
        // load(dispatch);     //not supposed to do this, only supposed to call dispatch with load
    }, [dispatch, load]);
    const bugItems = bugs.map(bug => (
            <li key = {bug.id}>
                <span className = {'bugName' + (bug.isClosed ? 'closed' : '')} >
                    {bug.name}
                </span>
                <div className = 'datetime'>{bug.createdAt.toString()}</div>
                <input type = 'button' value = 'remove'/>
            </li> 
        )
    );
    return (
        <Fragment>
            <h3>Bug Tracker</h3>
            <hr />
            <section className = 'stats' >
                <span className = 'closed'>1</span>
                <span>/</span>
                <span>{bugs.length}</span>
            </section>
            <section className = 'sort'>
                <label> Order By:</label>
                <select name = '' id = ''>
                    <option value = ''></option>
                    <option value = ''></option>    
                </select>
                <label>Descending ?:</label>
                <input type = 'checkbox' name = '' id = '' />
            </section>
            <section className = 'edit'>
                <label>Bug Name:</label>
                <input type = 'text' name = '' id = '' />
                <input type = 'button' value = 'add new' />
            </section>
            <section className = 'list'>
                <ol>
                   {bugItems}
                </ol>
                <input type = 'button' value = 'remove closed' />
            </section>            
        </Fragment>
    );
};

export default BugTracker;
