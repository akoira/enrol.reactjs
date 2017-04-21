import * as React from "react";
import { Component } from "react";
import { connect } from 'react-redux';

import {fetchPayers, fetchTotal} from '../actions/actions'

import Discount from "../components/forms/Discount";
import Payment from "../components/forms/Payment";

class PaymentPage extends Component<any, any> {
    render() {
        return (
            <div>
                <Discount/>
                <Payment/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {
        total: dispatch(fetchTotal())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PaymentPage);