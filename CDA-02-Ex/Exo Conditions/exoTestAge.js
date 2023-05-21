// age 
// -18 : Vous n'etes pas majeur 
// Entre 18 et 20 : Vous êtes majeur en France
// 21+ : Vous êtes majeur partout , à vous les casinos !

let age = prompt("Quel âge avez-vous ?")
// age=parseInt(age) //inutile je l'ai ajouté sans savoir si le prompt sera compté comme chaine de carac et donc undefined et après test la saisie nombre est bien prise en compte
if(age<18){
    alert("Vous n'êtes pas majeur")
} else if (age>=18 ,age<=20) { // remplacable juste par (age<21)
    alert("Vous êtes majeur en France")
} else {
    alert("Vous êtes majeur partour , à vous les casinos !")
}

// ok 