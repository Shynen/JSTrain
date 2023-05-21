let x = 5 ;

if (x > 3) {
    console.log("X est supérieur à 3");
} else {
    console.log("X est inférieur à 3");
}

// [CONDITION] ? [TRUE] : [FALSE] ; // principe du ternaire

[x>3] ? [console.log("x est supérieur à 3")] : [console.log("x est inférieur à 3")]  // Les crochets ne servent a rien dans l'expression mais ca s'execute quand même


let gareDeDepart = "Douai";
let gareDArrivee = prompt("Où souhaitez-vous aller ?") || "Gare du Nord";
let chauffeur = "Morgan";

if ((gareDeDepart !="" || gareDArrivee != "") && chauffeur != "")  {   
    alert("Le train va démarrer à destination de " + gareDArrivee)    
} else {
    alert("Le train ne peut pas démarrer")
}

// ((gareDeDepart !="" || gareDArrivee != "") && chauffeur != "") ? alert("Le train va démarrer à destination de " + gareDArrivee) : alert("Le train ne peut pas démarrer") ; // test de la condition en ternaire 