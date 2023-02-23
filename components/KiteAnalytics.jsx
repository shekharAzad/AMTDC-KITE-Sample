import { Container, Row, Col } from "react-bootstrap";

const KiteAnalytics = () => {
  return (
    <>
      {/* <Container> */}
      <section class="section section--purplebg statistics">
        <div className="conatiner">
          <Row>
            <Col xs={6}>
              <div className="row">
                <h2 className="statistics__head">kite analytics</h2>
                <ul className="statistics__list">
                  <li className="statistics__list__item font__control">
                    <a data-target="stat-1"> 1112 Users</a>
                  </li>

                  <li className="statistics__list__item font__control">
                    <a data-target="stat-2"> 10 Collaborative R&D</a>
                  </li>
                  <li className="statistics__list__item font__control">
                    <a data-target="stat-3"> 11 Skill Development Activities</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={6}>
              <div class="row statistics__numsection active" id="stat-1">
                <div class="col-sm-6">
                  <h2 class="statistics__num">131</h2>

                  <h4 class="statistics__numdata">EXPERTS</h4>
                </div>
                <div class="col-sm-6">
                  <h2 class="statistics__num">927</h2>

                  <h4 class="statistics__numdata">STUDENTS</h4>
                </div>
                <div class="col-sm-6">
                  <h2 class="statistics__num">175</h2>

                  <h4 class="statistics__numdata">Working Professionals</h4>
                </div>
                <div class="col-sm-6">
                  <h2 class="statistics__num">10</h2>

                  <h4 class="statistics__numdata">Retired Professional</h4>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      {/* </Container> */}
    </>
  );
};
export default KiteAnalytics;

{
  /* <div className="w-100">
  <div class="layout row no-gutters layout-builder__layout">
    <div class="_none" data-block-plugin-id="inline_block:text">
      <div className=""></div>
    </div>
  </div>
</div>; */
}
