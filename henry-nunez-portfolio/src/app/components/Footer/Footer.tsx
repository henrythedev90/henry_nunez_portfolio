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
          {FOOTER_LINKS.map((icon, index) => {
            return (
              <Link key={index} href={icon.path} className="footer_link">
                <span>{icon.display}</span>
              </Link>
            );
          })}
        </div>
        <div>
          <h6>created by Henry Nuñez</h6>

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
