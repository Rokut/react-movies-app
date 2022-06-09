import React from 'react'
import {Card, Button} from "react-bootstrap"

const Films = (props) => {

    console.log(props);

    //bus vieno filmo atvaizdavimo kortele
    //card element is boostrap
  return (
    <div> 
          {
        props.films.Search.map((item, index) => (
            <Card style={{ width: '18rem' }} key={index}>
            <Card.Img variant="top" src={item.Poster} />
            <Card.Body>
              <Card.Title>{item.Title}</Card.Title>
              <Card.Text>{item.Year}</Card.Text>
              <Button variant="primary">Get other</Button>
            </Card.Body>
          </Card> 
        ))
        }
      
    </div>
  )
}

export default Films