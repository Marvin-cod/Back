// gestion des évenements

// liste des évenements
var liste = [];
var id = 0;

// Constructeur TOUS membres
function Evenement(id,acronyme,nom_event,lieu_event,description,date_ouverture, date_cloture,nombre_max) {
    this.id = id;
    this.acronyme = acronyme;
    this.nom_event = nom_event;
    this.lieu_event = lieu_event;
    this.description = description;
    this.date_ouverture = date_ouverture;
    this.date_cloture = date_cloture;
    this.nombre_max=nombre_max;
}


// Constructeur avec structure
function Evenement(evenement) {
    this.id = evenement.id;
    this.acronyme = evenement.acronyme;
    this.nom_event = evenement.nom_event;
    this.lieu_event = evenement.lieu_event
    this.description = evenement.description;
    this.date_ouverture = evenement.date_ouverture;
    this.date_cloture = evenement.date_cloture;
    this.nombre_max=evenement.nombre_max;
}

// METHODES METIER

// Ajout
var ajouter = function(evenement) {
    evenement.id = id;
    liste[id] = new Evenement(evenement);
    id++;
    return liste[id-1];
}


// Get 1 personne
var getEvenement = function (i) {
    if (typeof liste[i] === 'undefined') return {};
    else return liste[i];
}

// lister les évenements
var lister = function () {
    return Object.values(liste);
}

//suppression
var supprimer = function(id){
    //supprimer l'objet dans la liste
    var suppresion = liste.splice(id, 1); // le premier est l'index le second et combien on en supprime soit 1 seul
    id--;
    return suppresion;
}

exports.ajouter = ajouter;
exports.getEvenement = getEvenement;
exports.lister = lister;
exports.supprimer = supprimer;

