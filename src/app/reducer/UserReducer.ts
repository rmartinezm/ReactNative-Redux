import { SET_USER, LOADING, ERROR } from '../action/UserAction';

const defaultState = {
    loading: true,
    error: null,
    user: null,
}

export default function userReducer(state = defaultState, action: { type: string, payload: any }){
    let clone = Object.assign({}, state);
    switch(action.type){
        case LOADING:
            clone.loading = action.payload;
            break;
        case ERROR:
            clone.error = action.payload;
            break;
        case SET_USER:
            clone.user = action.payload;
            break;
        default:
            // PASS
            break;
    }
    return clone;
  }