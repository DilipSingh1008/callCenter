import React, { useState, useEffect } from 'react';
import { 
  FaWhatsapp, FaPhoneAlt, FaCheckCircle, FaUserTie, 
  FaMapMarkedAlt, FaGraduationCap, FaMousePointer, FaMapMarkerAlt, 
  FaEnvelope, FaBolt, FaHeadset, FaUsers, FaLightbulb, FaSmile, 
  FaUserAlt, FaUserCircle
} from 'react-icons/fa';

const Home = () => {
  // Contact Details
  const boysContact = "919784579998"; 
  const boysCall = "918078639949";
  const girlsContact = "918559894614"; 
  const girlsCall = "918559894614";

  const waMessage = "Namaste, I am interested in the Call Center Job.";

  // --- Slider Logic ---
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://images.unsplash.com/photo-1521791136364-798a7bc0d262?auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=1500&q=80"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden text-slate-900">
      
      {/* 1. HERO SECTION (Auto-Slider) */}
      <section className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden bg-slate-950">
        {slides.map((image, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-30" : "opacity-0"}`}>
            <img src={image} alt="Banner" className="w-full h-full object-cover scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50"></div>
          </div>
        ))}

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-xs md:text-sm mb-6 tracking-[0.2em] shadow-lg animate-pulse">
            OFFICIAL RECRUITMENT DRIVE 2026
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 text-white leading-[0.9] tracking-tighter uppercase">
            Jodhpur <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Call Center</span>
          </h1>
          
          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="flex flex-col items-center">
                <div className="bg-blue-500/20 p-4 rounded-full border border-blue-400/30 text-blue-400 text-2xl mb-2">
                    <FaUserAlt />
                </div>
                <span className="text-white text-xs font-bold tracking-widest uppercase">Boys Hiring</span>
            </div>
            <div className="h-10 w-[1px] bg-white/20"></div>
            <div className="flex flex-col items-center">
                <div className="bg-pink-500/20 p-4 rounded-full border border-pink-400/30 text-pink-400 text-2xl mb-2">
                    <FaUserCircle />
                </div>
                <span className="text-white text-xs font-bold tracking-widest uppercase">Girls Hiring</span>
            </div>
          </div>

          <a href="#apply" className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-xl">
            APPLY NOW
          </a>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 -mt-28 relative z-30">
          {[
            { label: "FIXED PAY", val: "₹8,755/-", sub: "Monthly Guaranteed", icon: "💰" },
            { label: "LOCATION", val: "JODHPUR", sub: "Industrial Area", icon: <FaMapMarkerAlt/> },
            { label: "POST", val: "CSA AGENT", sub: "Customer Support", icon: <FaUserTie/> }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100 flex flex-col items-center text-center transform hover:-translate-y-3 transition-all duration-500 group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-4xl font-black text-slate-900 mb-1 tracking-tight">{item.val}</h3>
              <p className="text-blue-600 font-black text-xs tracking-[0.2em] mb-2">{item.label}</p>
              <p className="text-slate-400 font-medium">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. DUAL HIRING CONTACT SECTION */}
      <section id="apply" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">Contact <span className="text-blue-600">HR Team</span></h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">Please select your category to contact the right HR.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* BOYS SECTION */}
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl group border-b-8 border-b-blue-600">
              <div className="flex items-center gap-6 mb-8">
                <div className="bg-blue-100 text-blue-600 w-20 h-20 rounded-3xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                  <FaUserAlt />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-slate-900 uppercase italic">Boys Dept.</h3>
                  <p className="text-blue-600 font-bold text-sm tracking-widest uppercase">Hiring Active</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <a href={`https://wa.me/${boysContact}?text=${waMessage}`} className="bg-green-500 hover:bg-green-600 text-white p-5 rounded-2xl font-black flex items-center justify-center gap-3 transition-all">
                  <FaWhatsapp className="text-2xl" /> WHATSAPP RESUME
                </a>
                <a href={`tel:${boysCall}`} className="bg-slate-900 text-white p-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all hover:bg-slate-800">
                  <FaPhoneAlt /> CALL HR MANAGER
                </a>
              </div>
            </div>

            {/* GIRLS SECTION */}
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl group border-b-8 border-b-pink-500">
              <div className="flex items-center gap-6 mb-8">
                <div className="bg-pink-100 text-pink-500 w-20 h-20 rounded-3xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                  <FaUserCircle />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-slate-900 uppercase italic">Girls Dept.</h3>
                  <p className="text-pink-500 font-bold text-sm tracking-widest uppercase">Hiring Active</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <a href={`https://wa.me/${girlsContact}?text=${waMessage}`} className="bg-green-500 hover:bg-green-600 text-white p-5 rounded-2xl font-black flex items-center justify-center gap-3 transition-all">
                  <FaWhatsapp className="text-2xl" /> WHATSAPP RESUME
                </a>
                <a href={`tel:${girlsCall}`} className="bg-slate-900 text-white p-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all hover:bg-slate-800">
                  <FaPhoneAlt /> CALL HR MANAGER
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LIFE AT CALL CENTER SECTION */}
      <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter text-white">Life at <span className="text-blue-400">Call Center</span></h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium italic">Call center mein aapka kaam sirf phone uthana nahi, balki logo ki mushkilo ko hal karna hai.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaHeadset/>, title: "Support", desc: "Consumers ki shikayaton ko sunna aur unhe darj karna." },
              { icon: <FaLightbulb/>, title: "Problem Solving", desc: "Customer queries ko samajhkar unhe sahi jankari aur samadhan pradan karna.s" },
              { icon: <FaUsers/>, title: "Team Work", desc: "Professional office environment mein team ke sath kaam karna." },
              { icon: <FaSmile/>, title: "Growth", desc: "Communication skills ko improve karna aur anubhav lena." }
            ].map((card, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-blue-600 transition-all duration-500 group">
                <div className="text-4xl text-blue-400 mb-6 group-hover:text-white transition-transform">{card.icon}</div>
                <h4 className="text-2xl font-bold mb-4">{card.title}</h4>
                <p className="text-slate-400 group-hover:text-white/90 leading-relaxed font-medium">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ELIGIBILITY SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-600/10 rounded-[3.5rem] rotate-3"></div>
            <img src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&w=800&q=80" className="relative rounded-[3rem] shadow-2xl w-full h-[500px] object-cover" alt="Hiring" />
          </div>
          <div className="space-y-12 text-left">
            <h2 className="text-5xl font-black text-slate-900 leading-tight tracking-tighter uppercase font-bold">Job <br/><span className="text-blue-600">Requirements</span></h2>
            <div className="space-y-8">
              {[
                { i: <FaGraduationCap/>, t: "Qualification", d: "10th ya 12th Pass hona zaroori hai." },
                { i: <FaMousePointer/>, t: "Computer Skills", d: "Basic computer aur typing ki jankari honi chahiye." },
                { i: <FaCheckCircle/>, t: "Language", d: "Hindi bolna mandatory hai." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-white shadow-lg rounded-2xl flex items-center justify-center text-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {item.i}
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-1 font-bold">{item.t}</h4>
                    <p className="text-slate-600 text-lg font-medium">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. LOCATION & MAP */}
      <section className="py-24 bg-slate-50 border-t border-slate-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
<div className="lg:w-1/2 h-[400px] lg:h-[600px] relative">  <iframe
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d114484.12980323532!2d73.016902!3d26.273699899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDE1JzE5LjgiTiA3M8KwMDAnMzAuNSJF!5e0!3m2!1sen!2sin!4v1773077813548!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Office Location"
  ></iframe>

  {/* Direction Button */}
  <a
    href="https://www.google.com/maps/dir/?api=1&destination=26.2555,73.0085"
    target="_blank"
    rel="noopener noreferrer"
    className="absolute bottom-5 left-5 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg"
  >
    Get Directions
  </a>
</div>
            <div className="lg:w-1/2 p-12 md:p-20 text-white flex flex-col justify-center text-left">
              <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter font-bold">Visit Jodhpur Office</h2>
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <FaMapMarkerAlt className="text-blue-400 text-2xl mt-1"/>
                  <p className="text-xl text-slate-300 font-medium">New Power House Road, Industrial Area, Jodhpur (Raj.)</p>
                </div>
                <div className="flex gap-4 items-center">
                  <FaPhoneAlt className="text-blue-400 text-xl"/>
                  <p className="text-2xl font-bold">+91 8078639949</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center bg-white border-t border-slate-100">
        <p className="text-slate-400 font-black tracking-[0.3em] text-[10px] md:text-xs uppercase">Official Call Center Recruitment • Jodhpur • 2026</p>
      </footer>

    </div>
  );
};

export default Home;