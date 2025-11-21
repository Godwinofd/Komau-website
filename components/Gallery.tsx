import { Instagram } from "lucide-react";
import Link from "next/link";

const Gallery = () => {
    // Using generated images and reusing class images to fill the grid
    const images = [
        "/images/gallery-1.png",
        "/images/gallery-2.png",
        "/images/muay-thai.png",
        "/images/bjj.png",
        "/images/fundamentals.png",
        "/images/hero-bg.png",
    ];

    return (
        <section className="py-24 bg-dark-800 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-dark-950/50 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-bold tracking-wider uppercase mb-2">Gallery</h2>
                        <h3 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase leading-tight">
                            Life At <span className="text-white">KOMAU</span>
                        </h3>
                    </div>

                    <Link
                        href="https://instagram.com/komartialartsunit"
                        target="_blank"
                        className="hidden md:flex items-center text-white hover:text-primary transition-colors font-bold uppercase tracking-wide mt-4 md:mt-0 group"
                    >
                        <Instagram className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" /> Follow us on Instagram
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((src, index) => (
                        <div key={index} className="aspect-square relative group overflow-hidden rounded-xl bg-dark-700 border border-white/5 shadow-lg">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                                style={{ backgroundImage: `url('${src}')` }}
                            />
                            <div className="absolute inset-0 bg-dark-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                                <Instagram className="text-white w-8 h-8 transform scale-0 group-hover:scale-100 transition-transform duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275)" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link
                        href="https://instagram.com/komartialartsunit"
                        target="_blank"
                        className="inline-flex items-center text-white hover:text-primary transition-colors font-bold uppercase tracking-wide"
                    >
                        <Instagram className="mr-2 w-5 h-5" /> Follow us on Instagram
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
