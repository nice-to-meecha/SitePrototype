import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    isRouteErrorResponse,
} from "react-router"
import { StrictMode, useEffect } from 'react'
import { useGSAP } from "@gsap/react"
import NavBar from "./components/NavBar.jsx"
import Footer from "./components/Footer.jsx"

import "./css/root.css"

function renderStmt(page) {
    console.log(`Rendering ${page}`);
}

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
                    <NavBar renderStmt={renderStmt} />
                    <main>
                        {/* children will be the root Component, ErrorBoundary, or HydrateFallback */}
                        { children }
                        <ScrollRestoration />
                        <Scripts />
                    </main>
                    <Footer renderStmt={renderStmt} />
                </body>
            </html>
        </StrictMode>
    );
  }

export default function App() {

    // console.log("App is running");

    // useEffect(() => {
    //     console.log("Running handleToggleNavBarOnScroll");
    //     // window.addEventListener("scroll", (window) => {
    //     //     console.log(`Scroll Y: ${window.scrollY}`);
    //     // });

    //     // return () => {
    //     //     window.removeEventListener("scroll");
    //     // }

    // }, []);

    return (
        <Outlet />
    );
}

export function ErrorBoundary({ error, }) {
    if (isRouteErrorResponse(error)) {
        return (
            <>
            <h1>
                {error.status} {error.statusText}
            </h1>
            <p>{error.data}</p>
            </>
        );
    } else if (error instanceof Error) {
    return (
        <div>
            <h1>Error</h1>
            <p>{error.message}</p>
            <p>The stack trace is:</p>
            <pre>{error.stack}</pre>
        </div>
        );
    } else {
        return <h1>Unknown Error</h1>;
    }
}

export function HydrateFallback() {

    return (
        <>
            <h1>Loading...</h1>
        </>
    )
}

export function links() {
    return [
        {
            rel: "icon",
            href: "/BBS-logo.svg",
            sizes:"any",
        },
        {
            rel: "icon",
            href: "/BBS-logo.svg",
            type: "image/svg+xml",
        },
        // TODO - For Android browsers, I think. Add manifest later
        // {
        //     rel: "manifest",
        //     href: "/manifest.webmanifest",
        // },
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
