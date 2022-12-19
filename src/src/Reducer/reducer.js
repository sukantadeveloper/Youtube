import { ERRORDATA, LOADINGDATA, SUCCESSDATA } from "../Redux/action"


let initial = {
    error: false,
    loading: false,
    githubUsers: []
}

export const Reducer = (state=initial, action) => {
    switch(action.type) {
        case ERRORDATA :{
            return {
               loading: false,
               error: true,
               githubUsers: []
            }
        }
        case LOADINGDATA : {
            return {
                loading: true,
                error: false,
                githubUsers: []
            }
        }
        case SUCCESSDATA : {
            return {
                loading: false,
                error: false,
                githubUsers: action.payload
            }
        }
        default : {
            return state;
        }
    }
}