// eslint-disable-next-line no-undef
import React, { Component } from "react"
import './InfoSection.css'
import InstructionSteps from "./InstructionSteps";

// eslint-disable-next-line no-undef
class InfoSection extends Component{

    render(){
        return(
            <>
                <div className="infosection-title">
                    <b>Introduction</b>
                </div>
                <div className="infosection-description">
                    &emsp;&emsp;Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
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

export default InfoSection;