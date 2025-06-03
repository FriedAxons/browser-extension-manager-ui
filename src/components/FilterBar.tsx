import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

const Filterbar = () => {
  const [filter, setFilter] = useState("all");

  const options = [
    { name: "All", value: "all" },
    { name: "Active", value: "active" },
    { name: "Inactive", value: "inactive" },
  ];

  return (
    <div className="filterbar d-flex justify-content-between align-items-center mb-4">
      {/* Left side heading */}
      <h3 className="filterbar-header">Extensions List</h3>

      {/* Right side filter toggles */}
      <ButtonGroup aria-label="Extension filters">
        {options.map((opt, idx) => (
          <ToggleButton
            key={idx}
            id={`ext-filter-${opt.value}`}
            type="radio"
            variant="outline-secondary"
            name="extensionFilter"
            value={opt.value}
            checked={filter === opt.value}
            onChange={(e) => setFilter(e.currentTarget.value)}
          >
            {opt.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default Filterbar;
