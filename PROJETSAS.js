const prompt=require('prompt-sync')();
const candidats=[
    {
    cin: "LM345678",
    nom: "Fassi",
    prenom: "Hajar",
    partiPolitique: "Independant",
    age: 37,
    electeurs: [
      "EL000061",
      "EL000062",
      "EL000063",
      "EL000064",
      "EL000065",
      "EL000066",
      "EL000067",
      "EL000068",
      "EL000069",
      "EL000070",
      "EL000071",
      "EL000072"
    ]
  },
  {
    cin: "AB23456",
    nom: "ANAS",
    prenom: "Soufiane",
    partiPolitique: "Independant",
    age: 40,
    electeurs: [
      "EL000001",
      "EL000002",
      "EL000003",
      "EL000004"
    ]
  },
  {
    cin: "KL678901",
    nom: "Alaoui",
    prenom: "Yassine",
    partiPolitique: "Parti de la Justice",
    age: 45,
    electeurs: [
      "EL000005",
      "EL000006",
      "EL000007",
      "EL000008",
      "EL000009"
    ]
  },
  {
    cin: "UV123789",
    nom: "El Amrani",
    prenom: "Sara",
    partiPolitique: "Independant",
    age: 35,
    electeurs: [
      "EL000010",
      "EL000011",
      "EL000012",
      "EL000013",
      "EL000014",
      "EL000015"
    ]
  },
  {
    cin: "CC678234",
    nom: "Benali",
    prenom: "Omar",
    partiPolitique: "Parti du Progrès",
    age: 52,
    electeurs: [
      "EL000016",
      "EL000017",
      "EL000018",
      "EL000019",
      "EL000020",
      "EL000021",
      "EL000022"
    ]
  },
  {
    cin: "DE345678",
    nom: "El Mansouri",
    prenom: "Nadia",
    partiPolitique: "Independant",
    age: 38,
    electeurs: [
      "EL000023",
      "EL000024",
      "EL000025",
      "EL000026",
      "EL000027",
      "EL000028",
      "EL000029",
      "EL000030",
      "EL000085"
    ]
  },
  {
    cin: "FG789012",
    nom: "Tazi",
    prenom: "Karim",
    partiPolitique: "Parti de l'Avenir",
    age: 48,
    electeurs: [
      "EL000031",
      "EL000032",
      "EL000033",
      "EL000034",
      "EL000035",
      "EL000036",
      "EL000037",
      "EL000038",
      "EL000039"
    ]
  },
  {
    cin: "HI234567",
    nom: "Bennani",
    prenom: "Imane",
    partiPolitique: "Parti Social",
    age: 42,
    electeurs: [
      "EL000040",
      "EL000041",
      "EL000042",
      "EL000043",
      "EL000044",
      "EL000045",
      "EL000046",
      "EL000047",
      "EL000048",
      "EL000049"
    ]
  },
  {
    cin: "JK890123",
    nom: "Chakir",
    prenom: "Mehdi",
    partiPolitique: "Parti National",
    age: 55,
    electeurs: [
      "EL000050",
      "EL000051",
      "EL000052",
      "EL000053",
      "EL000054",
      "EL000055",
      "EL000056",
      "EL000057",
      "EL000058",
      "EL000059",
      "EL000060"
    ]
  },
  
  {
    cin: "NO901234",
    nom: "Rami",
    prenom: "Adil",
    partiPolitique: "Parti du Développement",
    age: 50,
    electeurs: [
      "EL000073",
      "EL000074",
      "EL000075",
      "EL000076",
      "EL000077",
      "EL000078",
      "EL000079",
      "EL000080",
      "EL000081",
      "EL000082",
      "EL000083",
      "EL000084"
    ]
  }
];
let cont=totalElements(candidats);
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
        9. Quitter 
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
        case 9:
            console.log(" Au revoir ");
            break;
        default :
            console.log(`       le choix pas valide , entrez autre choix
                `);
        break;   
}
if(choix!==9){
    menu();
}
}
function AjouterCandidat(){
    let cont1=0;
    let cin=prompt("entre le cin   : ");
    for(let i=0;i<cont;i++){
        if(cin==candidats[i].cin){
            console.log("le candidant est  dija inscrit ");
            cont1++;
        }
    }if(cont1==0){
    let nom=prompt("Entrez le nom de candidant   : ");
    let prenom=prompt("Entrez le prenom de candidant   : ");
    let partiPolitique=prompt("Entrez le nom du parti ; ")||"Independant"
    let age=prompt("entre le age  : ");
    while(age!=Number(age)||age<=0){
        console.log(`le nombre de age pas valide  `);
        age=prompt(" Entrez le age : ");
    }
    cont++;
    let candidat = { 
        cin : cin, 
        nom : nom, 
        prenom :prenom, 
        partiPolitique : partiPolitique, 
        age: age,         
        electeurs: [] 
    }; 
    candidats.push(candidat);
    console.log(`
        ✔ le condidants et ajouter
            `);
    }
}
function AjouterPlusieursCandidats(){
    let pluseur;
    do{
        console.log(`
    Entrez le nombre de candidant pou ajour 
    Ou saisissez 0 por revenir au menu : `);
        pluseur=prompt("");
    }while(pluseur!=Number(pluseur))
    for(let i=0;i<pluseur;i++){   
        console.log("__le condidat : ",i+1,"__");
        AjouterCandidat();
    }
}
function AfficherListeCandidats(){
    if(cont<=0){
        console.log(`  ✖ Il n'ya aucun candidat ajoute les condidat;`);
        return ;  
    }
    console.log(`
        1. affichage simple 
        2. trier les candidats par nombre de votes
        3. afficher uniquement les candidats d'un parti politique spécifique.
         :`);
    let choix=Number(prompt(" Votre choix : "));
    switch(choix){
        case 1 :
             console.log("               ____ liste candidats _____")
            for(let i=0;i<cont;i++){
                AficherCondidat(i);
            }
            break;
        case 2 :
            trierVote();
                     console.log("              ____ liste candidats _____")
            for(let i=0;i<cont; i++){
                AficherCondidat(i);
            }
            break;
        case 3 :
            let parti=prompt("Entrez le nom de parti : ")
            let trouve=true;
            for(let i=0;i<cont;i++){
                if(candidats[i].partiPolitique==parti){
                    AficherCondidat(i);
                    trouve=false;
                }
            }if(trouve){
                console.log("      ✖ Il n'y a pas de candidat dans ce parti ");
            }
            break;
        default :
        console.log("✖ choix pas valide ");
    }
}
function VoterCandidat(){
    if(cont<=0){
        console.log(`  ✖ il nya aucun candidat ajoute les condidat;`);
        return ;  
    }
    let cinElecteur=prompt("Entrez le cin  :");
    for(let i=0;i<cont;i++){
        for(let j=0;j<totalElements(candidats[i].electeurs);j++){
            if(candidats[i].electeurs[j]==cinElecteur){
                console.log("✖ vous avez deja vote , vous ne pouvez pas voter a nouveau");
                return ;
            }
        }
    }
    let cinCandidat=prompt("Entrez le cin de candidat :");
    for(let i=0;i<cont;i++){
        if(candidats[i].cin==cinCandidat){
            candidats[i].electeurs.push(cinElecteur);
            console.log("✔ Le vote enregistre");
            return ;
        }
    }
    console.log("✖ Le candidat introvable ");
    
}
function ModifierleCandidat(){
    if(cont<=0){
        console.log(` ✖ il nya aucun candidat ajoute les condidat;`);
        return ;  
    }
    let cont1=0;
    let cin=prompt("Entrez le cin du candidat pour modifier : ");
    for(let i=0;i<cont;i++){
        if(candidats[i].cin==cin){
            cont1++;
            candidats[i].partiPolitique=prompt("Entrez la nouvel parti : ");
            candidats[i].age=prompt("Entrez nouvel age : ");
            while(candidats[i].age!=Number(candidats[i].age)||candidats[i].age<=0){
                console.log(`✖ Le nombre de age pas valide`);
                candidats[i].age=prompt(`Entrez le age : `);
            }
            console.log(" ✔ Le parti politique et age de candidat modifier");
            return ;
        }
    }
    if(cont1==0){
        console.log(`  ✖ Le candidat introvable `);
    }
}
function SupprimerCandidat(){
    if(cont<=0){
        console.log(`  ✖ Il n'ya aucun candidat ajoute les condidat;`);
        return ;  
    }
    let cin=prompt("Entrez le cin du candidat : ");
    let verevie=0;
    let nouveauCandidats=[];
    for(let i=0;i<cont;i++){
        if(candidats[i].cin==cin){
            verevie=1;
        }else{
            nouveauCandidats.push(candidats[i]);
        }
    }
    if(verevie==1){
        cont--;
        candidats.length=0;
        for(let i=0;i<cont;i++){
            candidats.push(nouveauCandidats[i]);
        }
        console.log("✔ Le candidats et suprimer ");
    }else{
        console.log(` ✖ Le candidat introvable `);
    }
}
function RechercherCandidats(){
    if(cont<=0){
        console.log(`  ✖ Il n'ya aucun candidat ajoute les condidat;`);
        return ;  
    }
    let trouve=true;
    let nom=prompt("Entrez le nom du candidat : ");
    for(let i=0;i<cont;i++){
        if(candidats[i].nom==nom){
            trouve=false;
            AficherCondidat(i);
        }
    }
    if(trouve){
        console.log("   ✖ Le nom que entre nexeste pas sur la liste de candidat");
    }
}
function Statistiqueselection(){
    if(cont<=0){
        console.log(`  ✖ Il n'ya aucun candidat ajoute les condidat;`);
        return ;  
    }
    let totalVote=0;
    for(let i=0;i<cont;i++){
        totalVote+=totalElements(candidats[i].electeurs);
    }
    console.log(` 
        =======Les statistiques generale====

        Le nombre totale de candidat est       :  ${cont}
        Le nombre totale de electour qui vete  :  ${totalVote}`);
        
    trierVote();
    if(cont>0){
        console.log(`
        ----Les trois premiers Candidats :-----`);
    }
    for(let i=0;i<3&&cont-i>0;i++){
        AficherCondidat(i)    
    }
    let nombreCandidatparparti={};
    for(let cle of candidats){
        if(nombreCandidatparparti[cle.partiPolitique]){
            nombreCandidatparparti[cle.partiPolitique]+=1;
        }else{
            nombreCandidatparparti[cle.partiPolitique]=1;
        }

    }
    console.log(`      ----Le candidats par parti politique----
    [Le nom parti ]-----[le nombre de candidats]`)
    for(let cle in nombreCandidatparparti){
            console.log("     ",cle,"    :", nombreCandidatparparti[cle]);
    }
    let partiPolitique={};
    for(let cle of candidats){
        if(partiPolitique[cle.partiPolitique]){
            partiPolitique[cle.partiPolitique]+=totalElements(cle.electeurs);
        }else{
            partiPolitique[cle.partiPolitique]=totalElements(cle.electeurs);
        }

    }
    console.log(`      ----Le votr par parti politique----
    [Le nom parti ]-----[le nombre de vote]`)
    for(let cle in partiPolitique){
            console.log("     ",cle,"    :", partiPolitique[cle]);
    }
}
function AficherCondidat(n){
    console.log(`
                    __le condidat #${n+1}__
                    nom    : ${candidats[n].nom}
                    prenom : ${candidats[n].prenom}
                    cin    : ${candidats[n].cin}
                    parti  : ${candidats[n].partiPolitique}
                    age    : ${candidats[n].age}
                    votes  : ${totalElements(candidats[n].electeurs)}
                        `);
}
function trierVote(){
    let reserv;
    for(let i=0;i<cont-1;i++){
        for(let j=0;j<cont-1-i;j++){
            if(totalElements(candidats[j].electeurs)<totalElements(candidats[j+1].electeurs)){
                reserv=candidats[j];
                candidats[j]=candidats[j+1];
                candidats[j+1]=reserv;
            }
        }
    }
}
function totalElements(tablou){
    let comtour=0;
    for(let i=0;tablou[i]!=undefined;i++){
        comtour++;
    }
    return comtour ;
}
