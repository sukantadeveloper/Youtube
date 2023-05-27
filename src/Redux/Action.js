import { fetchData } from "../Utils/Api";

export const GET_LOADING = "GET_LOADING";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_ERROR = "GET_ERROR";
export const GET_SEARCH="GET_SEARCH";
export const GET_VIEW_DETAILS="GET_VIEW_DETAILS";
export const GetLoading = () => ({
  type: GET_LOADING,
});
export const GetSuccess = (data) => ({
  type: GET_SUCCESS,
  payload: data,
});
export const GetEror = () => ({
  type: GET_ERROR,
});
export const SearchFun=(data)=>({
  type:GET_SEARCH,
  payload:data
})
export const viewDetailsFun=(data)=>({
  type:GET_VIEW_DETAILS,
  payload:data
})

export const displayData = (search) => (dispatch) => {
  dispatch(GetLoading());
  fetchData(`search/?q=${search}`)
    .then((res) => {
      dispatch(GetSuccess(res.contents));
    
    })
    .catch((error) => {
      dispatch(GetEror());
      console.log("catch");
    });
};

export const updateSearch=(data)=>(dispatch)=>{
  dispatch(SearchFun(data));
}

export const viewDetailsFetch = (id) => (dispatch) => {
  fetchData(`video/details/?id=${id}`)
  .then((res) => {
    dispatch(viewDetailsFun(res));
  })
    .catch((error) => {
   
      console.log(error);
    });
};