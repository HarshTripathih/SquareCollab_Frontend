import React from 'react'
import axios from 'axios'

export const getResearcher = () => async (dispatch) =>{
    try{
        dispatch({
            type:"GET_RESEARCHER_REQUEST",
        });

        const { researcherdata } = await axios.get("/api/researchers/");

        dispatch({
            type:"GET_RESEARCHER_SUCCESS",
            payload: researcherdata.data
        });
    }catch(error){
        dispatch({
            type:"GET_RESEARCHER_FAILURE",
            payload: error.response.researcherdata.message,
        })
    }
};


