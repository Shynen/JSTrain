let variableLet ="globale";
var variableVar ="globale";  // on s'amuse a faire des tests pour voir la portée des variables

if (true) {
let variableLet ="locale";
var variableVar ="locale";

console.log("let : " + variableLet)
console.log("var : " + variableVar) // pour voir ce qui est modifié dans la condition
}

console.log("let : " + variableLet)
console.log("var : " + variableVar) // pour voir ce qui est modifié a la sortie de la condition

// on peut voir que la variable var est a chaque fois réécrite a chaque réatribution alors que la variable let , non.
// meme si elle existe dejà , dans le bloc if , la variable let est recréée avec une nouvelle valeur en ne supprimant pas la précédente.