"use client";

export default function HospitalSpecialistsPage() {
  const specialists = [
    { name: "Dr. Ngozi Okafor", role: "Trauma Surgeon", status: "Available", dept: "Surgery" },
    { name: "Dr. Emeka Nwosu", role: "Cardiologist", status: "Available", dept: "Cardiology" },
    { name: "Dr. Aisha Bello", role: "Neurologist", status: "In Surgery", dept: "Neurology" },
    { name: "Dr. Chinedu Eze", role: "ER Physician", status: "Available", dept: "Emergency" },
    { name: "Dr. Folake Adeyemi", role: "Anesthesiologist", status: "On Call", dept: "Anesthesiology" },
  ];

  return (
    <div className="p-6 h-full overflow-y-auto custom-scrollbar bg-slate-50">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-slate-900 uppercase tracking-tighter">Specialist Directory</h1>
        <p className="text-slate-600 text-sm">On-duty specialists available for incoming transfers.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialists.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-slate-100 rounded-full border border-slate-200 mb-4 flex items-center justify-center overflow-hidden">
               <span className="material-symbols-outlined text-3xl text-slate-400">person</span>
            </div>
            <h3 className="font-display text-lg font-bold text-slate-900 mb-1">{s.name}</h3>
            <p className="text-xs text-primary font-semibold tracking-widest uppercase mb-4">{s.role}</p>
            
            <div className="flex gap-2 w-full mb-6 justify-center">
              <span className={`text-[10px] font-semibold px-2 py-1 rounded tracking-widest uppercase ${
                s.status === 'Available' ? 'bg-emerald-100 text-emerald-700' : 
                s.status === 'In Surgery' ? 'bg-amber-100 text-amber-700' : 
                'bg-slate-100 text-slate-600'
              }`}>
                {s.status}
              </span>
              <span className="text-[10px] bg-slate-50 border border-slate-200 text-slate-600 font-semibold px-2 py-1 rounded tracking-widest uppercase">
                {s.dept}
              </span>
            </div>

            <button className="w-full bg-slate-50 border border-slate-200 text-slate-700 py-2 rounded-lg text-xs font-semibold uppercase tracking-widest hover:bg-slate-100 transition-colors">
              Contact
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
