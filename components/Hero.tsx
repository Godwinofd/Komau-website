import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-dark-950/80 via-dark-900/50 to-dark-950 z-10" />
                <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-105 animate-fade-in"
                    style={{ backgroundImage: "url('/images/hero-bg.png')" }}
                >
                    <div className="w-full h-full bg-dark-950/30 backdrop-blur-[2px]" />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 text-center flex flex-col items-center justify-center h-full pt-20">
                <div className="inline-block mb-6 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
                    <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs md:text-sm">Est. 2024 • Oxford</span>
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-white mb-6 md:mb-8 tracking-tighter uppercase leading-[0.9] drop-shadow-2xl animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
                    Begin Your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent relative inline-block">
                        Journey
                        <span className="absolute -inset-1 bg-primary/20 blur-xl -z-10 rounded-full opacity-50"></span>
                    </span>
                </h1>

                <p className="text-base sm:text-lg md:text-2xl text-text-secondary max-w-2xl mx-auto mb-8 md:mb-12 font-light leading-relaxed animate-fade-in-up opacity-0 px-4" style={{ animationDelay: '0.5s' }}>
                    Muay Thai and Brazilian Jiu-Jitsu in a structured, no-nonsense environment.
                    <span className="block text-white font-medium mt-2">Join the unit today.</span>
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto animate-fade-in-up opacity-0" style={{ animationDelay: '0.7s' }}>
                    <Link
                        href="#contact"
                        className="w-full sm:w-auto btn-primary px-8 py-4 md:px-10 md:py-5 rounded-full shadow-lg shadow-primary/20 text-center"
                    >
                        Start Free Trial
                    </Link>
                    <Link
                        href="#timetable"
                        className="w-full sm:w-auto btn-secondary px-8 py-4 md:px-10 md:py-5 rounded-full text-center"
                    >
                        View Timetable
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-pulse-slow">
                <div className="flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                    <span className="text-[10px] md:text-xs uppercase tracking-widest text-text-secondary">Scroll</span>
                    <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
