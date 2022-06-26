// eslint-disable-next-line no-undef
import React, { Component } from "react"
import './Lexicon.css'

// eslint-disable-next-line no-undef
class Lexicon extends Component{

    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <>
                <div className="lexicon-title">
                    <b>Lexique</b>
                </div>
                <div className="lexicon-description">
                    &emsp;&emsp;Voici les définitions de plusieurs termes de finances. Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                    <br/>
                    <br/>
                    &emsp;&emsp;Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
                </div>
                <div className="lexicon-list">
                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>52 Week Range</b>
                        </div>
                        <div className="lexicon-box-description">
                            Description - 52 Week Range
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Previous Close</b>
                        </div>
                        <div className="lexicon-box-description">
                            Description - Previous Close
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Open</b>
                        </div>
                        <div className="lexicon-box-description">
                            Description - Open
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Ask</b>
                        </div>
                        <div className="lexicon-box-description">
                            Description - Ask
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Day's Range</b>
                        </div>
                        <div className="lexicon-box-description">
                            Description - Day's Range
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>1 year Target Estimate</b>
                        </div>
                        <div className="lexicon-box-description">
                            Description - 1 year Target Estimate
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Average Volume</b>
                        </div>
                        <div className="lexicon-box-description">
                            Description - Average Volume (3 months)
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Today's Volume</b>
                        </div>
                        <div className="lexicon-box-description">
                            Description - Today's Volume
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Market Cap</b>
                        </div>
                        <div className="lexicon-box-description">
                            Description - Market Cap
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Earnings Per Share (EPS)</b>
                        </div>
                        <div className="lexicon-box-description">
                            Description - Earnings Per Share (TTM)
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Forward Dividend</b>
                        </div>
                        <div className="lexicon-box-description">
                            Description - Forward Dividend
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Price-to-Earnings Ratio</b>
                        </div>
                        <div className="lexicon-box-description">
                            Description - Price-to-Earnings Ratio
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Beta</b>
                        </div>
                        <div className="lexicon-box-description">
                            Description - Beta (5y monthly)
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Earnings Date</b>
                        </div>
                        <div className="lexicon-box-description">
                            Description - Earnings Date
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Ex-Dividend Date</b>
                        </div>
                        <div className="lexicon-box-description">
                            Description - Ex-Dividend Date
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Lexicon;