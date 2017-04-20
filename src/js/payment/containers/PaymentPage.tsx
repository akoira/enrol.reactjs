import * as React from "react";
import {Component} from "react";

import Discount from "../components/forms/Discount";
import Payment from "../components/forms/Payment";

export default class PaymentPage extends Component<any, any> {
    render() {
        return (
            <div>
                <Discount/>
                <Payment/>
            </div>
        )
    }
}
