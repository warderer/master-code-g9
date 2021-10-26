LES DEJO EL CÓDIGO BASE DE 
      WithCurrenteUser que pasa a ser -> WithUserId
esto lo hicimos puesto que estamos consumiendo usarios con su ID
      //EN NUESTRO COMPONENTE WithCurrentUser salamente hacemos la lógica
import React, {useState, useEffect} from 'react'
import axios from 'axios';

const WithCurrentUser = ComponentUser => {
    const NewComponent = props =>{
        const [user,setUser] = useState(null);

    //con useEffect podemos inicializar variables o hacer llamadas a las APIs
    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/users/1")
        .then(resp=>{
            setUser(resp.data)
        })

    }, [])//escuchamos las dependencias para saber si hay cambios

    //Por temas de asincronimos a la API usamos un if(!algo)
    if(!user) return "CARGANDO . . ."
        return <ComponentUser {...props}  user={user}/> //pasamos los props de nuestro usuario
    }
   
    return NewComponent
}

export default WithCurrentUser
