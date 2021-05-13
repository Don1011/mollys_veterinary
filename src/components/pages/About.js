import { Container, Row } from 'react-bootstrap';
import Jumbotron from '../presentational/Jumbotron';
import AboutParagraphs from '../presentational/AboutParagraphs';

const About = () => {
    return (
        <div>
            <Jumbotron jumboShow = {false} />

            <h1>About Page</h1>

            <Container>
                <Row>
                    <AboutParagraphs>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius voluptatem numquam harum enim illo a magni accusantium labore similique ea, dolores veritatis impedit dolorem. Molestias minus inventore, et alias iusto soluta quaerat vel reprehenderit deserunt ipsam, velit saepe unde, ex perspiciatis nemo qui asperiores exercitationem incidunt? Incidunt qui eveniet, non veritatis ea nobis a deserunt corporis. Itaque consectetur tempore, libero error laboriosam voluptatum! Aliquid, sequi sapiente eligendi sint ut ipsam!
                    </AboutParagraphs>
                    <AboutParagraphs>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius voluptatem numquam harum enim illo a magni accusantium labore similique ea, dolores veritatis impedit dolorem. Molestias minus inventore, et alias iusto soluta quaerat vel reprehenderit deserunt ipsam, velit saepe unde, ex perspiciatis nemo qui asperiores exercitationem incidunt? Incidunt qui eveniet, non veritatis ea nobis a deserunt corporis. Itaque consectetur tempore, libero error laboriosam voluptatum! Aliquid, sequi sapiente eligendi sint ut ipsam!
                    </AboutParagraphs>
                    <AboutParagraphs>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius voluptatem numquam harum enim illo a magni accusantium labore similique ea, dolores veritatis impedit dolorem. Molestias minus inventore, et alias iusto soluta quaerat vel reprehenderit deserunt ipsam, velit saepe unde, ex perspiciatis nemo qui asperiores exercitationem incidunt? Incidunt qui eveniet, non veritatis ea nobis a deserunt corporis. Itaque consectetur tempore, libero error laboriosam voluptatum! Aliquid, sequi sapiente eligendi sint ut ipsam!
                    </AboutParagraphs>
                </Row>
            </Container>
        </div>
    )
}

export default About
