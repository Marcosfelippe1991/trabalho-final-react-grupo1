import React, { useState, useEffect } from "react";
import { api } from "../../Services";

import MeuCard from "../../Components/MeuCard";
import { Col, Container, Row } from "react-bootstrap";






export const Home = () => {

    const[produtos, setProdutos] = useState([])
    // const{ lista, adicionarLista }= useContext(DataContext)


    const getProdutos= () => {
      api.get("/produtos").then((res)=>{
        setProdutos(res.data.content)        
      })
    } 



    useEffect(() =>{
        getProdutos()
      })
    

    return(      
        <div>
        
                <Container>
                    <Row xs={1} md={2} lg={4}>
                        {produtos.map((produto) => (
                            <MeuCard

                                produto={produto}
                            />
                        ))}
                    </Row>
                </Container>
                
        
        </div>
    


    )
}