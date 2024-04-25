import { Outlet } from "react-router-dom"
import AppNav from "./AppNav"
import Footer from "./Footer"

export default function Layout() {
    return (
        <>
            <AppNav />
            <main>
                Main             
                <Outlet />
            </main>
            <Footer />
        </>
    )
}