const axios = require('axios');

const home = (req, res) => {
    res.render('index');
}

const characters = async (req, res) => {
    const { data } = await axios.get('https://rickandmortyapi.com/api/character/');
    console.log(data.results);
    res.render('characters', { characters: data.results});
}

module.exports = {
    home,
    characters
}