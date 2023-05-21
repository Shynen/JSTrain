// try{
//     // y'a t'il une erreur ?
//     alert(hello);
// }
// catch(error){ // en mettant error en variable dans le catch , JS renvoie l'erreur qu'il a rencontré dans le console.log ( remplacable par alert pour plus de visibilité )
//  // s'il y'a une erreur execute le bloc
//  console.log(error); // on peut spécifier aussi certaines parties de l'erreur suivant ce que l'on recherche a obtenir ( name , message ou le message complet : stack)
//  console.log(error.name);
//  console.log(error.message);
//  console.log(error.stack); 
//  // on peut aussi mettre un message pour l'utilisateur 
// //  alert("La variable hello n'existe pas") 
// }

// --------------------------------------------------------

try{
let recompense = prompt("Choisissez une récompense : épée , arc , hache ");

switch (recompense) {
    case 'épée' :
        degats = 40;
        break;
    case 'arc' : 
        degats = 30;
        break;
    case 'hache' :
        degats = 50;
        break;
    default: // dans le cas où l'utilisateur refuse de choisir l'un des choix proposé
        throw new Error("Vous ne pouvez pas tricher") // Créer une nouvelle erreur 
    }
alert("Vous avez choisi " + recompense + ' ( ' + degats + " dégats" + ' )')
}
catch(error){
alert(error)
}

finally { // va s'afficher qu'il y ait une erreur ou non  ( on l'utilise rarement ou vraiment si on fait des opération où l'instruction doit impérativement etre executée)
    alert("Fin du programme")
}