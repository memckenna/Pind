import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

const SplashPageFooter = () => {

    return (
        <footer className="splash-footer">
            <p className="splash-footer-paragraph">
                &copy; 2022 InspoGram by <Link className="linkedin-links" to={{ pathname: "https://www.linkedin.com/in/meganmckenna1/" }} target="_blank">Megan McKenna</Link>
            </p>
            <p className="splash-footer-paragraph">
                &copy; Github Links: <Link className="github-links" to={{ pathname: "https://github.com/memckenna" }} target="_blank">Megan McKenna</Link>
            </p>
        </footer>
    )
}

export default SplashPageFooter;
