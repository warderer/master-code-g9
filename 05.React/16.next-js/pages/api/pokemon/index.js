import axios from 'axios';

const URI = 'https://pokeapi.co/api/v2/pokemon?limit=10';

export default function handler(req, res) {
    axios.get(URI)
    .then((response) =>{
        res.statusCode = 200;
        res.setHeader('Context-Type', 'application/json');
        return res.end(JSON.stringify(response.data));
    }).catch((err) =>{
        return res.end(JSON.stringify({"Error": err}))
    })
}