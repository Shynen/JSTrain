let nombreUn = 4,nombreDeux = 7

function addition(nombreA,nombreB){
    let result = nombreA + nombreB ;
    return result // somme de A + B , Fin du bloc d'instruction après le result
}
function division(nombreA,nombreB) {
    let result = nombreA / nombreB ;
    return result
}
console.log(addition(nombreUn,nombreDeux)); // affiche dans la console le resultat de l'addition
console.log(division(nombreUn,nombreDeux));// affiche dans la console le resultat de la division

let resultatAddition = addition(nombreUn,nombreDeux); // ajoute dans une variable le resultat 
let resultatDivision = division(nombreUn,nombreDeux); // ajoute dans une variable le resultat 
console.log(resultatAddition * resultatDivision); // multiplication pour s'amuser
