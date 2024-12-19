/** 
 *  @copyright 2023 Damian Cortes
 * license: Apache License 2.0
 */

/**
 *  Components
 */
import ProjectCard from './ProjectCard';

const works = [
    {
      imgSrc: '/images/project-3.jpg',
      title: 'Ejemplo de portafolio',
      tags: ['Development', 'API'],
      projectLink: ''
    },
];

const Work = () => {
    return (
        <section id="work" className="section">
            <div className="container">

                <h2 className="headline-2 mb-8 reveal-up">
                  Destacados de mi portafolio
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({ imgSrc, title, tags, projectLink }, key) =>(
                        <ProjectCard 
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        classes="reveal-up"
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Work;