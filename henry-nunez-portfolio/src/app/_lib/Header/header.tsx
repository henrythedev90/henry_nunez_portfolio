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

  const handleNavClick = (e: React.MouseEvent) => {
    if (isMobile) {
      // Check if the clicked element or any of its parents is a Link
      let target = e.target as HTMLElement;
      while (target !== e.currentTarget) {
        if (target instanceof HTMLAnchorElement) {
          setIsMenuOpen(false);
          return;
        }
        target = target.parentElement!;
      }

      // If we're here, it wasn't a link, so toggle the menu
      setIsMenuOpen((prevState) => !prevState);
    }
  };

  const toggleMenu = () => {
    // if (menuRef.current) {
    //   menuRef.current.classList.toggle("menu_active");
    // }
    setIsMenuOpen((prevState) => !prevState);
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
          onClick={(e) => {
            e.preventDefault();
            handleNavClick(e);
          }}
        >
          <div className={"nav_menu"}>
            <ul className={"nav_list"}>
              {NAV_LINKS.map((item, index) => {
                if (index > 0) {
                  return (
                    <li key={index} className="nav_item">
                      <Link
                        key={index}
                        href={item.path}
                        className={isMobile ? "nav_link" : ""}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(e);
                        }}
                      >
                        {item.display}
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
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
