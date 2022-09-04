const axios = require('axios');
const session = require('express-session');
const faves = []

const characters = async (req, res) => {

    const { data } = await axios.get('https://rickandmortyapi.com/api/character/');

    res.render('characters', { characters: data.results, session: session});
}

const locations = async (req, res) => {
    const { data } = await axios.get('https://rickandmortyapi.com/api/location/');

    res.render('locations', { locations: data.results, session: session });
}

const episodes = async (req, res) => {
    const { data } = await axios.get('https://rickandmortyapi.com/api/episode/');
    res.render('episodes', { episodes: data.results, session: session });
}

const charByID = async (req, res) => {

    let id = req.params.id;

    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);

    res.render('charByID', { character: data, session: session});
}

const locByID = async (req, res) => {

    let id = req.params.id;

    const { data } = await axios.get(`https://rickandmortyapi.com/api/location/${id}`);

    res.render('locByID', { location: data, session: session });
}

const epiByID = async (req, res) => {

    let id = req.params.id;

    const { data } = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);

    res.render('epiByID', { episode: data, session: session });
}

const addToFavorites = (req, res) => {
    if(req.body.faveType == "character") {
        faves.push(req.body)
        session.favorites = faves;
        res.redirect('characters');
    } else if(req.body.faveType == "location") {
        faves.push(req.body)
        session.favorites = faves;
        res.redirect('locations');
    } else if(req.body.faveType == "episode") {
        faves.push(req.body)
        session.favorites = faves;
        res.redirect('episodes')
    };
    console.log(session)
}  

const home = async(req, res) => {
    res.render('index', {session: session});
}

module.exports = {
    home,
    characters,
    locations,
    episodes,
    charByID,
    addToFavorites,
    locByID,
    epiByID
}