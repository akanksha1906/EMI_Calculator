import React, { Component } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default class LoanCalculator extends Component {
    render() {
        return (
            <div>
                <h3 className="headingCenter"><u>EMI Calculator</u></h3>
                <table className="center">
                    <tr>
                        <td>Loan Amount</td>
                        <td><span>Rs {this.props.loanAmount}</span></td>
                    </tr>
                    <tr>
                        <td>
                            <Slider
                                min={this.props.minValueAmount}
                                max={this.props.maxValueAmount}
                                step={this.props.stepCountAmount}
                                onChange={this.props.onSliderLoanAmountChange}
                            />
                        </td>

                    </tr>
                    <tr>
                        <td>EMI Duration</td>
                        <td><span>{this.props.tenure > 1 ? <span> {this.props.tenure} Months</span> : <span>{this.props.tenure} Month</span>}</span></td>
                    </tr>
                    <tr>
                        <td>
                            <Slider
                                min={this.props.minValueTenure}
                                max={this.props.maxValueTenure}
                                step={this.props.stepCountTenure}
                                onChange={this.props.onSliderTenureChange}

                            />
                        </td>

                    </tr>
                    <table class="nestedTable">
                        <tr >
                            <td><b>Loan Details</b></td>
                        </tr>
                        <tr >
                            <td>Annual Interest</td>
                            <td><span>{this.props.rateOfInterest} %</span></td>
                        </tr>
                        <tr>
                            <td>Mounthly EMI to be paid</td>
                            <td><span>Rs {parseInt(this.props.emi).toFixed(2)}</span></td>
                        </tr>
                        <tr>
                            <td><b>Deductibles</b></td>
                        </tr>
                        <tr>
                            <td>Processing Fee</td>
                            <td><span>-Rs {this.props.processingFeeRate}</span></td>
                        </tr>
                        <tr>
                            <td>GST</td>
                            <td><span>-Rs {parseInt(this.props.gst).toFixed(2)}</span></td>
                        </tr>
                        <tr>
                            <th>Net Amount To Be Credited </th>
                            <td><span> {parseInt(this.props.netCreditAmount).toFixed(2)} Rs </span></td>
                        </tr>
                    </table>
                </table>
            </div>

        )
    }
}
