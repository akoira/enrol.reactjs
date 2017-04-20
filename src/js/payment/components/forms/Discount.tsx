import * as React from "react";
import { Component } from "react";
import { connect } from 'react-redux';

import { Field, reduxForm } from 'redux-form';

//import { changeTab } from '../../../../actions/PaymentActions'


class Discount extends Component<any, any> {
    constructor() {
        super();
        this.state = {
        };
    }

    doSubmit (values) {
        console.log(values);
        debugger
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.doSubmit)} className="ish-payment">
                <div className="ish-payment-discount">
                    <small id="emailHelp" className="ish-payment-discount__tip text-muted">Promotional Code, Gift
                        Certificate or Voucher
                    </small>
                    <div className="row justify-content-end">
                        <div className="col-sm-6 text-right">
                            <Field component="input" type="email" name="discount" required={true}
                                   className="ish-payment-discount__code-input form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Enter email"/>
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
            </form>
        )
    }
}

export default connect()(reduxForm({
    form: 'discount'
})(Discount))