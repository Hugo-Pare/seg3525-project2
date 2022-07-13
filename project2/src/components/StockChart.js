// eslint-disable-next-line no-undef
import React, { Component } from "react"
import { Line } from 'react-chartjs-2'
import { Button } from './Button'
import './StockChart.css'
import { IntervalButton } from './IntervalButton'
import Chart from 'chart.js/auto';
import { data } from '../data.js'

// eslint-disable-next-line no-undef
class StockChart extends Component{

    constructor(props){
        super(props);
        this.state = {
            input: '',
            interval: '1m',

            //labels
            labelsOne: ["Jun 28","Jun 30","Jul 4","Jul 6","Jul 8","Jul 12","Jul 14","Jul 18","Jul 20","Jul 22"],
            labelsThree: ["May 20","May 27","Jun 3","Jun 10","Jun 17","Jun 24","Jul 1","Jul 8","Jul 15","Jul 22"],
            labelsSix: ["Mar 18","Apr 1","Apr 15","Apr 29","May 13","May 27","Jun 10","Jun 24","Jul 8","Jul 22"],

            // data
            dataOne: [],
            dataThree: [],
            dataSix: [],

            //stock info
            companyName: '',
            weekRange: '',
            prevClose: '',
            open: '',
            ask: '',
            bid: '',
            dayRange: '',
            targetEst: '',
            avgVol: '',
            vol: '',
            marketCap: '',
            eps: '',
            forwardDividend: '',
            peRatio: '',
            beta: '',
            earningsDate: '',
            exDividendDate: '',

            // toggle
            validTicker: false,
            buttonError: false,

            //test
            tickerTest: ''
        }
    }

    findTicker(e){
        e.preventDefault();
        const tickerList = ["AAPL","MSFT","GOOGL","AQN.TO","SU.TO","ENB.TO"]
        const ticker = this.state.input;

        if(tickerList.includes(ticker)){
            console.log(ticker);
            this.setState({buttonError: false});
            this.setState({validTicker: true});
            //this.setState({ticker: this.state.input});

            // set labels & data 
            console.log(data);
            for(let i = 0; i < data.length; i++){
                if(data[i].ticker === ticker){
                    // set data
                    this.setState({dataOne: data[i].one})
                    this.setState({dataThree: data[i].three})
                    this.setState({dataSix: data[i].six})
                    // set info
                    this.setState({
                        companyName: data[i].companyName,
                        weekRange: data[i].weekRange,
                        prevClose: data[i].prevClose,
                        open: data[i].open,
                        ask: data[i].ask,
                        bid: data[i].bid,
                        dayRange: data[i].dayRange,
                        targetEst: data[i].targetEst,
                        avgVol: data[i].avgVol,
                        vol: data[i].vol,
                        marketCap: data[i].marketCap,
                        eps: data[i].eps,
                        forwardDividend: data[i].forwardDividend,
                        peRatio: data[i].peRatio,
                        beta: data[i].beta,
                        earningsDate: data[i].earningsDate,
                        exDividendDate: data[i].exDividendDate
                    })
                }
            }
            
        }
        else{
            console.log("ticker not found : " + ticker);
            this.setState({
                buttonError: true,
                validTicker: false,
                companyName: ''
            })
        }
    }

    handleChange(e){
        e.preventDefault();
        let ticker = e.target.value.toUpperCase();
        //console.log(ticker);
        this.setState({input: ticker});

        //remove this
        const tick = this.state.tickerTest;
        console.log(tick);
    }

    handleInterval(e, value){
        e.preventDefault();
        this.setState({interval: value})
    }

    render(){
        const interval = this.state.interval;

        // toggle
        const validTicker = this.state.validTicker;
        const buttonError = this.state.buttonError;

        // info
        const companyName = this.state.companyName;
        const weekRange = this.state.weekRange;
        const prevClose = this.state.prevClose;
        const open = this.state.open;
        const ask = this.state.ask;
        const bid = this.state.bid;
        const dayRange = this.state.dayRange;
        const targetEst = this.state.targetEst;
        const avgVol = this.state.avgVol;
        const vol = this.state.vol;
        const marketCap = this.state.marketCap;
        const eps = this.state.eps;
        const forwardDividend = this.state.forwardDividend;
        const peRatio = this.state.peRatio;
        const beta = this.state.beta;
        const earningsDate = this.state.earningsDate;
        const exDividendDate = this.state.exDividendDate;

        // labels
        const labelsOne = this.state.labelsOne
        const labelsThree = this.state.labelsThree
        const labelsSix = this.state.labelsSix
        var labels = labelsOne;

        // data
        const dataOne = this.state.dataOne;
        const dataThree = this.state.dataThree;
        const dataSix = this.state.dataSix;
        var data = dataOne;

        // change depending on interval
        if(this.state.interval === '1m'){
            labels = labelsOne;
            data = dataOne
        }
        else if(this.state.interval === '3m'){
            labels = labelsThree;
            data = dataThree
        }
        else{
            labels = labelsSix;
            data = dataSix
        }

        return(

            <>
                <div className="stock-finder">
                    <form>
                        <label className="stock-ticker">Stock ticker :</label>
                        <input className="input" onChange={(e) => this.handleChange(e)}></input>
                        <Button type="submit" onClick={(e) => this.findTicker(e)}>
                            Find
                        </Button>

                        {buttonError ? <div className="ticker-error">Ticker not found</div> : <div className="blank"></div>}
                        
                            <div>
                                <h1 className="company-name">
                                    {companyName}
                                </h1>
                            </div>
                            {validTicker ?
                                <div className="intervalButtons">
                                    <IntervalButton type="submit" onClick={(e) => this.handleInterval(e, "1m")}>
                                        {this.state.interval === '1m' ? <b className="boldIntervalButton">1m</b> : <div>1m</div>}
                                    </IntervalButton>

                                    <IntervalButton type="submit" onClick={(e) => this.handleInterval(e, "3m")}>
                                        {this.state.interval === '3m' ? <b className="boldIntervalButton">3m</b> : <div>3m</div>}
                                    </IntervalButton> 

                                    <IntervalButton type="submit" onClick={(e) => this.handleInterval(e, "6m")}>
                                        {this.state.interval === '6m' ? <b className="boldIntervalButton">6m</b> : <div>6m</div>}
                                    </IntervalButton> 
                                </div>
                            : <div></div>}
                        
                    </form>
                </div>

                {validTicker ?
                <>
                    <div className="chart-container"> 
                        <Line
                            data={{
                                labels: labels,
                                datasets:[{
                                    data: data,
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
                                            <p>{weekRange}</p>
                                            <p>{prevClose}</p>
                                            <p>{open}</p>
                                            <p>{ask}</p>
                                            <p>{bid}</p>
                                            <p>{dayRange}</p>
                                            <p>{targetEst}</p>
                                            <p>{avgVol}</p>
                                            <p>{vol}</p>
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
                                            <p>{marketCap}</p>
                                            <p>{eps}</p>
                                            <p>{forwardDividend}</p>
                                            <p>{peRatio}</p>
                                            <p>{beta}</p>
                                            <p>{earningsDate}</p>
                                            <p>{exDividendDate}</p>
                                        </div>
                                    </div>
                                </div>
                    </>
                    :
                    <div></div>}
                
            </>
        )
    }
}

export default StockChart;