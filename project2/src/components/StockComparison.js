// eslint-disable-next-line no-undef
import React, { Component } from "react"
import { Button } from './Button'
import './StockComparison.css'
import ReactTooltip from 'react-tooltip';

// eslint-disable-next-line no-undef
class StockComparison extends Component{

    constructor(props){
        super(props);
        this.state = {
            ticker1: '',
            stock1: false,
            ticker2: '',
            stock2: false,
            ticker3: '',
            stock3: false
        }
    }

    clickedAdd1(e){
        e.preventDefault();
        console.log('clicked add 1');
        this.setState({stock1: true});
    }

    clickedAdd2(e){
        e.preventDefault();
        console.log('clicked add 2');
        this.setState({stock2: true});
    }

    clickedAdd3(e){
        e.preventDefault();
        console.log('clicked add 3');
        this.setState({stock3: true});
    }

    clickedRemove1(e){
        e.preventDefault();
        console.log('clicked add 1');
        this.setState({stock1: false});
    }

    clickedRemove2(e){
        e.preventDefault();
        console.log('clicked add 2');
        this.setState({stock2: false});
    }

    clickedRemove3(e){
        e.preventDefault();
        console.log('clicked add 3');
        this.setState({stock3: false});
    }

    render(){

        const stock1 = this.state.stock1;
        const stock2 = this.state.stock2;
        const stock3 = this.state.stock3;

        return(
            <>
                <div className="container">
                    <div className="container-box">
                        <label className="title-comparison"><b>Stock information</b></label>

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
                        {stock1 
                        ? 
                            <div>
                                <form onSubmit={(e) => this.clickedRemove1(e)}>
                                    <label><b>Company Name</b></label>
                                    <button type="submit" className="removeBtn">
                                        Remove
                                    </button>
                                </form>

                                <div className="empty-space-1"></div>

                                <ul className="list-metrics-company">
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

                                <div className="empty-space-2"></div>

                                <ul className="list-metrics-company">
                                    <li>Market Cap</li>
                                    <li>EPS (TTM)</li>
                                    <li>Forward Dividend</li>
                                    <li>PE Ratio</li>
                                    <li>Beta (5Y Monthly)</li>
                                    <li>Earnings Date</li>
                                    <li>Ex-Dividend Date</li>
                                </ul>
                            </div>
                        :
                            <form onSubmit={(e) => this.clickedAdd1(e)}>
                                <label>Stock ticker : </label>
                                <select className="input">
                                    <option value="null"></option>
                                    <option value="AQN.TO">AQN.TO</option>
                                    <option value="ENB.TO">ENB.TO</option>
                                    <option value="SU.TO">SU.TO</option>
                                </select>
                                <Button type="submit">
                                    Add
                                </Button>
                            </form>
                        }
                    </div>
                    <div className="container-box">
                        {stock2
                        ?
                        <div>
                            <form onSubmit={(e) => this.clickedRemove2(e)}>
                                <label><b>Company Name</b></label>
                                <button type="submit" className="removeBtn">
                                    Remove
                                </button>
                            </form>

                            <div className="empty-space-1"></div>

                                <ul className="list-metrics-company">
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

                                <div className="empty-space-2"></div>

                                <ul className="list-metrics-company">
                                    <li>Market Cap</li>
                                    <li>EPS (TTM)</li>
                                    <li>Forward Dividend</li>
                                    <li>PE Ratio</li>
                                    <li>Beta (5Y Monthly)</li>
                                    <li>Earnings Date</li>
                                    <li>Ex-Dividend Date</li>
                                </ul>
                        </div>
                        
                        :
                            <form onSubmit={(e) => this.clickedAdd2(e)}>
                                <label>Stock ticker : </label>
                                <select className="input">
                                    <option></option>
                                    <option>AQN.TO</option>
                                    <option>ENB.TO</option>
                                    <option>SU.TO</option>
                                </select>
                                <Button value="clickedAdd2" type="submit">
                                    Add
                                </Button>
                            </form>
                        }
                    </div>
                    <div className="container-box">
                        {stock3
                        ?
                        <div>
                            <form onSubmit={(e) => this.clickedRemove3(e)}>
                                <label><b>Company Name</b></label>
                                <button type="submit" className="removeBtn">
                                    Remove
                                </button>
                            </form>

                            <div className="empty-space-1"></div>

                                <ul className="list-metrics-company">
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

                                <div className="empty-space-2"></div>

                                <ul className="list-metrics-company">
                                    <li>Market Cap</li>
                                    <li>EPS (TTM)</li>
                                    <li>Forward Dividend</li>
                                    <li>PE Ratio</li>
                                    <li>Beta (5Y Monthly)</li>
                                    <li>Earnings Date</li>
                                    <li>Ex-Dividend Date</li>
                                </ul>
                        </div>
                        :
                            <form onSubmit={(e) => this.clickedAdd3(e)}>
                                <label>Stock ticker : </label>
                                <select className="input">
                                    <option></option>
                                    <option>AQN.TO</option>
                                    <option>ENB.TO</option>
                                    <option>SU.TO</option>
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