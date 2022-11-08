import React from "react";
import { Link } from "react-router-dom";

import './style.css';

export const Login = () => {

    return(
        <>
        <div className="titulo-login">Faça seu Login</div>

        <form>
            <div className="formulario-login">
                <label>
                    <input type="email" placeholder="Digite seu email:" />
                </label> 
                <label>
                    <input type="senha" placeholder="Digite sua senha:" />
                </label> 

                <Link to={`/Home`}>
                    <button className="botao">Entrar</button>
                </Link>

            </div>
        </form>
        </>
    )
}