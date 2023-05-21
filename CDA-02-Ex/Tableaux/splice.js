// ne pas hesiter a mettre en comm les .splice pour mieux comprendre avec les console.log

let monTableau = ['un','deux','trois','quatre'];
monTableau.splice(0,2);                                 // demande des valeurs , premier element : l'index a partir duquel on commence le changement , deuxieme element : combien d'element je veux supprimer
console.log(monTableau);
                                                        // on peut aussi ajouter des valeurs en utilisant splice
monTableau.splice(0,0,'test','test2');                  // on indique que l'on veut pas pas supprimer
console.log(monTableau);
                                                        //on peut aussi choisir où l'on veut ajouter des valeurs 
monTableau.splice(1,0,'test','test2');                  // ici , on voudrait que test et test2 soit placé entre "un" et "deux"
console.log(monTableau)                                 // cela place bien comme on le voulait

// ---------------------

// 
let monTableau2D = [
    ['Mark','Jeff','Bill'],
    ['Zuckerberg','Bezos','Gates']
];
                                                // monTableau2D.splice(0,1); // cela va supprimer le premier tableau
                                                // si je veux supprimer uniquement mark par exemple il faut ajouter l'index au tableau donc :
// monTableau2D[0].splice(0,1)                  // 0 : premier tableau  / 0 : numero d'index du tableau / 1 : nombre d'element a supprimer
console.log(monTableau2D)                       // mark a bien disparu

// CHALLENGE
// inserer un troisieme tableau dans monTableau2D avec la fonction splice qui contiendrait des ages ['30','45','70']

monTableau2D.splice(2,0,['30','45','70']); // 2 : position / 0 : nombre d'element a supprimer et j'ajoute mon tableau à la suite
console.log(monTableau2D); // je recupere bien mon tableau dans la console
