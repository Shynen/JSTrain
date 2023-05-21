let gareDeDepart = "Valenciennes";
let gareDArrivee = "Gare du Nord"; // si on remplace par une variable vide le train ne pourra pas démarrer
let chauffeur = "";
// if (gareDeDepart != "") {
//     if(gareDArrivee != "") {                                    // tout a fait faisable 
//             console.log("Le train va démarrer")
//     }

// }

if (gareDeDepart !="" && gareDArrivee != "") {   // JS comprends deja la double condition grace au && 
    console.log("Le train va démarrer")    // plus propre  
} else {
    console.log("Le train ne peut pas démarrer")
}

if (gareDeDepart !="" || gareDArrivee != "") {   // Vérifie gare de départ different de vide OU gare d'arrivée différent de vide , suffit que l'un des deux soit bon pour valider la condition ( altgr +6)
    console.log("Le train va démarrer")    // plus propre  
} else {
    console.log("Le train ne peut pas démarrer")
}

if ((gareDeDepart !="" || gareDArrivee != "") && chauffeur != "")  {   // les parentheses verifie que la principale condition soit vrai et que le chauffeur soit la 
    console.log("Le train va démarrer")    // plus propre  
} else {
    console.log("Le train ne peut pas démarrer")
}