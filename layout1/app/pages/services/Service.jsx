import "../../css/pages/services/Service.css"
import { Outlet } from "react-router"

export default function Service() {

    return (
        <>
            <div className="service-hero">
                Service Name
            </div>

            <Outlet />
        </>
    );
}