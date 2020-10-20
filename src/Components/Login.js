import React, { Component } from 'react'
import imagen from "../coffee.jpg"


class Login extends Component{
    
    constructor(){
        super()
        this.state = {
            page:"Login",
            email:"",
            password:""
        }
    }

    render(){
        return (
            <body className="bg-light w-100 h-100">
                    <section className="Form my-4 mx-5">
                        <div className="container">
                            <div className="row no-gutters bg-white shadow-lg rounded-lg">
                                <div className="col-lg-5">
                                    <img src={imagen} className="img-fluid rounded-left"></img>
                                </div>
                                <div className="col-lg-7 px-5">
                                    <h1 className="font-weight-bold py-3 mt-2 d-flex justify-content-lg-start">Café</h1>
                                    <h4 className="py-3 d-flex justify-content-lg-start">Ingresa a tu cuenta</h4>
                                    <form>
                                        <div className="form-row">
                                            <div className="col-lg-7">
                                                <input type="email" placeholder="Ingrese su dirección de correo" className="form-control my-2 p-4"></input>
                                            </div>       
                                        </div>
                                        <div className="form-row">
                                            <div className="col-lg-7">
                                                <input type="password" placeholder="Ingrese su contraseña" className="form-control my-2 p-4"></input>
                                            </div>       
                                        </div>
                                        <div className="form-row">
                                            <div className="col-lg-7">
                                            <button type="submit" className="btn btn-success form-control mb-5">Ingresa</button>
                                            </div>       
                                        </div>
                                        <a className="d-flex justify-content-start" href="#">¿Olvido su contraseña?</a>
                                        <p className="d-flex justify-content-start">¿No eres un usuario aún?<a href="#"> Registrate aquí</a></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
            </body>
        )
    }


}

export default Login;