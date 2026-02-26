const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'Features', href: '#features' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Resources', href: '#resources' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

const reviews = [
  {
    name: 'Jodie H.',
    age: '8 months ago',
    text: 'CareMetrix has been incredible to work with. Our team now stays on top of compliance and participant updates in one place.',
  },
  {
    name: 'Beth W.',
    age: '8 months ago',
    text: 'Very easy to use and great for handling daily tasks. The dashboard gives us instant visibility across our programs.',
  },
  {
    name: 'Michelle A.',
    age: '8 months ago',
    text: 'Excellent experience from start to finish. The support team is responsive and our operations are more structured now.',
  },
  {
    name: 'Kimberlee C.',
    age: '9 months ago',
    text: 'A game changer for participant and HR management. Everything is organised and available when we need it.',
  },
];

const moduleTabs = [
  'Dashboard',
  'Rostering',
  'Risk Management',
  'HRM',
  'Participants',
  'Form Management',
  'Document Management',
  'Support Coordination',
];

const featureSections = [
  {
    id: 'features',
    title: 'Sorted and Structured Dashboard',
    description:
      'CareMetrix keeps everything in one place so your team can track participants, workforce activity, and compliance instantly.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'benefits',
    title: 'Support Coordination',
    description:
      'Manage participant journeys, notes, incidents, and action plans with a single workflow that is simple for every staff member.',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'resources',
    title: 'Platinum Benefits',
    description:
      'Get practical tools for NDIS-ready operations, standardised processes, and complete visibility across your service delivery.',
    bullets: ['Advice and standard employment workflows', 'Plan management guidance and reporting templates'],
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
  },
];

function App() {
  return (
    <div className="page-shell" id="top">
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#top" className="brand" aria-label="CareMetrix home">
            <img
              src="https://pub-c61fbd9fa813427186a41ed133f48034.r2.dev/asset/website-banner/bg-logo.png"
              alt="CareMetrix logo"
              className="brand-logo"
            />
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-ctas">
            <a className="btn btn-primary" href="#contact">
              Book a Demo
            </a>
            <a className="btn btn-secondary" href="https://dev.caremetrix.com.au" target="_blank" rel="noreferrer">
              Sign in
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-surface" />
          <div className="container hero-grid">
            <div>
              <h1>The Complete CRM & Workforce Management Software for NDIS Providers</h1>
              <p className="lead">
                Run your NDIS business smoothly and confidently. Stay on top of compliance, track progress instantly, and
                access support plans, risk assessments, and worker checks from anywhere.
              </p>
              <p className="hero-label">CareMetrix simplifies everything</p>
            </div>
            <figure className="dashboard-shell dashboard-preview" aria-label="CareMetrix dashboard preview">
              <img
                src="https://i.ibb.co/xqb4b71J/Screenshot-2026-02-26-122858.png"
                alt="CareMetrix operations dashboard"
              />
            </figure>
          </div>
        </section>

        <a
          className="floating-whatsapp"
          href="https://wa.me/?text=Hi%20CareMetrix%2C%20I%20would%20like%20to%20know%20more."
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with CareMetrix on WhatsApp"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19.05 4.94A9.86 9.86 0 0 0 12.02 2c-5.47 0-9.93 4.45-9.93 9.92 0 1.74.46 3.45 1.32 4.95L2 22l5.3-1.37a9.86 9.86 0 0 0 4.72 1.2h.01c5.47 0 9.93-4.45 9.93-9.93a9.82 9.82 0 0 0-2.9-6.96Zm-7.03 15.2h-.01a8.18 8.18 0 0 1-4.16-1.13l-.3-.18-3.14.8.84-3.06-.2-.31a8.2 8.2 0 0 1-1.26-4.34c0-4.52 3.68-8.2 8.22-8.2a8.13 8.13 0 0 1 5.82 2.42 8.15 8.15 0 0 1 2.4 5.8c0 4.53-3.69 8.2-8.22 8.2Zm4.5-6.15c-.25-.13-1.47-.72-1.7-.8-.23-.08-.39-.12-.55.13-.16.24-.63.8-.77.96-.14.16-.28.18-.53.06-.24-.13-1.03-.38-1.96-1.2a7.34 7.34 0 0 1-1.35-1.68c-.14-.25-.02-.39.1-.52.12-.12.25-.3.37-.45.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.13-.55-1.33-.75-1.83-.2-.47-.4-.4-.55-.4h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.11 3.64 2.41 1.04 2.41.7 2.84.66.43-.04 1.37-.56 1.56-1.1.2-.54.2-1 .14-1.1-.06-.1-.22-.16-.47-.29Z" />
          </svg>
        </a>

        <section className="reviews">
          <div className="container">
            <h2>Customer Reviews</h2>
            <div className="review-grid">
              {reviews.map((review) => (
                <article key={review.name} className="review-card">
                  <h3>{review.name}</h3>
                  <p className="review-age">{review.age}</p>
                  <p>★★★★★</p>
                  <p>{review.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="modules" id="pricing">
          <div className="container">
            <h2>Smart Solutions For All Your NDIS Needs</h2>
            <div className="module-grid">
              {moduleTabs.map((tab, index) => (
                <article key={tab} className={index === 0 ? 'module active' : 'module'}>
                  {tab}
                </article>
              ))}
            </div>
          </div>
        </section>

        {featureSections.map((section, index) => (
          <section key={section.id} className="feature" id={section.id}>
            <div className={`container feature-grid ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
                {section.bullets && (
                  <ul className="feature-list">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                <a className="btn btn-primary" href="#contact">
                  7 Day Free Trial
                </a>
              </div>
              <img src={section.image} alt={section.title} />
            </div>
          </section>
        ))}

        <section className="app-strip" id="contact">
          <div className="container app-strip-content">
            <h2>Transform Your NDIS Worker Management</h2>
            <p>Download the CareMetrix worker app from the App Store or Google Play.</p>
            <div className="app-buttons">
              <a className="btn btn-dark" href="#top">
                Get on Play Store
              </a>
              <a className="btn btn-dark" href="#top">
                Get on App Store
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <section>
            <h3>About CareMetrix</h3>
            <p>
              CareMetrix is an all-in-one platform for NDIS providers. From onboarding to compliance, rostering to CRM,
              manage everything in one modern system.
            </p>
          </section>
          <section>
            <h3>Useful Links</h3>
            <ul>
              <li>Invoicing</li>
              <li>Rostering</li>
              <li>NDIS Compliance</li>
              <li>Risk Management</li>
            </ul>
          </section>
          <section>
            <h3>Resources</h3>
            <ul>
              <li>Video Gallery</li>
              <li>Blogs</li>
              <li>FAQs</li>
              <li>Webinars</li>
            </ul>
          </section>
        </div>
        <div className="footer-bottom">
          <div className="container footer-line">
            <span>© {new Date().getFullYear()} CareMetrix. All rights reserved.</span>
            <div>
              <a href="#top">Privacy Policy</a>
              <a href="#top">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
