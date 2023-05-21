let monTableau = ['un','deux','trois','quatre'];
//pour ajouter un element a mon tableau , on utilise la commande .push
monTableau.push('cinq');
console.log(monTableau);                    // en utilisant un console.log , on voit bien que "cinq" , a été ajouté a monTableau

// de même , il est possible d'ajouter un element AU DEBUT d'un tableau avec la commande .unshift
monTableau.unshift('zero');
console.log(monTableau);                    // zero a bien été ajouté avant le 1 puis 2,3,4, et 5

// ----------------------

// de la meme manière pour ajouter un element a un tableau a plusieurs dimensions , il faut préciser l'index avant le .push
let monTableau2D = [
    ['Mark','Jeff','Bill'],
    ['Zuckerberg','Bezos','Gates']
];

// attention si on ajoute .push sans indiquer l'index , on va ajouter un element a part des deux dimensions du tableau

monTableau2D[0].push('test');               // ici on précise le premier tableau puis l'element qu'on veut ajouter
console.log(monTableau2D[0]);               // pour voir si l'element a bien été ajouté 
 // on peut faire pareil bien sur avec unshift

//  ------------------------

let monTableauAssociatif = {
    'prenom' : 'Mark',
    'nom' : 'Zuckerberg',
    'poste' : 'PDG de Facebook'
};

// pour les tableaux associatif c'est different on utilise pas la méthode push , on attribue juste de nouvelles valeurs par exemple :

monTableauAssociatif['nationalite'] = 'Américaine' ;
console.log(monTableauAssociatif);              // la nationalité americaine a bien été ajouté a mon tableau  

// a toi de voir avec quel methode tu es le plus à l'aise 