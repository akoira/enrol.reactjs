import * as React from "react";
import {Component} from "react";

import CardReactFormContainer from 'card-react';
import 'card-react/lib/card.css';

//import Payment from "../components/blocks/payment/forms/Payment";

export default class PaymentPage extends Component<any, any> {
    constructor() {
        super();
        this.state = {
            formInputsNames: {
                number: 'CCnumber', // optional — default "number"
                expiry: 'CCexpiry',// optional — default "expiry"
                cvc: 'CCcvc', // optional — default "cvc"
                name: 'CCname' // optional - default "name"
            },
            initialValues: {
                number: '4242424242424241', // optional — default •••• •••• •••• ••••
                cvc: '123', // optional — default •••
                expiry: '16/12', // optional — default ••/••
                name: 'Random Name' // optional — default FULL NAME
            },
            classes: {
                valid: 'valid-input', // optional — default 'jp-card-valid'
                invalid: 'invalid-input' // optional — default 'jp-card-invalid'
            }
        };
    }

    render() {
        return (
            <div id="main-container">
                <div id="card-wrapper"></div>
                <CardReactFormContainer
                    container="card-wrapper"
                    formInputsNames={this.state.formInputsNames}
                    initialValues={this.state.initialValues}
                    classes={this.state.classes}
                    formatting={true}
                >
                    <form className="md-form">
                        <i className="fa fa-envelope prefix"></i>
                        <input type="text" id="form2" className="form-control"/>
                        <label htmlFor="form2">Your email</label>
                        <input placeholder="Full name" type="text" name="CCname"/>
                        <input placeholder="Card number" type="text" name="CCnumber"/>
                        <input placeholder="MM/YY" type="text" name="CCexpiry"/>
                        <input placeholder="CVC" type="text" name="CCcvc"/>
                    </form>
                    <button type="button" className="btn btn-success">Success</button>
                </CardReactFormContainer>
            </div>
        )
    }
}
