import { Card, Container, Col, Row, Image } from "react-bootstrap";
import film1 from "../assets/image/film1.jpg";
import film2 from "../assets/image/film2.jpg";
import film3 from "../assets/image/film3.jpg";
const Superhero = () => {
  return (
    <div>
      <Container>
        <br />
        <br />
        <h1 className=" text-white">SUPERHERO MOVIES</h1>
        <Row>
          <Col md={4} className=" movieWrapper" id="superhero">
            <Card className="bg-dark  movieImage">
              <Image src={film1} alt="film1" className="images" />
              <div className="bg-dark ">
                <div className="m-1 p-2 text-white">
                  <Card.Title className=" text-center">SUPERHERO 1</Card.Title>
                  <Card.Text className=" text-left">This is a wider card with supporting text below as a natural lead-in to additional content. </Card.Text>
                  <Card.Text className=" text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className=" movieWrapper">
            <Card className="bg-dark  movieImage">
              <Image src={film2} alt="film2" className="images" />
              <div className="bg-dark ">
                <div className="m-1 p-2 text-white">
                  <Card.Title className=" text-center">SUPERHERO 2</Card.Title>
                  <Card.Text className=" text-left">This is a wider card with supporting text below as a natural lead-in to additional content. </Card.Text>
                  <Card.Text className=" text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className=" movieWrapper">
            <Card className="bg-dark  movieImage">
              <Image src={film3} alt="film3" className="images" />
              <div className="bg-dark ">
                <div className="m-1 p-2 text-white">
                  <Card.Title className=" text-center">SUPERHERO 3</Card.Title>
                  <Card.Text className=" text-left">This is a wider card with supporting text below as a natural lead-in to additional content. </Card.Text>
                  <Card.Text className=" text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Superhero;
