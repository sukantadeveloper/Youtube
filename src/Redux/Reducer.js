import { GET_ERROR, GET_LOADING, GET_SEARCH, GET_SUCCESS, GET_VIEW_DETAILS } from "./Action";

const init = {
  loading: false,
  error: false,
  data: [],
};

const initSearch = {
    setsearch: "New",
  };
  const initview = {
    ViewDetails: [],
  };
export const HomeReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_LOADING: {
      return {
        loading: true,
        error: false,
        data: [],
      };
    }
    case GET_SUCCESS: {
      return {
        loading: false,
        error: false,
        data: payload,
      };
    }
    case GET_ERROR: {
      return {
        loading: false,
        error: true,
        data: [],
      };
    }
    default: {
      return state;
    }
  }
};

export const searchReducer = (state = initSearch, { type, payload }) => {
  switch (type) {
    case GET_SEARCH: {
      return {
        setsearch: payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const viewDetailsReducer=(state=initview,{type,payload})=>{
    switch(type){
        case GET_VIEW_DETAILS:{
            return {
                ViewDetails:payload
            }
        }
        default:{
            return state;
        }
    }

}
export default HomeReducer;
