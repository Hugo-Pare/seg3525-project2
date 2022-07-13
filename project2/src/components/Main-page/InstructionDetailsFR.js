// eslint-disable-next-line no-undef
import React, { Component } from "react"
import './InstructionDetails.css'

// eslint-disable-next-line no-undef
class InstructionDetailsFR extends Component{


    render(){

        const instructionNumber = this.props.instructionNumber;

        const instruction = [];

        instruction.push(
            <div className="instruction-details-text">
                &emsp;&emsp;<b>Pouvoir  de l’intérêt  composé:</b> même si l’intérêt composé basé sur plusieurs années semble abstrait, la patience est de mise car il y a une explosion d’accroissement des  bénéfices durant ces dernières années.  Il est recommandé d’épargner le plus tôt possible pour en bénéficier pleinement car le temps est de votre côté.  Un calculateur électronique ou un programme comme “EXCEL” est suggéré pour en faire l’expérience.
                <br/>
                <br/>
                &emsp;&emsp;<b>Réduisez vos dettes:</b> à l’exception d’une hypothèque raisonnable, vos dettes devraient être remboursées en réglant celles aux intérêts les plus élevés car les montants ont déjà été imposés.  En contrepartie, les épargnes sont avant-taxes et il est difficile de les justifier lorsque les taux d’intérêts plus élevés sont perçus sur les dettes.  Exemple: Le taux d’interêt de 10% sur un emprunt devrait être payé en priorité.  Sinon, un taux d’interêt de 20% sur un placement serait requis pour le justifier (tout en assumant un taux d’imposition de 50%).
                <br/>
                <br/>
                &emsp;&emsp;<b>Épargnes:</b> en général, plusieurs suggèrent d’épargner autour de 10 % de vos revenus tout en assumant que ce 10 % économisé sur une période donnée couvrirait une bonne partie de vos revenus par vos rendements d’épargnes.  Il faut considérer vivre quelque peu sous vos moyens. Pour certains, cela pourrait être difficile mais rappelez-vous qu’il y a pire que soi.  De très  bons livres sont disponibles (Wealthy Barber, Motley  Fool, Money Master the Game, etc.) afin de vous aider à budgéter et identifier les économies que vous pourriez faire tels que les cafés, les articles de fumeur, etc.  Placez le montant de ces économies dans un compte d’épargnes séparé.  Si vous êtes dans l’impossibilité de le faire, attendez votre prochaine augmentation salariale et investissez ce surplus d’argent, incluant les heures supplémentaires travaillées.    Plusieurs employeurs offrent la possibilité d’adhérer à leur propre plan d’épargnes.   Donc, considérez les avantages.
            </div>
        )

        instruction.push(
            <div className="instruction-details-text">
                &emsp;&emsp;<b>Mesurez votre propre performance:</b> sur une feuille d’étalement (EXCEL) ou sur une simple feuille de papier, notez tous vos dollars épargnés, la date et le montant total que vous pourriez retirer aujourd’hui.   Avec cette feuille d’étalement programmée, calculez votre taux annuel de croissance en pourcentage.  Utilisez ce pourcentage afin d’évaluer le temps requis pour atteindre vos objectifs tout en se servant de la même formule d’intérêts composés.  Soyez prudent sur les calculs de rendements fournis par les personnes qui administrent votre portefeuille.   Portez attention sur les frais de gestion, les vrais taux de croissance (au lieu des moyennes), les changements de placements dû à leur piètre performance (spécialement après une baisse des marchés) et généralement la vraie performance à long terme.
                <br/>
                <br/>
                &emsp;&emsp;<b>Objectifs en dollars:</b> la règle générale est d’avoir environ 20 fois vos revenus annuels en économies.  On pourrait toujours calculer les montants exacts requis, mais 20 fois représente généralement le montant requis pour une retraite viagère tout en assumant un rendement de 5 % de vos avoirs durant la retraite.
                <br/>
                <br/>
                &emsp;&emsp;<b>Avoirs</b> généralement partagés en 4 catégories:
                <br/>
                &emsp;&emsp;&emsp;&emsp;- <b>Biens immobiliers:</b> sur une longue période, a tendance à revenir aux taux d’inflation.
                <br/>
                &emsp;&emsp;&emsp;&emsp;- <b>Marchés boursiers</b> les marchés boursiers demeurent à long terme les meilleurs investissements.
                <br/>
                &emsp;&emsp;&emsp;&emsp;- <b>Obligations:</b> La valeur des obligations est meilleure lorsque les taux d’intérêts sont élevés.
                <br/>
                &emsp;&emsp;&emsp;&emsp;- <b>Produits de base</b> performent mieux durant les périodes de grande inflation.
                <br/>
                <br/>
                &emsp;&emsp;Les autres outils financiers incluent les contrats à terme et les options de souscription.  Les options de souscription peuvent être négociées dans un but spéculatif ou être utilisées comme assurance dans les placements à couverture de risques.  Les options sont plus dispendieuses durant les périodes où le marché est très volatile (mesuré par le VIX – calcul de volatilité de l’index S&P500 par le “Chicago Board of Options Exchange”).  (Il y a des livres d’introduction comme “Options Made Easy“).  À ce jour, il y a plusieurs “fonds négociés en bourse” (à définir plus tard) qui comprennent plusieurs types de couverture de risques.
                <br/>
                <br/>
                &emsp;&emsp;<b>Pourcentage des avoirs alloué dans les différentes catégories:</b>  les pourcentages  devraient varier selon les situations précises.  Par exemple, le pourcentage de risques  du marché financier devrait diminuer avec le vieillissement.  Il  existe un vieux principe qui suggère avoir un pourcentage d’actions équivalant à 100 moins votre âge.  Les marchés évoluent, les risques deviennent plus grands lorsque les marchés semblent à leur sommet.  On pourrait alléger une partie des risques en fixant le pourcentage alloué.  Si certaines valeurs mobilières dépassaient les autres catégories (en %) du portefeuille d’investissements, on vendrait les valeurs pour acheter d’autres catégories à faible risque afin de maintenir le pourcentage préétabli selon l’objectif.
                <br/>
                <br/>
                &emsp;&emsp;<b>Diversification:</b> est le rappel d’un vieil adage “ne pas mettre tous vos œufs dans le même panier“.  Considérez investir dans environ  20 compagnies inscrites à la  bourse dans différentes industries et pays.  Quand la diversification augmente, la performance ressemble beaucoup aux indices boursiers comme le DJIA, le S&P500, ou le TSX.  Pour plusieurs personnes, acheter 20 différentes actions n’est pas à considérer étant donné le petit montant à investir combiné aux frais de transactions et le temps requis pour les recherches.
                <br/>
                <br/>
                &emsp;&emsp;<b>Les taxes</b> comportent toujours un impact important sur les différents types d’investissements et leurs dispositions.  (Dépendamment  de votre juridiction, KPMG soumet annuellement un livre sur le sujet).  Toujours selon votre juridiction, les gains en capitaux de votre résidence principale sont exempts de taxes et les actions en bourse sont sujettes à un traitement favorable sur les gains.  Au Canada (REER et CELI) et aux Etats Unis (le 401K et les ROTH IRAs) comportent de très bons avantages fiscaux.
            </div>
        )

        instruction.push(
            <div className="instruction-details-text">
                &emsp;&emsp;Prenez note que le <b>rendement des marchés financiers mondiaux affichent à long terme un rendement d’environ 8 à 13 %.</b> L’étude de la bourse DJIA démontre de très grandes variations.  Durant la période ascendante des marchés, l’escalade peut durer plusieurs années et parfois doubler ses valeurs.  Durant les ascensions, il pourrait y avoir plusieurs corrections entre 5 à 10 % .  Cependant, durant les baisses des marchés boursiers pouvant durer parfois  jusqu’à une année, les marchés peuvent perdre en valeur jusqu’à 30 % ou plus. (Vous pouvez consulter “Investors’ Business Daily Guide to the Markets“).
                <br/>
                <br/>
                &emsp;&emsp;Prenez note que des études ont démontré que la majorité des fonds d’investissements ne dépassent pas l’indice boursier sur une longue période de temps.  Il y a quelques exceptions tels que les fonds de dividendes.  La référence ” Sharpe, Markowitz, Miller” (Capital Pricing Asset Model) a démontré que la plupart des actions sont corrélatives au marché et demeure un sujet controversé car, à court terme, le prix des avoirs ne suit pas les théories.  Cependant, les actions ont tendance à revenir à leurs valeurs moyennes en raison de différents facteurs.  La compétition progresse toujours dans un marché lucratif jusqu’au point où la normalité est atteinte.
                <br/>
                <br/>
                &emsp;&emsp;<b>Fonds négociés en bourse (FNBs)</b> sont devenus très populaires. Plusieurs suivent strictement l’indice boursier (ex. :  Blackrock Ishares ou Vanguard détiennent plusieurs FNBs avec honoraires de moins de  0.25 %) et dépassent plusieurs fonds d’investissements.  Ils sont facilement disponibles dans la plupart des institutions financières sous  courtage d’escompte.   Les FNBs devraient être considérés comme le principal acteur pour la plupart des investisseurs.  Lorsque le portefeuille,  l’intérêt personnel et le temps d’analyse augmentent, on peut participer plus directement à l’achat d’actions individuelles.
                <br/>
                <br/>
                &emsp;&emsp;Il y a plusieurs facteurs pour que les fonds d’investissements performent moins bien que les FNBs (ex. : frais de gestion) .  Par exemple, le coût de plusieurs fonds d’investissements peut être 3 % comparativement au coût des  FNBs qui  peut être  0.25 % .  Les frais de certains FNBs spécialisés peuvent être plus élevés si des couvertures de risques sont utilisés.  Selon les explications déjà mentionnées sur l’intérêt composé, la différence des frais de gestion à long terme présente un impact significatif.
                <br/>
                <br/>
                &emsp;&emsp;<b>Anticipation des mouvements du marché, </b>il est très difficile de prédire les hauts et les bas du marché.  Plusieurs articles sur le sujet ont été écrits pour démontrer que les valeurs subissent un changement important quelques jours par année.  Le risque de manquer ces jours est grand.  Quelques outils existent pour vous aider à diminuer le risque associé au timing du marché.  Un de ceux-ci est “achats périodiques par sommes fixes“.
                <br/>
                <br/>
                &emsp;&emsp;<b>L’historique et le timing du marché sont importants: </b> les cycles du marché démontrent des hauts et des bas sur des périodes qui peuvent durer plusieurs années. Les baisses du marché ne sont pas prévisibles et font souvent les manchettes, ce qui peut procurer une grande opportunité d’achat(s).  Suite à l’obtention de bons rendements sur plusieurs années et lorsque les marchés semblent être surévalués (à élaborer davantage plus tard), ceci permet de vendre les actions afin de réinvestir leurs dispositions dans des avoirs moins à risques.  Avoir plus de liquidité dans le  portefeuille permet de bénéficier d’avantages lors d’une éventuelle baisse des marchés.  Le secret du succès de Rothchild : “je n’achète jamais au plus bas des marchés et vend toujours trop tôt”.
            </div>
        )

        instruction.push(
            <div className="instruction-details-text">
                &emsp;&emsp;En se servant des FNBs comme base, on <b>doit évaluer approximativement où l’on se situe dans le cycle du marché de la bourse afin d’acheter au moment opportun.</b> Souvenez-vous que le timing du marché est très important.  Il y a plusieurs signes avant-coureurs indiquant les variations sur l’état des marchés.  Le compteur d’inquiétudes de rebelinvestor essaie de les consolider et apporte un indicateur approximatif des risques selon la position évaluée dans le cycle des marchés.  Ce compteur ne possède  pas la rigueur pour défendre une thèse mais la prévisibilité des marchés n’a pas nécessairement une solution compte tenu de la multitude de variables.  L’une de ces variables concerne les comportements psychologiques où la recherche ne fait que commencer.  À long terme, on pourrait s’attendre à ce que les marchés reviennent à un niveau raisonnable.
                <br/>
                <br/>
                &emsp;&emsp;<b>Une évaluation populaire du marché est le ratio (“Prix aux rendements”)</b> ex., le DJIA historiquement a une moyenne de 14 – 15 et a été mesuré au plus bas du marché  à 11 (même plus bas pour le S&P500 à 9).  En contrepartie, durant les périodes exubérantes, il a atteint au-delà de 40.
                <br/>
                <br/>
                &emsp;&emsp;On pourrait ajuster l’allocation des avoirs si l’évaluation des risques semble élevée.  Comme le timing du marché est difficile, le pourcentage des avoirs à risques (actions) pourrait être réduit au minimum 20 % afin de profiter en partie de la frénésie montante du marché.  (En assumant que la moitié des placements à risques se soient envolés, l’impact de 10 % du 20% sur le portefeuille peut être récupéré plus facilement en comparaison à un portefeuille contenant 100 % (au lieu du 20%) de placements à risques élevés où une chute de 50 % prendrait plusieurs années à récupérer).
                <br/>
                <br/>
                &emsp;&emsp;<b>Sélection d’actions individuelles: </b> la sélection de ces actions nécessite beaucoup de temps pour les gérer adéquatement.   Il y a plusieurs façons de s’y prendre et toutes ces façons devraient être étudiées car les marchés se négocient aux différentes approches.
                <br/>
                <br/>
                &emsp;&emsp;<b>Bien comprendre les rudiments autour de l’action: </b> plusieurs investisseurs couronnés de succès achètent seulement dans des compagnies qu’ils connaissent bien, selon leurs produits et leurs marchés.  (A lire “One Up on Wall Street “ de P. Lynch)
                <br/>
                <br/>
                &emsp;&emsp;<b>Investissement de type valeur: </b> est la meilleure approche pour la sélection d’actions où les résultats peuvent être reproduits de façon plus constante.  (à lire  “Value Investing” de l’économiste Montier). W. Buffett, investisseur reconnu, a obtenu le plus de succès en utilisant cette approche.  (Le livre “Intelligent Investor” de B. Graham est une bonne référence classique).
                <br/>
                <br/>
                &emsp;&emsp;On ne devrait pas ignorer les différentes approches.  Il faut toujours garder l’esprit ouvert sur le “momentum”, la méthode contrariété et les analyses techniques.
                <br/>
                <br/>
                &emsp;&emsp;Les indices boursiers sont divisés en groupes d’industries séparés et contiennent plusieurs actions individuelles.  Durant une phase d’expansion du bas au sommet, certains types d’actions semblent mieux performer durant une certaine phase de cette expansion.
                <br/>
                <br/>
                &emsp;&emsp;Il y a plusieurs autres catégories d’actions : Petites, moyennes et à grande capitalisation du marché : (elles sont proportionnelles à la grandeur de l’entreprise).  Les petites performent mieux que les actions à grande capitalisation.  (“What Works on Wall Street de J. O,Shaughnessey” le décrit très bien .  Les actions payant en dividendes semblent avoir la meilleure performance).
                <br/>
                <br/>
                &emsp;&emsp;<b>Les états financiers</b> pour les compagnies inscrites à la bourse sont facilement disponibles sur internet afin d’établir la valeur des actions en révisant : États des résultats (bénéfices nets), Bilan (actifs / passifs) et États des flux de trésorerie. Il y a plusieurs livres disponibles sur la compréhension de base des états financiers.
            </div>
        )

        const description = [];

        for(let i = 0; i < instruction.length; i++){
            if(instructionNumber == i + 1){
                description.push(instruction[i])
                console.log(description);
            }
        }
        

        return(
            <>
                {description}
            </>
        )
    }
}

export default InstructionDetailsFR;