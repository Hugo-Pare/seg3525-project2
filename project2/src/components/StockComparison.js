// eslint-disable-next-line no-undef
import React, { Component } from "react"
import { Button } from './Button'
import './StockComparison.css'
import { data } from '../data.js'

// eslint-disable-next-line no-undef
class StockComparison extends Component{

    constructor(props){
        super(props);
        this.state = {
            ticker1: '',
            validTicker1: false,
            stats1 : {
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
                exDividendDate: ''
            },
            stock1: false,
            ticker2: '',
            validTicker2: false,
            stats2 : {
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
                exDividendDate: ''
            },
            stock2: false,
            ticker3: '',
            validTicker3: false,
            stats3 : {
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
                exDividendDate: ''
            },
            stock3: false
        }
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
    }

    clickedAdd1(e){
        e.preventDefault();
        console.log('clicked add 1');

        this.setState({stock1: true});

        const tickerList = ["AAPL","MSFT"]
        const ticker = this.state.ticker1;
        console.log(ticker)

        if(tickerList.includes(ticker)){
            // set labels & data 
            console.log(data);
            this.setState({validTicker1: true});
            for(let i = 0; i < data.length; i++){
                if(data[i].ticker === ticker){
                    // set info
                    this.setState({
                        stats1: {
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
                        }
                        
                    })
                }
            }
            
        }
        else{
            this.setState({validTicker1: false});
        }
    }

    handleChange1(e){
        console.log(e.target.value);
        const ticker = e.target.value;
        this.setState({ticker1 : ticker});
    }

    clickedAdd2(e){
        e.preventDefault();
        console.log('clicked add 2');

        this.setState({stock2: true});

        const tickerList = ["AAPL","MSFT"]
        const ticker = this.state.ticker2;
        console.log(ticker)

        if(tickerList.includes(ticker)){
            // set labels & data 
            console.log(data);
            this.setState({validTicker2: true});
            for(let i = 0; i < data.length; i++){
                if(data[i].ticker === ticker){
                    // set info
                    this.setState({
                        stats2: {
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
                        }
                        
                    })
                }
            }
            
        }
        else{
            this.setState({validTicker2: false});
        }
    }

    handleChange2(e){
        console.log(e.target.value);
        const ticker = e.target.value;
        this.setState({ticker2 : ticker});
    }

    clickedAdd3(e){
        e.preventDefault();
        console.log('clicked add 3');

        this.setState({stock3: true});

        const tickerList = ["AAPL","MSFT"]
        const ticker = this.state.ticker3;
        console.log(ticker)

        if(tickerList.includes(ticker)){
            // set labels & data 
            console.log(data);
            this.setState({validTicker3: true});
            for(let i = 0; i < data.length; i++){
                if(data[i].ticker === ticker){
                    // set info
                    this.setState({
                        stats3: {
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
                        }
                        
                    })
                }
            }
            
        }
        else{
            this.setState({validTicker3: false});
        }
    }

    handleChange3(e){
        console.log(e.target.value);
        const ticker = e.target.value;
        this.setState({ticker3 : ticker});
    }

    clickedRemove1(e){
        e.preventDefault();
        console.log('clicked remove 1');
        this.setState({
            validTicker1: false,
            ticker1: '',
            stats1 : {
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
                exDividendDate: ''
            }
        });
    }

    clickedRemove2(e){
        e.preventDefault();
        console.log('clicked remove 2');
        this.setState({
            validTicker2: false,
            ticker2: '',
            stats2 : {
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
                exDividendDate: ''
            }
        });
    }

    clickedRemove3(e){
        e.preventDefault();
        console.log('clicked remove 3');
        this.setState({
            validTicker3: false,
            ticker3: '',
            stats3 : {
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
                exDividendDate: ''
            }
        });
    }

