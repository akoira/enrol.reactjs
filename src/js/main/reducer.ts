import { combineReducers } from 'redux'

import { reducer as formReducer } from 'redux-form'
import payment from '../payment/reducers/reducers'

const rootReducer = combineReducers({
    form: formReducer,
    payment
});

export default rootReducer