import '../index.css'
import { Link, ScrollLink, animateScroll as scroll } from 'react-scroll';




export default function Navbar() {
    return(
        <>
            <div className="header">
                <section id='home'>
                    <div className="navbar">
                        <h2>SARE CİL</h2>
                        <div className="links">
                            <ul>
                                <Link to="home" smooth={true} duration={1000}>Anasayfa</Link>
                                <Link to="about" smooth={true} duration={1000}>Hakkımda</Link>
                                <Link to="education" smooth={true} duration={1000}>Eğitimlerim</Link>
                                <Link to="work" smooth={true} duration={1000}>Projeler</Link>
                                <Link to="contact" smooth={true} duration={1000}>İletişim</Link>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}