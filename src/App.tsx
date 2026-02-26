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
              <h1>Grow Your NDIS Business with Confidence Through Smarter Solutions.</h1>
              <p className="lead">
                Run your NDIS business smoothly and confidently. Stay on top of compliance, track progress instantly, and
                access support plans, risk assessments, and worker checks from anywhere.
              </p>
              <a className="btn btn-primary hero-btn" href="#contact">
                7 Days Free Trial
              </a>
            </div>
            <figure className="dashboard-shell dashboard-preview" aria-label="CareMetrix dashboard preview">
              <img
                src="https://i.ibb.co/xqb4b71J/Screenshot-2026-02-26-122858.png"
                alt="CareMetrix operations dashboard"
              />
            </figure>
          </div>
        </section>

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
