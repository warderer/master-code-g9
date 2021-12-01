const {Router} = require ('express');
const router = Router() //ejecutamos router
const _ = require('underscore')

// el usuario vera todas las pelis que tengamos

const movies = require ('../sample.json')
// console.log(movies)
router.get('/', (req,res) => {
    res.json(movies)
})

router.post('/', (req,res) => {
    const {title, director, year, rating} = req.body //aquí recibimos los datos 
    console.log(req.body)

    //comprobamos que los datos existan
    if(title && director && year && rating){
        const id = movies.length + 1;
        const newMovie = {...req.body, id} // pasamos todo el request de body en un nuevo objeto
    //    console.log(newMovie)
        movies.push(newMovie)
        // res.json('saved')
        res.json(newMovie)
    }else{
       res.status(500).json({error: 'THERE WAS AN ERROR'}) 
    }
    // res.send('recived')
    res.send('movies')
})

    // :id -> le pasamos un parametro
router.delete('/:id' , (req,res) => {
    const {id} = req.params
   // each recorre el arreglo, que recibe una película y un indice (movie,i)
    _.each(movies, (movie, i) =>{
        if(movie.id == id){
            //desde mi arreglo de movies, recorremos con su método splice 
            movies.splice(i,1)
        }
    })
    res.send('deleted')
})


module.exports = router