import { combineReducers } from 'redux'

import { reducer as formReducer } from 'redux-form'
import paymentReducers from '../payment/reducers/PaymentReducers'

const rootReducer = combineReducers({
    form: formReducer,
    paymentReducers
});

export default rootReducer