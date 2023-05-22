var express = require('express');
var bodyparser = require("body-parser");
var metier = require('./MetierEvenement');
var Metierpers = require("./MetierPersonne");
var app = express();


app.use(bodyparser.json());

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    next();
});


app.post('/api/evenements', function (req, res) {

    var evenement = req.body;

    //Métier
    console.log(evenement);
    var objres = metier.ajouter(evenement);
    //et forger le résultat au clients
    if ((typeof objres === "undefined") || (typeof objres === {})) {
        res.status(400); //code 400 car erreur coté client
    } else res.status(201).json(objres);
})

//Lister
app.get('/api/evenements', function (req, res) {
    res.status(200).json(metier.lister());
})

//Recherchern
app.get('/api/evenements/:id', function (req, res) {
    // recup les params
    var id = req.params.id;
    // coté métier
    var obj = metier.getEvenement(id);
    //forge mle résulatt aux clients
    if ((typeof obj === "undefined") || (typeof obj === {}))
        res.status(404).json({}); //code 400 car erreur coté client
    else res.status(201).json(obj);

})

app.delete('/api/evenements/:id', function (req, res) {
    //recup param
    var id = req.params.id;
    //coté metier
    var objs = metier.supprimer(id);
    //on forge res
    if ((typeof objs === "undefined") || (typeof objs === {}))
        res.status(404).json({}); //code 400 car erreur coté client
    else res.status(201).json(objs);
})


app.post("/api/personnes", function (req, res) {
    var pers = req.body;
    var persres = Metierpers.ajouterPersonnes(pers);

    if ((typeof persres === "undefined") || (persres === {})) {
        res.status(400); //code 400 car erreur coté client
    } else res.status(201).json(persres);

})

app.get('/api/personnes', function (req, res) {
    res.status(200).json(Metierpers.listerPersonnes());
})

app.get('/api/personnes/:id', function (req, res) {
    //recup les params
    var id = req.params.id;
    // coté métier
    var obj = Metierpers.listerPersonsEvent(id);
    //forge mle résulatt aux clients
    if ((typeof obj === "undefined") || (typeof obj === {}))
        res.status(404).json({}); //code 400 car erreur coté client
    else res.status(201).json(obj);
})
app.delete('/api/personnes/:adressemail/:id2', function (req, res) {
    //deux params ( id2 = id event)
    //recup param
    const id1 = req.params.adressemail;
    const id2 = req.params.id2;
    //coté metier
    var objs = Metierpers.supprimerPersonnesEvent(id1, id2)//nom focntion
    //on forge res
    if ((typeof objs === "undefined") || (typeof objs === {}))
        res.status(404).json({}); //code 400 car erreur coté client
    else res.status(201).json(objs);
})


app.listen(3000, function () {
    console.log(('Server running...'))
})