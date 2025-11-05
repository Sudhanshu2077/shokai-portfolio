import React, {useState} from 'react'

const PROFILE = {
  studioName: 'RafeFx Studio',
  owner: 'Sudhanshu Gayake',
  displayName: 'Shokai',
  tagline: 'Creating stunning visuals that merge hand-made art with AI-powered polish.',
  insta: 'https://www.instagram.com/___r_a_g_e_/',
  email: 'rafeFx.007@gmail.com',
};

const SERVICES = [
  'Handmade Sketching & Illustration',
  'AI-Enhanced Artwork & Concept Art',
  'YouTube Thumbnails & Branding',
  'Short-form Video Editing (Reels / Shorts)'
];

const SAMPLE_PORTFOLIO = []; // intentionally empty
const SAMPLE_SHOP = []; // empty
const SAMPLE_TESTIMONIALS = []; // empty

export default function App(){ 
  const [isDark, setIsDark] = useState(false);
  React.useEffect(()=>{
    if(isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  },[isDark]);
  return (
    <div className="min-h-screen bg-white dark:bg-[#071125] text-slate-900 dark:text-slate-100 antialiased">
      <header className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">{PROFILE.studioName}</h1>
          <p className="text-sm text-slate-500 dark:text-slate-300">by {PROFILE.owner}</p>
        </div>
        <nav className="space-x-6 text-sm text-slate-600 dark:text-slate-300">
          <a href="#portfolio" className="hover:text-slate-900 dark:hover:text-white">Portfolio</a>
          <a href="#services" className="hover:text-slate-900 dark:hover:text-white">Services</a>
          <a href="#testimonials" className="hover:text-slate-900 dark:hover:text-white">Testimonials</a>
          <a href="#contact" className="hover:text-slate-900 dark:hover:text-white">Contact</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6">
        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">{PROFILE.displayName} — <span className="text-slate-600 dark:text-slate-300">{PROFILE.tagline}</span></h2>
            <p className="mt-6 text-slate-600 dark:text-slate-300">I merge handmade sketches with modern AI tools and clean digital workflows to create visuals that perform — thumbnails that convert, art that tells a story, and video edits that engage.</p>

            <div className="mt-6 flex items-center gap-4">
              <a href="#services" className="inline-block px-4 py-2 border border-slate-900 dark:border-white rounded-md text-sm">Hire Me</a>
              <a href={PROFILE.insta} target="_blank" rel="noreferrer" className="text-sm underline">Instagram</a>
            </div>

            <div className="mt-8 text-xs text-slate-500 dark:text-slate-400">
              <strong>Studio:</strong> {PROFILE.studioName} • <strong>Owner:</strong> {PROFILE.owner} • <strong>Email:</strong> <a href={`mailto:${PROFILE.email}`} className="underline">{PROFILE.email}</a>
            </div>
          </div>

          <div className="h-64 md:h-80 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
            <div className="text-slate-400 dark:text-slate-300">Your hero artwork / demo reel goes here</div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="pt-12">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">Portfolio</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">Your projects will appear here. Upload sketches, edits, and finished pieces when ready.</p>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={()=>setIsDark(!isDark)} className="px-3 py-2 border rounded text-sm">{isDark ? 'Light' : 'Dark'} mode</button>
            </div>
          </div>

          <div className="mt-6">
            {SAMPLE_PORTFOLIO.length === 0 ? (
              <div className="p-6 border rounded text-slate-500 dark:text-slate-300">No portfolio items yet — upload your best work to show here.</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {SAMPLE_PORTFOLIO.map(item => (
                  <div key={item.id} className="group bg-white dark:bg-[#071125] border rounded-lg overflow-hidden shadow-sm">
                    <div className="aspect-w-4 aspect-h-3 bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                      <img src={item.img} alt={item.title} className="object-cover w-full h-full" />
                    </div>
                    <div className="p-3">
                      <div className="text-sm font-medium">{item.title}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{item.type}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="pt-12">
          <h3 className="text-xl font-semibold">Services</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">I offer fixed-price packages and custom quotes. Below are the primary services — reach out for custom bundles.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES.map((s, idx) => (
              <div key={idx} className="p-4 border rounded-lg bg-white dark:bg-[#071125]">
                <div className="text-sm font-semibold">{s}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Starting at ₹300 — custom quotes available for bundles and recurring work.</div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="pt-12">
          <h3 className="text-xl font-semibold">Testimonials</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">Client feedback will show here.</p>

          <div className="mt-6">
            {SAMPLE_TESTIMONIALS.length === 0 ? (
              <div className="p-6 border rounded text-slate-500 dark:text-slate-300">No testimonials yet.</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SAMPLE_TESTIMONIALS.map((t, i) => <div key={i} className="p-4 border rounded-lg bg-white dark:bg-[#071125]">{t}</div>)}
              </div>
            )}
          </div>
        </section>

        {/* Shop / Downloads */}
        <section id="shop" className="pt-12">
          <h3 className="text-xl font-semibold">Shop / Downloads</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">Digital packs and downloadable assets will appear here.</p>

          <div className="mt-6">
            {SAMPLE_SHOP.length === 0 ? (
              <div className="p-6 border rounded text-slate-500 dark:text-slate-300">No shop items yet.</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {SAMPLE_SHOP.map((p, i) => <div key={i} className="p-4 border rounded-lg bg-white dark:bg-[#071125]">{p}</div>)}
              </div>
            )}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="pt-12 pb-24">
          <h3 className="text-xl font-semibold">Contact</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">Reach out for commissions, collaborations, or custom packages.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg bg-white dark:bg-[#071125]">
              <div className="text-sm font-semibold">Email</div>
              <a href={`mailto:${PROFILE.email}`} className="text-slate-600 dark:text-slate-200 mt-2 block underline">{PROFILE.email}</a>

              <div className="text-sm font-semibold mt-4">Instagram</div>
              <a href={PROFILE.insta} className="text-slate-600 dark:text-slate-200 mt-2 block underline" target="_blank" rel="noreferrer">@___r_a_g_e_</a>

              <div className="text-sm font-semibold mt-4">Quick Pitch</div>
              <p className="text-xs text-slate-500 dark:text-slate-300 mt-1">DM me on Instagram or email a short brief — I’ll send a free sample for first-time clients.</p>
            </div>

            <form className="p-6 border rounded-lg bg-white dark:bg-[#071125]" onSubmit={(e)=>{e.preventDefault(); window.location.href = `mailto:${PROFILE.email}?subject=Commission%20Request&body=Hi%20Sudhanshu,%0A%0AI%20would%20like%20to%20hire%20you%20for%20...`}}>
              <label className="text-xs text-slate-600 dark:text-slate-300">Your name</label>
              <input className="w-full mt-2 p-2 border rounded bg-transparent" placeholder="Your name" required />

              <label className="text-xs text-slate-600 dark:text-slate-300 mt-4 block">Brief</label>
              <textarea className="w-full mt-2 p-2 border rounded bg-transparent" rows="4" placeholder="Describe the project" required></textarea>

              <div className="mt-4 flex items-center justify-between">
                <button className="px-4 py-2 bg-slate-900 text-white rounded">Send request</button>
                <div className="text-xs text-slate-500 dark:text-slate-300">Or DM on Instagram</div>
              </div>
            </form>
          </div>
        </section>

      </main>

      <footer className="mt-12 border-t py-6">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between text-sm text-slate-500 dark:text-slate-300">
          <div>© {new Date().getFullYear()} RafeFx Studio — {PROFILE.owner}</div>
          <div>Built with ❤️ • React + Tailwind</div>
        </div>
      </footer>
    </div>
  )
}
