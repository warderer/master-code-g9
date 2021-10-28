import React from 'react'
import Navbar from '../Components/Navbar'

function Signup() {
    return (
        <div>
        <Navbar />
        <form onSubmit="">
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Nombre</label>
                            <input type="text"
                                value=""
                                onChange=""
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
                                value=""
                                onChange=""
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
                                    value=""
                                    onChange=""
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
                                value=""
                                onChange=""
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
                                value=""
                                onChange=""
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