    render(){
        const validTicker1 = this.state.validTicker1;
        const validTicker2 = this.state.validTicker2;
        const validTicker3 = this.state.validTicker3;

        // info 1
        const companyName1 = this.state.stats1.companyName;
        const weekRange1 = this.state.stats1.weekRange;
        const prevClose1 = this.state.stats1.prevClose;
        const open1 = this.state.stats1.open;
        const ask1 = this.state.stats1.ask;
        const bid1 = this.state.stats1.bid;
        const dayRange1 = this.state.stats1.dayRange;
        const targetEst1 = this.state.stats1.targetEst;
        const avgVol1 = this.state.stats1.avgVol;
        const vol1 = this.state.stats1.vol;
        const marketCap1 = this.state.stats1.marketCap;
        const eps1 = this.state.stats1.eps;
        const forwardDividend1 = this.state.stats1.forwardDividend;
        const peRatio1 = this.state.stats1.peRatio;
        const beta1 = this.state.stats1.beta;
        const earningsDate1 = this.state.stats1.earningsDate;
        const exDividendDate1 = this.state.stats1.exDividendDate;

        // info 2
        const companyName2 = this.state.stats2.companyName;
        const weekRange2 = this.state.stats2.weekRange;
        const prevClose2 = this.state.stats2.prevClose;
        const open2 = this.state.stats2.open;
        const ask2 = this.state.stats2.ask;
        const bid2 = this.state.stats2.bid;
        const dayRange2 = this.state.stats2.dayRange;
        const targetEst2 = this.state.stats2.targetEst;
        const avgVol2 = this.state.stats2.avgVol;
        const vol2 = this.state.stats2.vol;
        const marketCap2 = this.state.stats2.marketCap;
        const eps2 = this.state.stats2.eps;
        const forwardDividend2 = this.state.stats2.forwardDividend;
        const peRatio2 = this.state.stats2.peRatio;
        const beta2 = this.state.stats2.beta;
        const earningsDate2 = this.state.stats2.earningsDate;
        const exDividendDate2 = this.state.stats2.exDividendDate;

        // info 3
        const companyName3 = this.state.stats3.companyName;
        const weekRange3 = this.state.stats3.weekRange;
        const prevClose3 = this.state.stats3.prevClose;
        const open3 = this.state.stats3.open;
        const ask3 = this.state.stats3.ask;
        const bid3 = this.state.stats3.bid;
        const dayRange3 = this.state.stats3.dayRange;
        const targetEst3 = this.state.stats3.targetEst;
        const avgVol3 = this.state.stats3.avgVol;
        const vol3 = this.state.stats3.vol;
        const marketCap3 = this.state.stats3.marketCap;
        const eps3 = this.state.stats3.eps;
        const forwardDividend3 = this.state.stats3.forwardDividend;
        const peRatio3 = this.state.stats3.peRatio;
        const beta3 = this.state.stats3.beta;
        const earningsDate3 = this.state.stats3.earningsDate;
        const exDividendDate3 = this.state.stats3.exDividendDate;

        return(
            <>
                <div className="container">
                    <div className="container-box">
                        <label className="title-comparison"><b>Stock information</b></label>

                        <div className="empty-space"></div>
                        <div className="empty-space"></div>
                        <div className="empty-space"></div>

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
                        </ul>

                        <div className="empty-space"></div>

                        <ul className="list-metrics">
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
                        {validTicker1
                        ? 
                            <div>
                                <label><b>{companyName1}</b></label>
                                <form onSubmit={(e) => this.clickedRemove1(e)}>
                                    <button type="submit" className="removeBtn">
                                        Remove
                                    </button>
                                </form>

                                <div className="empty-space-1"></div>

                                <ul className="list-metrics-company">
                                    <li>{weekRange1}</li>
                                    <li>{prevClose1}</li>
                                    <li>{open1}</li>
                                    <li>{ask1}</li>
                                    <li>{bid1}</li>
                                    <li>{dayRange1}</li>
                                    <li>{targetEst1}</li>
                                    <li>{avgVol1}</li>
                                    <li>{vol1}</li>
                                </ul>

                                <div className="empty-space-2"></div>

                                <ul className="list-metrics-company">
                                    <li>{marketCap1}</li>
                                    <li>{eps1}</li>
                                    <li>{forwardDividend1}</li>
                                    <li>{peRatio1}</li>
                                    <li>{beta1}</li>
                                    <li>{earningsDate1}</li>
                                    <li>{exDividendDate1}</li>
                                </ul>
                            </div>
                        :
                            <form onSubmit={(e) => this.clickedAdd1(e)}>
                                <label>Stock ticker : </label>
                                <select className="input" onChange={this.handleChange1}>
                                    <option value="null"></option>
                                    <option value="AAPL">AAPL</option>
                                    <option value="MSFT">MSFT</option>
                                </select>
                                <Button type="submit">
                                    Add
                                </Button>
                            </form>
                        }
                    </div>
                    <div className="container-box">
                        {validTicker2
                        ?
                        <div>
                            <label><b>{companyName2}</b></label>
                            <form onSubmit={(e) => this.clickedRemove2(e)}>
                                <button type="submit" className="removeBtn">
                                    Remove
                                </button>
                            </form>

                            <div className="empty-space-1"></div>

                                <ul className="list-metrics-company">
                                    <li>{weekRange2}</li>
                                    <li>{prevClose2}</li>
                                    <li>{open2}</li>
                                    <li>{ask2}</li>
                                    <li>{bid2}</li>
                                    <li>{dayRange2}</li>
                                    <li>{targetEst2}</li>
                                    <li>{avgVol2}</li>
                                    <li>{vol2}</li>
                                </ul>

                                <div className="empty-space-2"></div>

                                <ul className="list-metrics-company">
                                    <li>{marketCap2}</li>
                                    <li>{eps2}</li>
                                    <li>{forwardDividend2}</li>
                                    <li>{peRatio2}</li>
                                    <li>{beta2}</li>
                                    <li>{earningsDate2}</li>
                                    <li>{exDividendDate2}</li>
                                </ul>
                        </div>
                        
                        :
                            <form onSubmit={(e) => this.clickedAdd2(e)}>
                                <label>Stock ticker : </label>
                                <select className="input" onChange={this.handleChange2}>
                                    <option></option>
                                    <option value="AAPL">AAPL</option>
                                    <option value="MSFT">MSFT</option>
                                </select>
                                <Button type="submit">
                                    Add
                                </Button>
                            </form>
                        }
                    </div>
                    <div className="container-box">
                        {validTicker3
                        ?
                        <div>
                            <label><b>{companyName3}</b></label>
                            <form onSubmit={(e) => this.clickedRemove3(e)}>
                                <button type="submit" className="removeBtn">
                                    Remove
                                </button>
                            </form>

                            <div className="empty-space-1"></div>

                                <ul className="list-metrics-company">
                                    <li>{weekRange3}</li>
                                    <li>{prevClose3}</li>
                                    <li>{open3}</li>
                                    <li>{ask3}</li>
                                    <li>{bid3}</li>
                                    <li>{dayRange3}</li>
                                    <li>{targetEst3}</li>
                                    <li>{avgVol3}</li>
                                    <li>{vol3}</li>
                                </ul>

                                <div className="empty-space-2"></div>

                                <ul className="list-metrics-company">
                                    <li>{marketCap3}</li>
                                    <li>{eps3}</li>
                                    <li>{forwardDividend3}</li>
                                    <li>{peRatio3}</li>
                                    <li>{beta3}</li>
                                    <li>{earningsDate3}</li>
                                    <li>{exDividendDate3}</li>
                                </ul>
                        </div>
                        :
                            <form onSubmit={(e) => this.clickedAdd3(e)}>
                                <label>Stock ticker : </label>
                                <select className="input"  onChange={this.handleChange3}>
                                    <option></option>
                                    <option value="AAPL">AAPL</option>
                                    <option value="MSFT">MSFT</option>
                                </select>
                                <Button value="clickedAdd3" type="submit">
                                    Add
                                </Button>
                            </form>
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default StockComparison;