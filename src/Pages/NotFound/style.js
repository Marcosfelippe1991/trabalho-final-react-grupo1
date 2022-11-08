import styled from "styled-components";

export const Button = styled.button `
    cursor: pointer;
    background: transparent;
    font-size: 1.2rem;
    color: #000;
    border: 0.125rem solid #000;
    border-radius: 0.4rem;
    margin: 1rem;
    padding: 0.8rem 1rem;
    transition: 0.5s all ease-out;
    &:hover{
        background-color: #696969;
        color: #fff;
    }
` 
export const Container = styled.div `
    text-align: center;
    flex-wrap: wrap;
    justify-content: center;
    background: #f1f1f1;
    border: 0.125rem solid #000;
    border-radius: 0.8rem;
    margin: 13rem 10rem;
    padding: 1.5rem 1rem;
      
`