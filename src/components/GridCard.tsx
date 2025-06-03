import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
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
    <Card.Body>
      <div className="d-flex align-items-start">
        <Image
          src={logo}
          alt={`${name} logo`}
          width={40}
          height={40}
          className="me-3"
        />
        <div>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </div>
      </div>
    </Card.Body>
    <Card.Footer className="d-flex justify-content-between align-items-center border-0">
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
