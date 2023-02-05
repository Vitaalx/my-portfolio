import {Container, Row, Tab, Col, Nav} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import imgProject1 from "../assets/project-img/project-test-1.jpg";
import imgProject2 from "../assets/project-img/project-test-2.png";
import imgProject3 from "../assets/project-img/project-test-3.jpg";

export const Projects = () => {

    const projects = [
        {
            title: "My first project",
            description: "First project's description",
            imgUrl: imgProject1
        },
        {
            title: "My second project",
            description: "Second project's description",
            imgUrl: imgProject2
        },
        {
            title: "My third project",
            description: "Third project's description",
            imgUrl: imgProject3
        }
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Une brève description ici..</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
                                <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" /*TODO ajouter une banner img */ src={''} alt="Banner Image" />
        </section>
    )
}