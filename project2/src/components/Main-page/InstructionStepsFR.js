// eslint-disable-next-line no-undef
import React, { Component } from "react"
import './InstructionSteps.css'

import InstructionDetailsFR from "./InstructionDetailsFR";

// eslint-disable-next-line no-undef
class InstructionStepsFR extends Component{

    constructor(props){
        super(props);
        this.state = {
            currentInstruction: 1
        }
    }

    clickedInstruction1(e){
        e.preventDefault();
        console.log('clicked add 1');
        this.setState({currentInstruction: 1});
    }

    clickedInstruction2(e){
        e.preventDefault();
        console.log('clicked add 2');
        this.setState({currentInstruction: 2});
    }

    clickedInstruction3(e){
        e.preventDefault();
        console.log('clicked add 3');
        this.setState({currentInstruction: 3});
    }

    clickedInstruction4(e){
        e.preventDefault();
        console.log('clicked add 4');
        this.setState({currentInstruction: 4});
    }

    render(){

        const instructionNumber = this.state.currentInstruction;

        return(
            <>
                <div className="instruction-steps-container">
                    <a className="instruction-box" onClick={(e) => this.clickedInstruction1(e)}>
                        <div className={instructionNumber === 1 ? "instruction-bubble-current" : "instruction-bubble"}>
                            <div className="bubble-number">1</div>
                        </div>
                        <div className="instruction-title">
                            <b>Départ</b>
                        </div>
                    </a>
                    <a className="instruction-box" onClick={(e) => this.clickedInstruction2(e)}>
                        <div className={instructionNumber === 2 ? "instruction-bubble-current" : "instruction-bubble"}>
                            <div className="bubble-number">2</div>
                        </div>
                        <div className="instruction-title">
                            <b>Établissez vos buts</b>
                        </div>
                    </a>
                    <div className="instruction-box" onClick={(e) => this.clickedInstruction3(e)}>
                        <div className={instructionNumber === 3 ? "instruction-bubble-current" : "instruction-bubble"}>
                            <div className="bubble-number">3</div>
                        </div>
                        <div className="instruction-title">
                            <b>Édifiez les fondations</b>
                        </div>
                    </div>
                    <div className="instruction-box" onClick={(e) => this.clickedInstruction4(e)}>
                        <div className={instructionNumber === 4 ? "instruction-bubble-current" : "instruction-bubble"}>
                            <div className="bubble-number">4</div>
                        </div>
                        <div className="instruction-title">
                            <b>Gérez vos finances</b>
                        </div>
                    </div>
                </div>
                <div className="instruction-description">
                    <InstructionDetailsFR
                        instructionNumber={instructionNumber}/>
                </div>
            </>
        )
    }
}

export default InstructionStepsFR;