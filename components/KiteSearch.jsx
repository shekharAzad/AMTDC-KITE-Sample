const KiteSearch = () => {
  return (
    <>
      <nav className="navigation">
        <div className="navigation--main">
          <div className="container navigation__container">
            <div className="navigation__menu">
              <ul className="navigation__list">
                <div className="dropdown">
                  <li className="navigation__items navigation__items--haschild font__control">
                    <a href="/knowledge-repository">Knowledge Repository</a>
                  </li>
                  <div class="dropdown-content">
                    <a href="#">Machine</a>
                    <a href="#">Products </a>
                    <a href="#">Digital resource </a>
                    <a href="#">Software resource</a>
                    <a href="#">Expert</a>
                    <a href="#">Service</a>
                  </div>
                </div>
                <div className="dropdown">
                  <li className="navigation__items navigation__items--haschild font__control">
                    <a href="/">Skill Development Forum</a>
                  </li>
                  <div class="dropdown-content">
                    <a href="#">Postcasts</a>
                    <a href="#">Webinars </a>
                    <a href="#">DIY Article </a>
                    <a href="#">Job Offers </a>
                    <a href="#">Job Profiles </a>
                  </div>
                </div>
                <div className="dropdown">
                  <li className="navigation__items navigation__items--haschild font__control">
                    <a href="/">Knowledge Exchange Forum</a>
                  </li>
                  <div class="dropdown-content">
                    <a href="#">Forums</a>
                    <a href="#">Blog Posts </a>
                    <a href="#">Microblogs</a>
                  </div>
                </div>
                <div className="dropdown">
                  <li className="navigation__items navigation__items--haschild font__control">
                    <a href="/">Collaborative R&D</a>
                  </li>
                  <div class="dropdown-content">
                    <a href="#">Opinone Polls</a>
                    <a href="#">Challenges </a>
                    <a href="#">Grand Challenges </a>
                    <a href="#"> </a>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default KiteSearch;
