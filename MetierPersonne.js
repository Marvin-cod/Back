// gestion des personnes inscrites aux évenements

// liste des évenements
var liste = [];
var id = 0;
function Personnes(nom, prenom, mail,telephone,idEvent,admin){
    this.nom=nom;
    this.prenom=prenom;
    this.mail=mail;
    this.telephone=telephone;
    this.idEvent=idEvent;
    this.admin = admin;

}
function Personnes(nom, prenom, mail,telephone,idEvent,admin){
    this.nom=nom;
    this.prenom=prenom;
    this.mail=mail;
    this.telephone=telephone;
    this.idEvent=idEvent;
    this.admin = admin;
}

function Personnes(personnes){
    this.nom=personnes.nom;
    this.prenom=personnes.prenom;
    this.mail=personnes.mail;
    this.telephone=personnes.telephone;
    this.idEvent=personnes.idEvent;
    this.admin = personnes.admin;
}

//{"nom":"Marvin", "prenom":"bg", "mail":"@gmail.com", "telephone": "010101", "idEvent":"0"}
//quand une personne s'inscrit à un event si cette personne existe déjà on rajoute dans la list l'id de l'event
//sinon on le crée et on lui ajoute le premier id event

var estDoublons = function (listeDeNombre, nombre){

    let TabMot = listeDeNombre.split(" ");
    for (let i = 0; i < TabMot.length; i++){

        if (TabMot[i]===nombre)
        {
            return true;
        }
    }
    return false;

}

var ajouterPersonnes = function(personnes) {
    //parcourir list + comparer email + if == recup index et modif cette personne
    personneDejaAjt = false;

    for (let i = 0; i < liste.length; i++) {
        if (liste[i].mail === personnes.mail) {
            var dejaInscrit = estDoublons(liste[i].idEvent, personnes.idEvent);
            if (dejaInscrit == false) {
                liste[i].idEvent = liste[i].idEvent + " " + personnes.idEvent;
            }
                personneDejaAjt = true;
            }
        }

        if (personneDejaAjt === false) {

            liste[id] = new Personnes(personnes);
            id++;
        }
        personneDejaAjt = false;

        return liste[id - 1];
    }

    var listePersonnes = function () {
        return Object.values(liste);
    }

    exports.ajouterPersonnes = ajouterPersonnes;
    exports.listerPersonnes = listePersonnes;

