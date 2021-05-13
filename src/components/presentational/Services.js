import { FaSyringe, FaMedium } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Card } from 'react-bootstrap';
import HomepageCard from './HomepageCard';

const Services = () => {
    return (
        <>
            <Col md = {3}>
                <HomepageCard title = "Animal Immunization" text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati vitae esse id.">
                    {/* <FaSyringe /> */}
                    <img src="/images/syringe.png" alt="Syringe"/>
                </HomepageCard>
            </Col>
            <Col md = {3}>
                <HomepageCard title = "Caesarean section" text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati vitae esse id.">
                    <img src="/images/caesarean-section.png" alt="Caesarean Section"/>
                </HomepageCard>
            </Col>
            <Col md = {3}>
                <HomepageCard title = "Surgery" text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati vitae esse id.">
                    <img src="/images/surgery-room.png" alt="Surgery room"/>
                </HomepageCard>
            </Col>
            <Col md = {3}>
                <HomepageCard title = "Diagnosis and treatment" text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati vitae.">
                    <img src="/images/capsules.png" alt="Drugs Image"/>
                </HomepageCard>
            </Col>
        </>
    )
}

export default Services
