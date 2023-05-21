let monTableau = ['un','deux','trois'];                 // derniere et meilleure facon de déclarer un tableau a une dimension

console.log(monTableau[1])                  // pour recuperer l'element du tableau que l'on veut il faut juste mettre un numero allant de 0 pour le premier à x -1 , x etant le nombre d'element du tableau // on appelle ca un index

let monTableau2D = [
    ['Mark','Jeff','Bill'],
    ['Zuckerberg','Bezos','Gates']                  // 2ème façon // nouvelle
];

console.log(monTableau2D[0][1])             // Dans un tableau a deux dimensions , le premier crochet specifie auquel tableau nous voulons accèder ici par exemple le premier donc 0 , et jeff par exemple , donc deuxieme crochet 1 comme expliqué avant
console.log(monTableau2D[1][2])             // Pour s'amuser un peu et faire des test on devrait logiquement recuperer gates

let monTableauAssociatif = {                 // a la particularité qu'on associe un nom a chaque valeur qu'on lui attribue c'est pour ca qu'on parle de tableau associatif
    'prenom' : 'Mark', 
    'nom' : 'Zuckerberg',
    'poste' : 'PDG de Facebook'
    };

    console.log(monTableauAssociatif['poste'])      // en demandant le nom a laquelle la valeur est attribuée on recuperera la valeur normalement . testons avec poste par exemple

    // parfois il est possible qu'on ne connaisse pas le nombre d'element d'un tableau 
    // on utilisera donc monTableau.lengh pour obtenir la taille de celui-ci

    // pour obtenir le dernier element d'un tableau il existe une méthode 

    console.log(monTableau[monTableau.length - 1])      // ici j'ai bien 3 - 1 ( 3 la taille du tableau ) - 1 car javascript commence a compter a partir de 0 // en executant je devrais bien recuperer "trois"
    
    // si j'ajoute une valeur dans mon tableau le code de la ligne 26 ne changera pas , car c'est une facon dynamique d'afficher le dernier element du tableau
