import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Carrinho } from "../Pages/Carrinho";

import Header from '../Components/Header';
import SubHeader from '../Components/SubHeader';
import Footer from "../Components/Footer"

//import { CategoriaBasico } from "../Pages/CategoriaBasico";
//import { CategoriaFitness } from "../Pages/CategoriaFitness";
//import { CategoriaTematico } from "../Pages/CategoriaTematico";
import { NotFound } from "../Pages/NotFound";

export const Root = () => {

        return (
            <>
                
                    <BrowserRouter>
                    <Header/>
                <SubHeader />
                        <Routes>
                            <Route path="/" element={ <Home/>}/>
                            <Route path="/login" element={ <Login/>}/>              
                            <Route path="/carrinho" element={ <Carrinho/>}/>
                            {/* <Route path="/categoriabasico" element={ <CategoriaBasico/>}/>
                            <Route path="/categoriafitness" element={ <CategoriaFitness/>}/>
                            <Route path="/categoriatematico" element={ <CategoriaTematico/>}/> */}
                            <Route path="*" element={ <NotFound/>}/>
                        </Routes>
                        <Footer />
                    </BrowserRouter>
                
            </>
        )
}