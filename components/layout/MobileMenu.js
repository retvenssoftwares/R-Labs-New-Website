"use client";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${
          isMobileMenu ? "sidebar-visible" : ""
        }`}
      >
        <div className="mobile-header-wrapper-inner">
          <div
            className={`burger-icon burger-icon-white ${
              isMobileMenu ? "burger-close" : ""
            }`}
            onClick={handleMobileMenu}
          >
            <span className="burger-icon-top" />
            <span className="burger-icon-mid" />
            <span className="burger-icon-bottom" />
          </div>

          {/* <div className="mobile-header-top">
            <div className="user-account">
              <img src="/assets/imgs/page/homepage6/author.png" alt="Retvens" />
              <div className="content">
                <h6 className="user-name">John Smith</h6>
                <p className="font-xs text-muted">You have 4 new messages</p>
              </div>
            </div>
          </div> */}
          <div className="mobile-header-content-area">
            <div className="perfect-scroll flex flex-col  justify-between">
              {/* <div className="mobile-search mobile-header-border mb-30">
                <form action="#">
                  <input type="text" placeholder="Search for items…" />
                  <i className="fi-rr-search" />
                </form>
              </div> */}
              <div className="mobile-menu-wrap mobile-header-border mt-[50px]">
                <nav>
                  <ul className="mobile-menu font-heading ">
                    <li
                      className={
                        isActive.key == 1
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      {/* <span
                        className="menu-expand"
                        onClick={() => handleToggle(1)}
                      >
                        <i className="fi-rr-angle-small-down" />
                      </span> */}
                      <Link className="active" href="/">
                        Home
                      </Link>
                    </li>
                    <li
                      className={
                        isActive.key == 2
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <span
                        className="menu-expand"
                        onClick={() => handleToggle(1)}
                      >
                        <i className="fi-rr-angle-small-down" />
                      </span>
                      <Link className="active" href="/">
                        Products
                      </Link>
                      <ul
                        className="sub-menu"
                        style={{
                          display: `${isActive.key == 1 ? "block" : "none"}`,
                        }}
                      >
                        <li>
                          <Link href="/">RateX</Link>
                        </li>
                        <li>
                          <Link href="/index-2">Hotel Audit Report</Link>
                        </li>
                        <li>
                          <Link href="/index-3">R-Own</Link>
                        </li>
                        <li>
                          <Link href="/index-4">Retvens CRS</Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={
                        isActive.key == 3
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <span
                        className="menu-expand"
                        onClick={() => handleToggle(2)}
                      >
                        <i className="fi-rr-angle-small-down" />
                      </span>

                      <Link href="#">Experiments</Link>
                      <ul
                        className="sub-menu"
                        style={{
                          display: `${isActive.key == 2 ? "block" : "none"}`,
                        }}
                      >
                        <li>
                          <Link href="/about">Hotel Intelligence</Link>
                        </li>
                        <li>
                          <Link href="/service">Retvens Hotel</Link>
                        </li>
                        <li>
                          <Link href="/pricing">Rate Pulse</Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={
                        isActive.key == 4
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      {/* <span
                        className="menu-expand"
                        onClick={() => handleToggle(1)}
                      >
                        <i className="fi-rr-angle-small-down" />
                      </span> */}
                      <Link className="active" href="/">
                        Success Stories
                      </Link>
                    </li>
                    <li
                      className={
                        isActive.key == 5
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      {/* <span
                        className="menu-expand"
                        onClick={() => handleToggle(1)}
                      >
                        <i className="fi-rr-angle-small-down" />
                      </span> */}
                      <Link className="active" href="/">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* <div className="mobile-account">
                <h6 className="mb-10">Your Account</h6>
                <ul className="mobile-menu font-heading">
                  <li>
                    <Link href="#">Profile</Link>
                  </li>
                  <li>
                    <Link href="#">Work Preferences</Link>
                  </li>
                  <li>
                    <Link href="#">My Boosted Shots</Link>
                  </li>
                  <li>
                    <Link href="#">My Collections</Link>
                  </li>
                  <li>
                    <Link href="#">Account Settings</Link>
                  </li>
                  <li>
                    <Link href="#">Go Pro</Link>
                  </li>
                  <li>
                    <Link href="/login">Sign Out</Link>
                  </li>
                </ul>
              </div> */}
              <div className="h-fit flex flex-col">
                <div className="mobile-social-icon  mb-50 bottom-0">
                  <h6 className="mb-25">Follow Us</h6>
                  <Link className="icon-socials icon-facebook" href="#">
                    <img
                      alt="Retvens"
                      src="/assets/imgs/template/icons/fb.svg"
                    />
                  </Link>
                  <Link className="icon-socials icon-instagram" href="#">
                    <img
                      alt="Retvens"
                      src="/assets/imgs/template/icons/in.svg"
                    />
                  </Link>
                  <Link className="icon-socials icon-twitter" href="#">
                    <img
                      alt="Retvens"
                      src="/assets/imgs/template/icons/tw.svg"
                    />
                  </Link>
                  <Link className="icon-socials icon-be" href="#">
                    <img
                      alt="Retvens"
                      src="/assets/imgs/template/icons/be.svg"
                    />
                  </Link>
                </div>
                <div className="site-copyright">Copyright 2024 © Retvens.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
