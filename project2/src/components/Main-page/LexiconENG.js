// eslint-disable-next-line no-undef
import React, { Component } from "react"
import './Lexicon.css'

// eslint-disable-next-line no-undef
class LexiconENG extends Component{

    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <>
                <div className="lexicon-title">
                    <b>Guide</b>
                </div>
                <div className="lexicon-description">
                    &emsp;&emsp;Welcome to the Guide section, in this section there will be explanations to help users navigate through this website efficiently. It will be possible to find a list of definitions of terms used in the other pages, explanations on how to use the 'Analyze', 'Compare' and 'Search' pages, then advising several articles in order to lead you to a better investment process, available on the 'Learn' page.
                    <br/>
                    <br/>&emsp;&emsp;<b>Lexicon:</b>
                    <br/>
                    <br/>
                    &emsp;&emsp;​​As the language used in finance can be very complex for new investors, a list of definitions of several terms will be provided. Please note that the list of words will remain in English, as some terms become less clear once translated.
                </div>
                <div className="lexicon-list">
                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>52 Week Range</b>
                        </div>
                        <div className="lexicon-box-description">
                        The '52 Week Range' indicates the variation of the share price during the last 52 weeks. It shows the lowest price followed by the highest price over that same period of time.
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Previous Close</b>
                        </div>
                        <div className="lexicon-box-description">
                        The 'Previous Close' shows the price the stock had when the stock markets closed the previous day at 4pm EST.
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Open</b>
                        </div>
                        <div className="lexicon-box-description">
                        Similar to 'Previous Close', 'Open' means the stock price when the stock market opened at 9:30 a.m. EST.
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Ask</b>
                        </div>
                        <div className="lexicon-box-description">
                        The term 'Ask' means the price that the buyers are asking for as well as the number of buyers at that moment. The true value of a stock lies between the price of the buyers and the asks.
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Bid</b>
                        </div>
                        <div className="lexicon-box-description">
                        Similar to 'Ask', 'Bid' signifies the price that sellers are asking for as well as the number of sellers at that moment. The true value of a stock lies between the price of the buyers and the asks.
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Day's Range</b>
                        </div>
                        <div className="lexicon-box-description">
                        Similar to the '52 Week Range', the 'Day's Range' shows the difference in price during the day or the previous day if the stock markets are closed.
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>1 year Target Estimate</b>
                        </div>
                        <div className="lexicon-box-description">
                        The '1 year Target Estimate' is an estimate of the future price of a stock in one year. This estimate is made by a group of analysts, but you should not rely entirely on their expertise.
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Today's Volume</b>
                        </div>
                        <div className="lexicon-box-description">
                        The term 'Today's Volume' shows the number of buys and sells of a particular stock. If a stock is sold 50 times and bought 50 times, the volume will be 100.
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Average Volume</b>
                        </div>
                        <div className="lexicon-box-description">
                        As 'Volume' is the number of buys and sells of a particular stock, the 'Average Volume' calculates the average of the 'Volume' of the last three months.
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Market Cap</b>
                        </div>
                        <div className="lexicon-box-description">
                        The 'Market Cap' of a company is a way of calculating the value of the company. The calculation is simple, we multiply the number of shares of the company and the price of the share.
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Earnings Per Share (EPS)</b>
                        </div>
                        <div className="lexicon-box-description">
                        The 'Earnings Per Share' of a share is the number of profits the company makes in relation to the value of a share. A higher 'EPS' does not mean anything by itself, it must be compared to the price of the action, see the 'Price-to-Earning Ratio'.
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Forward Dividend</b>
                        </div>
                        <div className="lexicon-box-description">
                        The 'Forward Dividend' means the amount of money a company expects to pay out per share over the next year. There is often a 'Dividend Yield' which shows the dividends paid as a percentage of the value of the share.
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Price-to-Earnings Ratio</b>
                        </div>
                        <div className="lexicon-box-description">
                        The 'Price-to-Earnings Ratio' shows the ratio between the price of a stock and the amount of profit that the stock earns. In general, the lower a stock's Price-to-Earnings, the more profitable it will be for the buyer.
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Beta</b>
                        </div>
                        <div className="lexicon-box-description">
                        The 'Beta' is an indicator of a stock's volatility. A 'Beta' below 1 means the stock is less volatile than the stock markets and a 'Beta' above 1 means the stock is more volatile.
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Earnings Date</b>
                        </div>
                        <div className="lexicon-box-description">
                        The 'Earnings Date' is the date that the company will present its profits and income to the public, this influences the 'EPS' indicators and therefore the 'Price-to-Earnings Ratio'.
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Ex-Dividend Date</b>
                        </div>
                        <div className="lexicon-box-description">
                        The 'Ex-Dividend Date' is the latest date an investor must own a stock before dividends are paid. Bear in mind that dividends are paid, in general, one month after the 'Ex-Dividend Date'.
                        </div>
                    </div>

                    <div className="lexicon-description">
                        <br/>
                        &emsp;&emsp;<b>Learn:</b>
                        <br/>
                        <br/>
                        &emsp;&emsp;In the 'Learn' section of the website, several articles will be available for users. The titles of the articles are: Sector Rotation, High Yield Spread Indicator and Is the 200-day Moving Average a Reliable Indicator?
                        <br/>
                        <br/>
                        &emsp;&emsp;<b>Analyze:</b>
                        <br/>
                        <br/>
                        &emsp;&emsp;In the 'Analyze' section of the website, users can enter a company's 'ticker' in the search bar and receive lots of information about the company's stock. Please take into account that not all companies will be available, you can go to the 'Search' section to see the 'tickers' available.
                        <br/>
                        <br/>
                        &emsp;&emsp;<b>Compare:</b>
                        <br/>
                        <br/>
                        &emsp;&emsp;In the 'Compare' section of the website, users can compare the information of several (maximum of 3 companies) stocks side-by-side. To choose the company, you must enter the 'ticker' of the company. Please take into account that not all companies will be available, you can go to the 'Search' section to see the 'tickers' available.
                        <br/>
                        <br/>
                        &emsp;&emsp;<b>Research:</b>
                        <br/>
                        <br/>
                        &emsp;&emsp;In the 'Research' section of the website, users can search for multiple companies and their 'ticker'. Several filters will be made available to them to filter by sectors and markets.
                        <br/>
                        <br/>
                    </div>

                    <div className="empty-space"></div>
                </div>
            </>
        )
    }
}

export default LexiconENG;