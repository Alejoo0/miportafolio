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
            <div className="container items-center lg:gap-10">

                <div>
                    <div className="flex items-center gap-3">
                        
                        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>
                            Disponible para trabajar
                        </div>
                
                    </div>

                    <h2 className="headline-1 max-w-[15ch] mt-5 mb-8 lg:mb-10">

                    </h2>
                </div>
            </div>

        </section>
    );
};

export default Hero;