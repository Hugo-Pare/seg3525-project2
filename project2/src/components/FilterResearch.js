// eslint-disable-next-line no-undef
import React, { Component } from "react"
import './FilterResearch.css'
import { Link } from 'react-router-dom'

// eslint-disable-next-line no-undef
class FilterResearch extends Component{

    constructor(props){
        super(props);
        this.state = {
            markets: [],
            sectors: []
        }
    }

    render(){
        return(
            <>  
                <div className="container">
                    <div className="filters">
                        <form>
                            <label>Stock ticker :</label>
                            <input className="input-search" type="text"></input>

                            <div className="empty-space"></div>

                            <label><b>Filtrer par Secteur</b></label>

                            <div className="empty-space-1"></div>
                            
                            <input type="checkbox"></input>
                            <label className="option">Information Technology</label><br/>

                            <input type="checkbox"></input>
                            <label className="option">Health Care</label><br/>

                            <input type="checkbox"></input>
                            <label className="option">Financials</label><br/>

                            <input type="checkbox"></input>
                            <label className="option">Consumer Discretionary</label><br/>

                            <input type="checkbox"></input>
                            <label className="option">Communication Services</label><br/>

                            <input type="checkbox"></input>
                            <label className="option">Industrials</label><br/>

                            <input type="checkbox"></input>
                            <label className="option">Consumer Staples</label><br/>

                            <input type="checkbox"></input>
                            <label className="option">Energy</label><br/>

                            <input type="checkbox"></input>
                            <label className="option">Utilities</label><br/>

                            <input type="checkbox"></input>
                            <label className="option">Real Estate</label><br/>

                            <input type="checkbox"></input>
                            <label className="option">Materials</label><br/>

                            <div className="empty-space"></div>

                            <label><b>Filtrer par Marché</b></label>

                            <div className="empty-space-1"></div>

                            <input type="checkbox"></input>
                            <label className="option">US</label><br/>

                            <input type="checkbox"></input>
                            <label className="option">CAN</label><br/>
                        </form>
                    </div>

                    <div className="grid">
                        <Link to={'/analyser'}>
                            <div className="cell">
                                <div>
                                    <b>Company Name (Ticker)</b>
                                </div>
                                <div>
                                    Prix
                                </div>
                                <div>
                                    Secteur
                                </div>
                                <div>
                                    Marché
                                </div>
                            </div>
                        </Link>
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                    </div>
                </div>
            </>
        )
    }
}

export default FilterResearch;