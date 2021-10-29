import React, {useEffect, useState} from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import protect from '../Utils/protect';

function Item() {

    const [item, setItem] = useState({})

    useEffect(() =>{
        const token = window.localStorage.getItem('token');
        const config = {
            headers: {
                Authorization: `JWT ${token}`
            }
        }
        axios.get("https://ecomerce-master.herokuapp.com/api/v1/item", config)
        .then((response) => {
            setItem(response.data)
        })
        .catch((error)=> {
            alert(error.response.data.message)
        })
    }, []) //si hay cambios en las dependencias

    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <h2>{item.item}</h2>
                        <span>{item.source}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default protect(Item)
