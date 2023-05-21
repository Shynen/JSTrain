// Voici un résumé des principales fonctionnalités liées aux tableaux, que nous avons vu jusqu'à présent.

// Pour ces exemples, nous prendrons en compte le fait que nous avons ce tableau :

let fruits = ['pomme', 'banane', 'poire', 'fraise'] ;

// Ainsi, voici les principales fonctionnalités :

fruits.length //: retourne le nombre d'éléments dans le tableau (ici retourne 4)

fruits[0] //: sélectionne le premier élément

fruits[length - 1] // : sélectionne le dernier élément

fruits.push('pamplemousse') //: ajoute un élément à la fin du tableau

fruits.unshift('pamplemousse') //: ajoute un élément au début du tableau

fruits.pop() //: supprime le dernier élément

fruits.shift() //: supprime le premier élément

fruits.indexOf('banane') //: retourne l'index d'un élément

fruits.join() //: concatène les éléments dans une chaîne de caractères avec virgules, mais il est possible de spécifier un autre séparateur dans les paranthèses

fruits.slice() //: crée une copie du tableau (à associer à une autre variable donc)

fruits.splice([début], [nbASupprimer], [élément(s)]) //: retire, remplace ou ajoute des éléments.

                                                    // Début : l'index à partir duquel commencer le changement, si négatif, part de la fin du tableau

                                                    // nbASupprimer : un entier indiquant le nombre d'éléments à retirer ou remplacer

                                                    // Element(s) : les éléments à ajouter à partir du début précisé. Si aucun élément n'est spécifié, alors n'en ajoutera pas.