"use client";
import "./styles.css";
import React, { useRef, useEffect, useState } from "react";
import { NAV_LINKS } from "./navLinks";
import Link from "next/link";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const debounce = <T extends (...args: unknown[]) => void>(
    func: T,
    delay: number
  ) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const headerFunc = debounce(() => {
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
  }, 100);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    const handleScroll = () => {
      if (window.scrollY > 0) {
        document.body.classList.add("no-bounce");
      } else {
        document.body.classList.remove("no-bounce");
      }
    };

    document.addEventListener("resize", handleResize);
    window.addEventListener("scroll", headerFunc);
    window.addEventListener("scroll", handleScroll);
    handleResize(); // Initialize the isMobile state
    headerFunc(); // Initialize the header state based on scroll
    return () => {
      window.removeEventListener("scroll", headerFunc);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`nav_bar ${isMobile ? "mobile" : ""}`} ref={headerRef}>
      <div className={"nav_wrapper"}>
        <div className={"logo"}>
          <Link href={NAV_LINKS[0].path}>
            <h1 className={"logo_text"}>
              <span>H</span>enry
            </h1>
          </Link>
        </div>
        <div className={"nav_resume"}>
          <button className="resume_button">
            <a
              href="/pdfs/Henry_Nunez_Resume_2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Resume
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
}
