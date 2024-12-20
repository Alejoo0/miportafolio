/** 
 *  @copyright 2023 Damian Cortes
 * license: Apache License 2.0
 */

/** 
 *  Node Modules
 */
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const ActiveBox      = useRef();
    
  const initActiveBox = () => {
    ActiveBox.current.style.top    = lastActiveLink.current.offsetTop    + 'px';
    ActiveBox.current.style.left   = lastActiveLink.current.offsetLeft   + 'px';
    ActiveBox.current.style.width  = lastActiveLink.current.offsetWidth  + 'px';
    ActiveBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
  };

  useEffect(initActiveBox, []);
  window.addEventListener('resize',initActiveBox);

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove('active');
    event.target.classList.add('active');
    lastActiveLink.current = event.target;

    ActiveBox.current.style.top    = event.target.offsetTop    + 'px';
    ActiveBox.current.style.left   = event.target.offsetLeft   + 'px';
    ActiveBox.current.style.width  = event.target.offsetWidth  + 'px';
    ActiveBox.current.style.height = event.target.offsetHeight + 'px';
  };
  
  const navItems = [
        {
          label: 'Home',
          link: '#home',
          className: 'nav-link active',
          ref: lastActiveLink
        },
        {
          label: 'About',
          link: '#about',
          className: 'nav-link'
        },
        {
          label: 'Work',
          link: '#work',
          className: 'nav-link'
        },/** 
        {
          label: 'Reviews',
          link: '#reviews',
          className: 'nav-link'
        },
        */
        {
          label: 'Contact',
          link: '#contact',
          className: 'nav-link md:hidden'
        }
  ];

  return (
    <nav className={'navbar ' + (navOpen ? 'active' : '')}>
        {
          navItems.map(({ label, link, className, ref }, key)=> (
                    <a 
                    href={link}
                    key={key}
                    ref={ref} 
                    className={className}
                    onClick={activeCurrentLink}
                    >
                      {label}   
                    </a>
          ))
        }
        <div className="active-box"
        ref={ActiveBox}
        ></div>
    </nav>
  )
}

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired
}

export default Navbar;
