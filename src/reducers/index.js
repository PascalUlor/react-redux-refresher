import * as types from '../actions';


const initialState = {
    departments: [],
    fetching: false,
    error: null
};

const DepartmentState = (state = initialState, action) => {
    switch(action.type){
        case types.FETCHING:
            return {
                ...state,
                fetching: action.payload
            };
        case types.CREATE_DEPARTMENT:
            return {
                ...state,
                departments: action.payload
            };
        case types.SUCCESS:
            return {
                ...state,
                departments: action.payload
            };
        case types.FAILURE:
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    }
};

export default DepartmentState;