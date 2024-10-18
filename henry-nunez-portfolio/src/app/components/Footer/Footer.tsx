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
          <h6>Created by Henry Nuñez</h6>
          <p>
            &copy; Copyright {currentYear} Developed by Henry Nuñez. All right
            reserved.{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
