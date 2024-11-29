import React from "react";
import Link from "next/link";
import { FOOTER_LINKS } from "./footerLink";
import "./styles.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_links_container">
          {FOOTER_LINKS.map((icon) => (
            <Link key={icon.path} href={icon.path} className="footer_link">
              <span>{icon.display.trim()}</span>
            </Link>
          ))}
        </div>
        <div className="footer_copyright_container">
          <p>
            &copy; Copyright {currentYear} Developed and created by Henry Nuñez.
            All right reserved.{" "}
          </p>
          <p>
            Crafted with 💙 using{" "}
            <span title="No frameworks, just pure CSS and JS">
              Vanilla Code
            </span>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
