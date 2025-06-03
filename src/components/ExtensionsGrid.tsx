import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GridCard from "./GridCard";
import extensions from "../../data.json";

const ExtensionsGrid: React.FC = () => (
  <Container fluid className="min-vh-100 d-flex flex-column p-0 mb-3">
    <Row className="flex-grow-1 g-2">
      {extensions.map((ext, idx) => (
        <Col key={idx} xs={12} sm={6} md={4} lg={3} xl={4} className="mb-1">
          <GridCard {...ext} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default ExtensionsGrid;
