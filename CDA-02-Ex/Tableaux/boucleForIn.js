let panier = ['fraise','banane','poire'];

// nous allons créer une constante par exemple ici fruit , et qui sera en rapport avec notre tableau
// autrement dit : nous allons utiler notre variable panier pour dire que : a chaque element tu vas me créer une constante fruit et tu vas executer ce qu'il y a à l'intérieur de mon code 

for (const fruit in panier) {
    console.log(fruit)                          //  ici cela retourne 0 , 1 , 2 soit les index du tableau
}

// pour avoir la valeur de notre fruit 

for (const fruit in panier) {
    console.log(panier[fruit])        // tab[numeroIndex]                  //  ici cela retourne alors fraise , banane et poire :)
}

// on peut aussi faire d'autres choses pouvant etre utiles

for (const fruit in panier) {
    panier[fruit] = "pomme" ;     // je veux que à l'index 0 , tu changes la valeur en pomme
}
console.log(panier); // il n'y a plus que des pommes