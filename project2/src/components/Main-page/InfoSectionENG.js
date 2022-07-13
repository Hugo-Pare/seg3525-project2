// eslint-disable-next-line no-undef
import React, { Component } from "react"
import './InfoSection.css'
import InstructionSteps from "./InstructionSteps";

// eslint-disable-next-line no-undef
class InfoSectionENG extends Component{

    render(){
        return(
            <>  
                <div className="infosection-title">
                    <b>The Investor's Guide</b>
                </div>
                <div className="infosection-description">
                    &emsp;&emsp;The general marketplace is very complex with no one holding the answers. One must remain very vigilant and especially skeptical of all the divergent opinions and strategies. Lots of listening, reading is encouraged. In the end, one’s final savings decisions are best left to their own for their best self-interest.
                    <br/>
                    <br/>
                    &emsp;&emsp;Markets bring out many elements of human behaviour and many times market volatility clouds our better judgement. Successful investors have generally been shown to be those who are disciplined in following a process, whose rules are set beforehand.
                </div>
                <InstructionSteps/>
                <div className="infosection-description">
                    &emsp;&emsp;Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                    <br/>
                    <br/>
                    &emsp;&emsp;Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
                </div>
            </>
        )
    }
}

export default InfoSectionENG;