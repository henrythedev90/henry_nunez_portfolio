"use client";
import "./styles.css";
import React, { useRef, useEffect, useState } from "react";
import { NAV_LINKS } from "./navLinks";
import Link from "next/link";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const headerFunc = () => {
    if (headerRef.current) {
      if (
        document.body.scrollTop > 5 ||
        document.documentElement.scrollTop > 5
      ) {
        headerRef.current?.classList?.add("header_shrink");
      } else {
        headerRef.current?.classList?.remove("header_shrink");
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", headerFunc);
    return () => {
      window.removeEventListener("scroll", headerFunc);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    // if (menuRef.current) {
    //   menuRef.current.classList.toggle("menu_active");
    // }
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className={`nav_bar ${isMobile ? "mobile" : ""}`} ref={headerRef}>
      <div className={"nav_wrapper"}>
        <div className={"logo"}>
          <Link href={NAV_LINKS[0].path}>
            <h1>
              <span>H</span>enry
            </h1>
          </Link>
        </div>
        <div
          className={`navigation animation ${isMenuOpen ? "menu_active" : ""}`}
          ref={menuRef}
          onClick={isMobile ? toggleMenu : undefined}
        >
          <div className={"nav_menu"}>
            {NAV_LINKS.map((item, index) => {
              if (index > 0) {
                return (
                  <Link
                    key={index}
                    href={item.path}
                    className={isMobile ? "nav_link" : ""}
                  >
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
    </nav>
  );
}
