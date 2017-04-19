/*
import * as React from "react";
import { Component } from "react";
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { changeTab } from '../../../../actions/PaymentActions'

import CorporatePassTab from "../tabs/CorporatePass";
import CreditCardTab from "../tabs/CreditCard";

export default class Payment extends Component<any, any> {
    onTabClick(tabIndex: string) {
        changeTab(tabIndex)
    }

    render() {
        return (
            <form action="https://cce.sydney.edu.au/enrol/payment.paymentform" method="post" id="paymentform">
                <div className="t-invisible">
                    <input
                        value="H4sIAAAAAAAAAFvzloG1XIZBKiCxMjc1r8SqAEKnpmSW5Bfp5eTnFxQXMejlF6XrJRYkJmek6pUkFqQWlxRVmuol5xel5mQmAencgvw8oKZiPR+gehVTXf+T1zQZqk8yMTBUFFDZcMPIJ2s/p22/vJA4w/1IMjwIKA+UCi5JLEl1K8rPDQbxUpxzMoFKwhJzSlN1px+60sGg8JeJgdGHgTsZIVHCIOSTlViWqJ+TmJeuH1xSlJmXbl1RUMLAbmpoZmRgaUjlYDD5VJCm6S622p4WYWxmIPDBIm5Jjy3EcDUGFeyGJxeBGMmJRSl5ibmpQGtM8VqTlFicqueYBBRMTC5xy0zNSVEJTi0pLVANPcz9UPT4H2ig5ueVFOXn+AFNLGSoY2AFBSIfxCZnoE0gcRJc5EiqiwKK8pNTi4uDS5NyM4uLM/PzDq9LMUn7Nu8cJCw0GNQI2lyam5RaVAxyPE8JgwCS08ESxBsBMkGgXJVBmZDy5LIymHW8COucw8KI1AyxSJlBEbva1IqCzKLKXGC8ZMCs4YaI+YLEiNIIsUKJQQGfysrURHi4cUGEIoFCxGjD5QVoatIrLU4tSkwvSk1NgVsAEnIECxGlD2IDZsqDqYRyi0EJpwSY8hyIzXLgpFaCmfBmBn+S3LqlxZmJgcmHgQNS1niCncEKzCapOakg61CyCS/UDRAT0fkAzyxV1eoFAAA="
                        name="t:formdata" type="hidden"/>
                </div>
                <div id="tabable-container">
                    <ul className="nav">
                        <li className="first active"><a href="#" onClick={() => this.onTabClick('credit-card')}>Credit card</a></li>
                        <li className=""><a href="#" onClick={() => this.onTabClick('corporate-pass')}>CorporatePass</a></li>
                    </ul>
                    <div className="tab-content">
                        <CreditCardTab/>
                        <CorporatePassTab/>
                    </div>
                </div>
                <p></p>
                <div>
                    <label>Conditions<em title="This field is required">*</em></label>
                </div>
                <div className="conditions">
                                <span className="valid">
                                    <input className="" id="userAgreed" name="userAgreed" type="checkbox"/>
                                    <div className="conditions-text">
                                        I have read the <a href="/policies?wrap=false" title="Student information" className="nyromodal">Student Information</a> or have had it explained to me, and I agree to accept these conditions.
                                        I understand the <a target="_blank" href="/legal">enrolment, sale and refund policy</a>.
                                    </div>
                                    <span className="validate-text"></span>
                                </span>
                </div>
                <p></p>
                <div className="form-controls enrolmentsSelected">
                    <input value="Confirm" className="btn btn-primary" id="paymentSubmit" name="paymentSubmit" type="submit"/>
                </div>
            </form>
        )
    }
}
*/
