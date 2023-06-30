import { Container,Row, Col,Tab,Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"


function Projects(){
    const projects = [
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg1,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg2,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg2,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg2,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg2,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg3,
      },
    ];
    return (
      <section className="project" id="project">
        <Container>
          <Row>
            <Col>
              <h2>Proects</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat eligendi voluptatum nesciunt ab dicta provident eum
                obcaecati inventore autem natus. Veniam, totam voluptatem eum
                similique reprehenderit ratione earum aspernatur tempore.
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content aligh-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia, natus. Reprehenderit, porro fugiat commodi ab ad
                    assumenda praesentium, adipisci rem magnam quo, magni earum
                    esse quidem optio nihil inventore ratione.
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laudantium minima sit nobis minus soluta voluptatum vitae
                    quasi earum amet numquam veniam possimus, ipsum illum
                    sapiente consequatur facere adipisci a magni!{" "}
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
        <img src={colorSharp2} className="background-image-right" />
      </section>
    );
}

export default Projects;