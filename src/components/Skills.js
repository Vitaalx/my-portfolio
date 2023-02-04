import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Col, Container, Row} from "react-bootstrap";
export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>
                                Un deuxième texte que je choisis ici...
                            </p>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                autoPlay={false}
                                autoPlaySpeed={8500}
                                className="skill-slider">
                                <div className="item">
                                    <div className="skill-circle">90%</div>
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <div className="skill-circle">80%</div>
                                    <h5>Brand Identity</h5>
                                </div>
                                <div className="item">
                                    <div className="skill-circle">75%</div>
                                    <h5>Logo Design</h5>
                                </div>
                                <div className="item">
                                    <div className="skill-circle">60%</div>
                                    <h5>Web Development</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={''} alt="Background Image" />
        </section>
    )
}