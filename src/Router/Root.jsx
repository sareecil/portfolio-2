import { Link, Outlet } from 'react-router-dom'
import '../index.css'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Root() {
    return (
        <>
            <div className="container">
                <Navbar/>
                <div className="content">
                    <Outlet/>
                </div>
                
            </div>
            
        </>
    )
}