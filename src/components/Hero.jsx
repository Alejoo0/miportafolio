/** 
 *  @copyright 2023 Damian Cortes
 * license: Apache License 2.0
 */

/**
 * 
 * Components
 */
import { ButtonPrimary } from "./Button";
import { ButtonOutline } from "./Button";

const Hero = () => {
    return (
        <section
        id="home"
        className="pt-28 lg:pt-36"
        >
            <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">

                <div>
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img src="/images/avatar-1.jpg"
                            width={40}
                            height={40}
                            alt="Damian Cortes portrait"
                            className="img-cover"
                            />
                        </figure>
                        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>
                            Disponible para trabajar
                        </div>
                
                    </div>

                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                        Construyendo sitios web modernos y escalables para el futuro
                    </h2>

                    <div className="flex items-center gap-3">
                        <ButtonPrimary 
                            label="Descargar CV"
                            icon ="download"
                        />


                        <ButtonOutline
                            href="#about"
                            label="Desplácese hacia abajo"
                            icon="arrow_downward"
                        />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;