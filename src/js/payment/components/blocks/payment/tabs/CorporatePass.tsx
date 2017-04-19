import * as React from "react";
import {Component} from "react";
export default class CorporatePass extends Component<any, any> {
    render() {
        return (
            <div id="corporate-pass" className="single-tab">
                <fieldset>
                    <p className="info-content">
                        Enter a CorporatePass code below to complete this transaction without any payment at this time.
                        CorporatePass is available to pre-approved corporate clients only.
                    </p>
                    <label htmlFor="corporatePass" className="corporatePass-label">Code </label>
                    <input className="input-fixed" name="corporatePass" id="corporatePass" type="text"/>
                    <div className="button" id="addCorporatePass">Submit</div>
                    <a style={{display:'none'}} href="/enrol/payment.corporatepasseditor:addcorporatepass"></a>
                </fieldset>
            </div>
        )
    }
}
