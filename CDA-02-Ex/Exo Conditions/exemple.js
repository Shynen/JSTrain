let heure = 18; // declare heure

// heure == 11
// heure != 11
// heure < 11
// heure > 11           // differentes facon de declarer 
// heure <= 11
// heure >= 11

// if (heure == 11) {
//     console.log('Il est bientot midi')     // exemple 1
// }

// if (heure < 12) {
//     console.log("C'est le matin")     // exemple 2
// }

if (heure < 12) {
    console.log("C'est le matin")
} else if (heure < 18) {
console.log("C'est l'après midi")
} else {
    console.log("Bonne soirée")
}
