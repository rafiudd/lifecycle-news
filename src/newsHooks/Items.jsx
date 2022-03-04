import wahyudin from './images1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar,Row, Col,Card,Button } from 'react-bootstrap';
import {useEffect, useState} from 'react';

const ItemNews = () => {

    let [data, setData] = useState([]);
    let [filter,setfilter] = useState('');

    useEffect(() => {
        fetch (`https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=id&apiKey=f82a8ab1469f45de9c35842645794e46&q=${filter}`)
        .then(response => response.json())
        .then(response => {
            
            setData(response.articles);
        })
    },[filter])


    // let dataSearch = data.filter(item=> {
    //     Object.keys(item).some(key =>
    //         item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
    //         )
    // });
    return (
        <div>               
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src={wahyudin}
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
                    value={filter}
                    onChange={event => setfilter(event.target.value)}
                  ></input>           
                </Col> 
                                 
            </Row>

        </Container>
        
        <Container fluid="md" className='mt-3 ' >
                <Row md={4}>
                    {data.map((m, i) => 
                    <Col className='my-2 ' key={i}>
                        <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src={m.urlToImage} />
                        <Card.Body>
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

export default ItemNews;