import { Container, Row, Col, ListGroup } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className = "mt-5 py-5 footer my-primary-bg">
            
            <Container fluid>
                <Row className = "justify-content-center">
                    <Col md = {3} className = "mb-5">
                        <h5 className = "underline-secondary p-3" >Content</h5>
                        <ListGroup>
                            <ListGroup.Item action href ="/contact" className = "my-primary-bg">Contact Us</ListGroup.Item>
                            <ListGroup.Item action href ="/about" className = "my-primary-bg">About Us</ListGroup.Item>
                            <ListGroup.Item action href ="/" className = "my-primary-bg">Home</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md = {3} className = "mb-5">
                        <h5 className = "underline-secondary p-3" >About</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ducimus eaque ipsam labore illo nesciunt distinctio quae fugit. 
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
