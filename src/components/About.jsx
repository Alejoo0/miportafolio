/** 
 *  @copyright 2023 Damian Cortes
 * license: Apache License 2.0
 */

/**
 * 
 * Components
 */
import { ButtonPrimary } from "./Button";


const aboutItems = [
    {
      label: 'Proyecto realizado',
      number: 5
    },
    {
      label: 'Años de experiencia',
      number: 0
    }
];

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">   
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                    ¡Bienvenidos! Soy Damián Cortés, estudiante de Ingeniería en informática en la
                    Universidad Técnica Federico Santa Maria, actualmente con el 3er año finalizado,
                    Estoy en busqueda de Práctica y estoy interesado en Redes y Ciberseguridad,
                    Ciencia de datos y Desarrollo de Software.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 md:gap-7">

                        {
                            aboutItems.map(({ label, number }, key)=>  (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold md-text-4xl">{number}</span>
                                        <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                    </div>

                                    <p className="text-sm text-zinc-400">{label}</p>
                                </div>
                            ))
                        }

                        <div className="flex items-center ml-auto">
                            <ButtonPrimary 
                                label="Descargar CV"
                                icon ="download"
                            />
                        </div>

                    </div>

                </div>
            </div>
                   
        </section>
    )
}

export default About;