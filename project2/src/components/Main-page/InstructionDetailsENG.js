// eslint-disable-next-line no-undef
import React, { Component } from "react"
import './InstructionDetails.css'

// eslint-disable-next-line no-undef
class InstructionDetailsENG extends Component{


    render(){

        const instructionNumber = this.props.instructionNumber;

        const instruction = [];

        instruction.push(
            <div className="instruction-details-text">
                &emsp;&emsp;<b>Power of compounding:</b> although compound interest over many years may appear abstract, one needs to exercise patience over a long term period as the exponential returns explode in the final years. The trick is to start saving as early as possible to reap those returns as time is your friend. You can try this using a spreadsheet like Excel or a financial calculator.
                <br/>
                <br/>
                &emsp;&emsp;<b>Reduce debt:</b> other than holding a reasonable mortgage amount, debts should be paid off first starting with the higher interest charges since those dollars are after-tax. Conversely, savings are before-tax and renders it more difficult to justify savings when higher interest debts are serviced. For example, a 10% interest charge on debt should be paid first, otherwise one would need a minimum 20% return on savings for justification (assuming a 50% tax rate).
                <br/>
                <br/>
                &emsp;&emsp;<b>Savings:</b> generally, many agree to aim for around 10% of income for savings (one should perform calculations themselves, but depending on the assumptions, this % amount saved over a time period would cover a significant portion of your salary through savings returns). This may be difficult for some, but consider someone out there is worse off than you, so aim to live well below your means. There are many great books (Wealthy Barber, Motley Fool, Money Master the Game to name a few) to help setting a budget and help identifying tricks to cut down on expenses like a daily coffee or smoking habit expense. There is also the opportunity to pay yourself first by automatically setting your savings amount in a separate account. If any of those options are not feasible, plan for future savings whenever you receive your next salary increase or extended working hours. Many employers also offer savings matching plans, so take fully advantage of those too.
            </div>
        )

        instruction.push(
            <div className="instruction-details-text">
                &emsp;&emsp;<b>Measure your own performance by yourself.</b> Set yourself a spreadsheet in Excel (a sheet of paper works too) and track the dollar savings you put aside on a given date along with the dollars you could withdraw in its entirety today. Using a spreadsheet with built-in formulas, one can calculate the actual compounded annual growth rate %. (You can use this % amount to estimate the time needed to meet your objectives, using compound interest again.) Be very careful about using performance from those that manage your money to account for proper fees, actual compounded annual growth rate instead of average, switching of investments due to poor performance especially following market contractions, and generally accounting for true long term performance.
                <br/>
                <br/>
                &emsp;&emsp;<b>Dollar amount goal setting:</b> a rough rule-of-thumb is to set about 20 times your estimated revenue amount or salary. One should calculate the amount specifically for their own needs, but 20 times represents projected revenue amount for perpetuity assuming a 5% annual return during withdrawal.
                <br/>
                <br/>
                &emsp;&emsp;<b>Asset classes</b> are generally categorized into 4:
                <br/>
                &emsp;&emsp;&emsp;&emsp;- <b>Real estate:</b> Note that homes over the long term tend to revert to the rate of inflation.
                <br/>
                &emsp;&emsp;&emsp;&emsp;- <b>Stocks</b> although volatile have been shown to have the best long term performance.
                <br/>
                &emsp;&emsp;&emsp;&emsp;- <b>Bonds</b>: Bond values are better when current interest rates are high.
                <br/>
                &emsp;&emsp;&emsp;&emsp;- <b>Commodities</b> like gold typically have better performance upon periods of high inflation.
                <br/>
                <br/>
                &emsp;&emsp;Other instruments include futures, options. Options can be traded for speculative purposes or can be used like an insurance (hedge) for an investment. Typically, options are more expensive during periods of higher market volatility as measured by the VIX (measurement of volatility of S&P500 index by the Chicago Board of Options Exchange). (There are a few introductory books, like Options Made Easy). Today, there are many ETFs (Exchange Traded Funds which we shall define later) that include hedging in various forms.
                <br/>
                <br/>
                &emsp;&emsp;<b>Allocation of savings in each asset class (as a %):</b> the % would vary based on different circumstances. For example, as one gets older, a smaller % of savings would be invested in higher risk investments like stocks. There is an old rule-of-thumb that suggests one would hold % in stocks equal to 100 minus your age. Also, as a market cycle matures, there is a higher associated risk with more expensive stocks at their peak. One could mitigate some of those risks by fixing % allocation such that if stocks were to outgrow other classes, some stocks would need to be sold at their highs and lower-risk assets would be bought to maintain overall allocation % in line with one’s objectives.
                <br/>
                <br/>
                &emsp;&emsp;<b>Diversification:</b> this is equivalent to the old adage “not to keep all your eggs in the same basket”. Consider that at least 20 stocks across multiple industries, geographies are needed for adequate diversification. As diversification increases, the performance resembles much like the market index performances like the DJIA, SP500, TSX. For many, trading 20 stocks may not be practical due to smaller savings amounts involved, expenses associated with trading, or limitations in time due to adequate research needed.
                <br/>
                <br/>
                &emsp;&emsp;<b>Taxes</b> shall always carry a significant impact on varying types of investments and disposition (KPMG issues a book annually, depending on your jurisdiction). Depending on jurisdiction, the capital gains of a principle residence are tax exempt and stocks carry a favorable capital gains tax treatment. In Canada RRSPs and TFSAs and in the US 401k’s and Roth IRAs are great tax advantages.
            </div>
        )

        instruction.push(
            <div className="instruction-details-text">
                &emsp;&emsp;Consider that many <b>market indices around the world typically post historical returns from about 8-13% annually over the long term.</b> For the DJIA that has been heavily studied, those returns post wide variations. In a period of rising stock prices (bull market), the mean duration can span many years, posting almost double returns from trough to peak. During its ascent, it is not uncommon to experience several price corrections around 5-10%. In a period of declining stock prices (bear market), the duration can be about one year, posting a decline of stock prices by sometimes 30% or more. (read more from Investors’ Business Daily Guide to the Markets)
                <br/>
                <br/>
                &emsp;&emsp;Consider that many studies have shown that the majority of investment funds do NOT beat market indices over the long term. There are few exceptions like dividend funds. Sharpe, Markowitz, Miller (Capital Pricing Asset Model) have shown that most stocks do generally correlate to the market and this remains a disputed area because in the shorter term asset prices do not follow theoretical models. However, putting price arbitrage aside, stocks do tend to revert to some mean price. There are many reasons for this, but competition shall always grow in a lucrative market to a point where normality is reached.
                <br/>
                <br/>
                &emsp;&emsp;<b>ETFs (Exchange Traded Funds)</b> have grown in popularity. Many strictly follow a market index (for example, BlackRock ishares or Vanguard holds many index funds with fees less than 0.25%), which beats many investment funds. Today, they are easily available at most financial institutions under their discount brokerages. ETFs should be considered as the backbone of most investment portfolios. As the portfolio amount grows and as one’s interest and time for analysis grows, one can participate in risk more directly with individual stocks.  
                <br/>
                <br/>
                &emsp;&emsp;There are many reasons why investment fund performances have trailed ETFs. One such reason are fees. For example, many investment funds can carry 3% fees while ETFs can carry 0.25% fees (some fees may be higher for more specialized ETFs using hedge strategies). Recall in previous compounding discussion that the difference in those fees paid over the long term can have a significant impact.
                <br/>
                <br/>
                &emsp;&emsp;<b>Market timing</b>, used for timing its troughs and peaks, is very difficult and several papers have been written to show that only a few days in a given year have notable changes in pricing, so there is a risk of missing out. There are some tools to remove some risk associated with market timing. One includes dollar cost averaging (predefined investment amounts spread out over time).
                <br/>
                <br/>
                &emsp;&emsp;<b>Market timing and history does matter though.</b> A market cycle does tend to follow a period of trough to peak over several years. The trough certainly cannot be timed with any precision, but generally we do know from the news when a stock market has collapsed and this presents a better opportunity to buy. When one has consecutively made good returns over a few years and when markets appear to be more relatively expensive (more on this to follow), this can present an opportunity to sell and fold more risky assets under less risky assets. This results in having more liquidity in your portfolio to fully take advantage of future market contractions.   Rothchild’s secret of success: “I never buy at the bottom and I always sell too soon.”
            </div>
        )

        instruction.push(
            <div className="instruction-details-text">
                &emsp;&emsp;Using ETFs as a foundation for savings, one needs to <b>roughly assess where we are in the market cycle to buy at an opportune time.</b> Recall that market timing really matters. There are many market valuations and so-called leading predictive indicators for the market. Markets involve much psychological behaviours whose research is still in its infancy. In the longer term, one would expect the markets to revert to some level of sense.
                <br/>
                <br/>
                &emsp;&emsp;<b>A popular market valuation is the price-to-earnings (PE) ratio</b> for the broader market. For example, the DJIA PE has historically averaged 14-15. On the low side, it did attain 11 (even lower for S&P500 at 9) and conversely on the high side during periods of exuberance, it did attain >40.
                <br/>
                <br/>
                &emsp;&emsp;One may want to adjust allocation % in assets if one’s assessment of risk is believed to be high. Since market timing is very difficult, higher risk assets could potentially be reduced by no less than 20% while still benefiting on upside frenzy. (Assuming that half the higher risk assets are wiped out, the 10% overall impact to portfolio can be regained with more relative ease as compared with a portfolio containing 100% higher risk assets where a 50% drop would take many years to recover).
                <br/>
                <br/>
                &emsp;&emsp;<b>Individual stock picking</b> demands more time to adequately manage. There are many different approaches, but all should be listened to as markets will trade according to all types of investment approaches.
                <br/>
                <br/>
                &emsp;&emsp;<b>Understand the underlying business of the stock.</b> Many successful investors (read for example, One Up On Wall Street, P. Lynch) will only invest in companies they know, their products, their markets.
                <br/>
                <br/>
                &emsp;&emsp;<b>Value investing</b> has been shown to be the better repeatable stock picking approach (Montier comes across as a no-nonsense economist in his book Value Investing). The most successful investor W. Buffett has used value investing (Intelligent Investor, B. Graham is a classic reading reference).
                <br/>
                <br/>
                &emsp;&emsp;One should not write-off other approaches in keeping an open-mind: momentum, contrarian, technical analysis, etc.
                <br/>
                <br/>
                &emsp;&emsp;Market indices are typically broken down into separate industry groups each containing many individual stocks. During a market expansion phase from trough to peak, certain types of stocks are said to perform better depending on where in the expansion phase. For example, interest-sensitive stocks like banks would be bought at the trough as interest rates are reduced at this point and not expected to decline further, then consumer cyclical stocks with expectations of pick-up in spending, then transportation stocks with spending ramping up, and then defensive stocks like consumer non-durables at latter stage since they are believed to be safer as their products warrant steady demand.
                <br/>
                <br/>
                &emsp;&emsp;There are other categorizations of stocks as small, mid, and large market capitalization (correlated to size). Smaller tends to outperform larger capitalizations. (What Works on Wall Street, J. O’Shaughnessy breaks it all down. Dividend paying stocks tend to perform the best).
                <br/>
                <br/>
                &emsp;&emsp;<b>Financial statements</b> for publicly traded companies can mostly be pulled online to assess an individual stock worth by reviewing their income statements (profit/loss), balance sheets (assets), and cash flow statements. There are many basic Understanding Financial Statements reference books.
            </div>
        )

        const description = [];

        for(let i = 0; i < instruction.length; i++){
            if(instructionNumber == i + 1){
                description.push(instruction[i])
                console.log(description);
            }
        }
        

        return(
            <>
                {description}
            </>
        )
    }
}

export default InstructionDetailsENG;