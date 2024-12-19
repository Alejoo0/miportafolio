/** 
 *  @copyright 2023 Damian Cortes
 * license: Apache License 2.0
 */

/**
 * 
 * Components
 */

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

                </div>
            </div>

        </section>
    );
};

export default Hero;