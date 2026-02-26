const heroHighlights = [
  { icon: '🧑‍🤝‍🧑', title: 'Participant-first workflows', text: 'Keep goals, support plans, notes, and outcomes in one connected record.' },
  { icon: '🛡️', title: 'Audit-ready compliance', text: 'Track incidents, documents, and quality actions with complete visibility.' },
  { icon: '⚡', title: 'Automation that saves hours', text: 'Reduce manual admin using reminders, alerts, and smarter reporting.' },
];

const solutions = [
  {
    icon: '📋',
    title: 'Participant CRM & Case Management',
    items: ['Intake and onboarding', 'Goal and outcome tracking', 'Service agreements', 'Progress notes and documents'],
  },
  {
    icon: '👩‍⚕️',
    title: 'Workforce, Rosters & Timesheets',
    items: ['Smart shift planning', 'Credential and expiry alerts', 'Staff availability and leave', 'Attendance and service verification'],
  },
  {
    icon: '✅',
    title: 'Compliance & Quality',
    items: ['Incident and risk workflows', 'Policy register and acknowledgements', 'Audit evidence in one place', 'Continuous improvement tracking'],
  },
  {
    icon: '📈',
    title: 'Billing, Claims & Reporting',
    items: ['NDIS-friendly billing support', 'Performance dashboards', 'Funding utilisation insights', 'Exportable management reports'],
  },
];

const ndisSections = [
  {
    title: 'Support Coordination Teams',
    points: ['Track participant goals and plan milestones', 'Document interactions and referrals', 'Surface risks earlier with reminders'],
  },
  {
    title: 'SIL / SDA Providers',
    points: ['Manage daily care operations', 'Coordinate staff rosters by site', 'Capture incidents and quality actions quickly'],
  },
  {
    title: 'Allied Health & Community Services',
    points: ['Plan sessions and clinician capacity', 'Store notes securely and consistently', 'Monitor outcomes across programs'],
  },
];

const platformStats = [
  { value: '35%', label: 'Less admin time' },
  { value: '24/7', label: 'Secure cloud access' },
  { value: '100%', label: 'Single source of truth' },
];

function App() {
  return (
    <div className="page-shell">
      <header className="site-header" id="top">
        <div className="container nav-wrap nav-logo-only">
          <a href="#top" className="brand" aria-label="CareMetrix home">
            <img
              src="https://pub-c61fbd9fa813427186a41ed133f48034.r2.dev/asset/website-banner/bg-logo.png"
              alt="CareMetrix logo"
              className="brand-logo"
            />
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Purpose-built for NDIS providers</p>
              <h1 className="gradient-heading">Beautifully simple operations platform for high-quality disability support.</h1>
              <p className="lead">
                From participant onboarding to compliance, workforce, and reporting, CareMetrix brings every workflow
                into one modern platform designed for NDIS growth.
              </p>
              <div className="cta-row">
                <a className="btn btn-primary" href="#contact">
                  Book a Demo
                </a>
                <a className="btn btn-soft" href="#solutions">
                  Explore Platform
                </a>
              </div>
              <div className="stats-row" id="why">
                {platformStats.map((stat) => (
                  <div key={stat.label} className="stat-card">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="hero-panel">
              <h2>Why teams are switching to CareMetrix</h2>
              <div className="highlight-list">
                {heroHighlights.map((item) => (
                  <article key={item.title} className="highlight-item">
                    <span className="icon" aria-hidden="true">
                      {item.icon}
                    </span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="section section-light" id="solutions">
          <div className="container">
            <p className="eyebrow">Core platform modules</p>
            <h2>Everything needed to run and scale your NDIS organisation.</h2>
            <div className="solution-grid">
              {solutions.map((solution) => (
                <article className="solution-card" key={solution.title}>
                  <h3>
                    <span className="icon" aria-hidden="true">
                      {solution.icon}
                    </span>{' '}
                    {solution.title}
                  </h3>
                  <ul>
                    {solution.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-gradient" id="ndis">
          <div className="container">
            <p className="eyebrow">Built for real NDIS service models</p>
            <h2>Flexible workflows for every team delivering participant outcomes.</h2>
            <div className="ndis-grid">
              {ndisSections.map((section) => (
                <article key={section.title} className="ndis-card">
                  <h3>{section.title}</h3>
                  <ul>
                    {section.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta" id="contact">
          <div className="container cta-content">
            <h2>Ready to build a stronger, smarter NDIS organisation?</h2>
            <p>Talk to our team and see how CareMetrix can improve operations, compliance, and care quality.</p>
            <div className="cta-row">
              <a className="btn btn-primary" href="mailto:support@caremetrix.com.au">
                Contact Sales
              </a>
              <a className="btn btn-soft" href="https://dev.caremetrix.com.au" target="_blank" rel="noreferrer">
                Go to Login
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-wrap">
          <span>© {new Date().getFullYear()} CareMetrix. All rights reserved.</span>
          <span>One platform. Better outcomes. Stronger teams.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
