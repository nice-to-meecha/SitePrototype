import {
    Links,
    Meta,
    Outlet,
} from "react-router"
import { StrictMode } from 'react'
import NavBar from "./components/NavBar.jsx"
import Footer from "./components/Footer.jsx"

import "./css/root.css"

export function Layout({ children }) {

    return (
        <StrictMode>
            <html lang="en">
                <head>
                    <Meta />
                    <Links />
                    <title>BBS</title>
                </head>
                <body>
                    <NavBar />
                    <main>
                        {/* children will be the root Component, ErrorBoundary, or HydrateFallback */}
                        { children }
                        
                    </main>
                    <Footer />
                </body>
            </html>
        </StrictMode>
    );
  }

export default function App() {
    return (
        <Outlet />
    );
}

export function links() {
    return [
        {
            rel: "icon",
            type: "image/svg+xml",
            href: "/BBS-logo.svg",
        },
        {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
        },
        {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: "anonymous",
        },
        {
            href: "https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
            rel: "stylesheet",
        }
    ];
}

export function meta() {
    return [
        {
            charset: "UTF-8",
        },
        {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
        },
    ];
}
