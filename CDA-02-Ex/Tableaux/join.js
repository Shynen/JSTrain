// permet d'afficher tous les elements les un a la suite des autres avec le separateur que l'on veut 

let monTableau = ['un','deux','trois','quatre','cinq'];
console.log(monTableau.join(' / '))                     // le tableau va devenir une enorme chaine de caractère et sera séparé par un slash

// ----------------------

let monTableau2D = [
    ['Mark','Jeff','Bill'],
    ['Zuckerberg','Bezos','Gates']  
];

// console.log(monTableau2D).join() // en faisant çà , cela va lier tous les champs du tableau2D par une virgule si l'on précise rien dans les parenthèses
console.log(monTableau2D[0].join(','))                  // va concaténer mark , jeff , bill en un seul element
