import { MapPin, Phone, Mail, Send } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-dark-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info & Map */}
                    <div>
                        <h2 className="text-primary font-bold tracking-wider uppercase mb-2">Get In Touch</h2>
                        <h3 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase leading-tight mb-8">
                            Start Your <span className="text-accent">Journey</span>
                        </h3>
                        <p className="text-text-secondary text-lg mb-10">
                            Ready to train? Have questions? Drop by the gym or send us a message.
                            Your first class is on us.
                        </p>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-start space-x-4">
                                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h5 className="text-white font-bold uppercase">Location</h5>
                                    <p className="text-text-secondary">123 Fight Street, Combat City, London, UK</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h5 className="text-white font-bold uppercase">Phone</h5>
                                    <p className="text-text-secondary">+44 123 456 7890</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Mail className="w-6 h-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h5 className="text-white font-bold uppercase">Email</h5>
                                    <p className="text-text-secondary">info@komau.co.uk</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="w-full h-64 bg-dark-800 rounded-lg border border-dark-600 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('/images/hero-bg.png')" }}></div>
                            <span className="relative z-10 text-white font-bold uppercase tracking-wider bg-dark-900/80 px-4 py-2 rounded">Map Placeholder</span>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-dark-800 p-8 rounded-2xl border border-dark-600">
                        <h4 className="text-2xl font-heading font-bold text-white mb-6 uppercase">Book Your Free Trial</h4>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-gray-400 mb-2 uppercase">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-dark-900 border border-dark-600 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-bold text-gray-400 mb-2 uppercase">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full bg-dark-900 border border-dark-600 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                        placeholder="+44 ..."
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-gray-400 mb-2 uppercase">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-dark-900 border border-dark-600 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="interest" className="block text-sm font-bold text-gray-400 mb-2 uppercase">Interested In</label>
                                <select
                                    id="interest"
                                    className="w-full bg-dark-900 border border-dark-600 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                                >
                                    <option>Muay Thai</option>
                                    <option>Brazilian Jiu-Jitsu</option>
                                    <option>Both / Unsure</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-gray-400 mb-2 uppercase">Message (Optional)</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-dark-900 border border-dark-600 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="Tell us about your experience level..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-red-600 text-white font-bold uppercase py-4 rounded-md tracking-wide transition-colors flex items-center justify-center"
                            >
                                Send Message <Send className="ml-2 w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
