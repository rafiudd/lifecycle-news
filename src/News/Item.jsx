import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar,Button, Row, Col,Card } from 'react-bootstrap';
import wahyu from './images.png'
// import SubTitle2 from './SubLifecycle';





export default class Items extends React.Component {
   constructor(props) {
        super(props)

        this.state = {
            data : [],
            value:''
        

            
        }
   }

   componentDidMount (){
     this.news();
     this.setState({
         value:''
     })


}
news = (val) => {
    fetch(`https://newsapi.org/v2/top-headlines?country=id&apiKey=f82a8ab1469f45de9c35842645794e46&q=${val}`)
    .then((response) => response.json())
    .then((response) =>{
        this.setState({
            data : response.articles
            
           
        })
    }
    );
}

onChangehandler = (e) => {
    this.news(e.target.value);


}



    render(){
       
        return (          
            <div>               
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                            alt=""
                            src={wahyu}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            />{' '}
                            React News
                        </Navbar.Brand>
                    </Container>
                </Navbar>

                <Container className='mt-2'>
                    <Row>
                         
                        <Col md={10}>
                            <input 
                            type="text" className="form-control" 
                            id="exampleFormControlInput1" 
                            placeholder="search here.."
                            
                            onChange={(e) =>this.onChangehandler(e)}></input>           
                        </Col> 
                                         
                    </Row>
                    <Row>
                        <Col md={10}>
                  
                 
                        </Col>               
                    </Row>
                </Container>

                
                <Container fluid="md" className='mt-3 ' >
                <Row md={4}>
                    {this.news.map((m, i) => 
                    <Col className='my-2 ' >
                        <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src={m.urlToImage} />
                        <Card.Body key={i}>
                          <Card.Title>{m.title}</Card.Title>
                          <Card.Text>
                            {m.author}, {m.publishedAt}
                          </Card.Text>
                          <Card.Text>
                            {m.description}
                          </Card.Text>
                          <Button variant="primary" href={m.url}>Selengkapnya..</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    )}
                </Row>
                 
                </Container>


            </div>
        )
    }
}
