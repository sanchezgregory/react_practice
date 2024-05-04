import { Outlet } from "react-router-dom"
import AppNav from "./AppNav"
import Footer from "./Footer"

export default function Layout() {
    return (
        <>
        
            <main>
                Main             
                <Outlet />
            </main>
            <Footer />
        </>
    )
}