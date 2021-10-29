import React from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios'
import useForm from '../Hook/useForm'
import { useHistory } from 'react-router'

function Login() {

    let history = useHistory();
    const sendData = (data) => {
        axios.post("https://ecomerce-master.herokuapp.com/api/v1/login", data)
        .then((response) => {
            console.log(response.data);
            window.localStorage.setItem("token", response.data.token )
            history.push('/');
        })
        .catch((error)=>{
            alert(error.response.data.message)
        })
    }

    const {input, handleInputChange, handleSubmit} = useForm (sendData,{})

    return (
        <div>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <div className="cointainer">
                    <div className="row justifiy-content-center">

                        <div className="col-md-10">
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input type="email"
                                    name="email"
                                    className="form-control"
                                    value={input.email}                             
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="col-md-10">
                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input type="password"
                                    name="password"
                                    className="form-control"
                                    value={input.password}  
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="col-md-10 text-center">
                                <button type="submit" className="btn btn-dark">Enviar</button>
                        </div>           

                    </div>
                </div>

            </form>
        </div>
       
    )
}

export default Login