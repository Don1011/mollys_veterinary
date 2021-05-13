import NavigationBar from './Navigationbar';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 
const Jumbotron = ({ jumboShow }) => {

    return (
        <div className = "jumbotron-navbar-parent" >
            <div className="offset"></div>
            <NavigationBar jumboShow = {jumboShow} />
            {jumboShow &&
            <Jumbo className = "jumbotron z-index-0 ">
                <Container className = "my-5 text-light">
                    <h2>Got a sick pet? He'll love us, I promise.</h2>
                    <p>
                        We care about your pet's happiness because they matter too.
                         Let your pet experience the joy of being a patient of Molly's Vet.
                    </p>
                    <div className="text-center m-5">
                        <Link to="/contact" className = "btn my-primary-bg">Contact Us</Link>
                    </div>
                </Container>
            </Jumbo>
            }  
        </div>
    )
}

Jumbotron.defaultProps = {
    jumboShow: true
}

export default Jumbotron
