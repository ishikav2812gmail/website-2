import React, {useEffect,useState} from 'react'
import "./Navbar.css"
import menu_icon from '../../assets/menu-icon.png'
import logo from "../../assets/logo.png"
import { Link } from 'react-scroll';
function Navbar() {

  const [Sticky , setSticky]= useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY >500 ? setSticky(true) : setSticky(false);
    })
  },[]);
  const [mobileMenu,setMobileMenu]=useState(false);
  const toggleMenu=()=>{
    mobileMenu ? setMobileMenu (false) :setMobileMenu(true);   
  }
  return (
    <nav className={`Container ${Sticky? 'dark-nav' :' '}`}>
       <img  src={logo} className="logo"/> 
       <ul className={mobileMenu? '' :'hide-mobile-menu'}>
       <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
       <li><Link to="program" smooth={true} offset={-260} duration={500}>Program</Link></li>
       <li><Link to="about" smooth={true} offset={-150} duration={500}>About us</Link></li>
       <li><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
       <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
       
       <li><Link to="contact" smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>  
          
       </ul>
       <img src={menu_icon} className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
