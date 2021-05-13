import { ListGroup } from 'react-bootstrap';
import { FaPhone, FaHome, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactDetail = () => {
    return (
        <ListGroup>
            <ListGroup.Item>
                <FaPhone />{" - "} <span>+234 902 383 0868</span>
            </ListGroup.Item>
            <br/>
            <ListGroup.Item>
                <FaHome />{" - "} <span>AG 40, Garki Close, Barnawa.</span>
            </ListGroup.Item>
            <br/>
            <ListGroup.Item>
                <FaEnvelope />{" - "} <span>contact@mollysvet.com</span>
            </ListGroup.Item>
            <br/>
            <ListGroup.Item action href = "www.facebook.com">
                <FaFacebook />{" - "} <span>Molly's Vet</span>
            </ListGroup.Item>
            <br/>
            <ListGroup.Item action href = "www.facebook.com">
                <FaTwitter />{" - "} <span>@mollys_vet</span>
            </ListGroup.Item>
            <br/>
            <ListGroup.Item action href = "www.facebook.com">
                <FaInstagram />{" - "} <span>@mollys.vet</span>
            </ListGroup.Item>
            <br/>
        </ListGroup>
    )
}

export default ContactDetail
