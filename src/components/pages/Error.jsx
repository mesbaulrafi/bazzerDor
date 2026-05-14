import React from 'react'

const Error = () => {
  return (
    <div className="min-h-screen bg-[#f5f0e8] font-sans">


      {/* Gold accent strip */}
     

      {/* Error content */}
      <div className="flex flex-col items-center justify-center px-6 py-20 text-center pb-24">


        {/* Error code */}
        <div className="text-8xl font-medium text-[#b54e4e] leading-none mb-1 tracking-tighter">৪০৪</div>
        <div className="text-xs text-gray-400 tracking-widest uppercase mb-8">Page Not Found</div>

        {/* Message card */}
        <div className="bg-white rounded-2xl border border-[#ddd8cc] px-10 py-8 max-w-md w-full mb-8">
          <h2 className="text-xl font-medium text-[#1a3a1a] mb-3">
            পণ্য বা পেজটি খুঁজে পাওয়া যায়নি!
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            আপনি যে পেজটি খুঁজছেন সেটি সরানো হয়েছে, নাম পরিবর্তন করা হয়েছে, অথবা এটি কখনো ছিল না।
          </p>
          <p className="text-xs text-gray-300 mt-4 italic">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Status pills */}
        <div className="flex gap-3 mb-10 flex-wrap justify-center">
          <span className="bg-[#fff3cd] border border-[#e6c96a] rounded-full px-4 py-1.5 text-xs text-[#7a5c00] flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            পেজ পাওয়া যায়নি
          </span>
          <span className="bg-[#fde8e8] border border-[#e8aaaa] rounded-full px-4 py-1.5 text-xs text-[#7a1a1a] flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></svg>
            ভুল লিঙ্ক
          </span>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 flex-wrap justify-center">
          <a
            href="/"
            className="bg-[#1a7a3c] text-white rounded-xl px-7 py-3 text-sm font-medium flex items-center gap-2 no-underline hover:bg-[#156332] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            হোম পেজে যান
          </a>
          <button
            onClick={() => window.location.reload()}
            className="bg-white text-[#1a7a3c] border-2 border-[#1a7a3c] rounded-xl px-7 py-3 text-sm font-medium flex items-center gap-2 hover:bg-green-50 transition-colors cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
            আবার চেষ্টা করুন
          </button>
        </div>

      </div>


    </div>
  );
};

export default Error;