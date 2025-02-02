import {
    index,
    route,
} from "@react-router/dev/routes"

export default [
    index("./pages/Home.jsx"),
    route("about", "./pages/About.jsx"),
    route("contact", "./pages/Contact.jsx"),
    route("services", "./pages/services/Service.jsx", [
        route("accounting-department", "./pages/services/AccountingDepartment.jsx"),
        route("advisory", "./pages/services/Advisory.jsx"),
        route("assurance", "./pages/services/Assurance.jsx"),
        route("payroll", "./pages/services/Payroll.jsx"),
    ]),
]
