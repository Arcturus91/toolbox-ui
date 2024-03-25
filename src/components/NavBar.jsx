import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <>
      <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Toolbox test UI</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
