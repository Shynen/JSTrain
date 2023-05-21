function prevoirAge(){
    let age = prompt("Quel est votre âge") // fait apparaitre une boite de dialogue qui demande a l'utilisateur , quel age à t'il ? // stock en chaine de carac 
    // age = parseInt(age) // fait ressortir le param en nombre entier , meme un float
    age = Number(age) // deuxieme methode pour transformer une chaine de carac en integer ( plus simple a memoriser ?)
    // age = parseFloat(age) // nombre a virgule 

    // pour transformer un nombre en chaine de caracteres
// nombre = 45
// nombreEnString = nombre + ""; // methode barbare
// nombreEnString = nombre.toString() // bonne méthode pour transformer en chaine de caracteres 

    alert("Bientôt vous aurez " + (age + 1) + ' ans');  // fait apparaitre un pop_up avec l'age entrez préalablement par l'utilisateur + petite phrase de liaison
}
prevoirAge() // execute la fonction