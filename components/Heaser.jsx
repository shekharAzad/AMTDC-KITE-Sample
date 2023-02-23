import { Row, Col, Container } from "react-bootstrap";
const Heaser = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={7}>
            <a href="/">
              <img
                className="header__rightsection"
                src="/images/kite-logo.png"
                alt="Kite"
              ></img>
            </a>
          </Col>

          <Col xs={5}>
            <a href="/">
              <img
                className="header__leftsection"
                src="/images/kite-rlogo.png"
                alt="Kite"
              ></img>
            </a>
            <a href="/">
              <img
                className="header__logo"
                src="images/G20-theme-logo.png"
                alt="Kite"
              ></img>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Heaser;
