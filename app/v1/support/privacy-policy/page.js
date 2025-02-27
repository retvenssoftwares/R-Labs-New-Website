import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function PrivacyPolicy() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={4}
        headerCls="header-style-2 header-style-4"
      >
        <section className="section-box box-content-term">
          <div className="container">
            <div className="text-center contact-head">
              <span className="btn btn-bg-brand-4 mb-15">
                <span>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.0532 15.1551L12.3032 1.65509C12.2684 1.60707 12.2228 1.56797 12.17 1.54102C12.1172 1.51406 12.0587 1.5 11.9994 1.5C11.9402 1.5 11.8817 1.51406 11.8289 1.54102C11.7761 1.56797 11.7305 1.60707 11.6957 1.65509L1.9457 15.1551C1.91663 15.1955 1.89588 15.2412 1.88466 15.2897C1.87344 15.3381 1.87198 15.3883 1.88035 15.4374C1.88873 15.4864 1.90678 15.5333 1.93345 15.5753C1.96012 15.6173 1.99487 15.6535 2.0357 15.682L11.7857 22.432C11.8485 22.4755 11.923 22.4988 11.9994 22.4988C12.0758 22.4988 12.1504 22.4755 12.2132 22.432L21.9632 15.682C22.004 15.6535 22.0388 15.6173 22.0654 15.5753C22.0921 15.5333 22.1102 15.4864 22.1185 15.4374C22.1269 15.3883 22.1254 15.3381 22.1142 15.2897C22.103 15.2412 22.0823 15.1955 22.0532 15.1551ZM11.9994 15.6445L8.6882 12.9951L11.9994 3.05946L15.3107 12.997L11.9994 15.6445ZM7.94945 12.832L3.22257 14.6676L10.8744 4.08134L7.94945 12.832ZM8.18382 13.5463L11.6244 16.312V21.4157L3.11195 15.5151L8.18382 13.5463ZM12.3744 16.312L15.8169 13.5501L20.9469 15.4738L12.3744 21.4082V16.312ZM16.0494 12.8432L13.1244 4.08134L20.7126 14.5813L16.0494 12.8432Z"
                      fill="true"
                    />
                  </svg>
                </span>
                Policy
              </span>
              <h2 className="heading-2 mb-20">Privacy Policy</h2>
              <div className="text-center">
                <nav
                  className="container-breadcrumb"
                  style={{
                    bsBreadcrumbDivider:
                      'url("data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="8" height="8"%3E%3Cpath d="M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z" fill="currentColor"/%3E%3C/svg%3E")',
                  }}
                  aria-label="breadcrumb"
                >
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="#">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Terms and Conditions
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="row detail-term">
              <div className="col-lg-1" />
              <div className="col-lg-10">
                <div className="row">
                  <div className="col-lg-9 mb-40">
                    <div className="card-casestudy">
                      <div className="card-title">
                        <h6 id="step-1">
                          <span className="number">1</span>Introduction
                        </h6>
                      </div>
                      <div className="card-desc">
                        <p>
                        Retvens Services (“Retvens,” “we,” “our,” “us”) is committed to protecting the privacy of our users (“you,” “your”). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [www.retvens.com], use our Service, or interact with us in other ways.
                        </p>
                        <p>
                        Personal Data: We may collect personally identifiable information such as your name, email address, phone number, and payment information.
                        </p>
                        <p>
                        Hotel Data: We collect data related to the operations and performance of hotels that use our software.
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="card-casestudy">
                      <div className="card-title">
                        <h6 id="step-2">
                          <span className="number">2</span>How We Use Your Information
                        </h6>
                      </div>
                      <div className="card-desc">
                        <p>
                        We use the information we collect in the following ways:
                        </p>
                        <ul className="list-check-black">
                          <li>To provide, operate, and maintain our Service.</li>
                          <li>
                          To improve, personalize, and expand our Service.
                          </li>
                          <li>
                          To understand and analyze how you use our Service.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <hr />
                    <div className="card-casestudy">
                      <div className="card-title">
                        <h6 id="step-3">
                          <span className="number">3</span>Data Security
                        </h6>
                      </div>
                      <div className="card-desc">
                        <p>
                        We implement a variety of security measures to maintain the safety of your personal information and hotel data. Your data is stored in secure environments and is only accessible by a limited number of persons who have special access rights to such systems and are required to keep the information confidential.
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="card-casestudy">
                      <div className="card-title">
                        <h6 id="step-4">
                          <span className="number">4</span>Data Sharing and Disclosure
                        </h6>
                      </div>
                      <div className="card-desc">
                        <p>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information or Hotel Data unless we provide users with advance notice.</p>
                      </div>
                    </div>
                    <hr />
                    <h6>Retvens Team</h6>
                    <p className="text-sm neutral-700">
                      Last update: 07 August 2024
                    </p>
                  </div>
                  <div className="col-lg-3 mb-40">
                    <div className="sidebar-border-left">
                      <ul className="list-categories">
                        <li>
                          <Link href="/#step-1">Terms Conditions</Link>
                        </li>
                        <li>
                          <Link href="/#step-2">Privacy Policy</Link>
                        </li>
                        <li>
                          <Link href="/#step-3">User Policy</Link>
                        </li>
                        <li>
                          <Link href="/#step-4">Copyrights</Link>
                        </li>
                        <li>
                          <Link href="/#step-5">Cookies</Link>
                        </li>
                        <li>
                          <Link href="/#step-6">Account Billing</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
