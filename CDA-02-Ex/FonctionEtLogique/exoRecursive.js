
function somme(nombre){
if(nombre == 1) {
    return 1;     // entre 1 et 1 il y a aucun entier donc retourne 1 donc fait la boucle jusqu'a ce que nombre = 1
}
return nombre + somme (nombre - 1);  // retourne le nombre + nombre actuel - 1  
}

console.log(somme(5)); // (5) juste le param qu'on choisit et si on décompose ca fait bien 5+4+3+2+1 = 15 