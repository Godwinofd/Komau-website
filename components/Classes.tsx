import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Classes = () => {
    const classes = [
        {
            title: "Muay Thai",
            description: "The Art of Eight Limbs. Master striking using fists, elbows, knees, and shins. High-intensity conditioning meets technical precision.",
            features: ["Pad Work & Bag Work", "Clinch Techniques", "Sparring (Advanced)", "Cardio & Conditioning"],
            image: "/images/muay-thai.png",
            color: "from-primary to-red-900",
            day: "Monday"
        },
        {
            title: "Brazilian Jiu-Jitsu",
            description: "Grappling and ground fighting. Learn to control opponents through leverage, joint locks, and chokeholds. The ultimate self-defense.",
            features: ["Gi & No-Gi Classes", "Positional Drilling", "Live Rolling", "Submission Defense"],
            image: "/images/bjj.png",
            color: "from-accent to-orange-900",
            day: "Tuesday"
        },
        {
            title: "Fundamentals",
            description: "Perfect for beginners. We break down the basics of movement, defense, and striking in a safe, controlled environment.",
            features: ["No Experience Needed", "Focus on Form", "Safety First", "Build Confidence"],
            image: "/images/fundamentals.png",
            color: "from-gray-700 to-gray-900",
            day: "Monday"
        },
    ];

    return (
        <section id="classes" className="py-24 bg-dark-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-bold tracking-wider uppercase mb-2">Our Programs</h2>
                    <h3 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase leading-tight">
                        Choose Your <span className="text-white">Path</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {classes.map((cls, index) => (
                        <div
                            key={index}
                            className="group relative bg-dark-800 rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Image Area */}
                            <div className="h-64 w-full relative overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url('${cls.image}')` }}
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${cls.color} opacity-60 mix-blend-multiply`}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-transparent to-transparent"></div>

                                <h4 className="absolute bottom-4 left-6 text-3xl font-heading font-bold text-white uppercase z-10 drop-shadow-lg">{cls.title}</h4>
                            </div>

                            <div className="p-8 pt-4">
                                <p className="text-text-secondary mb-6 text-sm leading-relaxed">
                                    {cls.description}
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {cls.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-gray-300">
                                            <span className="w-1.5 h-1.5 bg-white/50 rounded-full mr-3"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href={`?day=${cls.day}#timetable`}
                                    className="inline-flex items-center text-white font-bold uppercase tracking-wide hover:text-primary transition-colors group-hover:translate-x-2 duration-300 text-sm"
                                >
                                    View Schedule <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Classes;
