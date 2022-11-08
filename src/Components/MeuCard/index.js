import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { DataContext } from '../../Context/data';
import Col from 'react-bootstrap/Col';


function MeuCard({produto}) {
  const { adicionarLista } = useContext(DataContext)
  
  return (
    <Col>
      <Card id="card" style={{ width: '18rem', margin: "10px" }}>
        <Card.Img width={"150px"} variant="top" src={produto.imagem} />
       
        <Card.Body>
          <Card.Title>{produto.nome}</Card.Title>
          <Card.Text>R${produto.valorUnitario}0</Card.Text>
          <Button onClick={()=>{adicionarLista(produto)}} variant="primary">Adicionar ao carrinho</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default MeuCard;
