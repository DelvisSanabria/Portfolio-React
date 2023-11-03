import  './../styles/components/_cardStyle.sass'
import  './../styles/components/_projetsMenu.sass'
import  './../styles/components/_skillsmenu.sass'
import  './../styles/components/_contactMenu.sass'
import  './../styles/components/_aboutMenu.sass'
import { Slider } from './Slider'
import htmlImg from './../assets/html.png';
import cssImg from './../assets/css.png';
import sassImg from './../assets/sass.png';
import tailwindImg from './../assets/tailwind.png';
import jsImg from './../assets/javascript.png';
import reactImg from './../assets/React.png';
import wpImg from './../assets/wordpress.png';
import GithubLogo from './svg/github'
import InstagramLogo from './svg/Instagram'
import TwitterLogo from './svg/Twitter'
import WhatsAppLogo from './svg/WhatsApp'

export function Content({selectedCircle}){
  const ImgSliders = [
    htmlImg,
    cssImg,
    sassImg,
    tailwindImg,
    jsImg,
    reactImg,
    wpImg,
  ];
  return(
    <>
    {selectedCircle === "circle__projets" && (
      <>
        <h2 className='titleProjets'>Proyectos:</h2>
        <div className="projetsContent">
          <p className="pcontent">
            Algunos de los proyectos en los que he trabajado son:
          </p>
          <div className="sliderprojetsContainer">
            <Slider imgSlides={ImgSliders}></Slider>
          </div>
        </div>
      </>
    )}
    {selectedCircle === "circle__skills" && (
      <>
        <h2 className='tittleSkills'>Habilidades:</h2>
        <div className="skillContent">
          <p className="pcontent">
            Estoy en constante aprendizaje; De las tecnologías
            que ya conozco están:
          </p>
          <Slider imgSlides={ImgSliders}></Slider>
        </div>
      </>
    )}
    {selectedCircle === "circle__contact" && (
      <>
        <h2 className='titleContact'>Contactame:</h2>
        <div className="contactContent">
          <p>
            Si quieres que agendemos una reunión para
            definir detalles. Llena el siguiente formulario y me contactare
            contigo.
          </p>
          <form>
            <label for="name">Nombre:
              <input type="text" name="nombre" id="nameInput" placeholder="Tu nombre Aqui"/>
            </label>
            <label for="name">Correo:
              <input type="email" name="correo" id="emailInput" placeholder="Tu Correo Aqui"/>
            </label>
            <label for="name">Cuentame algo mas sobre el tipo de pagina:
              <textarea name="contenid" id="contentBox" cols="30" rows="10"></textarea>
            </label>
            <div className="submitBtn">
              <input class="btn" type="submit" value="Enviar"/>
            </div>
          </form>
        </div>
      </>
    )}
    {selectedCircle === "circle__about" && (
      <>
        <h2 className='tittleabout'>Sobre Mi:</h2>
          <div className="aboutContent">
            <p>
              Soy un Desarrollador Web novato,inicie en
              este mundo hace poco pero me preparado cada día 
              más para ofrecerte lo mejor, me encantan las animaciones, 
              los colores pastel, y lo simple eso me define como
              Desarrollador.
            </p>
            <img className='profilePic' src="#" alt="profilePic"/>
            <div className="social__media">
              <div className='#'>
                <a href="#">
                  <GithubLogo></GithubLogo>
                </a>
              </div>
              <div className='socialHover'>
                <a href="#">
                  <InstagramLogo></InstagramLogo>
                </a>
              </div>
              <div className='socialHover'>
                <a href="#">
                  <TwitterLogo></TwitterLogo>
                </a>
              </div>
              <div className='socialHover'>
                <a href="#">
                  <WhatsAppLogo></WhatsAppLogo>
                </a>
              </div>
            </div>
          </div>
      </>
    )}
    </>
  )
}