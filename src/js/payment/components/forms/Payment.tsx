import * as React from "react";
import { Component } from "react";
import { connect } from 'react-redux';

import { Field, reduxForm } from 'redux-form';

//import { changeTab } from '../../../../actions/PaymentActions'

import CardReactFormContainer from 'card-react';
import 'card-react/lib/card.css';
import {fetchPayers, fetchPayment} from "../../actions/actions";

interface Person {
    id: number,
    name: string
}

interface PaymentProps {
    paymentAmount: number
    payers: Array<Person>
    handleSubmit: any
    dispatch: any
}

class Payment extends Component<PaymentProps, any> {
    static cardFieldNames = {
        number: 'CCnumber',
        expiry: 'CCexpiry',
        cvc: 'CCcvc',
        name: 'CCname'
    };

    static validationClasses = {
        valid: 'form-control-success',
        invalid: 'form-control-danger'
    };

    constructor(props: PaymentProps) {
        super(props);
        this.state = {
            payerId: undefined,
            formValid: true,
            cardFields: {
                number: {
                    value: '',
                    valid: false
                },
                expiry: {
                    value: '',
                    valid: false
                },
                cvc: {
                    value: '',
                    valid: false
                },
                name: {
                    value: '',
                    valid: false
                }
            }
        };
    }

    onChangePayer(e) {
        this.setPayer(e.target.value);
    }

    setPayer(payerId) {
        let newState = Object.assign({}, this.state, {
            payerId: payerId
        });
        this.setState(newState);
    }

    onChangeCardField(e) {
        let input = e.target;
        setTimeout(() => {
            let state = this.state,
                cardFields = state.cardFields,
                field = Object.keys(Payment.cardFieldNames).find(key => Payment.cardFieldNames[key] === input.name);

            let newState = Object.assign({}, state, {
                cardFields: Object.assign(cardFields, {
                    [field]: {
                        value: input.value,
                        valid: input.className.includes(Payment.validationClasses.valid)
                    }
                })
            });

            if (this.isFromValid()) newState.formValid = true;
            this.setState(newState);
        }, 100);
    }

    doSubmit(values) {
        const {dispatch} = this.props;
        let state = this.state;

        this.setState(Object.assign({}, state, {formValid: this.isFromValid()}));
        dispatch(fetchPayment(this.state));
    }

    isFromValid() {
        let state = this.state,
            cardFields = this.state.cardFields;

        for (let cardField in cardFields) {
            if (!cardFields[cardField].valid) {
                return false;
            }
        }
        return true;
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchPayers()).then(action => {
            this.setPayer(action.payers[0].id);
        });
    }

    render() {
        const { handleSubmit, payers } = this.props;
        const payersList = payers.map(payer => <option value={payer.id} key={payer.id}>{payer.name}</option>);

        return (
            <form id="ish-payment-form" onSubmit={handleSubmit(this.doSubmit.bind(this))} className="ish-payment">
                <div className="alert alert-success" role="alert">
                    <h2><i className="fa fa-lock"/> This is a secure SSL encrypted payment.</h2>
                </div>

                <CardReactFormContainer
                    container="ish-payment-card"
                    formInputsNames={{ ...Payment.cardFieldNames}}
                    classes={{ ...Payment.validationClasses}}
                >
                    <div className="row justify-content-center">
                        <div className="form-group col-sm">
                            <label>Payment amount</label>
                            <div className="ish-payment-total input-group">
                                <span className="input-group-addon">$</span>
                                <input type="text" name="paymentAmount" value={this.props.paymentAmount} className="form-control" autoComplete={'off'} aria-label="Amount (to the nearest dollar)" disabled={true}/>
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
                            <label>
                                Payer <small className="text-muted">(issue invoice to)</small>
                            </label>
                            <select name="payer" className="form-control" autoComplete={'off'} value={this.state.payerId} onChange={this.onChangePayer.bind(this)}>
                                {payersList}
                            </select>
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
                                <input className="ish-payment-card__input form-control" autoComplete={'off'} required={true} type="text" placeholder="Full name" name="CCname" onChange={this.onChangeCardField.bind(this)}/>
                            </div>
                            <div className="row">
                                <div className="form-group col-sm">
                                    <input className="ish-payment-card__input form-control" autoComplete={'off'} required={true} type="text" placeholder="MM/YY" name="CCexpiry" onChange={this.onChangeCardField.bind(this)}/>
                                </div>
                                <div className="form-group col-sm">
                                    <input className="ish-payment-card__input form-control" autoComplete={'off'} required={true} type="text" placeholder="CVC" name="CCcvc" onChange={this.onChangeCardField.bind(this)}/>
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

                <div className="alert alert-danger" role="alert" hidden={this.state.formValid}>
                    Please, fill card data correctly.
                </div>

                <button type="submit" className="ish-payment-btn-pay btn btn-success">Confirm</button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        paymentAmount: state.payment.paymentAmount,
        payers: state.payment.payers
    };
}

export default connect(
    mapStateToProps
)(reduxForm({
    form: 'payment'
})(Payment))