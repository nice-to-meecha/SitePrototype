import { useEffect } from "react";

import "../css/routes/Home.css"

export async function clientLoader(args) {
    console.log(`ClientLoader args: ${args}`);
    return {};
}

// export function HydrateFallback() {

//     return (
//         <>
//             <h1>Loading Home...</h1>
//         </>
//     )
// }

export async function clientAction({ serverAction }) {
    console.log(`ClientAction args: ${args}`);
    return {};
  }

export default function Home({ actionData, loaderData, }) {

    // renderStmt("Home");

    // console.log('Home component is rendering');


    // useEffect(() => {
    //     console.log("Code here will run after *every* render");
    // });

    // useEffect(() => {
    //     console.log('useEffect is running');
    //   }, []); // Runs on mount

    // useEffect(() => console.log("useEffect() in Home"), []);

    return (
        <>
            <div className="home-hero">
                <h1>Your Financial Advisor for Every Season</h1>
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
                <h4>Services</h4>
                <p>
                    At Blantyre Business Services, we don't just offer services;
                    we invest in a partnership.
                </p>

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
