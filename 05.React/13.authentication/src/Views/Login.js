import React from 'react'
import Navbar from '../Components/Navbar'


function Login() {
    return (
        <div>
            <Navbar />
            <form onSubmit="">
                <div className="cointainer">
                    <div className="row justifiy-content-center">

                        <div className="col-md-10">
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input type="email"
                                    name="email"
                                    className="form-control"
                                    value=""                              
                                    onChange=""
                                />
                            </div>
                        </div>

                        <div className="col-md-10">
                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input type="password"
                                    name="password"
                                    className="form-control"
                                    value=""
                                    onChange=""
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