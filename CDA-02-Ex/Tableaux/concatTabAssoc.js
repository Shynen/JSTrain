let monTableauAssociatif = {   
    'prenom' : 'Mark', 
    'nom' : 'Zuckerberg',
    'poste' : 'PDG de Facebook'
    };
// si on utilise for..in  // index
    let chaine = '';
    for (const valeur in monTableauAssociatif) {  // a chaque nouvelle valeur , on va la concatener dans une variable qui a la fin va contenir toute nos valeur donc on créer une variable chaine , contenant un ensemble vide
        chaine += (valeur + ' : ' + monTableauAssociatif[valeur] ) // si je met comme ca , tout sera collé donc je rajoute + '\n' pour mettre a la ligne après valeur
    }
    console.log(chaine)

// CHALLENGE 
// function qui prend en parametre un tableau et va nous faire un console.log de notre chaine de caract , chaine de caract qui sera créer a partir de notre tableau associatif

function concatener(tableau){
    let chaine = '';
    for (const valeur in tableau) {  // a chaque nouvelle valeur , on va la concatener dans une variable qui a la fin va contenir toute nos valeur donc on créer une variable chaine , contenant un ensemble vide
        chaine += (valeur + ' : ' + tableau[valeur] + '\n' ) // si je met comme ca , tout sera collé donc je rajoute + '\n' pour mettre a la ligne après valeur
    }
    console.log(chaine)
}
concatener(monTableauAssociatif); // pour que tableau = monTableauAssociatif




// si on utilise for..of // valeur