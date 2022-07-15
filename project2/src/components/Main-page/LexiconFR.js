// eslint-disable-next-line no-undef
import React, { Component } from "react"
import './Lexicon.css'

// eslint-disable-next-line no-undef
class LexiconFR extends Component{

    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <>
                <div className="lexicon-title">
                    <b>Guide</b>
                </div>
                <div className="lexicon-description">
                    &emsp;&emsp;Bienvenue à la section Guide, dans cette section se trouvera des explications afin d'aider les utilisateurs à naviguer au travers de ce site Web efficacement. Il sera possible de trouver une liste de définitions de termes utilisée dans les autres pages, une description de l'utilisation des pages 'Analyser', 'Comparer' et 'Rechercher', puis en conseillant plusieurs articles afin de vous mener à un meilleur processus d'investissement disponible à la page 'Apprendre'.
                    <br/>
                    <br/>&emsp;&emsp;<b>Lexique:</b>
                    <br/>
                    <br/>
                    &emsp;&emsp;Comme le langage utilisé en finance peut être très complexe pour les nouveaux investisseurs, une liste de définitions de plusieurs termes sera fourni. Veuillez tenir compte que la liste de mots restera en anglais, car certains termes deviennent moins clair une fois traduit.
                </div>
                <div className="lexicon-list">
                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>52 Week Range</b>
                        </div>
                        <div className="lexicon-box-description">
                            Le '52 Week Range' indique l'écart du prix de l'action lors des derniers 52 semaines. On y trouve le prix le bas suivi du prix le plus élevé sur cette même période de temps.
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Previous Close</b>
                        </div>
                        <div className="lexicon-box-description">
                            Le 'Previous Close' indique le prix que l'action avait lors de la fermeture des marchés boursiers la journée précédente à 16h EST. 
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Open</b>
                        </div>
                        <div className="lexicon-box-description">
                            Similaire à 'Previous Close', 'Open' signifie le prix de l'action lors de l'ouverture des marchés boursiers à 9h30 EST.
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Ask</b>
                        </div>
                        <div className="lexicon-box-description">
                            Le terme 'Ask' signifie le prix que les acheteurs demandent ainsi que le nombre d'acheteurs à ce moment présent. La vraie valeur d'une action se situe entre le prix des acheteurs et demandeurs.
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Bid</b>
                        </div>
                        <div className="lexicon-box-description">
                            Similaire à 'Ask', 'Bid' signifie le prix que les vendeurs demandent ainsi que le nombre de vendeurs à ce moment présent. La vraie valeur d'une action se situe entre le prix des acheteurs et demandeurs.
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Day's Range</b>
                        </div>
                        <div className="lexicon-box-description">
                            Similaire au '52 Week Range', le 'Day's Range' montre l'écart du prix lors de la journée ou celle précédente si les marchés boursiers sont fermés.
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>1 year Target Estimate</b>
                        </div>
                        <div className="lexicon-box-description">
                            Le '1 year Target Estimate' est un estimé du prix futur d'une action dans un an. Cet estimé est fait par un regroupement d'analystes, mais il ne faut pas se fié entièrement à leur expertise.
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Today's Volume</b>
                        </div>
                        <div className="lexicon-box-description">
                            Le terme 'Today's Volume' montre le nombre d'achat et de vente d'une action particulière. Si une action est vendue 50 fois et achetée 50 fois, le volume sera de 100.
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Average Volume</b>
                        </div>
                        <div className="lexicon-box-description">
                            Comme le 'Volume' est le nombre d'achat et de vente d'une action particulière, le 'Average Volume' calcule la moyenne du 'Volume' des trois derniers mois.
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Market Cap</b>
                        </div>
                        <div className="lexicon-box-description">
                            Le 'Market Cap' d'une companie est une manière de calculer la valeur de la compagnie. Le calcule est simple, on mutliplie le nombre d'actions de la compagnie et le prix de l'action.
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Earnings Per Share (EPS)</b>
                        </div>
                        <div className="lexicon-box-description">
                            Le 'Earnings Per Share' d'une acion est le nombre de profit que la compagnie fait par rapport à la valeur d'une action. Un 'EPS' plus haut ne veut rien dire par lui-même, il faut le comparer au prix de l'action, voir le 'Price-to-Earning Ratio'.
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Forward Dividend</b>
                        </div>
                        <div className="lexicon-box-description">
                            Le 'Forward Dividend' signifie le montant d'argent qu'une compagnie prévoit versé par action lors de la prochaine année. On y trouve souvent un 'Dividend Yield' qui montre les dividendes versées en pourcentage de la valeur de l'action.
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Price-to-Earnings Ratio</b>
                        </div>
                        <div className="lexicon-box-description">
                            Le 'Price-to-Earnings Ratio' montre le ratio entre le prix d'une action et le nombre de profit que cette action rapporte. En général, plus une action à un 'Price-to-Earnings' bas, plus il sera profitable pour l'acheteur.
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Beta</b>
                        </div>
                        <div className="lexicon-box-description">
                            Le 'Beta' est un indicateur de volatilité d'une action. Un 'Beta' inférieur à 1 signifie que l'action est moins volatile que les marchés boursieurs et un 'Beta' supérieur à 1 signifie que l'action est plus volatile.
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Earnings Date</b>
                        </div>
                        <div className="lexicon-box-description">
                            Le 'Earnings Date' est la date que la compagnie va présenter ses profits et revenus au public, cela influence les indicateurs 'EPS' et du même fait le 'Price-to-Earnings Ratio'.
                        </div>
                    </div>

