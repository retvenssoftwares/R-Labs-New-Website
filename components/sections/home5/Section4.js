
import Link from 'next/link'

export default function Section4() {
    return (
        <>

            <section className="section-box box-all-in-one">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-7 mb-30">
                            <h2 className="display-2 neutral-1000">Design, Development, and Innovate. All-in-one</h2>
                        </div>
                        <div className="col-lg-5 mb-30">
                            <h5 className="heading-5 neutral-700">At Retvens Technologies, our approach is rooted in understanding the needs of the hospitality industry and creating solutions that drive real impact. 
                                We prioritize user experience, leverage advanced technology, and ensure our products integrate seamlessly into your existing operations. 
                                Here's how we achieve this</h5>
                        </div>
                    </div>
                    <div className="row mt-40">
                        <div className="col-lg-5">
                            <div className="card-design">
                                <div className="card-image"><img alt="Retvens" src="/assets/imgs/page/homepage6/ready.png" /></div>
                                <div className="card-info">
                                    <h3 className="heading-2 mb-30">User-Centric Design</h3>
                                    <p className="heading-5 card-desc">We focus on creating intuitive and accessible interfaces that are easy to use and navigate.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="card-design card-design-style2">
                                <div className="card-image"><img alt="Retvens" src="/assets/imgs/page/homepage6/integration.png" />
                                </div>
                                <div className="card-info">
                                    <h3 className="heading-2 mb-30">Integration with popular third-party tools. Customer
                                        Relationship Management (CRM) Integration</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="card-design card-design-style3">
                                <div className="card-image"><img alt="Retvens" src="/assets/imgs/page/homepage6/fast.png" /></div>
                                <div className="card-info">
                                    <h3 className="heading-3 mb-30">Seamless Integration</h3>
                                    <p className="heading-5 card-desc">Our products are designed to be compatible with leading hospitality platforms,
                                         ensuring smooth implementation.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="card-design card-design-style4">
                                <div className="card-image"><img alt="Retvens" src="/assets/imgs/page/homepage6/design.png" /></div>
                                <div className="card-info">
                                    <h3 className="heading-3 mb-30">Robust Security</h3>
                                    <p className="heading-5 card-desc">We prioritize data privacy and protection, 
                                        employing the latest security measures to keep your information safe.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="card-design card-design-style5">
                                <div className="card-image"><img alt="Retvens" src="/assets/imgs/page/homepage6/power.png" /></div>
                                <div className="card-info">
                                    <h3 className="heading-3 mb-30">Continuous Improvement</h3>
                                    <p className="heading-5 card-desc">We regularly update and enhance our products to keep up with industry trends and client needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <h4>Boost your hotel with our products.<br className="d-none d-lg-block" /><Link className="link-green" href="#">Contact us</Link> now for a quote</h4>
                    </div>
                </div>
            </section>
        </>
    )
}
