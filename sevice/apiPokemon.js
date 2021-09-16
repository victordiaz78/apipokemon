const axios = require('axios');

async function generalPokemon(){
    try{
        const datos = await axios.get('https://pokeapi.co/api/v2/pokemon');
        return datos;
    }catch(err){
        console.log(err);
    }
}

async function generalPokemonid(nombre){
    try{
        const datos = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        return datos;
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    generalPokemon,
    generalPokemonid

}