                    <div className="lexicon-box">
                        <div className="lexicon-box-title">
                            <b>Ex-Dividend Date</b>
                        </div>
                        <div className="lexicon-box-description">
                            Le 'Ex-Dividend Date' est la date limite qu'un investisseur doit possédé une action avant qu'il soit versé les dividendes. Tenir en compte que les dividendes sont versées, en général, un mois après le 'Ex-Dividend Date'.
                        </div>
                    </div>

                    <div className="lexicon-description">
                        <br/>
                        &emsp;&emsp;<b>Apprendre:</b>
                        <br/>
                        <br/>
                        &emsp;&emsp;Dans la section 'Apprendre' du site Web, plusieurs articles seront disponibles pour les utilisateurs. Les titres des articles sont : Rotation des secteurs, Indicateur de 'Spread' à Haut Rendement et Est-ce que le '200-day Moving Average' est un indicateur fiable?
                        <br/>
                        <br/>
                        &emsp;&emsp;<b>Analyser:</b>
                        <br/>
                        <br/>
                        &emsp;&emsp;Dans la section 'Analyser' du site Web, les utilisateurs peuvent entrer le 'ticker' d'une compagnie dans la barre de recherche et recevoir beaucoup d'information à propos de l'action de la compagnie. Veuillez tenir compte que pas tous les compagnies seront disponibles, vous pouvez faire un tour à la section 'Rechercher' pour voir les 'tickers' disponibles.
                        <br/>
                        <br/>
                        &emsp;&emsp;<b>Comparer:</b>
                        <br/>
                        <br/>
                        &emsp;&emsp;Dans la section 'Comparer' du site Web, les utilisateurs peuvent comparer les informations de plusieurs (maximum de 3 compagnies) actions côte-à-côte. Pour choisir la compagnie, il faut entrer le 'ticker' de la compagnie. Veuillez tenir compte que pas tous les compagnies seront disponibles, vous pouvez faire un tour à la section 'Rechercher' pour voir les 'tickers' disponibles.
                        <br/>
                        <br/>
                        &emsp;&emsp;<b>Rechercher:</b>
                        <br/>
                        <br/>
                        &emsp;&emsp;Dans la section 'Rechercher' du site Web, les utilisateurs peuvent rechercher plusieurs compagnies et leur 'ticker'. Plusieurs filtres seront mis à leur disposition pour filtrer par rapport aux secteurs et marchés.
                        <br/>
                        <br/>
                    </div>

                    <div className="empty-space"></div>
                </div>
            </>
        )
    }
}

export default LexiconFR;