const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img src="Sketch/logo.png" alt="kite-logo"></img>
            </div>

            <div class="col-md-7">
              <ul class="footer__list">
                <li class="footer__link">
                  <a href="#">Knowledge Repository</a>
                </li>
                <li>|</li>
                <li class="footer__link">
                  <a href="#">Skill Development Forum</a>
                </li>
                <li>|</li>
                <li class="footer__link">
                  <a href="#">Knowledge Exchange Forum</a>
                </li>
                <li>|</li>
                <li class="footer__link">
                  <a href="#">Collaborative R&D</a>
                </li>
                <li>|</li>
                <li class="footer__link">
                  <a href="#">News & Events</a>
                </li>
                <li>|</li>
                <li class="footer__link">
                  <a href="#">Faq & Help</a>
                </li>
                <li>|</li>
                <li class="footer__link">
                  <a href="/#">Contact</a>
                </li>
                <li>|</li>
                <li class="footer__link">
                  <a href="#">About</a>
                </li>
              </ul>
              <ul class="footer__list footer__list--policy">
                <li class="footer__link">
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>|</li>
                <li class="footer__link">
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div class="col-md-2">
              <div class="follow">
                <h4>Follow Us On</h4>
                <ul>
                  <li>
                    <a href="#" target="_blank">
                      <img src="/Sketch/facebook.svg" alt="facebook"></img>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <img src="/Sketch/instagram.svg" alt="facebook"></img>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <img src="/Sketch/linkedin.svg" alt="facebook"></img>
                    </a>
                  </li>
                </ul>
                <p>Copyright 2021 @ kite.in</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
