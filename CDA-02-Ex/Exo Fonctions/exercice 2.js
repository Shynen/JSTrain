//Nous allons récupérer deux valeurs grâce à notre utilisateur : poids et taille, qui seront respectivement associées au poids et à la taille de notre utilisateur. Vous pouvez demander à vos utilisateurs leur taille en centimètres ou en mètres. Dans tous les cas, vous devrez convertir cette taille en mètres pour calculer son IMC.
// Il faudra ensuite passer ces valeurs à notre fonction, grâce à ses paramètres. J'insiste sur ce point.
// Dans cette fonction calculerIMC nous aurons une formule mathématique, que je vais vous donner car il n'y a pas d'intérêt à la chercher : poids(kg)/taille²(m)
// Enfin, l'objectif pour notre fonction sera de nous retourner ce résultat afin que nous puissions l'afficher à notre utilisateur, directement via une boîte de dialogue en dehors de notre fonction.

function calculerIMC() {
    let poids = prompt ("Quel est votre poids");
    poids = Number(poids);
    let taille = prompt("Quel est votre taille ? ( en cm )")
    let tailleEnM = parseFloat(taille)
    tailleEnM = taille/100
let result = poids/(tailleEnM * tailleEnM)
// let result = poids / Math.pow(tailleEnM,2) fonction math puissance 2  faisable aussi de cette façon de manière plus intelligente :p
console.log(result)
return result
}

calculerIMC()

// plus fiable que les vrais calculateur d'imc en ligne mdr 