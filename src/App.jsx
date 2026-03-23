import { useState, useRef } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { FaYoutube, FaTiktok, FaLinkedin, FaInstagram } from "react-icons/fa"

function App() {
  const [count, setCount] = useState(0)
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 20;
    const rotateY = (x - rect.width / 2) / 20;

    setStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`,
    });
  };

  const reset = () => {
    setStyle({
      transform: "rotateX(0deg) rotateY(0deg) scale(1)",
    });
  };
  return (
    <>
      <Navbar />
      <main className='pt-24 bg-white text-slate-900'>

    {/* === WELCOME SECTION === */}
<section className="mx-auto mt-12 sm:mt-16 max-w-5xl px-4 sm:px-6 md:px-8 py-8">
  <div className="relative">

    {/* NAMA + LABEL */}
    <div className="inline-block relative">

      {/* Hi, I'm di atas huruf T */}
      <p
        className="absolute -top-8 left-0 text-slate-500"
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          lineHeight: 1.2,
        }}
      >
        Hi, I'm
      </p>

      {/* Nama */}
      <h1
        className="font-black text-slate-900 leading-[0.95] tracking-tight break-words"
        style={{
          fontSize: 'clamp(2.5rem, 10vw, 6rem)',
        }}
      >
        Tegar Kurniawan
      </h1>
    </div>

    {/* Deskripsi */}
    <p className="mt-6 sm:mt-8 md:mt-10 max-w-4xl text-center mx-auto text-base sm:text-lg text-slate-600 leading-relaxed">
      A passionate frontend developer specializing in crafting engaging and user-friendly web experiences. 
      With a keen eye for design and a commitment to clean code, I bring ideas to life through innovative 
      solutions and seamless interfaces.
    </p>

  </div>
</section>
        {/* === HERO SECTION === */}
        <section className='mx-auto mt-16 max-w-5xl px-4 sm:px-6 md:px-8'>
          {/* Social media icons */}
          <div className='flex items-center gap-5 mb-10'>
            {/* YouTube */}
            <a href='#' className='text-slate-400 hover:text-red-500 transition transform hover:scale-110'>
              <FaYoutube className='h-5 w-5' />
            </a>

            {/* TikTok */}
            <a href='#' className='text-slate-400 hover:text-black transition transform hover:scale-110'>
              <FaTiktok className='h-5 w-5' />
            </a>

            {/* LinkedIn */}
            <a href='#' className='text-slate-400 hover:text-blue-600 transition transform hover:scale-110'>
              <FaLinkedin className='h-5 w-5' />
            </a>

            {/* Instagram */}
            <a href='#' className='text-slate-400 hover:text-pink-500 transition transform hover:scale-110'>
              <FaInstagram className='h-5 w-5' />
            </a>
          </div>


          <h2
            className="text-left"
            style={{
              fontSize: 'clamp(2.2rem, 6vw, 4.5rem)',
              fontWeight: 800,
              color: '#0f172a',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '2rem',
            }}
          >
            I translate complex{' '}
            <span
              style={{
                color: 'transparent',
                WebkitTextStroke: '1px #0f172a',
              }}
            >
              tech
            </span>
            <br />
            into{' '}
            <span
              style={{
                color: 'transparent',
                WebkitTextStroke: '1px #0f172a',
              }}
            >
              content
            </span>{' '}
            that clicks.
          </h2>

          {/* Buttons */}
          <div className='flex items-center gap-4 flex-wrap'>
            <a
              href='#'
              className='inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'
            >
              Inquiry/Collab ↗
            </a>
            <a
              href='#'
              className='inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100'
            >
              My Templates
            </a>
          </div>
        </section>

        {/* === STATUS BAR === */}
        <section className='mx-auto mt-10 w-full max-w-6xl rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur-md transition duration-300 sm:p-8'>
          <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
            <div>
              <span className='inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700'>
                {'● Available for opportunities'}
              </span>
            </div>
            <div className='flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600'>
              <span className='inline-flex items-center gap-2'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 text-slate-400' viewBox='0 0 20 20' fill='currentColor'>
                  <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm.6-8.1l2.64-2.63a.75.75 0 10-1.06-1.06L9.4 8.64 8.14 7.38a.75.75 0 00-1.06 1.06l1.83 1.83a.75.75 0 001.06 0z' clipRule='evenodd' />
                </svg>
                {'Tegar \u2022 Frontend Developer'}
              </span>
              <a href='tel:+6285176785180' className='inline-flex items-center gap-2 text-slate-700 hover:text-slate-900'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2 7a5 5 0 015-5h2a2 2 0 012 2v2a2 2 0 01-2 2H7.1a3 3 0 00-2.1 1l-.7 1.4c-.3.5-.3 1.2.2 1.7l2.5 2.5c.5.5 1.2.5 1.7.2l1.4-.7a3 3 0 001-2.1V9a2 2 0 012-2h2a2 2 0 012 2v2a5 5 0 01-5 5H7a5 5 0 01-5-5V7z' />
                </svg>
                (+62) 85176785180
              </a>
              <a href='mailto:business@adplay.id' className='inline-flex items-center gap-2 text-slate-700 hover:text-slate-900'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 8V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2z' />
                </svg>
                Email
              </a>
            </div>
          </div>
        </section>
        <section className="mt-24 w-full px-3 md:px-5">

          {/* Header */}
          <div className="mb-10 px-1">
            <p className="text-sm text-slate-500">Selected Work</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Portfolio
            </h2>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

            {/* LEFT BIG */}
            <div className="group relative h-[640px] overflow-hidden rounded-2xl">
              <img
                src="https://picsum.photos/900/1200?1"
                className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 w-full p-6 text-white">
                <div className="flex flex-col items-start gap-1">
                  <span className="text-xs text-white/70">
                    React Native • Content
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight">
                    Mobile App Dev
                  </h3>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur">
                  ↗
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col gap-4 lg:col-span-2 h-[640px]">
              {/* TOP SMALL */}
              <div className="grid grid-cols-2 gap-4">

                {/* SMALL 1 */}
                <div className="group relative h-[300px] overflow-hidden rounded-2xl">
                  <img
                    src="https://picsum.photos/600/600?2"
                    className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  <div className="absolute bottom-0 w-full p-4 text-white">
                    <div className="flex flex-col items-start gap-0.5">
                      <span className="text-xs text-white/70">
                        Project
                      </span>
                      <span className="text-sm font-semibold tracking-tight">
                        Creative Work
                      </span>
                    </div>
                  </div>
                </div>

                {/* SMALL 2 */}
                <div className="group relative h-[300px] overflow-hidden rounded-2xl">
                  <img
                    src="https://picsum.photos/600/600?3"
                    className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  <div className="absolute bottom-0 w-full p-4 text-white">
                    <div className="flex flex-col items-start gap-0.5">
                      <span className="text-xs text-white/70">
                        Project
                      </span>
                      <span className="text-sm font-semibold tracking-tight">
                        Creative Work
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* BOTTOM BIG */}
              <div className="group relative h-[320px] md:h-[360px] overflow-hidden rounded-2xl">
                <img
                  src="https://picsum.photos/1200/600?4"
                  className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 w-full p-6 text-white">
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-xs text-white/70">
                      Brand • Creative
                    </span>
                    <h3 className="text-xl font-bold tracking-tight">
                      Campaign Project
                    </h3>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur">
                    ↗
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>
        <section className="mt-28 w-full px-3 md:px-5">
          <div className="mx-auto max-w-[1100px]">

            {/* Header */}
            <div className="mb-12">
              <p className="text-sm text-slate-500">Get to know me</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                About Me
              </h2>
            </div>

            {/* Content */}
            <div className="grid gap-10 md:grid-cols-2 md:items-center">

              {/* LEFT - TEXT */}
              <div className='text-left'>
                <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                  Crafting digital experiences with clean code & thoughtful design.
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  I'm <span className="font-semibold text-slate-900">Tegar Kurniawan</span>, a frontend developer passionate about building modern, responsive, and user-focused web interfaces. I enjoy turning complex ideas into simple, elegant solutions.
                </p>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  With a strong focus on performance and design consistency, I strive to create experiences that not only look good but also feel intuitive and seamless.
                </p>

                {/* Info */}
                <div className="mt-6 flex flex-wrap gap-3 text-sm">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                    Frontend Developer
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                    React & Tailwind
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                    UI/UX Focused
                  </span>
                </div>
              </div>

              {/* RIGHT - IMAGE / VISUAL */}
              <div className="relative">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="https://picsum.photos/600/700"
                    alt="About me"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 hidden md:block">
                  <div className="rounded-xl bg-white p-4 shadow-lg border border-slate-200">
                    <p className="text-xs text-slate-500">Experience</p>
                    <h4 className="text-lg font-bold text-slate-900">3+ Years</h4>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        <section className="mt-28 w-full px-3 md:px-5">
          <div className="mx-auto max-w-[1100px]">
            {/* Header */}
            <div className="mb-12">
              <p className="text-sm text-slate-500">My journey</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Experience
              </h2>
            </div>
            {/* Timeline */}
            <div className="space-y-10">

              {/* ITEM 1 */}
              <div className="relative pl-10">
                <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-slate-900 border-4 border-white shadow" />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col text-left">
                    <h3 className="text-lg font-semibold text-slate-900 tracking-tight">
                      Frontend Developer
                    </h3>
                    <span className="text-sm text-slate-500">
                      Freelance / Personal Projects
                    </span>
                  </div>

                  <span className="text-sm text-slate-500 whitespace-nowrap">
                    2023 — Present
                  </span>
                </div>

                <p className="mt-3 text-slate-600 text-sm leading-relaxed text-left">
                  Building modern and responsive web applications using React and Tailwind. Focused on performance, clean architecture, and delivering seamless user experiences across devices.
                </p>
              </div>

              {/* ITEM 2 */}
              <div className="relative pl-10">
                <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-white border-2 border-slate-300" />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col text-left">
                    <h3 className="text-lg font-semibold text-slate-900 tracking-tight">
                      UI Designer
                    </h3>
                    <span className="text-sm text-slate-500">
                      Personal Projects
                    </span>
                  </div>

                  <span className="text-sm text-slate-500 whitespace-nowrap">
                    2022 — 2023
                  </span>
                </div>

                <p className="mt-3 text-slate-600 text-sm leading-relaxed text-left">
                  Designed modern and user-friendly interfaces with a strong focus on usability and visual hierarchy. Worked closely with frontend implementation to ensure pixel-perfect results.
                </p>
              </div>

              {/* ITEM 3 */}
              <div className="relative pl-10">
                <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-white border-2 border-slate-300" />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col text-left">
                    <h3 className="text-lg font-semibold text-slate-900 tracking-tight">
                      Web Development Learner
                    </h3>
                    <span className="text-sm text-slate-500">
                      Self Learning
                    </span>
                  </div>

                  <span className="text-sm text-slate-500 whitespace-nowrap">
                    2021 — 2022
                  </span>
                </div>

                <p className="mt-3 text-slate-600 text-sm leading-relaxed text-left">
                  Started learning web development fundamentals including HTML, CSS, and JavaScript. Built small projects to strengthen problem-solving skills and understanding of frontend concepts.
                </p>
              </div>

            </div>
          </div>
        </section>
        <section className="mt-28 w-full">

          {/* HEADER */}
          <div className="mx-auto px-3 md:px-5 mb-12">
            <p className="text-sm text-slate-500">Building my own ecosystem</p>
            <h2 className="text-[3rem] md:text-[5rem] lg:text-[7rem] xl:text-[8rem] font-extrabold leading-[0.95] tracking-[-0.03em] text-slate-900">
              My Startup
            </h2>
          </div>

          <div className="mx-auto w-[calc(98%-1.2rem)]">
            <div className="overflow-hidden rounded-2xl border border-slate-200/70">
              <img
                src="https://picsum.photos/1600/700"
                alt="Tegar Studio Banner"
                className="w-full h-[280px] md:h-[420px] lg:h-[580px] object-cover"
              />
            </div>
          </div>
        </section>
       <section className="mt-28 w-full px-3 md:px-5">
  <div className="mx-auto max-w-[1400px] bg-[#0f1115] text-white py-16 rounded-3xl">

    {/* HEADER */}
    <div className="flex justify-end mb-14 px-6">
      <div className="text-right">
        <p className="text-xs text-white/40 tracking-widest uppercase mb-2">
          Digital Offerings
        </p>
        <h2 className="text-4xl md:text-6xl font-bold leading-[1.05] text-white">
          My Products.
        </h2>
      </div>
    </div>

    {/* HERO CARD */}
    <div className="px-6 mb-12">
      <div className="bg-black rounded-3xl border border-white/10 p-6 md:p-10 flex flex-col md:flex-row items-center gap-10">

        {/* LEFT */}
        <div className="flex-1">
          <p className="text-xs text-white/40 uppercase tracking-widest mb-4">
            Featured Drop
          </p>

          <h3 className="text-3xl md:text-5xl font-bold leading-tight">
            AI-Website <br /> Prompt Code <br /> Templates
          </h3>

          <p className="mt-4 text-white/50 max-w-md">
            Don’t build from zero. Give your AI the right foundation — 
            stunning components, proven layouts, and ship faster than ever.
          </p>

          <button className="mt-6 bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-neutral-200 transition">
            See Templates →
          </button>
        </div>

        {/* RIGHT */}
       <div 
  className="flex-1" 
  style={{ perspective: "1000px" }} // perspective di parent container
>
  <div
    ref={cardRef}
    onMouseMove={handleMouseMove}
    onMouseLeave={reset}
    className="transition-transform duration-300"
    style={style} // transform state di sini
  >
    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
      <img
        src="https://picsum.photos/600/400"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>
      </div>
    </div>

    {/* PRODUCT GRID */}
    <div className="grid md:grid-cols-3 gap-6 px-6">

      {/* CARD */}
      {[
        {
          title: "Template Portfolio Kerja",
          price: "Rp 59.000",
        },
        {
          title: "Winners Pitchdeck",
          price: "Rp 199.000",
        },
        {
          title: "iPhone Creators LUTs",
          price: "Rp 79.000",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white/5 rounded-2xl border border-white/10 p-4 hover:bg-white/10 transition"
        >
          {/* IMAGE */}
          <div className="rounded-xl overflow-hidden mb-4">
            <img
              src={`https://picsum.photos/300/200?random=${i}`}
              className="w-full h-[160px] object-cover"
            />
          </div>

          {/* CONTENT */}
          <p className="text-xs text-white/40 mb-1">PRODUCT</p>

          <h4 className="text-lg font-semibold mb-2">
            {item.title}
          </h4>

          <div className="flex items-center justify-between mt-4">
            <span className="font-semibold">{item.price}</span>

            <button className="text-xs bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition">
              Get Now →
            </button>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>

<section className="mt-32 w-full px-[12px] md:px-[16px] mb-6">
  <div className="mx-auto max-w-[1100px] text-center">

    {/* TEXT */}
    <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-extrabold leading-[1.05] tracking-[-0.02em] text-slate-900">
      Let’s get to know
      <br />
      each other
    </h2>

    {/* BUTTON */}
    <div className="mt-10">
      <a
        href="mailto:business@adplay.id"
        className="inline-flex items-center justify-center rounded-full border border-slate-300 px-8 py-4 text-base font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
      >
        business@adplay.id
      </a>
    </div>

  </div>
</section>
      </main>
      <Footer />

      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap"
        rel="stylesheet"
      />
    </>
  )
}

export default App