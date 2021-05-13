import { Container, Row, Col } from 'react-bootstrap';
import Jumbotron from '../presentational/Jumbotron';
import ContactDetails from '../presentational/ContactDetail';
import ContactForm from '../presentational/ContactForm';
// import NavigationBar from '../presentational/Navigationbar';

const Contact = () => {
    return (
        <div>
            <Jumbotron jumboShow = {false} />

            <Container>
                <h1 className = "underline-secondary p-3 mb-5" >Contact Page</h1>
            </Container>

            <Container>
                <Row>
                    <Col md = {4}>
                        <ContactDetails />
                    </Col>
                    <Col md = {8}>
                        <ContactForm />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact
