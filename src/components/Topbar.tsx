import { Navbar, Container, Button } from "react-bootstrap";
import SunIcon from "/assets/images/icon-sun.svg?react";
import MoonIcon from "/assets/images/icon-moon.svg?react";
import LogoIconTextDark from "/assets/images/logo-text-dark.svg?react";
import LogoIconTextLight from "/assets/images/logo-text-light.svg?react";
import { useColorMode } from "../hooks/useColorMode";

const Topbar: React.FC = () => {
  const [theme, toggleTheme] = useColorMode();

  return (
    <Navbar expand="lg" data-bs-theme={theme} className="topbar">
      <Container fluid className="d-flex align-items-center">
        <div className="d-flex align-items-center">
          {theme === "light" ? (
            <LogoIconTextDark aria-label="Logo" className="logo" />
          ) : (
            <LogoIconTextLight aria-label="Logo" className="logo" />
          )}
        </div>
        {/* Spacer pushes the button to the right */}
        <div className="ms-auto">
          <Button
            variant="outline-none"
            onClick={toggleTheme}
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } mode`}
            style={{
              padding: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
              width: "42px",
              height: "40px",
            }}
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default Topbar;
