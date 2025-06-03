import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

interface GridCardProps {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

const GridCard: React.FC<GridCardProps> = ({
  logo,
  name,
  description,
  isActive,
}) => (
  <Card className="h-100">
    <Card.Img variant="top" src={logo} alt={`${name} logo`} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
    <Card.Footer className="d-flex justify-content-between align-items-center">
      <Button variant="danger" className="rounded-pill btn-sm">
        Remove
      </Button>
      <Form.Check
        type="switch"
        id={`toggle-${name}`}
        label=""
        defaultChecked={isActive}
      />
    </Card.Footer>
  </Card>
);

export default GridCard;
