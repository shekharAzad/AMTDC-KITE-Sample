import { useEffect, useState } from "react";

const Navigation = () => {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);
  const [isValid, setIsValid] = useState("");

  return (
    <>
      <div className="header">
        <div className="header__topnav">
          <div className="container header__container">
            <div className="navigation__tools">
              <ul className="navigation__list">
                <li className="navigation__items">News & Events</li>
                <li className="navigation__items">About</li>
              </ul>
            </div>
            <div className="navigation__tools navigation__tools--login">
              <ul className="navigation__list">
                <li className="navigation__items">
                  <div className="header__fontcontrol">
                    <a
                      class="header__fontsize header__fontsize--small"
                      id="fontDecrease"
                    >
                      A-
                    </a>
                    <a
                      class="header__fontsize header__fontsize--reset"
                      id="fontReset"
                    >
                      A
                    </a>
                    <a
                      className="header__fontsize header__fontsize--large"
                      id="fontIncrease"
                    >
                      A+
                    </a>
                  </div>
                </li>

                <li className="navigation__items">
                  <a href="#">Contact </a>
                </li>
                <li className="navigation__items">
                  <a href="#">Login </a>
                </li>
                <li className="navigation__items">
                  <a href="#">Register Now</a>
                </li>
                <div id="google_translate_element"></div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
