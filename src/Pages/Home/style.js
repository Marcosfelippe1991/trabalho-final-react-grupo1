import styled from "styled-components";

export const Button = styled.button `

header {
    position: relative;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 9;
    height: 110px;

    background-color: rgb(0, 0, 0);
    font-size: 20px;
    color: white;
}

header .barra-navegacao {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 55rem;


    height: 60px;
    width: 60px;
    padding: 0 5%;
}

header #logo-imagem {
    margin-top: 55px;
    width: 160px;
}

header .carrinho{
    height: 35px;
    margin-top: 68px;
    filter: grayscale(1);

}

header .carrinho {
    width: 2.1rem;
    height: 2.1rem;
    z-index: 9;
}

header .carrinho:hover {
    filter: invert(50%);
}

header .links-navegacao {
    display: flex;
    align-items: flex-end;
    gap: 2rem;
}


header .bem-vindo-login {
    z-index: 3;
    font-size: 1.25rem;
    margin-bottom: 8px;
}

header .bem-vindo-login a {
    white-space: nowrap;
    color: whitesmoke;
}

header .bem-vindo-login a:hover {
    color: rgb(173, 173, 173)
}

header .bem-vindo-login a.minha-conta {
    font-size: 1rem;
}

`






// import styled from "styled-components";

// export const Button = styled.button `
//     cursor: pointer;
//     background: transparent;
//     font-size: 1rem;
//     color: #696969;
//     border: 2px solid #696969;
//     border-radius: 0.4rem;
//     margin: 0 1rem;
//     padding: 0.25rem 1rem;
//     transition: 0.5s all ease-out;
//     &:hover{
//         background-color: #696969;
//         color: #fff;
//     }
// ` 
// export const Container = styled.div `
//     text-align: center;
//     align-items: center;
//     justify-content: center;
//     background: #f5f5dc;
    
  
      
// `