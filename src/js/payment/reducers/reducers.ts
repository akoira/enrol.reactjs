import { GET_TOTAL, GET_PAYERS, GET_DISCOUNT, POST_PAYMENT } from '../actions/actions'

export default function payment(state = {
    total: 0,
    discount: 0,
    paymentAmount: 0,
    payers: []
}, action) {
    switch (action.type) {
        case GET_TOTAL:
            return Object.assign({}, state, {
                total: action.total,
                paymentAmount: action.total - state.discount
            });
        case GET_PAYERS:
            return Object.assign({}, state, {
                payers: action.payers,
            });
        case GET_DISCOUNT:
            return Object.assign({}, state, {
                discount: action.discount,
                paymentAmount: state.total - action.discount
            });
        case POST_PAYMENT:
            return Object.assign({}, state, {
                success: action.success,
            });
        default:
            return state;
    }
}