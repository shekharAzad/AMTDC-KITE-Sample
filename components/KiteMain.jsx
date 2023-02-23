const KiteMain = () => {
  return (
    <>
      <div className="section _none">
        <div className="container">
          <div className="layout row layout-builder__layout">
            <div className="">
              <h2 className="section__heading font__control">
                <a href="#">Core Capabilities of the Platform</a>
              </h2>
              {/* <p class="section__intro font__control"></p> */}
              <div className="categorycard">
                <div class="categorycard__items">
                  <div className="categorycard__head">
                    <img
                      src="/Sketch/01.png"
                      alt="Provide Connectivity & Knowledge Integration"
                    ></img>
                    <p className="categorycard__para font__control">
                      Provide Connectivity & Knowledge Integration
                    </p>
                    <p className="font__control">
                      Create a charter to bring together academicians,
                      innovators, entrepreneurs, industrial partners and provide
                      a repository of solution providers, resources, tools and
                      knowledge base to solution seekers
                    </p>
                  </div>
                </div>
                <div className="categorycard__items">
                  <div className="categorycard__head">
                    <img
                      src="/Sketch/02.png"
                      alt="Promote Collaborative & Contract R&D"
                    ></img>
                    <p className="categorycard__para font__control">
                      Promote Collaborative & Contract R&D
                    </p>
                    <p className="font__control">
                      Provide a forum to bring together real world challenges of
                      the Indian manufacturing sector and solution providers for
                      product development through collaborative and contract R&D
                      route
                    </p>
                  </div>
                </div>
                <div className="categorycard__items">
                  <div className="categorycard__head">
                    <img
                      src="/Sketch/03.png"
                      alt="Facilitate Skill Development"
                    ></img>
                    <p className="categorycard__para font__control">
                      Facilitate Skill Development
                    </p>
                    <p className="font__control">
                      Create assisted and self learning tools for the
                      dissemination of recent innovations, trends, promotion of
                      innovation among fresh engineers, young entrepreneurs and
                      higher education students
                    </p>
                  </div>
                </div>
              </div>

              <div className="platform">
                <p className="platform__text">
                  <a href="#"> The Platform Facilitates:</a>
                </p>
                <div className="platform__card">
                  <div className="categorycard__items">
                    <div className="categorycard__head">
                      <img
                        src="/Sketch/04.png"
                        alt="A Connectivity Platform"
                      ></img>
                      <p className="categorycard__tilte">
                        A Connectivity Platform
                      </p>
                      <p className="categorycard__des">
                        To bring together solution providers and seekers across
                        India to foster innovation with an open culture of
                        focused participation
                      </p>
                    </div>
                  </div>
                  <div className="categorycard__items">
                    <div className="categorycard__head">
                      <img
                        src="/Sketch/05.png"
                        alt="A Connectivity Platform"
                      ></img>
                      <p className="categorycard__tilte">
                        A Knowledge Platform
                      </p>
                      <p className="categorycard__des">
                        A datametric driven search and inference engine which
                        assimilates information from the world wide web and
                        creates a knowledge database that can be tapped for
                        information such as demand, value, market potential,
                        innovations, government policies, investor reports, etc
                        by different stakeholders to collaborate for focussed
                        product development
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

export default KiteMain;
