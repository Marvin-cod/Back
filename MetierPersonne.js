
// gestion des personnes inscrites aux évenements

// liste des évenements
var liste = [];
var id = 0;
var listeParticipantsEvent = [];

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
        //[{"nom":"t","prenom":"Nico","mail":"ni@gmail.com","idEvent":"1"},{"nom":"test","prenom":"test","mail":"test","telephone":"test","idEvent":"1 2"},{"nom":"f","prenom":"f","mail":"f","telephone":"f","idEvent":"2"}]
        //[{"nom":"t","prenom":"Nico","mail":"ni@gmail.com","idEvent":"1"},{"nom":"test","prenom":"test","mail":"test","telephone":"test","idEvent":"1 2"},{"nom":"f","prenom":"f","mail":"f","telephone":"f","idEvent":"2"}]
        if (liste[i].mail === personnes.mail) {
            var dejaInscrit = estDoublons(liste[i].idEvent, personnes.idEvent);
            if (dejaInscrit === false) {
                if (liste[i].idEvent.length === 0){
                    liste[i].idEvent = personnes.idEvent;
                }
                //rajouté le if else
                    //avant juste le contenu du elseprésent dans le if(===false)
                else{
                liste[i].idEvent = liste[i].idEvent + " " + personnes.idEvent;
                }
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

    exports.listerPersonsEvent = function(idEvent){
    listeParticipantsEvent = [];
    var compt = 0;
    for (let pers = 0; pers < liste.length; pers++){
        if (estDoublons(liste[pers].idEvent, idEvent)){
            listeParticipantsEvent[compt] = liste[pers];
            compt++;
        }
    }
    return listeParticipantsEvent;
    }
    exports.supprimerPersonnesEvent = function(adresseMail, id2){//deux id (id1 = id personnes, id2 = id event)
    //supprimer un event à notre personne
        //convertir id2 int en string
        var id2String = String(id2);
        for (let pers = 0; pers < liste.length; pers++){
            if (liste[pers].mail === adresseMail){
                if(liste[pers].idEvent.split(' ').length === 1){
                    liste.splice(pers,1);
                    id--;
                    return liste;
                }
                var table = liste[pers].idEvent.split(" ");
                var index = table.indexOf(id2String);
                table.splice(index, 1);
                var ideventtemp = table.join(' ');
                liste[pers].idEvent=ideventtemp;
            }
        }
        return liste;
}



    exports.ajouterPersonnes = ajouterPersonnes;
    exports.listerPersonnes = listePersonnes;

