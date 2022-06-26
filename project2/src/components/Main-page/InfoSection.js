// eslint-disable-next-line no-undef
import React, { Component } from "react"
import './InfoSection.css'
import InstructionSteps from "./InstructionSteps";

// eslint-disable-next-line no-undef
class InfoSection extends Component{

    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <>
                <div className="infosection-title">
                    Information
                </div>
                <div className="infosection-description">
                    &emsp;Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                </div>
                <InstructionSteps/>
            </>
        )
    }
}

export default InfoSection;