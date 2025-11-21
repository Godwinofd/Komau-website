"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Clock, MapPin } from "lucide-react";

const TimetableContent = () => {
    const [activeDay, setActiveDay] = useState("Monday");
    const searchParams = useSearchParams();

    const schedule = [
        { day: "Monday", classes: [{ time: "18:30", name: "Muay Thai Fundamentals", type: "mt", duration: "60 min" }] },
        { day: "Tuesday", classes: [{ time: "18:15", name: "Muay Thai All Levels", type: "mt", duration: "75 min" }, { time: "19:30", name: "BJJ Gi", type: "bjj", duration: "90 min" }] },
        { day: "Wednesday", classes: [{ time: "18:30", name: "BJJ Basics", type: "bjj", duration: "60 min" }] },
        { day: "Thursday", classes: [{ time: "18:15", name: "Muay Thai All Levels", type: "mt", duration: "75 min" }, { time: "19:30", name: "No-Gi Grappling", type: "bjj", duration: "90 min" }] },
        { day: "Friday", classes: [{ time: "18:00", name: "Open Mat", type: "mix", duration: "120 min" }] },
        { day: "Saturday", classes: [{ time: "10:00", name: "Muay Thai Sparring", type: "mt", duration: "90 min" }, { time: "11:30", name: "BJJ Open Mat", type: "bjj", duration: "90 min" }] },
        { day: "Sunday", classes: [] },
    ];

    useEffect(() => {
        const dayParam = searchParams.get("day");
        if (dayParam) {
            // Capitalize first letter to match schedule keys
            const formattedDay = dayParam.charAt(0).toUpperCase() + dayParam.slice(1).toLowerCase();
            const dayExists = schedule.find(s => s.day === formattedDay);
            if (dayExists) {
                setActiveDay(formattedDay);
            }
        }
    }, [searchParams]);

    const activeSchedule = schedule.find(s => s.day === activeDay);

    return (
        <section id="timetable" className="py-24 bg-dark-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-dark-900 to-transparent opacity-50 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-bold tracking-wider uppercase mb-2">Weekly Schedule</h2>
                    <h3 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase leading-tight">
                        Train <span className="text-white">Hard</span>. Train <span className="text-white">Often</span>.
                    </h3>
                </div>

                {/* Desktop Tabs - Removed inline-flex to fix mobile conflict */}
                <div className="hidden md:flex justify-center mb-12 space-x-2 bg-dark-900/50 p-2 rounded-full backdrop-blur-sm border border-white/5 mx-auto w-full max-w-4xl">
                    {schedule.map((item) => (
                        <button
                            key={item.day}
                            onClick={() => setActiveDay(item.day)}
                            className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 ${activeDay === item.day
                                ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20"
                                : "text-text-secondary hover:text-white hover:bg-white/5"
                                }`}
                        >
                            {item.day.slice(0, 3)}
                        </button>
                    ))}
                </div>

                {/* Mobile Day Selector */}
                <div className="md:hidden flex overflow-x-auto pb-4 mb-8 space-x-4 px-2 scrollbar-hide">
                    {schedule.map((item) => (
                        <button
                            key={item.day}
                            onClick={() => setActiveDay(item.day)}
                            className={`flex-shrink-0 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all ${activeDay === item.day
                                ? "bg-primary text-white"
                                : "bg-dark-800 text-text-secondary border border-dark-700"
                                }`}
                        >
                            {item.day}
                        </button>
                    ))}
                </div>

                {/* Schedule List */}
                <div className="max-w-4xl mx-auto min-h-[300px]">
                    {activeSchedule && activeSchedule.classes.length > 0 ? (
                        <div className="space-y-4">
                            {activeSchedule.classes.map((cls, idx) => (
                                <div
                                    key={idx}
                                    className="group bg-dark-800/50 backdrop-blur-md border border-white/5 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between hover:border-primary/30 transition-all duration-300 hover:bg-dark-800"
                                >
                                    <div className="flex items-center gap-6 mb-4 md:mb-0 w-full md:w-auto">
                                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold font-heading ${cls.type === 'mt' ? 'bg-primary/10 text-primary' : cls.type === 'bjj' ? 'bg-accent/10 text-accent' : 'bg-white/10 text-white'
                                            }`}>
                                            {cls.time}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white uppercase mb-1">{cls.name}</h4>
                                            <div className="flex items-center text-sm text-text-secondary gap-4">
                                                <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {cls.duration}</span>
                                                <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> Main Mat</span>
                                            </div>
                                        </div>
                                    </div>

                                    <Link
                                        href="#contact"
                                        className="w-full md:w-auto px-6 py-3 rounded-lg border border-white/10 hover:bg-white/10 text-white text-sm font-bold uppercase tracking-wide transition-colors text-center"
                                    >
                                        Book Class
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-64 bg-dark-800/30 rounded-2xl border border-white/5 border-dashed">
                            <p className="text-text-secondary text-lg italic">Rest & Recovery Day</p>
                            <p className="text-sm text-dark-600 mt-2">Take time to heal and reflect.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

const Timetable = () => {
    return (
        <Suspense fallback={<div className="py-24 bg-dark-950 text-center text-white">Loading schedule...</div>}>
            <TimetableContent />
        </Suspense>
    );
};

export default Timetable;
