// gestion des évenements

// liste des évenements
var liste = [];
var id = 0;


// Constructeur TOUS membres
function Evenement(id, acronyme, nom_event, lieu_event, description, date_ouverture, date_cloture, nombre_max) {
    this.id = id;
    this.acronyme = acronyme;
    this.nom_event = nom_event;
    this.lieu_event = lieu_event;
    this.description = description;
    this.date_ouverture = date_ouverture;
    this.date_cloture = date_cloture;
    this.nombre_max = nombre_max;
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
    this.nombre_max = evenement.nombre_max;
}

// METHODES METIER

var ajouter = function (evenement) {
    //evenement.id = id;
    evenement.id = generateId();
    //liste[id] = new Evenement(evenement);
    liste.push(new Evenement(evenement));
    //id++;
    return evenement;
}

function generateId() {
    return id++;
}


// Get 1 personne
var getEvenement = function (i) {
    itemp = Number(i);
    for (let j = 0; j < liste.length; j++) {
        if (liste[j].id === itemp) {
            return liste[j];
        }
    }
}

// lister les évenements
var lister = function () {
    return Object.values(liste);
}

//suppression
var supprimer = function (ide) {
    idtemp = Number(ide);
    for (let i = 0; i < liste.length; i++) {
        if (liste[i].id === idtemp) {
            liste.splice(i, 1);
            break;
        }
    }
}

exports.ajouter = ajouter;
exports.getEvenement = getEvenement;
exports.lister = lister;
exports.supprimer = supprimer;

