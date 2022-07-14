import React from 'react';
import '../styles/about.css'

const About = () => {
  return (
    <>
      <div className='learn-container'>
        
        <div className='learn-text'>
          <div className='learn-text-title'>Sector Rotation</div>
          &emsp;&emsp;It is often stated that the performance of a given sector (industry group) depends on the current position in a business cycle. Sector rotation is often referenced as a tactical investment methodology. For example, the financial or utility sectors would experience better performance at the beginning of a business cycle as compared to the technology or consumer staple sectors that would experience better performance at the latter stages of a business cycle.
          <br/>
          <br/>
          &emsp;&emsp;The figure below plots the performance of key sectors in years 1 through 6 of a business cycle following a bear market correction. Unfortunately, the underlying analysis shows poor correlation between sector performance at different stages of a business cycle. The most notable correlation appears to be higher returns for all sectors immediately following a bear market as compared to the later years of a mature business cycle.
          <div className='learn-image'>
            <img src={require('../images/Learn/1.JPG')} width="100%"></img>
          </div>
          &emsp;&emsp;The busy figure below plots the key sector indices using the last 2 business cycles. It appears that choosing a sector over a longer investment period (super-cycle) may be a better investment methodology than choosing sector rotation. Some sectors consistently out-perform the market average in one or more business cycles.
          <br/>
          <br/>
          &emsp;&emsp;Perhaps, a sector that has historically underperformed and has been undercapitalized for many years resulted in the underlying businesses to consolidate. As the profits recover, it begins to attract new investors. Subsequently, new businesses are created using the increasing capital investments to share in the profits. As profits begin to suffer, attention is placed onto new opportunities.
          <div className='learn-image'>
            <img src={require('../images/Learn/2.JPG')} width="100%"></img>
          </div>

          <div className='empty-space-learn'>hidden</div>

          <div className='learn-text-title'>High Yield Spread Indicator</div>
          &emsp;&emsp;The bond market is an order of magnitude larger than the equity (stock) market, so movements in the bond market captures the interest of many investors. For example, the high yield spread is often referenced – this is the difference between higher risk bonds that warrant higher interest charges and risk-free bonds that warrant lesser interest charges since they are typically backed by government.
          <br/>
          <br/>
          &emsp;&emsp;When the high yield spread increases by say more than 500 basis points (5%), it is believed to be a negative indicator since investors have less tolerance for those assets with an increased risk (default). Thus higher interest charges are warranted to continue attracting investment.
          <br/>
          <br/>
          &emsp;&emsp;The figure below compares the high yield spread with the S&P 500 index. As the high yield spread increases, the risk of a follow-on bear market (declines of more than 20%, shown in red) increases. Conversely, as the high yield spread decreases, higher investor confidence is prevalent and generally this results in higher equity returns.

          <div className='learn-image'>
            <img src={require('../images/Learn/3.JPG')} width="100%"></img>
          </div>

          <div className='empty-space-learn'>hidden</div>

          <div className='learn-text-title'>Is the 200-day Moving Average a Reliable Market Indicator?</div>
          &emsp;&emsp;Technical analysis is a whole separate field under investment analysis involving charting.  There are many reasons why charting may be used such as historical precedents, momentum actions behind crowd behaviours, etc.  There are many books available and many technical analysis tools, however, one popular tool is the moving average (MA).
          <br/>
          <br/>
          &emsp;&emsp;The adjacent chart plots the S&P500 index starting from Nov 1998 along with its 200-day moving average (calculated by taking the average of the last 200 days of the S&P500 index price closures).

          <div className='learn-image'>
            <img src={require('../images/Learn/4.JPG')} width="100%"></img>
          </div>

          &emsp;&emsp;During market advances, the 200-day MA trend is positive and it acts as a floor for the underlying prices.  If the price breaks below the 200-day MA, this can be seen as a negative indicator.  Conversely, during market declines, the 200-day MA trend is negative and it acts as a ceiling for the underlying prices.
          <br/>
          <br/>
          &emsp;&emsp;Using S&P 500 data starting from year 1900 where the market advanced (excluding decline periods greater than 20%), prices have been held up by the 200-day MA floor 75% of the time.  This figure increased to 82% when the 200-day MA trend remained positive.  Conversely, where the market declined >20%, the 200-day MA ceiling contained the prices 78% of the time.  This figure increased to 84% when the 200-day MA trend remained negative.
          <br/>
          <br/>
          &emsp;&emsp;No investing methods are fail-safe, but moving averages used with many other indicators could help improve your odds of investment performance.

        </div>

        <div className='learn-text'>
          <div className='learn-text-title'>Rotation de Secteurs</div>
          &emsp;&emsp;Il est souvent mentionné que la performance d’un secteur donné (groupe industriel) dépend de sa position dans le cycle économique en cours. La rotation des secteurs est souvent considérée comme une méthodologie d’investissement tactique. Exemple: les secteurs financiers ou d’utilités (biens) donnent une meilleure performance au début du cycle économique par rapport au secteur technologique ou au secteur de l’aliment de base des consommateurs qui, plus tard, dans le cycle économique donnent un rendement supérieur.
          <br/>
          <br/>
          &emsp;&emsp;Le graphique ci-dessous démontre la performance des secteurs clés qui sont étalés sur une période économique de 1 à 6 ans suite à la correction d’un marché baissier (bear market). Malheureusement, l’analyse dans le graphique ci-dessous démontre la pauvre corrélation entre la performance des différents secteurs durant les périodes cycliques économiques. La corrélation la plus significative démontre de meilleures performances dans tous les secteurs immédiatement après un marché baissier (bear market) en comparaison aux années suivant un cycle économique mature.
          <div className='learn-image'>
            <img src={require('../images/Learn/1.JPG')} width="100%"></img>
          </div>
          &emsp;&emsp;Le graphique ci-dessous démontre les secteurs d’indices clés, utilisant les deux derniers cycles économiques. Il apparaît que la sélection d’un secteur sur une longue période d’investissements (super cycle) est probablement la meilleure méthodologie d’investissements à la sélection de la rotation des secteurs. Certains secteurs performent mieux que la moyenne des marchés boursiers sur un ou plusieurs cycles économiques.
          <br/>
          <br/>
          &emsp;&emsp;Peut-être qu’un secteur qui a historiquement sous-performé et a été sous-capitalisé durant plusieurs années a, comme résultat, amené les marchés à se consolider. Lorsque les profits reviennent (se redressent), l’intérêt de nouveaux investisseurs se manifestent. Subséquemment, avec les nouveaux profits, de nouvelles entreprises sont créées et tous en profitent. Lorsque les bénéfices diminuent, l’attention se tourne vers de nouvelles opportunités.
          <div className='learn-image'>
            <img src={require('../images/Learn/2.JPG')} width="100%"></img>
          </div>

          <div className='empty-space-learn'>hidden</div>

          <div className='learn-text-title'>Indicateur de 'Spread' à Haut Rendement</div>
          &emsp;&emsp;La valeur du marché des bons (quantité/valeur) est supérieure au marché mobilier. Donc, ce marché des bons intéressent plusieurs investisseurs. Exemple: le haut écart de rendement est souvent consulté, la différence entre les bons à risques nuls car ils ont une garantie gouvernementale.
          <br/>
          <br/>
          &emsp;&emsp;Lorsque le haut écart de rendement augmente plus de 500 points de base (5%), ceci est considéré comme un indicateur négatif étant donné que les investisseurs sont moins tolérants pour ces biens à risques élevés (défaut-défaillance). Les taux d’intérêts plus élevés sont nécessaires pour rendre les investissements plus attrayants.
          <br/>
          <br/>
          &emsp;&emsp;Le graphique ci-dessous compare les hauts écarts de rendement avec l’index S&P 500. Lorsque les hauts écarts de rendements augmentent, les risques d’un subséquent marché baissier (bear market) augmentent (diminution de plus de 20%, indiqué en rouge). En contrepartie, lorsqu’un haut écart de rendement diminue, la confiance des investisseurs est prédominante et, généralement, rapporte des rendements boursiers plus élevés.

          <div className='learn-image'>
            <img src={require('../images/Learn/3.JPG')} width="100%"></img>
          </div>

          <div className='empty-space-learn'>hidden</div>

          <div className='learn-text-title'>Est-ce que le '200-day Moving Average' est un indicateur fiable?</div>
          &emsp;&emsp;Les analyses techniques, sous la catégorie des analyses d’investissement, comprennent les graphiques.  Les graphiques peuvent être utilisés pour plusieurs raisons: comme precedents historiques, les moments de force (momentum) par rapport au comportement de la foule, etc.  Il existe plusieurs livres et outils d’analyses techniques disponsibles sur le sujet.  Toutefois, l’outil populaire est la moyenne mobile.
          <br/>
          <br/>
          &emsp;&emsp;Le graphique adjacent de l’index S&P 500 débutant en novembre 1998 démontre la moyenne mobile de 200 jours (calculée selon la moyenne des derniers 200 jours à la fermeture journalière de l’index S&P 500).

          <div className='learn-image'>
            <img src={require('../images/Learn/4.JPG')} width="100%"></img>
          </div>

          &emsp;&emsp;Durant la hausse du marché, la direction de la moyenne mobile de 200 jours est positive et agit comme base pour soutenir les prix.  Si les prix baissent sous la moyenne mobile, ceci peut être considéré comme un indicateur négatif.  En contrepartie, durant les baisses du marché, la direction de la moyenne mobile de 200 jours devient négatif et agit comme plafond pour contenir les prix.
          <br/>
          <br/>
          &emsp;&emsp;En se servant des données du S&P 500 à partir de l’année 1900, où les marches ont progressé (excluant les periods de baisse du marché excédant 20%), les prix ont été soutenus par la moyenne mobile de 200 jours à 75% du temps.  Ce chiffre a augmenté à 82% lorsque la moyenne mobile de 200 jours est demeurée positive.  En contrepartie, lorsque les marches ont chute plus de 20%, la moyenne mobile de 200 jours a contenu les prix à 78% du temps.  Ce pourcentage a augmenté à 84% lorsque la moyenne mobile de 200 jours est demeurée negative.
          <br/>
          <br/>
          &emsp;&emsp;Aucune méthode d’investissement n’est une guarantie.  Les moyennes mobiles utilizes avec d’autres indicateurs pourraient augmenter vos chances de performance de vos investissements.
        </div>

      </div>
    </>
  
  );
};

export default About;