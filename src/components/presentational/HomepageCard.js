import { Card } from 'react-bootstrap';

const HomepageCard = (props) => {
    return (
        <div>
            <Card className = "card-added-styles my-3">
                <Card.Body>
                    <h1>
                        {props.children}
                    </h1>
                    <h5 className = "my-primary-fg">
                        {props.title}
                    </h5>
                    <hr/>
                    <p>
                        {props.text}
                    </p>
                </Card.Body>
            </Card>
        </div>
    )
}

export default HomepageCard
