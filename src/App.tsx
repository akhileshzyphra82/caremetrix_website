const painPoints = [
  'High subscription costs',
  'Duplicate data entry',
  'Increased admin hours',
  'Compliance risks',
  'Fragmented communication',
];

const solutions = [
  {
    title: 'NDIS CRM & Participant Management',
    items: [
      'Participant onboarding',
      'Care plan development',
      'Goal tracking',
      'Service agreements',
      'Incident reporting',
      'Document management',
      'Automated reminders',
      'Compliance tracking',
    ],
  },
  {
    title: 'Workforce & Staffing Management',
    items: [
      'Staff onboarding and credential tracking',
      'Roster management and shift allocation',
      'Time and attendance tracking',
      'Compliance alerts and performance monitoring',
      'Payroll integration support',
    ],
  },
  {
    title: 'Compliance & Quality Assurance',
    items: [
      'Automated compliance checks',
      'Incident and risk management',
      'Audit-ready reporting',
      'Policy and procedure management',
      'Real-time alerts and quality improvement tracking',
    ],
  },
  {
    title: 'Automation & Reporting',
    items: [
      'Automated billing support',
      'Service verification tracking',
      'Real-time operational dashboards',
      'Custom reporting tools',
      'Financial performance insights',
    ],
  },
];

const benefits = [
  'Reduce administrative hours',
  'Lower overall software subscription costs',
  'Improve compliance and audit readiness',
  'Enhance participant care quality',
  'Improve staff accountability',
  'Increase operational efficiency',
  'Streamline communication across teams',
];

function App() {
  return (
    <div className="page-shell">
      <header className="hero" id="top">
        <div className="container">
          <nav className="nav">
            <a href="#top" className="brand" aria-label="CareMetrix home">
              <span className="brand-mark" aria-hidden="true">
                <span />
              </span>
              <span>CareMetrix</span>
            </a>
            <div className="nav-links">
              <a href="#solutions">Solutions</a>
              <a href="#benefits">Benefits</a>
              <a href="#mission">Mission</a>
              <a href="#contact" className="btn btn-outline">
                Book Consultation
              </a>
            </div>
          </nav>

          <div className="hero-grid">
            <div>
              <p className="eyebrow">Purpose-built for NDIS providers</p>
              <h1>The complete CRM and workforce management software for NDIS organisations.</h1>
              <p className="lead">
                CareMetrix unifies participant management, staffing, compliance, reporting, and quality assurance into one
                powerful platform so your team can spend more time on care and less on admin.
              </p>
              <div className="cta-row">
                <a className="btn btn-primary" href="#contact">
                  Get Started
                </a>
                <a className="btn btn-ghost" href="#solutions">
                  Explore Solutions
                </a>
              </div>
            </div>

            <aside className="hero-card">
              <h2>Why providers switch to CareMetrix</h2>
              <p>Replace disconnected software with one login and total control.</p>
              <ul>
                {painPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </header>

      <main>
        <section className="section section-light" id="solutions">
          <div className="container">
            <p className="eyebrow">Our Core Solutions</p>
            <h2>Everything your NDIS organisation needs in one platform.</h2>
            <div className="solution-grid">
              {solutions.map((solution) => (
                <article className="solution-card" key={solution.title}>
                  <h3>{solution.title}</h3>
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

        <section className="section section-gradient" id="benefits">
          <div className="container two-col">
            <div>
              <p className="eyebrow">Custom-built for NDIS providers</p>
              <h2>Scalable, secure, and tailored to your workflows.</h2>
              <p>
                CareMetrix is not generic software adapted for disability services. It is built exclusively for NDIS
                organisations with customisable workflows, tailored reporting, and secure cloud-based access.
              </p>
              <p>
                Whether you are a small provider or a multi-location organisation, our platform adapts as you grow
                without adding complexity.
              </p>
            </div>
            <div className="benefits-panel">
              <h3>Benefits of CareMetrix</h3>
              <ul>
                {benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section section-light" id="mission">
          <div className="container mission">
            <p className="eyebrow">Our Mission</p>
            <h2>Empowering providers with technology that improves care outcomes.</h2>
            <p>
              We help NDIS providers improve operational efficiency while maintaining the highest standards of
              participant care. Our mission is simple: help your team spend more time supporting people, and less time
              managing paperwork.
            </p>
          </div>
        </section>

        <section className="section cta" id="contact">
          <div className="container cta-content">
            <h2>Ready to transform your organisation?</h2>
            <p>
              Book a free consultation and discover how CareMetrix can reduce admin workload, improve compliance, and
              elevate care quality.
            </p>
            <div className="contact-list">
              <a href="mailto:support@caremetrix.com.au">support@caremetrix.com.au</a>
              <a href="tel:+61000000000">+61 (0) 0000 0000</a>
              <a href="https://www.caremetrix.com.au" target="_blank" rel="noreferrer">
                www.caremetrix.com.au
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-wrap">
          <span>© {new Date().getFullYear()} CareMetrix. All rights reserved.</span>
          <span>One platform. One login. Total control.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
