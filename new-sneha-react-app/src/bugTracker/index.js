import React, { Fragment } from 'react';
import {useSelector} from 'react-redux';
import './index.css'

const BugTracker = () => {
    const bugs =   useSelector( storeState => storeState.bugsState);  //useSelector is the way to access the data from the store in the component
    // console.table(bugs);
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
