const express = require('express');
const app = express();

app.use(express.json());

//Settings
app.set('view engine', 'ejs');

//Middlewares

//Importaciones
const { generalPokemon, generalPokemonid } = require('./sevice/apiPokemon');



//Rutes
app.get('/', async (req, res) => {
    //const data = [{name:"Victor"}, {name:"Edna"}, {name:"Esteban"}]
    const {data:{results}} = await generalPokemon();
    
    res.render('index.ejs', {poke : results});
});


app.get('/pokemon/:id', async (req, res) => {
    const {data:{sprites: {other}}} = await generalPokemonid(req.params.id);
    console.log(other);
    res.render('imagen.ejs', {imagenPokemon : other});
    
});



app.listen(3000, () => {
    console.log("Sever on port 3000")
})