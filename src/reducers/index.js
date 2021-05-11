import { combineReducers } from 'redux'
import users from './users'
import tcard from './tcard'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    users,tcard,
    form: formReducer
})