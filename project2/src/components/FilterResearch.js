// eslint-disable-next-line no-undef
import React, { Component } from "react"
import { data } from "../data";
import { Link } from 'react-router-dom'
import './FilterResearch.css'
import analyzeTicker from './StockChart';

// eslint-disable-next-line no-undef
class FilterResearch extends Component{

    constructor(props){
        super(props);
        this.state = {
            markets: ['CAN','US'],
            sectors: ['f','k','p','u','v','y','b','e','i','c'],
            //sectors
            checkedB: true,
            checkedC: true,
            checkedE: true,
            checkedF: true,
            checkedI: true,
            checkedK: true,
            checkedP: true,
            checkedU: true,
            checkedV: true,
            checkedY: true,
            // markets
            checkedUS: true,
            checkedCAN: true,
        }
        // markets
        this.handleCheckCAN = this.handleCheckCAN.bind(this);
        this.handleCheckUS = this.handleCheckUS.bind(this);
        // sectors
        this.handleCheckB = this.handleCheckB.bind(this);
        this.handleCheckC = this.handleCheckC.bind(this);
        this.handleCheckE = this.handleCheckE.bind(this);
        this.handleCheckF = this.handleCheckF.bind(this);
        this.handleCheckI = this.handleCheckI.bind(this);
        this.handleCheckK = this.handleCheckK.bind(this);
        this.handleCheckP = this.handleCheckP.bind(this);
        this.handleCheckU = this.handleCheckU.bind(this);
        this.handleCheckV = this.handleCheckV.bind(this);
        this.handleCheckY = this.handleCheckY.bind(this);
    }

    returnSector(value){
        switch(value){
            case 'b':
                return "Materials";
            case 'b':
                return "Comm. Services";
            case 'e':
                return "Energy";
            case 'f':
                return "Financials";
            case 'i':
                return "Industrials";
            case 'k':
                return "Info. Technology";
            case 'p':
                return "Cons. Staples";
            case 'u':
                return "Utilities";
            case 'v':
                return "Health Care";
            case 'y':
                return "Cons. Discretionary";
        }
    }

    handleCheckCAN(e){
        this.setState({checkedCAN : e.target.checked});

        // add or remove 'CAN' from array of markets
        if(e.target.checked === false){
            var array = this.state.markets;

            const index = array.indexOf('CAN');
            array.splice(index, 1);
            console.log('markets : ' + array);
            
            this.setState({markets : array});
        }
        else if(e.target.checked === true){
            var array = this.state.markets;

            array.push('CAN');
            console.log('marktets : ' + array);
            
            this.setState({markets : array});
        }
    }

    handleCheckUS(e){
        this.setState({checkedUS : e.target.checked});

        // add or remove 'US' from array of markets
        if(e.target.checked === false){
            var array = this.state.markets;

            const index = array.indexOf('US');
            array.splice(index, 1);
            console.log('markets : ' + array);
            
            this.setState({markets : array});
        }
        else if(e.target.checked === true){
            var array = this.state.markets;

            array.push('US');
            console.log('markets : ' + array);
            
            this.setState({markets : array});
        }
    }

    handleCheckB(e){
        this.setState({checkedB : e.target.checked});

        // add or remove 'b' from array of sectors
        if(e.target.checked === false){
            var array = this.state.sectors;

            const index = array.indexOf('b');
            array.splice(index, 1);
            console.log('sectors : ' + array);
            
            this.setState({sectors : array});
        }
        else if(e.target.checked === true){
            var array = this.state.sectors;

            array.push('b');
            console.log('sectors : ' + array);
            
            this.setState({sectors : array});
        }
    }

    handleCheckC(e){
        this.setState({checkedC : e.target.checked});

        // add or remove 'c' from array of sectors
        if(e.target.checked === false){
            var array = this.state.sectors;

            const index = array.indexOf('c');
            array.splice(index, 1);
            console.log('sectors : ' + array);
            
            this.setState({sectors : array});
        }
        else if(e.target.checked === true){
            var array = this.state.sectors;

            array.push('c');
            console.log('sectors : ' + array);
            
            this.setState({sectors : array});
        }
    }

