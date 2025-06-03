import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GridCard from "./GridCard";
import extensions from "../../data.json";

const ExtensionsGrid: React.FC = () => (
  <Container>
    <Row className="g-4">
      {extensions.map((ext, idx) => (
        <Col key={idx} xs={12} sm={6} md={4}>
          <GridCard {...ext} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default ExtensionsGrid;
