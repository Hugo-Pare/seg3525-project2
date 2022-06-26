// eslint-disable-next-line no-undef
import React, { Component } from "react"
import './InstructionDetails.css'

// eslint-disable-next-line no-undef
class InstructionDetails extends Component{

    render(){
        return(
            <>
                <div className="instruction-details-text">Details of instruction {this.props.instructionNumber}</div>
            </>
        )
    }
}

export default InstructionDetails;