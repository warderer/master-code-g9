import axios from 'axios';

const URI = 'https://pokeapi.co/api/v2/pokemon/';

export default function handler(req, res) {
    const { nombre } = req.query; // req.query tiene la data del parametro
    axios.get(URI + nombre)
    .then((response) =>{
        res.statusCode = 200;
        res.setHeader('Context-Type', 'application/json');
        return res.end(JSON.stringify(response.data));
    }).catch((err) =>{
        return res.end(JSON.stringify({"Error": err}))
    })
}