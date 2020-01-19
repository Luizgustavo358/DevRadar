const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');


// index, show, store, update, destroy

module.exports = {
    // Mostra os devs cadastrados
    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },

    // Cria um Dev
    async store(request, response) {
        // requisicao
        const { github_username, techs, latitude, longitude } = request.body;
    
        let dev = await Dev.findOne({ github_username });

        if(!dev) {
            // chamada API do github
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
            const { name = login, avatar_url, bio } = apiResponse.data;
    
            const techsArray = parseStringAsArray(techs);
    
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            };
    
            // criando o Dev
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });
        }        
    
        return response.json(dev);
    },

    // TODO
    // Atualiza um usuario
    async update() {

    },

    // TODO
    // Exclui o usuario
    async destroy() {

    }
};