/** 
 *  @copyright 2023 Damian Cortes
 * license: Apache License 2.0
 */

/**
 * Components
 */
import SkillCard from "./SkillCard";

const skillItem = [
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: '/images/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
      imgSrc: '/images/mongodb.svg',
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/python.png',
      label: 'Python',
      desc: 'Backend language'
    },
    {
      imgSrc: '/images/java.png',
      label: 'Java',
      desc: 'Language'
    }
];

const Skill = () => {
    return (
        <section className="section">
            <div className="container">

                <h2 className="headline-2 reveal-up">
                  Herramientas esenciales que uso
                </h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[60ch] md:max-w-[80ch] reveal-up">
                  Descubra las potentes herramientas y tecnologías que uso para crear 
                  sitios web y aplicaciones excepcionales y de alto rendimiento.
                </p>
                
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({ imgSrc, label, desc }, key)=>  
                        (
                            <SkillCard 
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes="reveal-up"
                            />
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default Skill;