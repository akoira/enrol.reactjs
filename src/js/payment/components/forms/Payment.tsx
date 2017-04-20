import * as React from "react";
import { Component } from "react";
import {connect} from 'react-redux';

import { Field, reduxForm } from 'redux-form';

//import { changeTab } from '../../../../actions/PaymentActions'

import CardReactFormContainer from 'card-react';
import 'card-react/lib/card.css';

/*const enum ValidationClasses {
    VALID_CLS = 'd',
    INVALID_CLS: string;
}*/

const VALID_CLS: string = 'form-control-success';
const INVALID_CLS: string = 'form-control-danger';

class Payment extends Component<any, any> {
    constructor() {
        super();
        this.state = {
            formInputsNames: {
                number: 'CCnumber', // optional — default "number"
                expiry: 'CCexpiry',// optional — default "expiry"
                cvc: 'CCcvc', // optional — default "cvc"
                name: 'CCname' // optional - default "name"
            },
            formInputsValues: {
                number: '',
                expiry: '',
                cvc: '',
                name: ''
            },
            classes: {
                valid: VALID_CLS, // optional — default 'jp-card-valid'
                invalid: INVALID_CLS // optional — default 'jp-card-invalid'
            }
        };
    }

    onChangeCardField(e) {
    }

    doSubmit(values) {
        console.log(values);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form id="ish-payment-form" onSubmit={handleSubmit((values) => this.doSubmit(values))} className="ish-payment">
                <div className="alert alert-success" role="alert">
                    <h2><i className="fa fa-lock"/> This is a secure SSL encrypted payment.</h2>
                </div>

                <CardReactFormContainer
                    container="ish-payment-card"
                    formInputsNames={this.state.formInputsNames}
                    classes={this.state.classes}
                >
                    <div className="row justify-content-center">
                        <div className="form-group col-sm">
                            <label htmlFor="exampleSelect2">Payment amount</label>
                            <div className="ish-payment-total input-group" id="exampleSelect2">
                                <span className="input-group-addon">$</span>
                                <Field component="input" type="text" name="totalAmount" className="form-control" autoComplete={false} aria-label="Amount (to the nearest dollar)" disabled={true}/>
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
                            <Field component="select" name="payer" className="form-control" autoComplete={false} id="exampleSelect1">
                                <option>Ivan Ivanov</option>
                                <option>Ivanna Ivanova</option>
                            </Field>
                        </div>
                    </div>
                    <div className="row flex-sm-row-reverse justify-content-center">
                        <div className="col-sm">
                            <div id="ish-payment-card" className="ish-payment-card"/>
                        </div>
                        <div className="col-sm">
                            <div className="form-group">
                                <input className="ish-payment-card__input form-control" autoComplete={'off'} required={true} type="text" placeholder="Card number" name="CCnumber" onChange={this.onChangeCardField.bind(this)}/>
                            </div>
                            <div className="form-group">
                                <input className="ish-payment-card__input form-control" autoComplete={'off'} required={true} type="text" placeholder="Full name" name="CCname"/>
                            </div>
                            <div className="row">
                                <div className="form-group col-sm">
                                    <input className="ish-payment-card__input form-control" autoComplete={'off'} required={true} type="text" placeholder="MM/YY" name="CCexpiry"/>
                                </div>
                                <div className="form-group col-sm">
                                    <input className="ish-payment-card__input form-control" autoComplete={'off'} required={true} type="text" placeholder="CVC" name="CCcvc"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardReactFormContainer>

                <div className="ish-payment-conditions form-check">
                    <label className="form-check-label">
                        <Field component="input" type="checkbox" name="conditions" className="form-check-input" required={true}/>
                        <span className="ish-payment-conditions__text">
                                    I have read the <a href="/policies?wrap=false" title="Student information">Student Information</a> or have had it explained to me, and I agree to accept these conditions. I understand the <a
                            target="_blank" href="/legal">enrolment, sale and refund policy</a>.
                                </span>
                    </label>
                </div>

                <button type="submit" className="ish-payment-btn-pay btn btn-success">Confirm</button>
            </form>
        )
    }
}

export default connect()(reduxForm({
    form: 'payment'
})(Payment))