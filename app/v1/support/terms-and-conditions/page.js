import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function TermsCondition() {
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
                Agreement
              </span>
              <h2 className="heading-2 mb-20">Terms and Conditions</h2>
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
                          Retvens Services (“Retvens,” “we,” “our,” “us”) offers
                          a variety of software solutions for the hospitality
                          industry, including products created through data
                          scraping from various online travel agencies (OTAs),
                          as further described in our offerings (collectively,
                          the “Service”), and websites, including but not
                          limited to www.retvens.com.
                        </p>
                        <p>
                          These User Terms of Service (“Terms”) are a binding
                          legal contract between you and Retvens and explain the
                          rules governing your use of our Service and Websites.
                          By accessing or using the Service and Websites, you
                          acknowledge and agree to be bound by these Terms and
                          confirm you have read and understand our Privacy
                          Policy, which is incorporated by reference.
                        </p>
                        <p>
                          If you do not agree to these Terms, please do not
                          access or use the Service or Websites.
                        </p>
                        <p>
                          We may revise these Terms from time to time by posting
                          a modified version on our website. If, in Retvens'
                          sole discretion, the modifications to these Terms are
                          material, we will provide you with reasonable notice
                          prior to the change taking effect, either by emailing
                          the email address associated with your account or by
                          alerting you through the Service and/or Websites. If
                          you do not agree to or cannot comply with the modified
                          Terms, you must stop using the Service and Websites.
                          Unless otherwise stated, the updated Terms will take
                          effect upon their posting and will apply on a
                          going-forward basis. Your continued use of the Service
                          and Websites after any update to these Terms
                          constitutes your acceptance of such changes.
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="card-casestudy">
                      <div className="card-title">
                        <h6 id="step-2">
                          <span className="number">2</span>How These Terms Apply
                        </h6>
                      </div>
                      <div className="card-desc">
                        <p>
                          By using Retvens, you fall into one or more of the
                          following categories of Retvens user:
                        </p>
                        <ul className="list-check-black">
                          <li>Site Visitors: users of the Websites.</li>
                          <li>
                            Free Users: users of the free/basic version of the
                            Service, which includes limited features.
                          </li>
                          <li>
                            Managed Users: users who access the Service as part
                            of a paid subscription plan purchased by an entity
                            (the “Customer”).
                          </li>
                        </ul>
                        <p>
                          As a Managed User, you gain access to the Service
                          through a Customer of Retvens. The Customer Agreement
                          governs our relationship and commitment to deliver the
                          Service to that Customer, who may invite Managed Users
                          to join their Retvens instance. When you or another
                          Managed User submit content or information to the
                          Service, such as messages or files (“Customer Data”),
                          you acknowledge and agree that, as between Retvens and
                          Customer, the Customer Data is controlled by Customer.
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="card-casestudy">
                      <div className="card-title">
                        <h6 id="step-3">
                          <span className="number">3</span>Eligibility and Scope
                        </h6>
                      </div>
                      <div className="card-desc">
                        <p>
                          To use the Service and Websites you must be at least
                          16 years of age and competent to agree to these Terms.
                          If the law where you reside requires that you must be
                          older for Retvens to lawfully provide the Service and
                          Websites to you without parental consent, then you
                          must be that older age.
                        </p>
                        <p>
                          If the representations in the preceding sentence are
                          not true, or if Retvens has previously prohibited you
                          from accessing or using the Service and Websites, you
                          may not access or use the Service and Websites.
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="card-casestudy">
                      <div className="card-title">
                        <h6 id="step-4">
                          <span className="number">4</span>Account Registration
                          and Use
                        </h6>
                      </div>
                      <div className="card-desc">
                        <ul className="list-check-black">
                          <li>
                            Account Registration and Confidentiality. To access
                            the Service and certain parts of our Websites, you
                            must register for a Retvens account by creating a
                            username and password. You agree to provide us with
                            accurate, complete, and current registration
                            information about yourself. It is your
                            responsibility to ensure that your password remains
                            confidential and secure.
                          </li>
                          <li>
                            4.2 Unauthorized Account Use. You are responsible
                            for notifying us at support@retvens.com if you
                            become aware of any unauthorized use of or access to
                            your account.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <hr />
                    <div className="card-casestudy">
                      <div className="card-title">
                        <h6 id="step-5">
                          <span className="number">5</span>License
                        </h6>
                      </div>
                      <div className="card-desc">
                        <p>
                          Subject to your compliance with these Terms, we grant
                          you a limited, non-exclusive, non-sublicensable,
                          non-transferable, and revocable right to access and
                          use the Service and Websites only for your own
                          internal use.
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="card-casestudy">
                      <div className="card-title">
                        <h6 id="step-6">
                          <span className="number">6</span>Acceptable Use Policy
                        </h6>
                      </div>
                      <div className="card-desc">
                        <p>
                          You acknowledge and agree to comply with these Terms,
                          including the following rules regarding acceptable use
                          of the Service and Websites:
                        </p>
                        <ul className="list-check-black">
                          <li>
                            Disruption of the Service: You may not access,
                            tamper with, or use non-public areas of the Service
                            and Websites, Retvens' computer systems, or the
                            technical delivery systems of Retvens' providers.
                          </li>
                          <li>
                            Misuse of the Service and Websites: You may not use
                            the Service and Websites to carry out, promote or
                            support any unlawful or harmful activities.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-casestudy">
                      <div className="card-title">
                        <h6 id="step-7">
                          <span className="number">7</span>Proprietary Rights
                        </h6>
                      </div>
                      <div className="card-desc">
                        <p>
                        Retvens and its licensors exclusively own all right, title, and interest in and to all intellectual property rights in the Service and Websites.
                        </p>
                      </div>
                    </div>
                    <div className="card-casestudy">
                      <div className="card-title">
                        <h6 id="step-6">
                          <span className="number">8</span>User Content and Feedback
                        </h6>
                      </div>
                      <div className="card-desc">
                        <p>
                        8.1 User Content and Submissions on the Service: The Service allows you to create tasks and submit associated information, text, files, and other materials (collectively, “User Content”) and to share that User Content with others.
                        </p>
                        <p>
                            8.2 Free User Content: Free Users maintain ownership of the User Content that they submit to the Service (“Free User Content”).
                        </p>
                        <p>
                            8.3 Managed User Content on the Service: User Content submitted to the Service by Managed Users is Customer Data, which is owned and controlled by the Customer.
                        </p>
                        <p>
                            8.4 Feedback: If you submit Feedback, Retvens may use such Feedback for any purpose without any compensation or obligation to you.
                        </p>
                        <p>
                            8.5 User Content and Feedback Representations: You represent and warrant that you have all required rights to submit User Content and Feedback without violation or infringement of any third-party rights.
                        </p>
                      </div>
                    </div>
                    <div className="card-casestudy">
                      <div className="card-title">
                        <h6 id="step-6">
                          <span className="number">9</span>Warranties, Disclaimer, and Limitation of Liability
                        </h6>
                      </div>
                      <div className="card-desc">
                        <p>
                        The Service and Websites are provided “as is” without warranty of any kind.
                        </p>
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