    handleCheckE(e){
        this.setState({checkedE : e.target.checked});

        // add or remove 'e' from array of sectors
        if(e.target.checked === false){
            var array = this.state.sectors;

            const index = array.indexOf('e');
            array.splice(index, 1);
            console.log('sectors : ' + array);
            
            this.setState({sectors : array});
        }
        else if(e.target.checked === true){
            var array = this.state.sectors;

            array.push('e');
            console.log('sectors : ' + array);
            
            this.setState({sectors : array});
        }
    }

    handleCheckF(e){
        this.setState({checkedF : e.target.checked});

        // add or remove 'f' from array of sectors
        if(e.target.checked === false){
            var array = this.state.sectors;

            const index = array.indexOf('f');
            array.splice(index, 1);
            console.log('sectors : ' + array);
            
            this.setState({sectors : array});
        }
        else if(e.target.checked === true){
            var array = this.state.sectors;

            array.push('f');
            console.log('sectors : ' + array);
            
            this.setState({sectors : array});
        }
    }

    handleCheckI(e){
        this.setState({checkedI : e.target.checked});

        // add or remove 'i' from array of sectors
        if(e.target.checked === false){
            var array = this.state.sectors;

            const index = array.indexOf('i');
            array.splice(index, 1);
            console.log('sectors : ' + array);
            
            this.setState({sectors : array});
        }
        else if(e.target.checked === true){
            var array = this.state.sectors;

            array.push('i');
            console.log('sectors : ' + array);
            
            this.setState({sectors : array});
        }
    }

    handleCheckK(e){
        this.setState({checkedK : e.target.checked});

        // add or remove 'k' from array of sectors
        if(e.target.checked === false){
            var array = this.state.sectors;

            const index = array.indexOf('k');
            array.splice(index, 1);
            console.log('sectors : ' + array);
            
            this.setState({sectors : array});
        }
        else if(e.target.checked === true){
            var array = this.state.sectors;

            array.push('k');
            console.log('sectors : ' + array);
            
            this.setState({sectors : array});
        }
    }

    handleCheckP(e){
        this.setState({checkedP : e.target.checked});

        // add or remove 'p' from array of sectors
        if(e.target.checked === false){
            var array = this.state.sectors;

            const index = array.indexOf('p');
            array.splice(index, 1);
            console.log('sectors : ' + array);
            
            this.setState({sectors : array});
        }
        else if(e.target.checked === true){
            var array = this.state.sectors;

            array.push('p');
            console.log('sectors : ' + array);
            
            this.setState({sectors : array});
        }
    }

    handleCheckU(e){
        this.setState({checkedU : e.target.checked});

        // add or remove 'u' from array of sectors
        if(e.target.checked === false){
            var array = this.state.sectors;

            const index = array.indexOf('u');
            array.splice(index, 1);
            console.log('sectors : ' + array);
            
            this.setState({sectors : array});
        }
        else if(e.target.checked === true){
            var array = this.state.sectors;

            array.push('u');
            console.log('sectors : ' + array);
            
            this.setState({sectors : array});
        }
    }

    handleCheckV(e){
        this.setState({checkedV : e.target.checked});

        // add or remove 'v' from array of sectors
        if(e.target.checked === false){
            var array = this.state.sectors;

            const index = array.indexOf('v');
            array.splice(index, 1);
            console.log('sectors : ' + array);
            
            this.setState({sectors : array});
        }
        else if(e.target.checked === true){
            var array = this.state.sectors;

            array.push('v');
            console.log('sectors : ' + array);
            
            this.setState({sectors : array});
        }
    }

    handleCheckY(e){
        this.setState({checkedY : e.target.checked});

        // add or remove 'y' from array of sectors
        if(e.target.checked === false){
            var array = this.state.sectors;

            const index = array.indexOf('y');
            array.splice(index, 1);
            console.log('sectors : ' + array);
            
            this.setState({sectors : array});
        }
        else if(e.target.checked === true){
            var array = this.state.sectors;

            array.push('y');
            console.log('sectors : ' + array);
            
            this.setState({sectors : array});
        }
    }

