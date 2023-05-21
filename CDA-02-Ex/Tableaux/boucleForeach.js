let listeDePays =['France','Belgique','Japon','Maroc'];
let listeDePays2 =['Italie','Grèce','Espagne','Portugal'];
let listeDePays3 =['Egypte','Suisse','Chine','Turquie'];

// CHALLENGE 
// boucle for..of qui affiche les pays 1 par 1 

for(const pays of listeDePays) {
    console.log(pays);                 
}

// il existe une autre solution , la boucle foreach

listeDePays2.forEach(function(pays){                 // la fonctionforEach prend en parametre une fonction anonyme
    console.log(pays) ;                          // on n'a pas encore défini pays mais on peut quand même le mettre en tant que parametre de la fonction anonyme
})                      

// on peut aussi le faire en une seule ligne grâce aux fonctions flechées  permettant alors de gagner du temps 

listeDePays3.forEach(pays => console.log(pays)); // même principe que celle du dessus 