// DRY don't repeat yourself 
// recursivité , concept qui appelle une fonction dans laquelle on est deja

function timer(seconde) { // 10
    if(seconde > 0) {
        console.log(seconde);
        timer(seconde - 1 ) // 9 puis boucle , une fois à 0 arrive a else
    } else {
        console.log(seconde);  // affiche 0 du coup
    }
}
timer(10)