    render(){

        const CAN = <img className="flag" src={require('../images/CAN.svg')} width="50" height="30"/>
        const US = <img className="flag" src={require('../images/US.webp')} width="50" height="30"/>

        const cells = [];

        const marketArray = this.state.markets;
        const sectorArray = this.state.sectors;

        for(const [index] of data.entries()){
            if(sectorArray.includes(data[index].sector) && marketArray.includes(data[index].market)){
                var tickerLowercase = data[index].ticker.toLowerCase();
                var image = <img src={require('../images/' + tickerLowercase + '.png')} width="50" height="50"/>;
                cells.push(
                    <div className="cell">
                        <div className="image-title">
                            {image}
                            <div className="ticker"><b>{data[index].ticker}</b></div>
                            {data[index].market === 'US' ? 
                            <img className="flag" src={require('../images/US.webp')} width="50" height="30"/> : 
                            <img className="flag" src={require('../images/CAN.svg')} width="50" height="30"/>}
                        </div>

                        <div className="empty-space-3"></div>

                        <div>
                            <b><u>{data[index].companyName}</u></b>
                        </div>
                        <div className="empty-space-4"></div>
                        <div className="stock-info">
                            <b>Price : </b>{data[index].one[9]} $
                        </div>
                        <div className="empty-space-4"></div>
                        <div className="stock-info">
                            <b>Sector : </b>{this.returnSector(data[index].sector)}
                        </div>
                        <div className="empty-space-4"></div>
                        <div className="stock-info">
                            <b>Market :</b> {data[index].market}
                        </div>
                        <div className="empty-space-4"></div>
                        <Link to={'/analyser'}><div><u>Analyze Company</u></div></Link>
                    </div>
                )
            }
        }

        return(
            <>  
                <div className="container">
                    <div className="filters">
                        <form>
                            <label><b>Filter by Sector</b></label>

                            <div className="empty-space-5"></div>
                            
                            <input type="checkbox" id="k" checked={this.state.checkedK} onChange={this.handleCheckK}></input>
                            <label className="option">Information Technology</label><br/>

                            <input type="checkbox" id="v" checked={this.state.checkedV} onChange={this.handleCheckV}></input>
                            <label className="option">Health Care</label><br/>

                            <input type="checkbox" id="f" checked={this.state.checkedF} onChange={this.handleCheckF}></input>
                            <label className="option">Financials</label><br/>

                            <input type="checkbox" id="y" checked={this.state.checkedY} onChange={this.handleCheckY}></input>
                            <label className="option">Consumer Discretionary</label><br/>

                            <input type="checkbox" id="c" checked={this.state.checkedC} onChange={this.handleCheckC}></input>
                            <label className="option">Communication Services</label><br/>

                            <input type="checkbox" id="i" checked={this.state.checkedI} onChange={this.handleCheckI}></input>
                            <label className="option">Industrials</label><br/>

                            <input type="checkbox" id="p" checked={this.state.checkedP} onChange={this.handleCheckP}></input>
                            <label className="option">Consumer Staples</label><br/>

                            <input type="checkbox" id="e" checked={this.state.checkedE} onChange={this.handleCheckE}></input>
                            <label className="option">Energy</label><br/>

                            <input type="checkbox" id="u" checked={this.state.checkedU} onChange={this.handleCheckU}></input>
                            <label className="option">Utilities</label><br/>

                            <input type="checkbox" id="b" checked={this.state.checkedB} onChange={this.handleCheckB}></input>
                            <label className="option">Materials</label><br/>

                            <div className="empty-space-4"></div>

                            <label><b>Filter by Market</b></label>

                            <div className="empty-space-5"></div>

                            <input type="checkbox" id="US" checked={this.state.checkedUS} onChange={this.handleCheckUS}></input>
                            <label className="option">US</label><br/>

                            <input type="checkbox" id="CAN" checked={this.state.checkedCAN} onChange={this.handleCheckCAN}></input>
                            <label className="option">CAN</label><br/>
                        </form>
                    </div>

                    <div className="grid">

                        {cells}
                        
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
                        {/* <div className="cell"></div> */}
                    </div>
                </div>
            </>
        )
    }
}

export default FilterResearch;