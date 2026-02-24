import { Outlet } from "react-router-dom";
import Header from "../Components/header";


export default function AppLayout() {
    return (
        <>
            <header><Header /></header>
            <main>
                <Outlet />
            </main>
            
        </>
    )
}