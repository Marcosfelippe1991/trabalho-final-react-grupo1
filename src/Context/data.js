import React,{useState} from "react";


export const DataContext = React.createContext(null)


export const Data = (props) => {

    const[lista,setLista] = useState([

    ])

    const adicionarLista = (produto) => {
        const listaProdutos = [...lista];
        const item = listaProdutos.find((p) => p.id === produto.idProduto);
        if (!item) {

          listaProdutos.push({
            id: produto.idProduto,
            imagemUrl: produto.imagemUrl,
            nome: produto.nome,
            valorUnitario: produto.valorUnitario,
            descricao: produto.descricao,
            quantidade: 1,
            qtdEstoque: produto.qtdEstoque,


          });
        } 

        setLista(listaProdutos);

      }


      const aumentarItem = (produto) =>{
        const listaProdutos = [...lista];
        const item = listaProdutos.find((p) => p.id === produto.id);

        if ((item) && !(item.quantidade === item.qtdEstoque))  {
          
          item.quantidade = item.quantidade + 1;
          setLista(listaProdutos);

        }
       }

       const diminuirItem = (produto) =>{
        const listaProdutos = [...lista];
        const item = listaProdutos.find((p) => p.id === produto.id);

        if (item ) {
          item.quantidade = item.quantidade - 1;
          setLista(listaProdutos);

        }
       }

       function excluirItem(produto) {
        const listaProdutos = [...lista];
        const arrayFiltrado = listaProdutos.filter((p) => p.id !== produto.id);

        setLista(arrayFiltrado);
      }


    return(


        <DataContext.Provider value={{lista,adicionarLista, aumentarItem,diminuirItem,excluirItem}}>
            {props.children}
        </DataContext.Provider>

    )
}