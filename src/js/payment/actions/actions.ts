import fetch from 'isomorphic-fetch'

export const GET_TOTAL = 'GET_TOTAL';
export const GET_PAYERS = 'GET_PAYERS';
export const GET_DISCOUNT = 'GET_DISCOUNT';
export const POST_PAYMENT = 'POST_PAYMENT';

function requestTotal(total) {
    return {
        type: GET_TOTAL,
        total
    }
}

function requestPayers(payers) {
    return {
        type: GET_PAYERS,
        payers
    }
}

function requestDiscount(discount) {
    return {
        type: GET_DISCOUNT,
        discount
    }
}

function requestPayment(success) {
    return {
        type: POST_PAYMENT,
        success
    }
}

export function fetchTotal() {
    return dispatch => {
        return fetch(`/enrol.reactjs/api.json`)
            .then(response => response.json())
            .then(json => dispatch(requestTotal(json.total)))
    }
}

export function fetchPayers() {
    return dispatch => {
        return fetch(`/enrol.reactjs/api.json`)
            .then(response => response.json())
            .then(json => dispatch(requestPayers(json.payers)))
    }
}

export function fetchDiscount(email) {
    return dispatch => {
        return fetch(`/enrol.reactjs/api.json?email=` + email)
            .then(response => response.json())
            .then(json => dispatch(requestDiscount(json.discount)))
    }
}

export function fetchPayment(form) {
    return dispatch => {
        return fetch(`/enrol.reactjs/api.json`, {method: 'POST', body: form})
            .then(response => response.json())
            .then(json => dispatch(requestPayment(json.success)))
    }
}