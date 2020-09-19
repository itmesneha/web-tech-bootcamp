const initialState = [
    // {id: 1, name : 'Server Communication failure', isClosed : false, createdAt: new Date() },
    // {id: 2, name : 'User actions not recognized', isClosed : true, createdAt: new Date() },
    // {id: 3, name : 'Data integrity checks failed', isClosed : false, createdAt: new Date() },
    // {id: 4, name : 'Database failed', isClosed : false, createdAt: new Date() },
];
function bugsReducer(currentState = initialState, action) {
    if(action.type === 'LOAD_BUGS') {
        return action.payload;
    }
    return currentState;
};

export default bugsReducer;