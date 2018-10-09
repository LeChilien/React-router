// Ici j'importe React par defaut mais aussi tous les composants, les composants pourront ainsi etre exportés par la suite 
import React, {Component} from 'react';

//ici je créé le composant Home que je pourrais eporter grace à 'extends'
class Home extends Component {
    render() {
        return (
            <div>
                Bienvenue sur l'accueil
            </div>
        );
    }
}
//mention export obligatoire pour exporter le composant
export default Home;


