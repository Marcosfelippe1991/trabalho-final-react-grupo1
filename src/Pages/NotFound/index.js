import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "./style";

export const NotFound = () => {

    return(
        <Container>
            <h1>Ops... Página não encontrada!</h1>
            <Link to={`/`}>
            <Button>Retornar para Home</Button>
            </Link>
        </Container>
    )
}

