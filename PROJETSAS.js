const prompt=require('prompt-sync')()
const candidats=[]
let cont=0;
menu();
function menu(){
    console.log(`
        ================================= 
         Gestion des Élections et Listes 
         Électorales au Maroc
        ================================= 
        1. Ajouter un nouveau candidat 
        2. Ajouter plusieurs candidats à la fois.
        3. Afficher la liste des candidats 
        4. Voter pour un candidat 
        5. Modifier les informations d'un candidat 
        6. Supprimer un candidat 
        7. Rechercher des candidats 
        8. Statistiques de l'élection  
        0. Quitter 
        `)
let choix=Number(prompt("    Votre choix :"));
switch(choix){
    case 1:
        AjouterCandidat();
        break;
    case 2:
        AjouterPlusieursCandidats();
        break;
    case 3:
        AfficherListeCandidats();
        break;
    case 4:
        VoterCandidat();
        break;
    case 5:
        ModifierleCandidat();
        break;
    case 6:
        SupprimerCandidat();
        break;
    case 7:
        RechercherCandidats();
        break;
    case 8:
        Statistiqueselection();
        break;
    case 0:
        break;
    default :
    console.log(`       le choix pas valide entre outro choix
        `);   
}
if(choix!==0){
    menu();
}
}