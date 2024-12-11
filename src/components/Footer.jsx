/** 
 *  @copyright 2023 Damian Cortes
 * license: Apache License 2.0
 */

/**
 * Components
 */
import { ButtonPrimary } from './Button';

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Reviews',
      href: '#reviews'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
];
  
const socials = [
    {
      label: 'GitHub',
      href: 'https://www.github.com/codewithsadee-org'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/codewithsadee'
    },
    {
      label: 'Twitter X',
      href: 'https://x.com/codewithsadee_'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/codewithsadee'
    },
    {
      label: 'CodePen',
      href: 'https://codepen.io/codewithsadee'
    }
];

const Footer = () => {
    return (
        <footer className="section">
            <div className="container">

                <div className="">

                    <div className="">

                        <h2 className="headline-1">
                            Let&apos;s work together today!
                        </h2>


                        <ButtonPrimary 
                        href="mailto:damian@codewithsadee.org"
                        label="Start project"
                        icon="chevron_right"
                        />
                    </div>

                    <div className="">
                        
                        <div>
                          <p className="">Sitemap</p>

                          <ul>
                            {sitemap.map(({ label, href}, key)=>(
                              <li key={key}>
                                <a 
                                href={href}
                                className=""
                                >
                                  {label}
                                  </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <p className="">Socials</p>

                          <ul>
                            {socials.map(({ label, href}, key)=>(
                              <li key={key}>
                                <a 
                                href={href}
                                className=""
                                >
                                  {label}
                                  </a>
                              </li>
                            ))}
                          </ul>
                        </div>

                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;