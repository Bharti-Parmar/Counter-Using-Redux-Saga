const initialState = {
    age: 20
};

const reducer = (state = initialState, action) => {
    
    // const newState = {...state};

    switch(action.type){
        case 'AgeUpAsync':
            return {
                ...state,
                age:state.age+1
            };

        case 'AgeDown':
            return {
                ...state,
                age:state.age-1
            };

        default:
            return state;
    }
};

export default reducer;