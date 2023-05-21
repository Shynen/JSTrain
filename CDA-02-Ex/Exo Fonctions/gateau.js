let preparation = 10 , cuisson = 15 

function cuisiner(nombreDeGateaux,minutesDePreparation,minutesDeCuisson) {
    let resultat = nombreDeGateaux * (minutesDePreparation + minutesDeCuisson)
    return resultat
}
console.log(cuisiner(1,preparation,cuisson))

function cuisiner2(nombreDeGateaux,minutesDePreparation = 10,minutesDeCuisson = 15) {
    let resultat = nombreDeGateaux * (minutesDePreparation + minutesDeCuisson)
    return resultat
}
console.log(cuisiner2(5))

let tempsDePreparationChocolat = cuisiner2(4);
let tempsDePreparationFraisier = cuisiner2(1,20);
// le deuxieme param de cuisiner2 pour spécifier que le temps de preparation du fraisier est plus important que celui du gateau au chocolat ( 1 et 4 étant le nombre de gateau étant spécifié a la déclaration de la fonction) et le temps de cuisson ne changeant pas 

console.log(tempsDePreparationFraisier); // on a bien le 35 pour 35 minutes

// on peut degager aussi les variables preparation et cuisson étant indiquer dans cuisiner 2 si jamais on veut le faire pour plusieurs gateaux différents 