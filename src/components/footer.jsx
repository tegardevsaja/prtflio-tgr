export default function Footer() {
  return (
    <footer className="w-full bg-[#111213] text-white px-8 md:px-16 py-16">
      <div className="max-w-[1200px] mx-auto">

        {/* GRID — 3 columns: left wide, services, quick links (social under services) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">

          {/* LEFT */}
          <div className="md:col-span-1 flex flex-col items-start">
            <h2 className="text-3xl font-bold tracking-tight text-white">Tegar Kurniawan</h2>

            <p className="text-sm text-gray-400 mt-4 leading-relaxed max-w-[340px]">
              Frontend Developer yang fokus membangun website modern,
              cepat, dan interaktif.
            </p>

            <div className="mt-6 space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Sawangan, Depok • Available Remote</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 7l10 7 10-7"/>
                </svg>
                <span>tegardevsjastudio@gmail.com</span>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col gap-4 items-start w-fit">
              <button className="bg-[#4F3EE8] hover:bg-[#3d2fd4] transition-colors px-7 py-3.5 rounded-full text-sm font-semibold flex items-center gap-2">
                Let's Work Together <span className="text-base">→</span>
              </button>
              <button className="border border-gray-600 px-7 py-3.5 rounded-full text-sm text-gray-300 hover:bg-white/5 transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 7l10 7 10-7"/>
                </svg>
                Join my Newsletter
              </button>
            </div>
          </div>

          <div className="flex flex-col items-start text-left">
            <h3 className="text-base font-semibold mb-5">Services</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Website Development</li>
              <li className="hover:text-white cursor-pointer transition-colors">UI/UX Design</li>
              <li className="hover:text-white cursor-pointer transition-colors">Landing Page</li>
              <li className="hover:text-white cursor-pointer transition-colors">Company Profile</li>
            </ul>

            {/* FOLLOW ME below Services */}
            <div className="mt-10">
              <h3 className="text-base font-semibold mb-5">Follow me</h3>
              <div className="flex gap-5 text-gray-400">
                {/* YouTube */}
                <a href="#" className="hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/>
                  </svg>
                </a>
                {/* TikTok */}
                <a href="#" className="hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.6 3a4.8 4.8 0 0 1-4.8-4.8h-3.3v13.8a2.9 2.9 0 1 1-2-2.7V5.9a6.2 6.2 0 1 0 5.3 6.1V8.8a8 8 0 0 0 4.8 1.6V7.1A4.8 4.8 0 0 1 19.6 3z"/>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="#" className="hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" className="hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.9 4.9 0 0 1 1.77 1.153 4.9 4.9 0 0 1 1.153 1.77c.163.46.35 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.9 4.9 0 0 1-1.153 1.77 4.9 4.9 0 0 1-1.77 1.153c-.46.163-1.26.35-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.9 4.9 0 0 1-1.77-1.153A4.9 4.9 0 0 1 1.797 19.28c-.163-.46-.35-1.26-.403-2.43C1.336 15.584 1.324 15.204 1.324 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43a4.9 4.9 0 0 1 1.153-1.77A4.9 4.9 0 0 1 4.72 1.797c.46-.163 1.26-.35 2.43-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.74 0 8.332.014 7.052.072 5.775.13 4.902.333 4.14.63A7.07 7.07 0 0 0 1.6 2.256 7.07 7.07 0 0 0 .63 4.14C.333 4.902.13 5.775.072 7.052.014 8.332 0 8.74 0 12c0 3.26.014 3.668.072 4.948.058 1.277.261 2.15.558 2.912a7.07 7.07 0 0 0 1.626 2.54 7.07 7.07 0 0 0 2.54 1.626c.763.297 1.636.5 2.912.558C8.332 23.986 8.74 24 12 24s3.668-.014 4.948-.072c1.277-.058 2.15-.261 2.912-.558a7.07 7.07 0 0 0 2.54-1.626 7.07 7.07 0 0 0 1.626-2.54c.297-.763.5-1.636.558-2.912C23.986 15.668 24 15.26 24 12s-.014-3.668-.072-4.948c-.058-1.277-.261-2.15-.558-2.912a7.07 7.07 0 0 0-1.626-2.54A7.07 7.07 0 0 0 19.86.63C19.098.333 18.225.13 16.948.072 15.668.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="flex flex-col items-start text-left">
            <h3 className="text-base font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Experience</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-800 mt-16 pt-8">

          {/* BOTTOM ROW */}
          <div className="flex flex-col md:flex-row justify-between items-start text-xs text-gray-500 gap-4 text-left">
            <div className="flex flex-col gap-2">
              <p className="leading-relaxed max-w-[700px]">
                This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way.
                FACEBOOK is a trademark of FACEBOOK, Inc.
              </p>
              <p className="mt-2">© {new Date().getFullYear()} Tegar Kurniawan. All rights reserved.</p>
            </div>
            <div className="flex gap-6 shrink-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}