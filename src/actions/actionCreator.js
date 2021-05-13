import axios from "axios";
import {  CREATE_DEPARTMENT,
    //  GET_DEPARTMENT,
    //  DELETE_DEPARTMENT,
    //  UPDATE_DEPARTMENT,
     SUCCESS,
    FAILURE, FETCHING } from '../actions/actionTypes';

const baseUrl = `http://localhost:2021/api/v1`;

// export const getDepartment = status =>{
//     return {
//         type: GET_DEPARTMENT,
//         payload: status
//     };
// };

export const createDepartment = department =>{
    return {
        type: CREATE_DEPARTMENT,
        payload: department
    };
};

export const fetching = status =>{
    return {
        type: FETCHING,
        payload: status
    }
}

export const success = data =>{
    return {
        type: SUCCESS,
        payload: data
    };
};

export const failure = message =>{
    return {
        type: FAILURE,
        payload: message
    };
};


export const addDepartment = (data)=> dispatch =>{
    axios.post(`${baseUrl}/department`, data)
    .then(res =>{
        dispatch(createDepartment(res.data))
    }).catch(err =>{
        dispatch(failure(err.message));
    });
};

export const fetchDepartments = ()=> dispatch=>{
    dispatch(fetching(true));
    axios.get(`http://localhost:2021/api/v1/department`)
    .then(res=>{
        console.log(res.data.body.Departments, '<<< res ===|||')
        dispatch(success(res.data.body.Departments));
        dispatch(fetching(false));
    }).catch(err=>{
        dispatch(failure(err.message));
        dispatch(fetching(false));
    })
}

