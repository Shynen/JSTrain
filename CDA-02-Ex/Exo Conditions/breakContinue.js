let i = 0;

while (i <5) {  
    if(i == 3) {
        break;                // arrete la condition
    }
 console.log("Ligne : " +i);
 i++;
}

while (i <5) {  
    if(i == 3) {
        i++;
        continue;                // passe a la prochaine itération , attention aux boucles infinies , d'où le i++ avant le continue sinon le i restera a 3 ( si on execute , la ligne 3 ne sera pas affiché )
    }
 console.log("Ligne : " +i);
 i++;
}