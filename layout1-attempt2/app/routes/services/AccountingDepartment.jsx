import "../../css/routes/services/AccountingDepartment.css"

export default function AccountingDepartment() {

    return(
        <>  
            <p>
                Our Accounting Department is designed to alleviate the burden of financial management.
                We offer a wide range of accounting services, including:
            </p>

            <div className="accounting-details">
                <h4>Accounting Services</h4>
                <div className="accounting-details-card">
                    <h5>Accounting Technician</h5>
                    <p>
                        Helps you plan and monitor accounting functions of day-to-day financial
                        operations, financial reporting, choosing the right technology, and hiring the
                        right staff.
                    </p>
                    <ul>
                        <li>Technology/software selection</li>
                        <li>AP / 1099 Processing</li>
                        <li>AR and Deposit entry</li>
                        <li>Account reconciliations</li>
                        <li>Staffing and organizational planning</li>
                        <li>Payroll processing</li>
                        <li>Fixed asset and depreciation tracking</li>
                        <li>Sales and use tax</li>
                        <li>Sales and use tax compliance</li>
                    </ul>
                </div>

                <div className="accounting-details-card">
                    <h5>Analysis: Controller</h5>
                    <p>
                        BBS helps with reporting and metrics that will allow you to quickly see the
                        critical numbers allowing you to make quick and better decisions.
                    </p>
                    <ul>
                        <li>Dashboard</li>
                        <li>Process improvements</li>
                        <li>Evaluation of internal controls</li>
                        <li>Monthly financial statement preparation and analysis</li>
                        <li>Inventory management</li>
                        <li>Cash flow analysis</li>
                        <li>Debt covenant compliance calculations</li>
                        <li>Audit preparation</li>
                        <li>Tax liaison</li>
                        <li>Working capital management</li>
                        <li>Labor and overhead allocation</li>
                    </ul>
                </div>

                <div className="accounting-details-card">
                    <h5>Growth: CFO</h5>
                    <p>
                        Helps you every step of the way to provide financial and cash flow
                        projections, plan future growth, and determine ways to meet the needs of
                        your organization.
                    </p>
                    <ul>
                        <li>Budgeting and multi-period forecasting</li>
                        <li>Business expansion</li>
                        <li>Cash and financial planning</li>
                        <li>Bank financing and capital structure support</li>
                        <li>Insurance</li>
                        <li>Accounting support staff to assist during peak season</li>
                        <li>Succession planning</li>
                        <li>Increase enterprise value</li>
                    </ul>
                </div>
            </div>
        </>
    );
}