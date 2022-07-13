// eslint-disable-next-line no-undef
import React, { Component } from "react"
import './InfoSection.css'
import InstructionSteps from "./InstructionSteps";

// eslint-disable-next-line no-undef
class InfoSectionFR extends Component{

    render(){
        return(
            <>  
                <div className="infosection-title">
                    <b>Guide de l'Investisseur</b>
                </div>
                <div className="infosection-description">
                    &emsp;&emsp;En général, les marchés financiers sont très complexes et personne ne détient toutes les réponses.  L’investisseur doit demeurer vigilant et très méfiant face aux différentes opinions et stratégies.  Il est recommandé de s’informer et de lire sur le sujet.  Dans l’intérêt de l’investisseur averti, ce dernier est le mieux placé pour gérer ses propres avoirs.
                    <br/>
                    <br/>
                    &emsp;&emsp;La volatilité des marchés financiers combinée à l’aspect humain rendent très difficile la prise de bonnes décisions.  Les investisseurs qui ont plus de succès sont très disciplinés et ils s’assurent de suivre à la lettre leur propre plan d’action préétabli.
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

export default InfoSectionFR;