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
      <div className={"nav_wrapper"}>
        <div className={"logo"}>
          <Link href={NAV_LINKS[0].path}>
            <h1>
              <span>H</span>enry
            </h1>
          </Link>
        </div>
        <div
          className={"navigation animation"}
          ref={menuRef}
          onClick={toggleMenu}
        >
          <div className={"nav_menu"}>
            {NAV_LINKS.map((item, index) => {
              if (index > 0) {
                return (
                  <Link key={index} href={item.path}>
                    {item.display}
                  </Link>
                );
              }
            })}
            <div className={"mobile_logo"}>
              <Link href={NAV_LINKS[0].path}>
                <h1>
                  <span>H</span>enry
                </h1>
              </Link>
            </div>
          </div>
        </div>
        <span className={"mobile_menu_logo"}>
          <i onClick={toggleMenu}>
            <div className={"box"}>
              <div className={"bar1"}></div>
              <div className={"bar2"}></div>
              <div className={"bar3"}></div>
            </div>
          </i>
        </span>
      </div>
    </header>
  );
}
