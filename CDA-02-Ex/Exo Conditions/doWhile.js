let prenom; // declare la variable // peut aussi etre modifié en le supprimant et changeant dans le do par un var prenom vu que c'est pas une variable qui sera réutilisée dans une autre partie de notre code
 do {

    prenom = prompt("Quel est votre prénom ?") // permet de donner la valeur a la variable

 } while ( prenom == "" || prenom == null)  // vide ou null si l'utilisateur refuse la boite de dialogue

alert ("Bonjour " + prenom );