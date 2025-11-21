import { Shield, Target, Users } from "lucide-react";

const About = () => {
    const features = [
        {
            icon: <Target className="w-8 h-8 text-primary" />,
            title: "Precision & Technique",
            description: "We focus on the details that make the difference. Learn authentic Muay Thai and BJJ from experienced coaches.",
        },
        {
            icon: <Shield className="w-8 h-8 text-primary" />,
            title: "Discipline & Strength",
            description: "Build mental and physical resilience. Our training is designed to push your limits in a supportive environment.",
        },
        {
            icon: <Users className="w-8 h-8 text-primary" />,
            title: "Community Driven",
            description: "Join a brotherhood of like-minded individuals. We train together, struggle together, and grow together.",
        },
    ];

    return (
        <section id="about" className="py-20 bg-dark-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Text Content */}
                    <div>
                        <h2 className="text-primary font-bold tracking-wider uppercase mb-2">About KOMAU</h2>
                        <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 uppercase leading-tight">
                            More Than Just A Gym. <br />
                            We Are A <span className="text-accent">Unit</span>.
                        </h3>
                        <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                            KO MartialartsUnit was founded on the principles of respect, discipline, and continuous improvement.
                            Whether you are stepping onto the mats for the first time or preparing for your next fight,
                            we provide the guidance and structure you need to succeed.
                        </p>

                        <div className="space-y-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="bg-dark-800 p-3 rounded-lg border border-dark-600">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-heading font-bold text-white mb-2">{feature.title}</h4>
                                        <p className="text-text-secondary">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Image Grid/Placeholder */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="h-64 bg-dark-800 rounded-lg border border-dark-600 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/muay-thai.png')" }}></div>
                                <div className="h-48 bg-dark-800 rounded-lg border border-dark-600 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/bjj.png')" }}></div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="h-48 bg-dark-800 rounded-lg border border-dark-600 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/fundamentals.png')" }}></div>
                                <div className="h-64 bg-dark-800 rounded-lg border border-dark-600 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/coach.png')" }}></div>
                            </div>
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
