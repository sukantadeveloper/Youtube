import { GET_ERROR, GET_LOADING, GET_SEARCH, GET_SUCCESS } from "./Action";

const init={
    loading:false,
    error:false,
    data:[]
}
export const HomeReducer=(state=init, {type,payload}) =>{
   switch(type){
    case GET_LOADING:{
       return{
        loading:true,
        error:false,
        data:[]
       } 

    }
    case GET_SUCCESS:{
        return {
            loading:false,
            error:false,
            data:payload
        }
    }
    case GET_ERROR:{
        return{
            loading:false,
            error:true,
            data:[]
        }
    }
    default:{
        return state;
    }
   }
}
const initSearch={
    setsearch:"New"
}
export const  searchReducer=(state=initSearch, {type,payload})=>{
switch(type){
    case GET_SEARCH:{
        return{
            setsearch:payload
        }
    }
    default:{
        return state;
    }
}
}

export default HomeReducer;