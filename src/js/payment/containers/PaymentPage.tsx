import * as React from "react";
import {Component} from "react";

import Card from "../components/Card";

export default class PaymentPage extends Component<any, any> {
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
                    <Card/>
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
