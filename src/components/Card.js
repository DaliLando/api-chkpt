import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function ListGroupWithHeaderExample({item}) {
  return (
    <Card style={{ width: '19rem',margin:"10px" }}>
      <Card.Header><h4>{item.name}</h4></Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Nickname : {item.username}</ListGroup.Item>
        <ListGroup.Item> Email : {item.email}</ListGroup.Item>
        <ListGroup.Item>Company : {item.company.name}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default ListGroupWithHeaderExample;