import React from 'react';
import '../styles/index.css'
import InfoSection from '../components/Main-page/InfoSection';
import Lexicon from '../components/Main-page/Lexicon';

const Home = () => {
  return (
    <div>
      <h1 className='home-title'>Guide de l'investisseur</h1>

      <div className='container-main-page'>
        <div className='column-info-section'>
          <InfoSection/>
        </div>

        <div className='column-lexicon'>
          <Lexicon/>
        </div>
      </div>
    </div>
  );
};

export default Home;