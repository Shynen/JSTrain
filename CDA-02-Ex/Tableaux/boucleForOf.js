let panier = ['fraise','banane','poire'];

for(const fruit of panier) {
    console.log(fruit);                 // j'obtiens directement les elements de mon tableau
}

// CHALLENGE 

// comment obtenir l'index de mes elements du coup ?

for(const fruit of panier) {
    console.log(panier.indexOf(fruit))           // nomDuTableau.indexOf (xxx) <= xxx etant le nom qu'on a donné a la variable , ici fruit
}

