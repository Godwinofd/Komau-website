import { Award, Star } from "lucide-react";

const Coach = () => {
    return (
        <section className="py-20 bg-dark-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Image */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="aspect-[3/4] rounded-lg overflow-hidden border border-dark-600 relative">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: "url('/images/coach.png')" }}
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60"></div>
                        </div>
                        {/* Decorative box */}
                        <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-2 border-primary -z-10 rounded-lg hidden md:block"></div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-primary font-bold tracking-wider uppercase mb-2">Head Coach</h2>
                        <h3 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase leading-tight mb-6">
                            Meet The <span className="text-accent">Master</span>
                        </h3>

                        <h4 className="text-2xl font-bold text-white mb-4">Kru Alex &quot;The Iron&quot; Silva</h4>

                        <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                            With over 15 years of competitive experience in Muay Thai and Brazilian Jiu-Jitsu,
                            Coach Alex brings a wealth of knowledge to KOMAU. His philosophy is simple:
                            respect the art, respect your training partners, and never stop learning.
                        </p>

                        <div className="space-y-6 mb-8">
                            <div className="flex items-start space-x-4">
                                <Award className="w-6 h-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h5 className="text-white font-bold uppercase">Professional Fighter</h5>
                                    <p className="text-sm text-text-secondary">Former Regional Muay Thai Champion with a pro record of 25-4.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Star className="w-6 h-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h5 className="text-white font-bold uppercase">Certified Instructor</h5>
                                    <p className="text-sm text-text-secondary">Black Belt in BJJ under Master Renzo Gracie lineage.</p>
                                </div>
                            </div>
                        </div>

                        <blockquote className="border-l-4 border-primary pl-6 italic text-xl text-gray-300">
                            &quot;I don&apos;t just teach you how to fight. I teach you how to control your mind and body.&quot;
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Coach;
