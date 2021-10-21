import React from 'react'
import {Card,Button} from 'react-bootstrap'
import img5 from '../../assets/img/1.jpg'


function Cardss(props) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
  <Card.Img  style={{height:'200px'}}  variant="top" src={props.img} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </>
    )
}

export default Cardss
