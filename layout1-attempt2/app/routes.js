import {
    index,
    route,
} from "@react-router/dev/routes"

export default [
    index("routes/Home.jsx"),
    route("about", "routes/About.jsx"),
    route("contact", "routes/Contact.jsx"),
    route("services", "routes/services/Service.jsx", [
        route("accounting-department", "routes/services/AccountingDepartment.jsx"),
        route("advisory", "routes/services/Advisory.jsx"),
        route("assurance", "routes/services/Assurance.jsx"),
        route("payroll", "routes/services/Payroll.jsx"),
    ]),
]

