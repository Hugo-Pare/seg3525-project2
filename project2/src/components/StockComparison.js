// eslint-disable-next-line no-undef
import React, { Component } from "react"
import { Line } from 'react-chartjs-2'
import { Button } from './Button'
import './StockComparison.css'
import Chart from 'chart.js/auto';

// eslint-disable-next-line no-undef
class StockComparison extends Component{

    constructor(props){
        super(props);
        this.state = {
            ticker1: '',
            ticker2: '',
            ticker3: ''
        }
    }

    render(){

        return(
            <>
                <div className="container">
                    <div className="container-box">
                        <label>Stock information</label>
                        <ul className="list-metrics">
                            <li>52 Week Range</li>
                            <li>Previous Close</li>
                            <li>Open</li>
                            <li>Ask</li>
                            <li>Bid</li>
                            <li>Day's Range</li>
                            <li>1y Target Estimate</li>
                            <li>Average Volume</li>
                            <li>Today's Volume</li>

                            <div className="empty-space"></div>

                            <li>Market Cap</li>
                            <li>EPS (TTM)</li>
                            <li>Forward Dividend</li>
                            <li>PE Ratio</li>
                            <li>Beta (5Y Monthly)</li>
                            <li>Earnings Date</li>
                            <li>Ex-Dividend Date</li>
                        </ul>
                    </div>
                    <div className="container-box">
                        <form>
                            <label>Stock ticker : </label>
                            <select className="input">
                                <option value="null"></option>
                                <option value="AQN.TO">AQN.TO</option>
                                <option value="ENB.TO">ENB.TO</option>
                                <option value="SU.TO">SU.TO</option>
                            </select>
                            <Button type="submit" onClick={console.log('clicked')}>
                                Add
                            </Button>
                        </form>
                    </div>
                    <div className="container-box">
                        <form>
                            <label>Stock ticker : </label>
                            <select className="input">
                                <option></option>
                                <option>AQN.TO</option>
                                <option>ENB.TO</option>
                                <option>SU.TO</option>
                            </select>
                            <Button type="submit" >
                                Add
                            </Button>
                        </form>
                    </div>
                    <div className="container-box">
                        <form>
                            <label>Stock ticker : </label>
                            <select className="input">
                                <option></option>
                                <option>AQN.TO</option>
                                <option>ENB.TO</option>
                                <option>SU.TO</option>
                            </select>
                            <Button type="submit" >
                                Add
                            </Button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default StockComparison;