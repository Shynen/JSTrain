let monTableau = ['un','deux','trois','quatre'];
// A l'inverse de push,  la commande .pop enleve le dernier element du tableau
monTableau.pop();
console.log(monTableau)                     // on observe que "quatre" a disparu

// de même que la commande UNSHIFT pour ajouter un element au tout debut , nous avons aussi la commande .SHIFT , pour supprimer le premier element 
monTableau.shift();
console.log(monTableau);                    // le "un" a bien disparu

// -------------------------

// attention si on utilise .pop ici sans préciser l'index , cela suprimera le deuxieme tableau , inversement avec shift , il restera que les noms de famille 
let monTableau2D = [
    ['Mark','Jeff','Bill'],
    ['Zuckerberg','Bezos','Gates']
];
monTableau2D[0].pop();
console.log(monTableau2D[0])                // ici normalement Bill devrait avoir disparu 

// --------------------------

// pour le tableau Associatif , c'est encore une fois différent

let monTableauAssociatif = {
    'prenom' : 'Mark',
    'nom' : 'Zuckerberg',
    'poste' : 'PDG de Facebook'
};

delete(monTableauAssociatif.poste)          // il suffit d'utiliser la fonction delete et d'ajouter le nom de la valeur que l'on veut supprimer
console.log(monTableauAssociatif)           // on recupere bien prenom et nom 