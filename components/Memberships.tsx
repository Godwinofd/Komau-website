import { Check } from "lucide-react";
import Link from "next/link";

const Memberships = () => {
    const plans = [
        {
            name: "Plan A",
            price: "30",
            frequency: "1x / Week",
            features: ["4 Classes per month", "Access to Muay Thai OR BJJ", "No contract", "Community Access"],
            popular: false,
        },
        {
            name: "Plan B",
            price: "40",
            frequency: "2x / Week",
            features: ["8 Classes per month", "Mix & Match Styles", "Open Mat Access", "Discounts on Gear"],
            popular: true,
        },
        {
            name: "Plan C",
            price: "50",
            frequency: "3x / Week",
            features: ["12 Classes per month", "Full Access to All Classes", "Priority Event Booking", "Free T-Shirt on Signup"],
            popular: false,
        },
    ];

    return (
        <section id="memberships" className="py-24 bg-dark-950">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-bold tracking-wider uppercase mb-2">Membership Options</h2>
                    <h3 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase leading-tight">
                        Invest In <span className="text-white">Yourself</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto px-2 md:px-0">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 group ${plan.popular
                                ? 'bg-dark-800 border border-primary/50 shadow-2xl shadow-primary/10 scale-105 z-10 hover:shadow-primary/20 hover:-translate-y-2'
                                : 'bg-dark-900 border border-white/5 hover:border-white/10 hover:shadow-xl hover:shadow-black/50 hover:-translate-y-2'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold uppercase px-4 py-1.5 rounded-full tracking-widest shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="text-center mb-8 pt-4">
                                <h4 className="text-lg font-bold text-text-secondary uppercase mb-2 tracking-widest group-hover:text-white transition-colors">{plan.name}</h4>
                                <div className="flex items-baseline justify-center text-white">
                                    <span className="text-2xl font-bold">€</span>
                                    <span className="text-6xl font-heading font-bold tracking-tighter">{plan.price}</span>
                                </div>
                                <p className="text-sm text-gray-400 mt-2">{plan.frequency}</p>
                            </div>

                            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8 group-hover:via-white/20 transition-colors"></div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-gray-300">
                                        <div className={`p-1 rounded-full mr-3 shrink-0 ${plan.popular ? 'bg-primary/20 text-primary' : 'bg-white/10 text-white group-hover:bg-primary/10 group-hover:text-primary transition-colors'}`}>
                                            <Check className="w-3 h-3" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="#contact"
                                className={`w-full block text-center py-4 rounded-xl font-bold uppercase tracking-wide transition-all ${plan.popular
                                    ? 'btn-primary'
                                    : 'btn-secondary'
                                    }`}
                            >
                                Choose Plan
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Memberships;
