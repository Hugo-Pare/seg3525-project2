// eslint-disable-next-line no-undef
import React, { Component } from "react"
import InfoSectionFR from './InfoSectionFR.js'
import LexiconFR from './LexiconFR.js';
import InfoSectionENG from './InfoSectionENG.js'
import LexiconENG from './LexiconENG.js';
import './MainPage.css'

// eslint-disable-next-line no-undef
class MainPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            english: true
        }
    }

    handleClick1(e){
        e.preventDefault();
        console.log('clicked');
        this.setState({english: false})
    }

    handleClick2(e){
        e.preventDefault();
        console.log('clicked');
        this.setState({english: true})
    }

    render(){

        const english = this.state.english;

        return(
            <>  
                <div className='home-title'>
                    {english ? 
                    <button type='button' className='language-button-fr' onClick={(e) => this.handleClick1(e)}>
                        <div className="language">
                        Français
                        </div>
                    </button>
                    :<button type='button' className='language-button-eng' onClick={(e) => this.handleClick2(e)}>
                        <div className="language">
                        English
                        </div>
                    </button>}
                </div>

                <div className='empty-space-language'></div>
                    
                    <div className='container-main-page'>
                        {english === false ?
                        <>
                            <div className='column-info-section'>
                                <InfoSectionFR/>
                            </div>

                            <div className='column-lexicon'>
                                <LexiconFR/>
                            </div></>
                        :<>
                            <div className='column-info-section'>
                                <InfoSectionENG/>
                            </div>

                            <div className='column-lexicon'>
                                <LexiconENG/>
                            </div>
                        </>}
                    </div>
                
            </>
        )
    }
}

export default MainPage;