import Link from "next/link";

export default function Footer4() {
  return (
    <>
      <footer className="footer footer-style-3 footer-style-4">
        <div className="container">
          <div className="box-newsletter">
            <div className="newsletter-left">
              <h2>Join our community</h2>
              <p className="text-md neutral-600">
                Work smarter with this hotel management and not hard join our
                newsletter for a better expertrience
              </p>
            </div>
            <div className="newsletter-right">
              <form action="#">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Email address..."
                />
                <button className="btn btn-subscribe" type="submit">
                  Subscribe
                  <svg
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 10.9993L18.4791 7.47852V10.3064H0V11.6924H18.4791V14.5203L22 10.9993Z"
                      fill="true"
                    >
                      {" "}
                    </path>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12">
              <Link href="/">
                <img alt="Retvens" src="/assets/imgs/template/logo.svg" />
              </Link>
              <div className="mt-20 mb-20">
                <p className="text-md neutral-600 mb-10">
                  401, Princes, Business Skyline, Vijay Nagar, Indore, Madhya
                  Pradesh 452010
                </p>
                <p className="text-md neutral-600">
                  Hours: 8:00 - 17:00, Mon - Sat{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-5 col-xs-6">
              <div className="row mt-20">
                <div className="col-lg-3 col-md-6 mb-30">
                  <h5 className="neutral-0 mb-10 text-18-semibold neutral-0">
                    About
                  </h5>
                  <ul className="menu-footer">
                    <li>
                      <a href="#">Company</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Press media</a>
                    </li>
                    <li>
                      <a href="#">History</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-30">
                  <h5 className="neutral-0 mb-10 text-18-semibold neutral-0">
                    Products
                  </h5>
                  <ul className="menu-footer">
                    <li>
                      <a href="#">RateX</a>
                    </li>
                    <li>
                      <a href="#">Hotel Audit Report</a>
                    </li>
                    <li>
                      <a href="#">R-Own</a>
                    </li>
                    <li>
                      <a href="#">Retvens CRS</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-30">
                  <h5 className="neutral-0 mb-10 text-18-semibold neutral-0">
                    Resource
                  </h5>
                  <ul className="menu-footer">
                    <li>
                      <a href="#">Community</a>
                    </li>
                    <li>
                      <a href="#">Our Blog</a>
                    </li>
                    <li>
                      <a href="#">Success Stories</a>
                    </li>
                    <li>
                      <a href="#">Meetups</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-30">
                  <h5 className="neutral-0 mb-10 text-18-semibold neutral-0">
                    Support
                  </h5>
                  <ul className="menu-footer">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Help FAQ</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6 text-start text-md-end">
              <div className=" flex flex-col items-start">
                <p className="text-lg title-follow neutral-0">Follow us</p>
                <div className="box-socials-footer" />
                <div className="flex flex-row">
                <a
                  className="icon-socials icon-facebook  flex justify-center items-center"
                  href="#"
                >
                  <img alt="Retvens" src="/assets/imgs/template/icons/fb.svg" />
                </a>
                <a className="icon-socials icon-instagram" href="#">
                  <img alt="Retvens" src="/assets/imgs/template/icons/in.svg" />
                </a>
                <a className="icon-socials icon-twitter" href="#">
                  <img alt="Retvens" src="/assets/imgs/template/icons/tw.svg" />
                </a>
                <a className="icon-socials icon-be" href="#">
                  <img alt="Retvens" src="/assets/imgs/template/icons/be.svg" />
                </a>
                </div>
                <p />
              </div>
            </div>
          </div>
          <div className="footer-bottom mt-0">
            <div className="row">
              <div className="col-md-6 text-md-start text-center">
                <p className="text-sm neutral-600">
                  Copyright © 2024 Retvens. All rights reserved.
                </p>
              </div>
              <div className="col-md-6 text-md-end text-center">
                <ul className="menu-bottom-footer">
                  <li>
                    <Link href="/v1/support/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/v1/support/terms-and-conditions">Terms Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
