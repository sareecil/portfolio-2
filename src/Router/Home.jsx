import Navbar from "./Navbar";
import 'animate.css';
import me from '../assets/img/me.png'
import work1 from '../assets/img/photosnap.png';
import work2 from '../assets/img/news.png';
import work3 from '../assets/img/single-page.png';
import social from '../assets/img/socialmedia.png'
import mail from '../assets/img/email.svg'
import lin from '../assets/img/linkedin-in.svg'
import git from '../assets/img/github.svg'
import inst from '../assets/img/instagram-logo.svg'

export default function Home() {
    return(
        <>
            <div className="h-content">
                <section id="home">
                    <div className="n-title">
                        <h1 className="bck animate_animated animate__backInLeft">FRONT-END</h1>
                        <h1 className="ups animate_animated animate__animate__backInRight">DEVELOPER</h1>
                        <p>Hayalinizdeki web sitesini gerçeğe dönüştürüyorum</p>
                    </div>
                </section>
                <section id="about">
                    <div className="about">
                        <div className="about-content">
                            <div className="about-title">
                                <h1 className="animate_animated animate__fadeInTopLeft">hakkımda</h1>
                            </div>
                            <p>Atatürk Üniversitesi Bilgisayar Programcılığı bölümü öğrencisiyim. 2021 yılında Siliconmade Academy’de FullStack programlama eğitimi aldım. Sonrasında Acunmedya Akademi de Frontend alanında kendimi geliştirdim. Bu alana daha yatkın olduğumu farkedince kendimi geliştirmeye odaklandım.</p> 
                            <p>Şimdi yazılım dünyasına daha gerçek projelerle devam etmek istiyorum. Kendimi her gün daha fazla geliştireceğim bir alanda, gerçek projelerle elimden gelenin en iyisini yapmak için sabırsızlanıyorum</p>
                        </div>
                        <img src={me} alt="" />
                    </div>
                </section>
                <section id="education">
                    <div className="education">
                        <div className="education-title">
                            <h1>eğitimlerim</h1>
                        </div>
                        <div className="education-content">
                            <h3>- Acunmedya Akademi Frontend Eğitimi -</h3>
                            <p>Bu eğitimde;</p>
                            <ul>
                                <li>HTML, CSS ve Javacsript ile Figma üzerinden tasarımlar yaptım.</li>
                                <li>Yaptığım tasarımları React ile daha dinamik hale getirdim. Bu sayede React üzerinde pratikler yapmış oldum.</li>
                                <li>React componentleri ile sayfaların daha hızlı render olmasını sağladım.</li>
                            </ul>
                            <h3>- Siliconmade Academy FullStack Developer-</h3>
                            <p>Bu eğitimde;</p>
                            <ul>
                                <li>HTML, CSS ve Javacsript ile Figma üzerinden tasarımlar yaptım.</li>
                                <li>Yaptığım tasarımları React ile daha dinamik hale getirdim. Bu sayede React üzerinde pratikler yapmış oldum.</li>
                                <li>React componentleri ile sayfaların daha hızlı render olmasını sağladım.</li>
                            </ul>
                            <h3>- Atatürk Üniversitesi -</h3>
                            <ul>
                                <li>Bilgisayar Programcılığı</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section id="work">
                    <div className="work">
                        <div className="work-content">
                            <div className="work-title">
                                <h1>projeler</h1>
                            </div>
                            <p>Eğitimlerim boyunca yaptığım projelerin kodlarını <a href="https://github.com/sareecil" target='_blank' rel='noreferrer'>Github</a> adresim üzerinden inceleyebilirsiniz. Ayrıca yayına aldığım projeleri aşağıda paylaşıyorum. Henüz responsive değil üzerinde çalışıyorum.</p>
                            <div className="img">
                                <div className="img-part">
                                  <h3><a href="https://sareecil-photosnap.netlify.app/" target='_blank' rel='noreferrer'>Photosnap Figma Tasarım</a></h3>
                                  <img src={work1} alt="" />
                                </div>
                                <div className="img-part">
                                  <h3><a href="https://sareecil-news.netlify.app/" target='_blank' rel='noreferrer'>News Figma Tasarım</a></h3>
                                  <img src={work2} alt="" />
                                </div>
                                <div className="img-part">
                                  <h3><a href="https://sarecil-single-page.netlify.app/" target='_blank' rel='noreferrer'>Single Page Figma Tasarım</a></h3>
                                  <img src={work3} alt="" />
                                </div>
                                <div className="img-part">
                                  <h3><a href="https://sarecil-socialmedia.netlify.app/" target='_blank' rel='noreferrer'>Socail Media</a></h3>
                                  <img src={social} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="contact">
                    <div className="contact">
                        <h1>iletişim</h1>
                        <div className="mail-box box">
                          <img src={mail} alt="" />
                          <a href='mailto:sarecills@gmail.com'>sarecills@gmail.com</a>
                        </div>
                        <div className="box">
                          <img src={lin} alt="" />
                          <a href='https://www.linkedin.com/in/sareecil/' target='blank'>https://www.linkedin.com/in/sareecil/</a>
                        </div>
                        <div className="box">
                          <img src={git} alt="" />
                          <a href='https://github.com/sareecil' target='blank'>https://github.com/sareecil</a>
                        </div>
                        <div className="box">
                          <img src={inst} alt="" />
                          <a href='https://www.instagram.com/sarecil/' target='blank'>https://www.instagram.com/sarecil/</a>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}