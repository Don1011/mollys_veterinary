import { Card } from 'react-bootstrap';

const AboutParagraphs = (props) => {
    return (
        <Card className = "p-4 m-4">
            <p >
                {props.children}
            </p>
        </Card>
    )
}

export default AboutParagraphs
