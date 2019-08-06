import React, { Component } from "react";
import { Card, Nav, CardColumns } from "react-bootstrap";

class Results extends Component {
    
  render () {
    if (!this.props.breweryInfo) {
      console.log(`${this.props.breweryInfo}`)
      return <div></div>
    }
    else {
      return <CardColumns>
        {this.props.breweryInfo.map((pub, i) => {
          return <Card key={i} bg="dark" text="white" >
                    <Card.Body>
                      <Card.Title>{pub.name}</Card.Title>
                      <Card.Text>
                        {pub.street} <br></br> 
                        {pub.city}, {pub.state} {pub.postal_code} <br></br> 
                        {pub.phone} <br></br>
                        <Nav.Link>{pub.website_url}</Nav.Link>
                      </Card.Text>
                    </Card.Body>
                  </Card>
          })
        }
      </CardColumns>
    };
  };

};
export default Results;