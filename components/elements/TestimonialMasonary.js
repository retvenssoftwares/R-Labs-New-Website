'use client'
import Isotope from "isotope-layout"
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from "react"

export default function TestimonialMasonary() {
    // Isotope
    const isotope = useRef()
    const [filterKey, setFilterKey] = useState("*")
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".mt-115", {
                itemSelector: ".col-lg-4",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".col-lg-4",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])
    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey])
    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key)
    },
        []
    )

    const activeBtn = (value) => (value === filterKey ? "trans current" : "")
    return (
        <>

            <div className="row mt-115">
                <div className="col-lg-4">
                    <div className="card-testimonial">
                        <div className="card-rates"><img src="/assets/imgs/template/icons/star.svg" alt="Retvens" /><img src="/assets/imgs/template/icons/star.svg" alt="Retvens" /><img src="/assets/imgs/template/icons/star.svg" alt="Retvens" /><img src="/assets/imgs/template/icons/star.svg" alt="Retvens" /><img src="/assets/imgs/template/icons/star.svg" alt="Retvens" /></div>
                        <div className="card-comment">
                            <p className="text-md">Retvens has transformed our revenue management process. Their system is intuitive and highly effective.
                            </p>
                        </div>
                        <div className="card-author">
                            <div className="author-info"><span className="text-md author-name mr-10">ROBERT FOX</span><span className="text-lg neutral-500">@Stotrak</span></div>
                            <div className="author-image"><img src="/assets/imgs/page/homepage6/author.png" alt="Retvens" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card-testimonial">
                        <div className="card-rates"><img src="/assets/imgs/template/icons/star.svg" alt="Retvens" /><img src="/assets/imgs/template/icons/star.svg" alt="Retvens" /><img src="/assets/imgs/template/icons/star.svg" alt="Retvens" /><img src="/assets/imgs/template/icons/star.svg" alt="Retvens" /><img src="/assets/imgs/template/icons/star.svg" alt="Retvens" /></div>
                        <div className="card-comment">
                            <p className="text-md">The audit report generator has been a game-changer for us. We can now identify and address issues promptly</p>
                        </div>
                        <div className="card-author">
                            <div className="author-info"><span className="text-md author-name mr-10">ROBERT FOX</span><span className="text-lg neutral-500">@Amar Kothi</span></div>
                            <div className="author-image"><img src="/assets/imgs/page/homepage6/author2.png" alt="Retvens" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card-testimonial">
                        <div className="card-rates"><img src="/assets/imgs/template/icons/star.svg" alt="Retvens" /><img src="/assets/imgs/template/icons/star.svg" alt="Retvens" /><img src="/assets/imgs/template/icons/star.svg" alt="Retvens" /><img src="/assets/imgs/template/icons/star.svg" alt="Retvens" /><img src="/assets/imgs/template/icons/star.svg" alt="Retvens" /></div>
                        <div className="card-comment">
                            <p className="text-md">R-own is a fantastic platform for networking with other hospitality professionals. It has helped us stay ahead of industry trends.</p>
                        </div>
                        <div className="card-author">
                            <div className="author-info"><span className="text-md author-name mr-10">ROBERT FOX</span><span className="text-lg neutral-500">@Shahpura</span></div>
                            <div className="author-image"><img src="/assets/imgs/page/homepage6/author3.png" alt="Retvens" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card-testimonial">
                        <div className="card-rates"><img src="/assets/imgs/template/icons/star.svg" alt="Retvens" /><img src="/assets/imgs/template/icons/star.svg" alt="Retvens" /><img src="/assets/imgs/template/icons/star.svg" alt="Retvens" /><img src="/assets/imgs/template/icons/star.svg" alt="Retvens" /><img src="/assets/imgs/template/icons/star.svg" alt="Retvens" /></div>
                        <div className="card-comment">
                            <p className="text-md">Their CRS software has improved our customer service efficiency significantly. It’s user-friendly and reliable.</p>
                        </div>
                        <div className="card-author">
                            <div className="author-info"><span className="text-md author-name mr-10">DIGRAJ</span><span className="text-lg neutral-500">@Shahpura</span></div>
                            <div className="author-image"><img src="/assets/imgs/page/homepage6/author4.png" alt="Retvens" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card-testimonial">
                        <div className="card-rates"><img src="/assets/imgs/template/icons/star.svg" alt="Retvens" /><img src="/assets/imgs/template/icons/star.svg" alt="Retvens" /><img src="/assets/imgs/template/icons/star.svg" alt="Retvens" /><img src="/assets/imgs/template/icons/star.svg" alt="Retvens" /><img src="/assets/imgs/template/icons/star.svg" alt="Retvens" /></div>
                        <div className="card-comment">
                            <p className="text-md">Retvens's technology solutions are top-notch. They’ve helped us streamline our operations and improve guest satisfaction.</p>
                        </div>
                        <div className="card-author">
                            <div className="author-info"><span className="text-md author-name mr-10">ROBERT FOX</span><span className="text-lg neutral-500">@Adajio</span></div>
                            <div className="author-image"><img src="/assets/imgs/page/homepage6/author5.png" alt="Retvens" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card-testimonial">
                        <div className="card-rates"><img src="/assets/imgs/template/icons/star.svg" alt="Retvens" /><img src="/assets/imgs/template/icons/star.svg" alt="Retvens" /><img src="/assets/imgs/template/icons/star.svg" alt="Retvens" /><img src="/assets/imgs/template/icons/star.svg" alt="Retvens" /><img src="/assets/imgs/template/icons/star.svg" alt="Retvens" /></div>
                        <div className="card-comment">
                            <p className="text-md">We’ve seen a noticeable increase in revenue since implementing their Revenue Management System. Highly recommended!</p>
                        </div>
                        <div className="card-author">
                            <div className="author-info"><span className="text-md author-name mr-10">ROBERT FOX</span><span className="text-lg neutral-500">@Wanderstation</span></div>
                            <div className="author-image"><img src="/assets/imgs/page/homepage6/author.png" alt="Retvens" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
