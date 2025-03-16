"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import NavLink from "../navLink/NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import MenuOverlay from "../menuOverlay/MenuOverlay";
import Image from "next/image";

export const navbarLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Skills", path: "/skills" },
  { title: "Projects", path: "/my-projects" },
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  const handleClose = () => {
    setIsNavbarOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        handleClose();
      }
    };

    if (isNavbarOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isNavbarOpen]);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-container">
        <Link href={"/"} className="navbar-logo">
          <Image
            src="/images/logo.jpg"
            alt="Logo Image"
            width={40}
            height={5}
            className="logo"
          />
        </Link>
        <div>
          {!isNavbarOpen ? (
            <button
              onClick={() => setIsNavbarOpen(true)}
              className="navbar-toggle-button"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button onClick={handleClose} className="navbar-toggle-button">
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div
          className={`navbar-links ${isNavbarOpen ? "block" : "hidden"}`}
          id="navbar"
        >
          <ul className="navbar-links-list">
            {navbarLinks.map((link, index) => (
              <li key={index} onClick={handleClose}>
                <NavLink href={link.path} title={link.title} onClick={handleClose} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isNavbarOpen ? (
        <MenuOverlay links={navbarLinks} onClose={handleClose} />
      ) : null}
    </nav>
  );
};

export default Navbar;
