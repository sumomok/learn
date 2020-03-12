import { combineReducers } from 'redux';
import user from './usersAction';
import number from './number';
export default combineReducers({
    user,
    number
})