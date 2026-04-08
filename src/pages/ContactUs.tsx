import { AtSign, Birdhouse, BookOpen, CheckCircle2, Mail, MessageCircle, Phone, Send, Smartphone, User } from 'lucide-react';
import React, { useState } from 'react'
import brandlogo from "../assets/images/jLogo.png";

const ContactUs = () => {
    const InputField = ({ icon: Icon, placeholder, name, value, onChange, type = "text" }) => (
  <div className="relative">
    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-700/50">
      <Icon size={14} />
    </div>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full bg-white/5 border border-amber-800/25 rounded pl-9 pr-4 py-3 text-white/80 text-sm placeholder-white/25 outline-none focus:border-amber-600/50 focus:bg-amber-900/20 transition-all duration-300"
    />
  </div>
);
 
const ContactRow = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-4 group">
    <div className="w-10 h-10 rounded-full border border-amber-700/30 bg-amber-900/20 flex items-center justify-center text-amber-500 group-hover:bg-amber-800/30 group-hover:border-amber-600/50 transition-all duration-300 shrink-0">
      <Icon size={16} />
    </div>
    <div>
      <p className="text-[10px] tracking-[3px] uppercase text-amber-700/60 mb-0.5">{label}</p>
      <p className="text-white/80 font-light" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "18px" }}>{value}</p>
    </div>
  </div>
);

  const [form, setForm] = useState({ name: "", mobile: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
 
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
 
  const handleSubmit = () => {
    if (form.name && form.email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setForm({ name: "", mobile: "", email: "", subject: "", message: "" });
    }
  };
 
  return (
  <div className="min-h-screen flex items-center justify-center pt-6 pb-1" id='cta'>
    <div className="w-full relative">

      {/* Arch */}
      <div className="absolute -top-px left-1/2 -translate-x-1/2 z-10 w-[200px] h-[32px] bg-white rounded-b-[100px]" />

      {/* Gold line */}
      <div className="absolute top-0 left-0 right-0 h-px z-0 bg-[linear-gradient(90deg,transparent,#e8c97e_30%,#f5e0a0_50%,#e8c97e_70%,transparent)]" />

      {/* Card */}
      <div className="relative overflow-hidden rounded-b-3xl rounded-t-sm bg-[linear-gradient(155deg,#5c1a1a_0%,#3d0e0e_45%,#250808_100%)]">

        {/* Grain */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')]" />

        <div className="relative z-10 px-12 pt-14 pb-10">

          {/* Header */}
          <div className="flex flex-col items-center mb-10 pb-8 border-b border-amber-800/25">
            <img className="brandLogo" src={brandlogo} alt="logo of olivox" />
            <h1 className="mt-3 tracking-[10px] text-amber-400 uppercase font-light text-[26px]">
              Nagaikadai Jewellers
            </h1>
            <p className="text-[16px] tracking-[4px] text-amber-400/50 uppercase mt-1">
              Est. Excellence · Since Always
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

            {/* Left */}
            <div>
              <h2 className="text-amber-400 font-light mb-6 pb-3 border-b border-amber-800/20 tracking-widest text-[22px]">
                Enquiry Form
              </h2>

              <div className="space-y-3">
                <InputField icon={User} placeholder="Name" name="name" value={form.name} onChange={handleChange} />
                <InputField icon={Smartphone} placeholder="Mobile" name="mobile" value={form.mobile} onChange={handleChange} />
                <InputField icon={AtSign} placeholder="Email" name="email" value={form.email} onChange={handleChange} type="email" />
                <InputField icon={BookOpen} placeholder="Subject" name="subject" value={form.subject} onChange={handleChange} />

                <div className="relative">
                  <div className="absolute left-3 top-3 text-amber-700/50">
                    <MessageCircle size={14} />
                  </div>
                  <textarea
                    name="message"
                    placeholder="Message..."
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-white/5 border border-amber-800/25 rounded pl-9 pr-4 py-3 text-white/80 text-sm placeholder-white/25 outline-none focus:border-amber-600/50 focus:bg-amber-900/20 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded text-sm font-medium tracking-[3px] uppercase transition-all duration-300 border ${
                    submitted
                      ? "bg-emerald-900/40 border-emerald-700/40 text-emerald-400"
                      : "bg-red-900/60 border-amber-700/30 text-amber-400 hover:bg-red-800/70 hover:shadow-lg hover:-translate-y-0.5"
                  }`}
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 size={16} /> Sent Successfully
                    </>
                  ) : (
                    <>
                      <Send size={15} /> Submit Enquiry
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right */}
            <div>
              <h2 className="text-amber-400 font-light mb-6 pb-3 border-b border-amber-800/20 tracking-widest text-[22px]">
                Get In Touch
              </h2>

              <div className="space-y-5">
                <ContactRow icon={Phone} label="Call Us" value="1800-296-6677" />
                <ContactRow icon={MessageCircle} label="Chat With Us" value="+91 81473 49242" />
              </div>

              <div className="my-6 h-px bg-[linear-gradient(90deg,transparent,rgba(232,201,126,0.25),transparent)]" />

              <div className="bg-black/20 border border-amber-800/15 rounded-lg p-4">
                <p className="text-[10px] tracking-[2.5px] uppercase text-amber-700/50 mb-2">
                  Support Hours
                </p>
                <p className="text-white/55 font-light leading-relaxed text-[16px]">
                  Monday - Saturday <br /> 9:00 AM - 8:00 PM IST
                </p>
              </div>

              <div className="my-6 h-px bg-[linear-gradient(90deg,transparent,rgba(232,201,126,0.25),transparent)]" />

              <p className="text-[10px] tracking-[2.5px] uppercase text-amber-700/50 mb-3">
                Connect With Us
              </p>

              <div className="flex gap-3">
                {[
                  { icon: Phone, label: "Phone" },
                  { icon: Mail, label: "Email" },
                  { icon: MessageCircle, label: "Chat" },
                ].map(({ icon: Icon, label }) => (
                  <button
                    key={label}
                    title={label}
                    className="w-10 h-10 rounded-full border border-amber-700/25 bg-amber-900/10 flex items-center justify-center text-amber-600/70 hover:bg-amber-800/25 hover:text-amber-400 hover:border-amber-600/40 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Icon size={16} />
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default ContactUs