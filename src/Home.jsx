import React, { useState, useEffect } from 'react';
import { 
  FaWhatsapp, FaPhoneAlt, FaCheckCircle, FaUserTie, 
  FaMapMarkedAlt, FaGraduationCap, FaMousePointer, FaMapMarkerAlt, 
  FaEnvelope, FaBolt, FaHeadset, FaUsers, FaLightbulb, FaSmile 
} from 'react-icons/fa';

const Home = () => {
  const contactNumber = "919884579998";
  const waLink = `https://wa.me/${contactNumber}?text=Namaste, I am interested in the Call Center Job.`;

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
      
      {/* 1. HERO SECTION */}
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
          <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto font-medium opacity-90">
            Hiring energetic candidates for Call Center Operations. 
            Stable income, professional office environment, and local Jodhpur posting.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a href={waLink} className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-[0_20px_50px_rgba(34,197,94,0.3)]">
              <FaWhatsapp className="text-3xl" /> APPLY NOW
            </a>
            <a href={`tel:${contactNumber}`} className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-2xl font-bold text-xl transition-all">
              CONTACT HR
            </a>
          </div>
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

      {/* 3. CALL CENTER WORK INFO */}
      <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">Life at <span className="text-blue-400">Call Center</span></h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">Join a professional team dedicated to solving consumer queries and providing excellent support.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaHeadset/>, title: "Customer Support", desc: "Consumers ki shikayaton ko sunna aur unhe system mein darj karna." },
              { icon: <FaLightbulb/>, title: "Problem Solving", desc: "Bill ya naye connection ki jankari dekar logo ki help karna." },
              { icon: <FaUsers/>, title: "Team Work", desc: "Ek behtareen office environment mein professional team ke sath kaam karna." },
              { icon: <FaSmile/>, title: "Career Growth", desc: "Communication skills ko improve karna aur corporate world ka anubhav lena." }
            ].map((card, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-blue-600 transition-all duration-500 group text-left">
                <div className="text-4xl text-blue-400 mb-6 group-hover:text-white transform group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4">{card.title}</h4>
                <p className="text-slate-400 group-hover:text-white/90 leading-relaxed font-medium lowercase">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ELIGIBILITY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-600/10 rounded-[3.5rem] rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&w=800&q=80" 
              className="relative rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
              alt="Hiring"
            />
            <div className="absolute bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl border-l-8 border-blue-600 hidden md:block">
              <p className="font-black text-3xl">Freshers</p>
              <p className="text-slate-500 font-bold">Are Welcome!</p>
            </div>
          </div>

          <div className="space-y-12 text-left">
            <h2 className="text-5xl font-black text-slate-900 leading-tight tracking-tighter uppercase">Job <br/><span className="text-blue-600">Requirements</span></h2>
            <div className="space-y-8">
              {[
                { i: <FaGraduationCap/>, t: "Qualification", d: "10th ya 12th Pass hona zaroori hai." },
                { i: <FaMousePointer/>, t: "Computer Skills", d: "Basic computer aur typing ki jankari honi chahiye." },
                { i: <FaCheckCircle/>, t: "Language", d: "Hindi bolna mandatory hai (Local language ka fayda)." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-white shadow-lg rounded-2xl flex items-center justify-center text-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 border border-slate-100">
                    {item.i}
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-1">{item.t}</h4>
                    <p className="text-slate-600 text-lg font-medium">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. LOCATION & MAP */}
      <section className="py-24 bg-white border-t border-slate-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            <div className="lg:w-1/2 h-[400px] lg:h-[600px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114434.91264366606!2d72.91544485548545!3d26.242456456073105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418cff1253097d%3A0x6b44787a76059b02!2sJodhpur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1709999999999!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className="lg:w-1/2 p-12 md:p-20 text-white flex flex-col justify-center text-left">
              <h2 className="text-4xl font-black mb-8">Visit Our Office In <br/><span className="text-blue-400 uppercase">Jodhpur</span></h2>
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

      {/* 6. CALL TO ACTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-blue-700 via-indigo-800 to-slate-900 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl transition-all hover:shadow-blue-500/20">
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">Ready to <br/>Start Working?</h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 font-medium">Limited slots available for the 2026 Batch. Send your resume now!</p>
            <a href={waLink} className="inline-flex bg-green-500 hover:bg-green-600 text-white px-12 py-6 rounded-[2rem] font-black text-2xl items-center gap-4 transition-transform hover:scale-105 shadow-xl">
              <FaWhatsapp className="text-3xl"/> SEND RESUME
            </a>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      <footer className="py-12 text-center bg-slate-50 border-t border-slate-200">
        <p className="text-slate-400 font-black tracking-[0.3em] text-[10px] md:text-xs uppercase">Official Call Center Recruitment • Jodhpur • 2026</p>
      </footer>

    </div>
  );
};

export default Home;