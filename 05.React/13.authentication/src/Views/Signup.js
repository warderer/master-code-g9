import React from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios'
import useForm from '../Hook/useForm'
import { useHistory } from 'react-router'


function Signup() {
    let history = useHistory();
    const sendData = (data) => {
        if(data.password === data.password_confirm){
         delete data.password_confirm
            axios.post("https://ecomerce-master.herokuapp.com/api/v1/signup", data)
            .then((response) => {
                if(response.status === 201){
                    //Cuando se crea el usuario
                    console.log(response.status)
                    history.push('/login')
                }
            }).catch((error)=>{
                alert(error.response.data)
            })
        }else{
            alert("Password no coinciden")
        }
        console.log(data)
    }

  const {input, handleInputChange, handleSubmit} = useForm (sendData,{})



    return (
        <div>
        <Navbar />
        <form onSubmit={handleSubmit}>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Nombre</label>
                            <input type="text"
                                value={input.first_name}
                                onChange={handleInputChange}
                                className="form-control"
                                name="first_name"
                                id="first_name"
                            />
                        </div>
                    </div>

                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Apellidos</label>
                            <input type="text" 
                                value={input.last_name}
                                onChange={handleInputChange}
                                className="form-control" 
                                name="last_name" 
                                id="last_name" 
                            />
                        </div>
                    </div>

                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                                <input type="email" 
                                    value={input.email}
                                    onChange={handleInputChange}
                                    className="form-control" 
                                    name="email" 
                                    id="email" 
                                />
                        </div>
                    </div>

                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password"
                                value={input.password}
                                onChange={handleInputChange}
                                className="form-control"
                                name="password"
                                id="password" 
                            />
                        </div>
                    </div>

                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Confirmar password</label>
                            <input type="password" 
                                value={input.password_confirm}
                                onChange={handleInputChange}
                                className="form-control" 
                                name="password_confirm" 
                                id="password_confirm" 
                            />
                        </div>
                    </div>

                    <div className="col-md-12 text-center">
                        <button type="submit" className="btn btn-dark">Enviar</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
    )
}

export default Signup