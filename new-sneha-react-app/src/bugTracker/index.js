import React, { Fragment } from 'react';

const BugTracker = () => {
    return (
        <Fragment>
            <h3>Bug Tracker</h3>
            <hr />
            <section className = 'stats' >
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
                    <li>
                        <span className = 'bugname'>[This is bug -1]</span>
                        <div className = 'datetime'>[created at]</div>
                        <input type = 'button' value = 'remove' />
                    </li>
                    <li>
                        <span className = 'bugname'>[This is bug -2]</span>
                        <div className = 'datetime'>[created at]</div>
                        <input type = 'button' value = 'remove' />
                    </li>
                </ol>
                <input type = 'button' value = 'remove closed' />
            </section>            
        </Fragment>
    );
};

export default BugTracker;
