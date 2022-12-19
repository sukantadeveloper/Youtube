import {legacy_createStore as createStore} from 'redux'
import { Reducer } from '../Reducer/reducer';

export const store = createStore(Reducer);