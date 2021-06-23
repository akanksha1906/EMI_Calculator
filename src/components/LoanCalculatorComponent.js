import React, { Component } from 'react'
import LoanCalculator from './LoanCalculator';
import '../assets/css/styles.css'
import * as Constant from '../Constant/constant';


export default class LoanCalculatorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minValueAmount: Constant.MINVALUE_LOANAMOUNT,
            maxValueAmount: Constant.MAXVALUE_LOANAMOUNT,
            stepCountAmount: Constant.STEPCOUNT_LOANAMOUNT,
            minValueTenure: Constant.MINVALUE_TENURE,
            maxValueTenure: Constant.MAXVALUE_TENURE,
            stepCountTenure: Constant.STEPCOUNT_TENURE,
            loanAmount: Constant.MINVALUE_LOANAMOUNT,
            tenure: Constant.MINVALUE_TENURE,
            rateOfInterest: Constant.RATEOFINTEREST,
            gstRate: Constant.GST,
            processingFeeRate: Constant.PROCESSING_FEE_RATE,
            // emi: 0,
            // bankFee: 0,
            // gst: 0,
            // netCreditAmount: 0
        }
    }

    componentDidMount = () => {
        console.clear();
        document.title='EMI Calculator'
        this.netAmountCalculator(this.state.loanAmount, this.state.tenure);
    }

    netAmountCalculator = (loanAmount, tenure) => {
        let rate = parseInt(this.state.rateOfInterest);
        let n = parseInt(tenure);
        let p = parseInt(loanAmount);
        let r= rate/12/100
        let emi = (p * r * ((1 + r) ** n)) / (((1 + r) ** n) - 1)
        let bankFee = parseInt(p) * parseInt(this.state.processingFeeRate)
        let gst = parseInt(bankFee) * (parseInt(this.state.gstRate)/100)
        let netCreditAmount = parseInt(p) - parseInt(bankFee) - parseInt(gst)
        this.setState({
            emi: parseInt(emi),
            bankFee: parseInt(bankFee),
            gst: parseInt(gst),
            netCreditAmount: parseInt(netCreditAmount)
        })
    }

    onSliderLoanAmountChange = (value) => {
        this.setState({
            loanAmount: value
        }, () => {
            this.netAmountCalculator(this.state.loanAmount, this.state.tenure)
        })
    }
    onSliderTenureChange = (value) => {
        this.setState({
            tenure: value
        }, () => {
            this.netAmountCalculator(this.state.loanAmount, this.state.tenure)
        })
    }

    render() {
        return (
            <div>
                <LoanCalculator minValueAmount={this.state.minValueAmount} maxValueAmount={this.state.maxValueAmount} stepCountAmount={this.state.stepCountAmount} minValueTenure={this.state.minValueTenure} maxValueTenure={this.state.maxValueTenure} stepCountTenure={this.state.stepCountTenure} onSliderLoanAmountChange={this.onSliderLoanAmountChange} loanAmount={this.state.loanAmount} onSliderTenureChange={this.onSliderTenureChange} tenure={this.state.tenure} emi={this.state.emi} bankFee= {this.state.bankFee} gst= {this.state.gst} netCreditAmount= {this.state.netCreditAmount} processingFeeRate={this.state.processingFeeRate} rateOfInterest={this.state.rateOfInterest} />
            </div>
        )
    }
}
