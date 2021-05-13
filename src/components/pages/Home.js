import { Container, Row, Col } from 'react-bootstrap';
import Jumbotron from '../presentational/Jumbotron';
import Services from '../presentational/Services';

const Home = () => {
    return (
        <div>
            <Jumbotron jumboShow = {true} />

            <Container>
                <Col className = "text-center" >
                    <h2 className = "services-container underline-secondary">Our Services</h2>
                </Col>
                <Row>
                    <Services />
                </Row>
            </Container>
        </div>
    )
}

export default Home
