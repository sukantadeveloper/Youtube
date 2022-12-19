import { legacy_createStore as createStore ,  applyMiddleware,
    combineReducers} from "redux";
    import thunk from "redux-thunk";
    import HomeReducer, { searchReducer } from "./Redux/Reducer";
    const middleware=applyMiddleware(thunk);
    const RootReducer=combineReducers({
        video:HomeReducer,
        searchState:searchReducer
    })
    export const store=createStore(RootReducer, middleware);