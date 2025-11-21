import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-dark-900 border-t border-dark-700 py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-3xl font-heading font-bold text-white tracking-wider mb-4 block">
                            KOMAU
                        </Link>
                        <p className="text-text-secondary max-w-sm">
                            Forging strength and discipline through the arts of Muay Thai and Brazilian Jiu-Jitsu.
                            Join the unit.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wide mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="#about" className="text-text-secondary hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#classes" className="text-text-secondary hover:text-primary transition-colors">Classes</Link></li>
                            <li><Link href="#timetable" className="text-text-secondary hover:text-primary transition-colors">Timetable</Link></li>
                            <li><Link href="#memberships" className="text-text-secondary hover:text-primary transition-colors">Memberships</Link></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wide mb-6">Follow Us</h4>
                        <div className="flex space-x-4">
                            <Link href="#" className="bg-dark-800 p-3 rounded-full hover:bg-primary hover:text-white text-gray-400 transition-all">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="bg-dark-800 p-3 rounded-full hover:bg-primary hover:text-white text-gray-400 transition-all">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="bg-dark-800 p-3 rounded-full hover:bg-primary hover:text-white text-gray-400 transition-all">
                                <Twitter className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-dark-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} KO MartialartsUnit. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">
                        Website by <span className="text-white font-bold">BuildIQ</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
