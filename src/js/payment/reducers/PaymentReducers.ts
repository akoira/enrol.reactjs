//import { handleActions, Action } from 'redux-actions';

//import * as PaymentActions from '../actions/PaymentActions'

/*const actions = (state = {
                   tabIndex: 0
               }, action) => {
    console.log(PaymentActions)
    switch (action.type) {
        case PaymentActions.CHANGE_TAB:
            return Object.assign({}, state, {
                activeTab: state.tabIndex
            })
        default:
            return state
    }
}*/

const initialState = [{
    activeTab: 'credit-card'
}];

export default function todoApp(state = {}, action) {
    return {
        todos: state,
    };
}

/*

export default handleActions({
    [PaymentActions.CHANGE_TAB]: (state, action) => {
        debugger
        return Object.assign({}, state, {
            activeTab: state.tabIndex
        })
    }
}, initialState);*/

//    export default actions

/*const posts = (state = {
                   isFetching: false,
                   didInvalidate: false,
                   items: []
               }, action) => {
    switch (action.type) {
        case PaymentActions.INVALIDATE_SUBREDDIT:
            return Object.assign({}, state, {
                didInvalidate: true
            })
        case PaymentActions.REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case PaymentActions.RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}*/

/*const postsBySubreddit = (state = [], action) => {
    switch (action.type) {
        case PaymentActions.INVALIDATE_SUBREDDIT:
        case PaymentActions.RECEIVE_POSTS:
        case PaymentActions.REQUEST_POSTS:
            return Object.assign({}, state, {
                [action.subreddit]: posts(state[action.subreddit], action)
            })
        default:
            return state
    }
}*/

