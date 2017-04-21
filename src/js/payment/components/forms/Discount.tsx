import React, { Component } from 'react'
import { connect } from 'react-redux';

import { Field, reduxForm } from 'redux-form';

import { fetchDiscount } from '../../actions/actions'

interface DiscountProps {
    total: number
    paymentAmount: number
    email: string
    handleSubmit: any
    dispatch: any
}

class Discount extends Component<DiscountProps, any> {
    constructor(props: DiscountProps) {
        super(props);
    }

    doSubmit (values) {
        const {dispatch} = this.props;
        dispatch(fetchDiscount(this.props.email));
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.doSubmit.bind(this))} className="ish-payment">
                <div className="ish-payment-discount">
                    <small id="emailHelp" className="ish-payment-discount__tip text-muted">Promotional Code, Gift
                        Certificate or Voucher
                    </small>
                    <div className="row justify-content-end">
                        <div className="col-sm-6 text-right">
                            <Field component="input" type="email" name="email" required={true}
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
                                    <div className="ish-payment-discount__total-amount">${this.props.total}</div>
                                    <div className="ish-payment-discount__pay-amount">${this.props.paymentAmount}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        total: state.payment.total,
        paymentAmount: state.payment.paymentAmount
    };
}

export default connect(
    mapStateToProps
)(reduxForm({
    form: 'discount'
})(Discount))