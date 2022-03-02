import wahyudin from './images1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar,Row, Col, } from 'react-bootstrap';

const ItemNews = () => {
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
                  ></input>           
                </Col> 
                                 
            </Row>

        </Container>
    </div>

    )
}

export default ItemNews;