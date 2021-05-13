import { Form, Button } from 'react-bootstrap';

const ContactForm = () => {
    return (
        <>
            <Form>
                <Form.Group  className = "p-3 m-3">
                    <Form.Control type = "text" placeholder = "Enter your name" />
                </Form.Group>
                <Form.Group  className = "p-3 m-3">
                    <Form.Control type = "email" placeholder = "Enter your email address" />
                </Form.Group>
                <Form.Group  className = "p-3 m-3">
                    <Form.Control as = "textarea" placeholder = "Enter your message" rows = {5} />
                </Form.Group>
                <Button variant = "primary" type = "submit" >
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default ContactForm
