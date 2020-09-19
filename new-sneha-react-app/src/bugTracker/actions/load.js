import axios from 'axios';

function getLocalBugs() {
    return (
        [
        {id: 1, name : 'Server Communication failure', isClosed : false, createdAt: new Date() },
        {id: 2, name : 'User actions not recognized', isClosed : true, createdAt: new Date() },
        {id: 3, name : 'Data integrity checks failed', isClosed : false, createdAt: new Date() },
        {id: 4, name : 'Database failed', isClosed : false, createdAt: new Date() },
        ]
    );
};

function getRemoteBugs() {
    return axios
        .get('http://localhost:3030/bugs')
        .then((response) => {return response.data});
};

// function load(dispatch) {   //in actions not supposed to take the dispatch
//     // const bugs = getLocalBugs();
//     // const action = {type : 'LOAD_BUGS', payload : bugs};
//     // return action;
   
//     return getRemoteBugs().then((bugs) => {
//         const action = {type : 'LOAD_BUGS', payload : bugs};       //since this will be executed in future we cannot do this, it will return a promise
//         dispatch(action);
//     });
// };

 //better to do this

//  function load() {          
//     return function(dispatch) {
//         return getRemoteBugs().then((bugs) => {     //but action creators must return objects not functions
//             const action = { type: 'LOAD_BUGS', payload: bugs};
//             dispatch(action);
//         });
//     };
//  };

function load() {
    const bugs = getLocalBugs();
    const action = { type: 'LOAD_BUGS', payload: bugs};
    return action;
};


export default load;
