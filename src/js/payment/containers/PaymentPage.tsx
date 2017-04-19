import * as React from "react";
import {Component} from "react";

import CardReactFormContainer from 'card-react';
import 'card-react/lib/card.css';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

//import Payment from "../components/blocks/payment/forms/Payment";

export default class PaymentPage extends Component<any, any> {
    constructor() {
        super();
        this.toggle = this.toggle.bind(this);

        this.state = {
            dropdownOpen: false,
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

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <div className="ish-payment">
                <div className="ish-payment-discount">
                    <small id="emailHelp" className="ish-payment-discount__tip text-muted">Promotional Code, Gift Certificate or Voucher</small>
                    <div className="row justify-content-end">
                        <div className="col-sm-6 text-right">
                            <input type="email" className="ish-payment-discount__code-input form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            <button className="ish-payment-discount__add-btn btn btn-primary">Add Code</button>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex justify-content-end">
                                <div className="text-right">
                                    <div className="ish-payment-discount__total-label">Total:</div>
                                    <div className="ish-payment-discount__pay-label">Payment amount:</div>
                                </div>
                                <div className="text-right">
                                    <div className="ish-payment-discount__total-amount">$1,170</div>
                                    <div className="ish-payment-discount__pay-amount">$1,170</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="alert alert-success" role="alert">
                    <h2><i className="fa fa-lock"/> This is a secure SSL encrypted payment.</h2>
                </div>

                <div className="ish-payment-card-wrapper">
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
                </div>
                <div className="ish-payment-conditions form-check">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input"/>
                        <span className="ish-payment-conditions__text">
                            I have read the <a href="/policies?wrap=false" title="Student information">Student Information</a> or have had it explained to me, and I agree to accept these conditions. I understand the <a target="_blank" href="/legal">enrolment, sale and refund policy</a>.
                        </span>
                    </label>
                </div>
                <div className="alert alert-danger" role="alert">
                    <strong>Oh snap!</strong> Change a few things up and try submitting again.
                </div>
                <button type="button" className="ish-payment-btn-pay btn btn-success">Pay</button>
            </div>
        )
    }
}
