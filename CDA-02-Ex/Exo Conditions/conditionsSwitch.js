// let consommable = "carotte";
let consommable ="melon"
// let consommable ="café" 
switch(consommable) {
    case "carotte" : 
        console.log("Ceci est un légume");
        break;  // En testant carotte , si on ajoute pas break , en validant la condition , les instructions vont continuer. Le mot clé break permet de sortir de la condition au moment où il est présent ( où la condition est vérifiée donc ?)
    case "banane" :
    case "fraise" :
    case "melon" : // on peut placer autant de case qu'on veut pour eviter la répetition des 3 lignes vu qu'on veut vérifier la méme condition , étant tous les 3 des fruits , tant que l'on ne met pas le mot break . Incroyable vu qu'on deteste se répeter 
        console.log("Ceci est un fruit");
        break;
    default: // le même principe que le Else , si aucune condition n'est vérifié , mot clé default puis l'action
        console.log("Ce n'est , ni un fruit , ni un légume")
}