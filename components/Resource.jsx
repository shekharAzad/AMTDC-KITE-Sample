import { Row, Col } from "react-bootstrap";

const Resource = () => {
  return (
    <>
      <div className="_none">
        <div className="w-100">
          <div className="layout row no-gutters layout-builder__layout">
            <div class="content block-content">
              <div className="_none section__heading section__heading--bt50 section--top font__control">
                <h2>Resources</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section--bottom _none">
        <div className="container">
          <div className="layout row layout-builder__layout">
            <div class="col-lg-3 col-md-6 col-12">
              <div className="_none card__category">
                <div className="card">
                  <img src="/images/experts.png" alt="Expert"></img>
                  <h3>Experts</h3>
                  <p className="font__control ">
                    Get connected with our pool of experts from various
                    engineering fields, Industries, R &amp; D organizations,
                    academia; Industry professionals; engineering students,
                    start-ups and entrepreneurs; sponsoring and funding agencies
                    (both government and private), testing and standards
                    agencies, innovation hubs, IPR management services; and
                    others to get your innovative ideas sparked across the
                    nation.
                  </p>
                  <p className="font__control">
                    <a className="btn" href="#" tabIndex="0">
                      View All
                    </a>
                    <a href="#" class="card__blocklink">
                      View All
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="_none card__category">
                <div className="card">
                  <img src="/images/products.png" alt="products"></img>
                  <h3>Products</h3>
                  <p className="font__control">
                    A one stop shop for all the available machines their
                    specification and usability registered under KITE.
                  </p>
                  <p className="font__control">
                    <a href="#" className="btn" tabIndex="1">
                      View All
                    </a>
                  </p>

                  <a href="#" class="card__blocklink">
                    View All
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="_none card__category">
                <div className="card">
                  <img src="/images/services.png" alt="products"></img>
                  <h3>Services</h3>
                  <p className="font__control">
                    A aggregator place where one can find the required
                    manufacturing services offered by our registered SME’s &
                    MSMEs.
                  </p>
                  <p className="font__control">
                    <a href="#" className="btn" tabIndex="2">
                      View All
                    </a>
                  </p>

                  <a href="#" class="card__blocklink">
                    View All
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="_none card__category">
                <div className="card">
                  <img src="/images/digital-resources.png" alt="products"></img>
                  <h3>Digital Resources</h3>
                  <p className="font__control">
                    Make use of the listed course materials for advanced
                    learning through presentations and videos on different
                    emerging topics related to the focus technologies.
                  </p>
                  <p className="font__control">
                    <a href="#" className="btn" tabIndex="3">
                      View All
                    </a>
                  </p>

                  <a href="#" class="card__blocklink">
                    View All
                  </a>
                </div>
              </div>
            </div>

            <div className="section--top">
              <div className="section _none">
                <div className="container">
                  <div className="layout row layout-builder__layout">
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="_none card__type1">
                        <h2>Courses</h2>
                        <div className="card">
                          <img src="/images/courses.png" alt="courses"></img>
                          <p className="font__control">
                            Make use of the listed course materials for advanced
                            learning through presentations and videos on
                            different emerging topics related to the focus
                            technologies.
                          </p>
                          <a href="#" className="card__blocklink">
                            View All
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="layout row layout-builder__layout">
                        <div className="_none card__type1">
                          <h2>Webinars</h2>
                          <div className="card">
                            <img src="/images/webinar.png" alt="courses"></img>
                            <p className="font__control">
                              Kindly find the calendar for our upcoming webinars
                              events and archives for our past webinar events.
                            </p>
                            <a href="#" className="card__blocklink">
                              View All
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 ">
                      <div className="layout row layout-builder__layout">
                        <div className="_none card__type1">
                          <h2>Podcast</h2>
                          <div className="card">
                            <img src="/images/podcast.png" alt="courses"></img>
                            <p className="font__control">
                              Look at our listed podcast to find the discussion
                              on the emerging topics
                            </p>
                            <a href="#" className="card__blocklink">
                              View All
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resource;
