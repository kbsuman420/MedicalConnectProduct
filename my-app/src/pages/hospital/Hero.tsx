import { useState } from "react";
import { MapPin, Search, Activity, Star, Building2, Stethoscope, Pill, CheckCircle2 } from "lucide-react";

const hospitals = [
    { rank: 1, name: "North Bengal MC", type: "Govt", gen: 12, icu: 3, status: "green" },
    { rank: 2, name: "CityMed Multispeciality", type: "Pvt", gen: 18, icu: 4, status: "green" },
    { rank: 3, name: "Siliguri District H", type: "Govt", gen: 5, icu: 0, status: "amber" },
    { rank: 4, name: "Neotia Getwel", type: "Pvt", gen: 0, icu: 0, status: "red" },
];

const filters = [
    { label: "Near me", icon: MapPin },
    { label: "Has ICU beds", icon: Activity },
    { label: "Government", icon: Building2 },
    { label: "Open now", icon: null, dot: true },
    { label: "Rating 4+", icon: Star },
];

const quickLinks = [
    { label: "Hospitals", sub: "Live bed count", icon: Building2 },
    { label: "Doctors", sub: "Book instantly", icon: Stethoscope },
    { label: "Clinics", sub: "Nearby clinics", icon: Pill },
];

const statusColor = {
    green: "bg-emerald-400",
    amber: "bg-amber-400",
    red: "bg-rose-400",
};

export default function HeroSection() {
    const [query, setQuery] = useState("");

    return (
        <div className="h-full w-full flex flex-col md:flex-row items-stretch gap-8 md:gap-10 bg-transparent px-6 md:px-14 py-14 md:py-16">

            <div className="h-auto w-full md:h-full md:w-1/2 flex flex-col justify-center">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 bg-emerald-400/10 backdrop-blur-md shadow-lg shadow-emerald-950/30 px-4 py-1.5 mb-8">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="text-sm text-emerald-300 ">Real-time bed availability, Siliguri WB</span>
                </div>

                <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.05] text-white tracking-tight">
                    Find hospitals
                    <br />
                    <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
            book instantly.
          </span>
                    <br />
                    Save lives.
                </h1>

                <p className="mt-6 max-w-md text-slate-400 text-base leading-relaxed">
                    See real-time bed availability across 48 hospitals. No more calling
                    around. Book a doctor slot in under 60 seconds.
                </p>

                <div className="mt-8 flex items-center gap-3 rounded-2xl bg-[#0d1424] border border-white/10 px-4 py-3">
                    <MapPin className="h-5 w-5 text-slate-500 shrink-0" />
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search hospitals ..."
                        className="w-1/2 bg-transparent text-slate-200 placeholder:text-slate-500 outline-none text-sm"
                    />
                    <button className="flex items-center gap-2 rounded-xl bg-blue-500/70 shadow-lg shadow-blue-500/20 hover:bg-blue-400 transition-colors px-5 py-2.5 text-sm font-semibold text-white">
                        <Search className="h-4 w-4" />
                        Search
                    </button>
                </div>

                <div className="mt-4 flex flex-wrap gap-2.5">
                    {filters.map(({ label, icon: Icon, dot }) => (
                        <button
                            key={label}
                            className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors px-3.5 py-1.5 text-sm text-slate-300"
                        >
                            {dot ? (
                                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                            ) : (
                                Icon && <Icon className="h-3.5 w-3.5 text-slate-400" />
                            )}
                            {label}
                        </button>
                    ))}
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                    {quickLinks.map(({ label, sub, icon: Icon }) => (
                        <button
                            key={label}
                            className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors py-5 px-2 text-center"
                        >
                            <Icon className="h-5 w-5 text-slate-300" />
                            <span className="text-sm font-semibold text-white">{label}</span>
                            <span className="text-xs text-slate-500">{sub}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="h-auto w-full md:h-full md:w-1/2 flex flex-col justify-center">
                <div className="rounded-3xl border border-white/10 bg-[#0b1220] overflow-hidden">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
                        <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
                            <span className="text-sm font-semibold text-slate-200">Live, Siliguri</span>
                        </div>
                        <span className="text-xs text-slate-500">Updated 2 min ago</span>
                    </div>

                    <div className="divide-y divide-white/5">
                        {hospitals.map((h) => (
                            <div key={h.rank} className="flex items-center justify-between px-6 py-4">
                                <div className="flex items-center gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-sm font-semibold text-slate-400">
                    {h.rank}
                  </span>
                                    <div>
                                        <p className="text-sm font-semibold text-white">{h.name}</p>
                                        <p className="text-xs text-slate-500">{h.type}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-5">
                                    <div className="text-right">
                                        <p className="text-[11px] text-slate-500">GEN</p>
                                        <p className="text-sm font-semibold text-slate-200">{h.gen}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[11px] text-slate-500">ICU</p>
                                        <p className="text-sm font-semibold text-sky-400">{h.icu}</p>
                                    </div>
                                    <span className={`h-2.5 w-2.5 rounded-full ${statusColor[h.status]}`} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-3 gap-3 px-6 py-5">
                        {[
                            { value: "35", label: "Beds free", color: "text-white" },
                            { value: "1.2k", label: "Bookings/day", color: "text-sky-400" },
                            { value: "42", label: "Doctors live", color: "text-violet-400" },
                        ].map((s) => (
                            <div key={s.label} className="rounded-xl bg-white/5 py-3 text-center">
                                <p className={`text-lg font-bold ${s.color}`}>{s.value}</p>
                                <p className="text-[11px] text-slate-500">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-4 flex items-center gap-3 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 backdrop-blur-md shadow-lg shadow-emerald-950/30 px-5 py-4">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                    <div>
                        <p className="text-sm font-semibold text-white">Booking confirmed</p>
                        <p className="text-xs text-slate-500">Anita Kumar, Dr. Sharma, 10:00 AM</p>
                    </div>
                    <span className="ml-auto text-xs text-slate-500">Just now</span>
                </div>
            </div>
        </div>
    );
}