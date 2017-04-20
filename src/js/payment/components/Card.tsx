import * as React from "react";
import { Component } from "react";
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

//import { changeTab } from '../../../../actions/PaymentActions'

import CardReactFormContainer from 'card-react';
import 'card-react/lib/card.css';

export default class Payment extends Component<any, any> {
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
            <CardReactFormContainer
                container="ish-payment-card"
                formInputsNames={this.state.formInputsNames}
                initialValues={this.state.initialValues}
                classes={this.state.classes}
                formatting={true}
            >
                <div className="row justify-content-center">
                    <div className="form-group col-sm">
                        <label htmlFor="exampleSelect2">Payment amount</label>
                        <div className="ish-payment-total input-group" id="exampleSelect2">
                            <span className="input-group-addon">$</span>
                            <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" value={'1,170'} disabled={true}/>
                            <div className="ish-payment-total__addon input-group-addon">
                                <div className="ish-payment-total__cards">
                                    <i className="ish-payment-total__card fa fa-cc-mastercard"/>
                                    <i className="ish-payment-total__card fa fa-cc-visa"/>
                                    <i className="ish-payment-total__card fa fa-cc-amex"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-sm">
                        <label htmlFor="exampleSelect1">
                            Payer <small id="emailHelp" className="text-muted">(issue invoice to)</small>
                        </label>
                        <select className="form-control" id="exampleSelect1">
                            <option>Ivan Ivanov</option>
                            <option>Ivanna Ivanova</option>
                        </select>
                    </div>
                </div>
                <div className="row flex-sm-row-reverse justify-content-center">
                    <div className="col-sm">
                        <div id="ish-payment-card" className="ish-payment-card"/>
                    </div>
                    <div className="col-sm">
                        <div className="form-group">
                            <input className="form-control" placeholder="Card number" type="text" name="CCnumber"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Full name" type="text" name="CCname"/>
                        </div>
                        <div className="row">
                            <div className="form-group col-sm">
                                <input className="form-control" placeholder="MM/YY" type="text" name="CCexpiry"/>
                            </div>
                            <div className="form-group col-sm">
                                <input className="form-control" placeholder="CVC" type="text" name="CCcvc"/>
                            </div>
                        </div>
                    </div>
                </div>
            </CardReactFormContainer>
        )
    }
}