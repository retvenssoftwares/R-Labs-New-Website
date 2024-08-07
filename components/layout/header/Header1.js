import Link from "next/link";
import SearchForm from "./SearchForm";

export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  topBar,
  headerCls,
  logoWhite,
}) {
  return (
    <>
      <header
        className={`header ${headerCls ? headerCls : ""} sticky-bar ${
          scroll ? "stick" : ""
        }`}
      >
        {topBar && (
          <div className="top-bar">
            <div className="container">
              <div className="top-bar-inner">
                <div className="box-top-bar-left">
                  <span className="address-icon text-md">
                    Indore.
                  </span>
                </div>
                <div className="box-top-bar-right">
                  <a className="phone-icon text-md" href="tel:(262) 555-0131">
                    +91-8563-919-033
                  </a>
                  <a
                    className="email-icon text-md"
                    href="mailto:contact@retvens.com"
                  >
                    admin@retvensservices.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="container">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <Link className="d-flex" href="/">
                  <img
                    alt="Retvens"
                    src={`/assets/imgs/template/${
                      logoWhite ? "logo" : "logo-black"
                    }.svg`}
                  />
                </Link>
              </div>
              <div className="header-nav">
                <nav className="nav-main-menu d-none d-xl-block">
                  <ul className="main-menu">
                    <li className="has-children">
                      <Link className="active" href="/">
                        Home
                      </Link>
                    </li>
                    <li className="mega-li has-children">
                      <Link href="/">Products</Link>
                      <div className="mega-menu">
                        <div className="mega-menu-inner">
                          <div className="row">
                            <div className="col-lg-8">
                              <div className="row">
                                <div className="col-lg-3">
                                  <h6>Live Products</h6>
                                  <ul className="sub-menu">
                                    <li>
                                      <Link href="/">RateX</Link>
                                    </li>
                                    <li>
                                      <Link href="/">
                                        Hotel Audit Report
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/">R-Own</Link>
                                    </li>
                                    <li>
                                      <Link href="/">Retvens CRS</Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="box-desc-menu">
                                <h6 className="text-16-semibold">
                                  Retvens - Modern Multipurpose Template
                                </h6>
                                <p className="text-xs mt-10 mb-25">
                                  bootstrap 5, business, corporate, creative,
                                  gulp, marketing, minimal, modern, pug, sass...
                                </p>
                                <Link
                                  className="btn btn-black-md btn-rounded"
                                  href="#"
                                >
                                  Get It Now
                                  <svg
                                    width={22}
                                    height={8}
                                    viewBox="0 0 22 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M22 4.00032L18.4791 0.479492V3.3074H0V4.69333H18.4791V7.52129L22 4.00032Z"
                                      fill="true"
                                    />
                                  </svg>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="has-children">
                      <Link className="active" href="/">
                        Experiments
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/">Hotel Intelligence</Link>
                        </li>
                        <li>
                          <Link href="/">Retvens Hotel</Link>
                        </li>
                        <li>
                          <Link href="/">Rate Pulse</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <Link href="/">Success Stories</Link>
                    </li>
                    <li className="has-children">
                      <Link href="/">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="header-right">
              {/* <SearchForm /> */}
              {/* <Link className="btn btn-brand-4-medium hover-up" href="#">
                Get Started
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 11.0003L18.4791 7.47949V10.3074H0V11.6933H18.4791V14.5213L22 11.0003Z"
                    fill="true"
                  ></path>
                </svg>
              </Link> */}
              <div
                className="burger-icon burger-icon-white"
                onClick={handleMobileMenu}
              >
                <span className="burger-icon-top" />
                <span className="burger-icon-mid" />
                <span className="burger-icon-bottom" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
