import * as React from "react";
import {Component} from "react";
export default class CreditCard extends Component<any, any> {
    render() {
        return (
            <div id="credit-card" className="single-tab active">
                <div id="paymentEditor">
                    <div className="header-content">
                        <div className="header"><span>This is a secure SSL encrypted payment.</span></div>
                    </div>
                    <div className="enrolmentsSelected">
                        <fieldset>
                            <div className="form-details">
                                <p>
                                    <label>Pay now</label><span id="cardtotalstring">$1,170
                                                            <img alt="visa card and master card"
                                                                 src="mockup/visa-mastercard.png"/>
                                                            <img alt="amex" src="mockup/amex.png"/></span>
                                </p>
                                <p>
                                    <label htmlFor="contact">Payer
                                        <em title="This field is required">*</em>
                                        <small>(issue invoice to)</small>
                                    </label>
                                    <span className="select-payer">
                                                                <label className="radio-btn">
                                                                    <input checked={true} value="5162091" name="payer"
                                                                           type="radio"/>Andrei Koiro
                                                                </label>
                                                            </span>
                                </p>
                                <div className="payer-selection">
                                    <a className="button" href="#">Choose a different payer</a>
                                    <ul className="new-payer-option" style={{display:'none'}}>
                                        <li id="new-person"><a href="#">a person</a></li>
                                        <li id="new-company"><a href="#">a business</a></li>
                                    </ul>
                                </div>
                                <p>
                                    <label htmlFor="creditCardName">Name on Card<em
                                        title="This field is required">*</em></label>
                                    <span className="valid">
                                                                <input maxLength={80} className="input-fixed "
                                                                       autoComplete="off" id="creditCardName"
                                                                       name="creditCardName" type="text"/>
                                                                <span className="validate-text"></span>
                                                            </span>
                                </p>
                                <p>
                                    <label htmlFor="creditCardNumber">Number<em
                                        title="This field is required">*</em></label>
                                    <span className="valid">
                                                                <input maxLength={20} className="input-fixed "
                                                                       autoComplete="off" id="creditCardNumber"
                                                                       name="creditCardNumber" type="text"/>
                                                                <span className="validate-text"></span>
                                                            </span>
                                </p>
                                <p>
                                    <label htmlFor="creditCardCVV">CVV<em title="This field is required">*</em></label>
                                    <span className="valid">
                                                                <input maxLength={4} className="input-fixed "
                                                                       autoComplete="off" id="creditCardCVV"
                                                                       name="creditCardCVV" type="text"/>
                                                                <img className="vcc-card-image" alt="CVV"
                                                                     src="mockup/cvv-image.png"/>
                                                                <a className="nyromodal" href="/enrol/ui/cvv?wrap=false"
                                                                   id="cvvLink">What is CVV?</a>
                                                                <span className="validate-text"></span>
                                                            </span>
                                </p>
                                <p>
                                    <label>Expiry<em title="This field is required">*</em></label>
                                    <span className="valid">
                                                                <select className="" id="expiryMonth"
                                                                        name="expiryMonth">
                                                                    <option value="">mm</option>
                                                                    <option value="01">01</option>
                                                                    <option value="02">02</option><option
                                                                    value="03">03</option>
                                                                    <option value="04">04</option><option
                                                                    value="05">05</option>
                                                                    <option value="06">06</option><option
                                                                    value="07">07</option>
                                                                    <option value="08">08</option><option
                                                                    value="09">09</option>
                                                                    <option value="10">10</option><option
                                                                    value="11">11</option>
                                                                    <option value="12">12</option>
                                                                </select>
                                                                /
                                                                <select className="" id="expiryYear" name="expiryYear">
                                                                    <option value="">yyyy</option>
                                                                    <option value="2017">2017</option>
                                                                    <option value="2018">2018</option>
                                                                    <option value="2019">2019</option>
                                                                    <option value="2020">2020</option>
                                                                    <option value="2021">2021</option>
                                                                    <option value="2022">2022</option>
                                                                    <option value="2023">2023</option>
                                                                    <option value="2024">2024</option>
                                                                    <option value="2025">2025</option>
                                                                    <option value="2026">2026</option>
                                                                    <option value="2027">2027</option>
                                                                    <option value="2028">2028</option>
                                                                    <option value="2029">2029</option>
                                                                    <option value="2030">2030</option>
                                                                    <option value="2031">2031</option>
                                                                </select>
                                                                <span className="validate-text"></span>
                                                            </span>
                                </p>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
        )
    }
}
