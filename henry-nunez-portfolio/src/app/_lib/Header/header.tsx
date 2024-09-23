"use client";
import "./styles.css";
import React, { useRef, useEffect } from "react";
import { NAV_LINKS } from "./navLinks";
import Link from "next/link";

export default function Header() {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const headerFunc = () => {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      headerRef.current.classList.add("header_shrink");
    } else {
      headerRef.current.classList.remove("header_shrink");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);
    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const toggleMenu = () => {
    menuRef.current.classList.toggle("menu_active");
  };

  return (
    <header className={"container"} ref={headerRef}>
      <div className={"grid_display"}>
        <div className={"nav_wrapper"}>
          <div className={"logo"}>
            <h1>
              <span>H</span>enry
            </h1>
          </div>
          <div className={"navigation"} ref={menuRef} onClick={toggleMenu}>
            <div className={"nav_menu"}>
              {NAV_LINKS.map((item, index) => {
                return (
                  <Link key={index} href={item.path}>
                    {item.display}
                  </Link>
                );
              })}
              <div className={"mobile_logo"}>
                <h1>
                  <span>H</span>enry
                </h1>
              </div>
            </div>
          </div>
          <span className={"mobile_menu_logo"}>mobile menu will go here</span>
        </div>
      </div>
    </header>
  );
}
