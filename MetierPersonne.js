// gestion des personnes inscrites aux évenements

// liste des évenements
var liste = [];
var id = 0;

function Personnes(nom, prenom, mail,telephone,idEvent){
    this.nom=nom;
    this.prenom=prenom;
    this.mail=mail;
    this.telephone=telephone;
    this.idEvent=idEvent;
}

function Personnes(personnes){
    this.nom=personnes.nom;
    this.prenom=personnes.prenom;
    this.mail=personnes.mail;
    this.telephone=personnes.telephone;
    this.idEvent=personnes.idEvent;
}

//{"nom":"Marvin", "prenom":"bg", "mail":"@gmail.com", "telephone": "010101", "idEvent":"0"}
//quand une personne s'inscrit à un event si cette personne existe déjà on rajoute dans la list l'id de l'event
//sinon on le crée et on lui ajoute le premier id event

var ajouterPersonnes = function(personnes){
    liste[id]=new Personnes(personnes);
    id++;
    return liste[id-1];
}

var listePersonnes=function(){
    return Object.values(liste);
}

exports.ajouterPersonnes=ajouterPersonnes;
exports.listerPersonnes=listePersonnes;

