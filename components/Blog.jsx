import { Col, Container, Row } from "react-bootstrap";

const Blog = () => {
  return (
    <>
      <div className="section forums _none">
        <div className="container">
          <div className=" layout row layout-builder__layout">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="views-element-container _none">
                <div className="content block-content">
                  <h3>Discussion Forum</h3>

                  <div className="forums-cards">
                    <div className="forums-card">
                      <div className="forums-card__head">
                        <h2 className="forums-card_heading">
                          <a href="#">
                            Development of indigenous industrial robots
                          </a>
                        </h2>
                        <date>06th Aug 2022</date>
                      </div>

                      {/* <p className="font__control"> </p>
                      <p className="font__control">
                        <span>
                          <span>
                            <span></span>
                          </span>
                        </span>

                        <p className="font__control"></p>
                      </p> */}
                    </div>
                    <div class="forums-card">
                      <div class="forums-card__head">
                        <h2 class="forums-card_heading">
                          <a href="#">Robotics in Manufacturing</a>
                        </h2>
                        <date>05th Aug 2022</date>
                      </div>
                      <p className="font__control"></p>
                    </div>

                    <a className="section__link" href="#">
                      View All
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="views-element-container _none">
                <div className="content block-content">
                  <h3>Blog</h3>
                  <div className="forums-cards">
                    <div className="forums-card blog">
                      <div className="forums-img">
                        <div
                          class="card__imgsection"
                          // style={'background: url("Sketch/blog.png") no-repeat;'}
                          // data-noimg="1"
                          // data-noimg-bundle="blog_m1"
                        >
                          <img
                            src="Sketch/blog.png"
                            alt="blog"
                            className="card__imgsection"
                          />
                        </div>
                      </div>
                      <div class="forums-card__head">
                        <h2 class="forums-card_heading">
                          <a href="#">
                            A brief Video on Transformational Skills
                          </a>
                        </h2>
                        <date>27th Dec 2022</date>
                      </div>
                      <p className="font__control"></p>
                      <p className="font__control">On Sep. 4, 2021 Dr.</p>
                    </div>

                    <a className="section__link" href="#">
                      View All
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="views-element-container _none">
                <div className="content block-content">
                  <h3>Microblogging</h3>
                  <div className="forums-cards">
                    <div className="forums-card blog">
                      <div className="forums-card__head">
                        <date>04th Aug 2022</date>
                      </div>
                      <p className="font__control"></p>
                      <p className="font__control">Trial Test</p>
                      <p className="font_control">
                        <a href="#" className="section__link">
                          View All
                        </a>
                      </p>
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
export default Blog;
