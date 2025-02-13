import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import "../css/routes/Home.css"

export function HydrateFallback() {

    return (
        <>
            <h1>Loading Home...</h1>
        </>
    )
}

export async function clientLoader() {
    return {
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
    };
}

function createGrid(width, height, diameter, gap) {
    const rows = Math.ceil(height / gap),
        cols = Math.ceil(width / gap);
    console.log(`Width: ${width}\nRows: ${rows}\nHeight: ${height}\nColumns: ${cols}`);
    const grid = new Array(rows * cols);

    for (let y = 0; y <= height; y += gap) {
        for (let x = 0; x <= width; x += gap) {
            grid.push(<circle r={diameter} cx={`${x}`} cy={`${y}`} key={(x * rows + y + 1)}></circle>);
        }
    }

    return grid;
}

export default function Home({ loaderData, }) {

    const homeHero = useRef(), grid = useRef();
    const { innerWidth, innerHeight } = loaderData;

    useGSAP(() => {
        // gsap.timeline({
        //     scrollTrigger: {
        //         trigger: grid.current,
        //         start: "bottom center",
        //         end: "top top",
        //         markers: true,
        //         toggleActions: "play none none none",
        //     },
        // })
        //     .to("circle", {
        //         y: "+=50vh",
        //         attr: {
        //             cx: (index, target, targetArr) => {
        //                 console.log(index, targetArr.length);
        //                 return index < 0.5 * targetArr.length ? "-=150" : "+=150";
        //             },
        //         },
        //         duration: 2,
        //         // repeat: -1,
        //         // delay: 1,
        //         // yoyo: true,
        //         stagger: {
        //             each: 1,
        //             grid: [11, 56],
        //             axis: "y",
        //             from: "end",
        //         },
        //     })
        //     .to(grid.current, {
        //         attr: {
        //             viewBox: "0 0 16 9",
        //         }
        //     }, "<");
    }, { scope: grid.current })

    useGSAP(() => {
        gsap.timeline({ autoRemoveChildren: true, })
            .from(".home-hero .title", {
                opacity: 0,
                filter: "blur(20px)",
                duration: 2,
                delay: 0.5,
            })
            .from(".navbar .logo", {
                yPercent: -100,
                duration: 0.4,
                ease: "power2.inOut",
            })
            .from(".navbar .stagger-entry", {
                yPercent: -300,
                stagger: {
                    each: 0.2,
                    ease: "power2.inOut",
                },
            });

        gsap.timeline({
            scrollTrigger: {
                trigger: ".services-title",
                start: "bottom-=25% bottom",
                end: "+=0% center",
                markers: true,
                toggleActions: "none play none reset",
            },
        })
            .from(".services-partnership-1", {
                opacity: 0,
                yPercent: -100,
                duration: 0.5,
                ease: "back.out",
            })
            // .to(".services-partnership-2", {
            //     duration: 2,
            //     ease: "power2.inOut",
            //     text: {
            //         value: "we invest in a partnership.",
            //         delimiter: " ",
            //         // ease: "power2.out",
            //     }
            // })
            .from(".type-text", {
                opacity: 0,
                yPercent: (index, target, targetArr) => -50 / (targetArr.length - index),
                ease: "back.out",
                stagger: {
                    each: 0.1,
                }
            })
    });

    return (
        <>
            <div className="home-hero" ref={homeHero}>
                <div className="title">Your Financial Advisor for Every Season</div>
                <div className="grid-background">
                    <svg
                        ref={grid}
                        viewBox={`0 0 ${innerWidth} ${innerHeight}`}
                        width={innerWidth}
                        height={innerHeight}
                        preserveAspectRatio="xMidYMin slice"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {createGrid(innerWidth, innerHeight * 0.3, 1.5, 20)}
                    </svg>
                </div>
            </div>

            <div className="business-aim">
                <p>
                    At Blantyre Business Services, we are dedicated to empowering nonprofit
                    organizations and small businesses by offering a comprehensive Accounting
                    Department. BBS provides accounting and assurance Services and specializes
                    in providing vital support by addressing both the day-to-day operational
                    requirements and long-term strategic objectives.
                </p>

                <p>
                    We believe in the power of partnership to help businesses grow and nonprofits
                    to amplify their impact for the communities they serve.
                </p>
            </div>

            <div className="services">
                <div className="services-intro">
                    <div className="services-title">Services</div>
                    <p className="services-partnership-1">
                        At Blantyre Business Services, we don't just offer services;
                    </p>
                    <div className="services-partnership-2-container">
                        <p className="services-partnership-2">
                            <div className="type-text">we&nbsp;</div>
                            <div className="type-text">invest&nbsp;</div>
                            <div className="type-text">in&nbsp;</div>
                            <div className="type-text">a&nbsp;</div>
                            <div className="type-text">partnership.</div>
                        </p>
                    </div>
                </div>

                <h5>Accounting Department</h5>
                <p>
                    Our Accounting Department is designed to alleviate the burden of financial
                    management. We offer a wide range of services, including:
                </p>
                <ul>
                    <li>Accounting Services</li>
                    <p>
                        A comprehensive suite of accounting services tailored to your specific
                        needs. From meticulous bookkeeping and precise financial reporting to
                        strategic tax planning and budget analysis. We help provide the financial
                        clarity and support necessary to help you succeed.
                    </p>

                    <li>Payroll Services</li>
                    <p>
                        Our payroll services are designed to simplify and streamline one of the
                        most critical aspects of your business: employee compensation. Our team
                        of experts takes care of every detail, from accurate calculation and
                        on-time processing to tax compliance. We ensure that your employees are
                        paid correctly and promptly, allowing you to focus on the growth and mission
                        of your organization.
                    </p>

                    <li>Advisory Services</li>
                    <p>
                        Our support consulting services are designed to be a guiding hand your
                        organization to navigate complex challenges and seize opportunities. We
                        offer expert insights, strategic planning, and tailored solutions to help
                        you overcome obstacles and achieve your goals.
                    </p>
                </ul>

                <h5>Assurance Services</h5>
                <p>
                    Our expert team ensures the accuracy and transparency of your financial
                    statements, helping you meet regulatory requirements and maintain donor and
                    client trust. With a focus on compliance, internal controls, and risk
                    management, we provide the confidence and clarity your organization needs to
                    achieve its mission and operate efficiently.
                </p>

                <ul>
                    <li>Audit Services</li>
                    <li>Review Services</li>
                    <li>Compilation Services</li>
                    <li>Agreed-upon Procedures</li>
                    <li>Internal Controls Assurance</li>
                </ul>
            </div>

            <div className="affiliations">
                <ol>
                    <li>AICPA</li>
                    <li>WSCPA</li>
                    <li>QuickBooks Pro Advisor</li>
                </ol>
            </div>

            <div className="review-list">
                <div className="review">BDDTF</div>
                <div className="review">JSOL</div>
            </div>
        </>
    );
}
