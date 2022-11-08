import React, { useEffect, useState, useContext } from "react";
import { Button, Table } from "react-bootstrap";
import { api } from "../../../src/Services";
import { DataContext } from "../../Context/data";
import { Link } from "react-router-dom";
export const Carrinho = () => {
 
  const [valorTotal, setValorTotal] = useState(0);
  const { lista, adicionarLista, aumentarItem, diminuirItem, excluirItem } =
    useContext(DataContext);

 
  const handlePrice = () => {
    let valor = 0;
    lista.map(
      (item) => (valor += (item.quantidade * item.valorUnitario))
    );
    setValorTotal(valor);
  };

  useEffect(() => {
  
    handlePrice();
  },[lista]);

  console.log(lista);


  return (
    <>        
         <div>
            <h3>Seu Carrinho</h3>
          </div>
          <table>
              <thead>
                <tr>
                  <th>Codigo </th>
                  <th>Produto</th>
                  <th>Valor</th>
                  <th>Quantidade</th>
                  <th>Subtotal</th>                  
                  <th>Remover</th>                  
                </tr>
              </thead>
              
               <tbody>
                 {lista.map((item) => ( 
                  <tr>
                    <td>{item.id}</td>
                    <td> {item.nome}</td>
                    <td>{item.valorUnitario}</td>
                    <td>
                      <button onClick={() => diminuirItem(item)}>-</button>
                     <span> {item.quantidade >0 ? item.quantidade : excluirItem(item)}</span> 
                      <button onClick={() => aumentarItem(item)}>+</button>
                    </td>
                    <td> {(item.valorUnitario * item.quantidade).toFixed(2)}</td>
                    <td> <Button onClick={() => excluirItem(item)}>Excluir</Button></td>
                  </tr>
                  ))}
              </tbody>    
            </table>
                    <div>
                      <label> Valor Total: {valorTotal.toFixed(2)}</label>
                      <br></br>
                      <Link to={`/`}>
                        <Button>Voltar para home</Button>
                        </Link>
                    </div>                   
    </>
  )
}

// Método de post do carrinho
// 
// <Button onClick={() => {handlePost(item)}}>Comprar</Button>
// 
