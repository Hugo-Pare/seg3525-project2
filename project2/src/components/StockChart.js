// eslint-disable-next-line no-undef
import React, { Component } from "react"
import { Line } from 'react-chartjs-2'
import { Button } from './Button'
import './StockChart.css'
import { IntervalButton } from './IntervalButton'
import Chart from 'chart.js/auto';

// eslint-disable-next-line no-undef
class StockChart extends Component{

    constructor(props){
        super(props);
        this.state = {
            ticker: '',
        }
    }

    render(){

        return(
            <>
                <div className="stock-finder">
                    <form>
                        <label className="ticker">Stock ticker :</label>
                        <input className="input"></input>
                        <Button type="submit">
                            Find
                        </Button>
                        <div>
                            <h1 className="company-name">
                                Company name
                            </h1>
                        </div>

                        <div className="intervalButtons">
                                <IntervalButton type="submit">1m</IntervalButton>

                                <IntervalButton type="submit">3m</IntervalButton> 

                                <IntervalButton type="submit">6m</IntervalButton> 
                            </div>
                    </form>
                </div>

                <div className="chart-container"> 
                    <Line
                        data={{
                            labels: [0,1,2,3],
                            datasets:[{
                                data: [0,1,2,3],
                                borderColor: '#028A0f',
                                fill: false,
                                label: 'Stock Price' 
                            }]
                        }}
                        height={10}
                        width={10}
                        options={{
                            maintainAspectRatio: false,
                            responsive: true,
                            legend: {
                                display: false
                            },
                            plugins: {
                                legend: {
                                    display: false
                                }
                            }
                        }}
                    /> 
                </div>

                <div className="stock-stats">
                                <div className="row">
                                    <div className="column">
                                        <p><b>52 Week Range</b></p>
                                        <p><b>Previous Close</b></p>
                                        <p><b>Open</b></p>
                                        <p><b>Ask</b></p>
                                        <p><b>Bid</b></p>
                                        <p><b>Day's Range</b></p>
                                        <p><b>1y Target Est</b></p>
                                        <p><b>Average Volume</b></p>
                                        <p><b>Volume</b></p>
                                    </div>
                                        
                                    <div className="column">
                                        <p>weekRange</p>
                                        <p>prevClose</p>
                                        <p>open</p>
                                        <p>ask</p>
                                        <p>bid</p>
                                        <p>dayRange</p>
                                        <p>targetEst</p>
                                        <p>avgVolume</p>
                                        <p>volume</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="column">
                                        <p><b>Market Cap</b></p>
                                        <p><b>EPS (TTM)</b></p>
                                        <p><b>Forward Dividend</b></p>
                                        <p><b>PE Ratio (TTM)</b></p>
                                        <p><b>Beta (5Y Monthly)</b></p>
                                        <p><b>Earnings Date</b></p>
                                        <p><b>Ex-Dividend Date</b></p>
                                    </div>
                                        
                                    <div className="column">
                                        <p>marketCap</p>
                                        <p>eps</p>
                                        <p>forwardDividend</p>
                                        <p>peRatio</p>
                                        <p>beta</p>
                                        <p>earningsDate</p>
                                        <p>exDividendDate</p>
                                    </div>
                                </div>
                </div>
                
            </>
        )
    }
}

export default StockChart;