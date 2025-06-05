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
  <Card className="card h-100 rounded-4">
    <Card.Body>
      <div className="d-flex align-items-start">
        <Image
          src={logo}
          alt={`${name} logo`}
          width={60}
          height={60}
          className="me-3"
        />
        <div>
          <Card.Title style={{ fontWeight: "700" }} className="card-title">
            {name}
          </Card.Title>
          <Card.Text className="card-text">{description}</Card.Text>
        </div>
      </div>
    </Card.Body>
    <Card.Footer className="d-flex justify-content-between align-items-center rounded-4 border-0">
      <Button variant="danger" className="card-button rounded-pill btn-sm">
        Remove
      </Button>
      <Form.Check
        type="switch"
        id={`toggle-${name}`}
        label=""
        defaultChecked={isActive}
        className="custom-switch"
      />
    </Card.Footer>
  </Card>
);

export default GridCard;
