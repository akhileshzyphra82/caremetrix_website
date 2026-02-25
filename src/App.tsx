const services = [
  {
    title: 'Revenue Growth Systems',
    description:
      'Build high-converting funnels, automate lead nurturing, and turn first-time inquiries into long-term patients.',
  },
  {
    title: 'Brand & Web Experience',
    description:
      'Create an authoritative healthcare brand with a fast, SEO-ready website and conversion-focused content.',
  },
  {
    title: 'Operational Automation',
    description:
      'Reduce administrative overhead through CRM integrations, scheduling automations, and dashboarding.',
  },
];



const caseStudies = [
  {
    metric: '187%',
    label: 'Increase in qualified leads for multi-location clinic network',
  },
  {
    metric: '63%',
    label: 'Reduction in manual front-desk follow-up tasks',
  },
  {
    metric: '3.2x',
    label: 'Return on ad spend after funnel and landing page overhaul',
  },
];

const testimonials = [
  {
    quote:
      'Caremetrix gave us the strategy and systems we were missing. Every part of the patient journey feels more connected now.',
    name: 'Dr. Ananya Mehta',
    role: 'Medical Director, VitalCare Clinics',
  },
  {
    quote:
      'From branding to campaign execution, their team felt like an extension of ours. We saw measurable growth within one quarter.',
    name: 'Rahul Khanna',
    role: 'COO, NovaWell Hospitals',
  },
];

function App() {
  return (
    <div>
      <nav className="nav">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo" aria-label="CareMetrix">
            <img
              src="https://pub-c61fbd9fa813427186a41ed133f48034.r2.dev/asset/website-banner/bg-logo.png"
              alt="CareMetrix Logo"
              className="logo-img"
            />
          </div>
          <div className="menu">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#results">Results</a>
            <a href="#contact" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem' }}>
              Book Strategy Call
            </a>
          </div>
        </div>
      </nav>

      <header className="hero section">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Healthcare Growth Partner</p>
            <h1>Scale healthcare brands with strategy and digital precision.</h1>
            <p className="lead">
              Caremetrix helps healthcare businesses capture demand, improve patient experiences, and build compounding revenue channels through data-driven performance systems.
            </p>
            <div className="cta-group">
              <a href="#contact" className="btn btn-primary">
                Get Free Audit
              </a>
              <a href="#results" className="btn btn-secondary">
                View Success Stories
              </a>
            </div>
          </div>
          <div className="hero-mockup">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
              alt="CareMetrix Platform Mockup"
            />
          </div>
        </div>
      </header>

      <section className="trust container" style={{ padding: '4rem 0', borderBottom: '1px solid var(--color-border)' }}>
        <p style={{ textAlign: 'center', marginBottom: '2rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
          TRUSTED BY LEADING HEALTHCARE PROVIDERS
        </p>
        <div className="trust-grid" style={{ opacity: 0.6, filter: 'grayscale(1)' }}>
          <span>PrimeCare Group</span>
          <span>MediBridge</span>
          <span>Axis Heart Center</span>
          <span>UrbanWell</span>
          <span>LifeSpring Labs</span>
        </div>
      </section>

      <section id="services" className="section container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
          <p className="eyebrow">Services</p>
          <h2>Everything your healthcare brand needs to grow.</h2>
        </div>
        <div className="cards">
          {services.map((service) => (
            <article className="card" key={service.title}>
              <div style={{ width: '48px', height: '48px', background: 'var(--color-primary)', borderRadius: '12px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20" /></svg>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="walkthrough-grid">
            <div className="walkthrough-content">
              <p className="eyebrow">Operational Excellence</p>
              <h2>Streamline your practice with smart automation.</h2>
              <p className="lead">
                Reduce administrative overhead through CRM integrations, automated scheduling, and real-time dashboarding. We build the systems that let you focus on what matters most: patient care.
              </p>
              <ul style={{ listStyle: 'none', marginTop: '2rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  <span>Automated Lead Nurturing</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  <span>Seamless CRM Integration</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  <span>Real-time Performance Reporting</span>
                </li>
              </ul>
            </div>
            <div className="walkthrough-img">
              <img src="https://images.unsplash.com/photo-1551288049-bbbda536ad34?auto=format&fit=crop&w=1200&q=80" alt="Dashboard Preview" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="walkthrough-grid reverse">
            <div className="walkthrough-content">
              <p className="eyebrow">Patient Experience</p>
              <h2>Create a seamless journey for every patient.</h2>
              <p className="lead">
                Transform first-time inquiries into long-term patients with a fast, SEO-ready website and conversion-focused content designed specifically for the healthcare industry.
              </p>
              <a href="#contact" className="btn btn-secondary" style={{ marginTop: '2rem' }}>Learn More</a>
            </div>
            <div className="walkthrough-img">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80" alt="Patient Interaction" />
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="section container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className="eyebrow">Impact</p>
          <h2>Numbers that drive real growth.</h2>
        </div>
        <div className="stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem' }}>
          {caseStudies.map((item) => (
            <article key={item.label} style={{ textAlign: 'center' }}>
              <strong style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--color-primary)', display: 'block' }}>{item.metric}</strong>
              <p style={{ fontWeight: 600, marginTop: '0.5rem' }}>{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="eyebrow">Client Voices</p>
            <h2>Partnerships built on trust and results.</h2>
          </div>
          <div className="testimonials">
            {testimonials.map((testimonial) => (
              <article className="testimonial" key={testimonial.name}>
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem', color: '#fbbf24' }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                  ))}
                </div>
                <p>“{testimonial.quote}”</p>
                <h3>{testimonial.name}</h3>
                <span>{testimonial.role}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section container">
        <div style={{ background: 'var(--color-primary)', borderRadius: '2rem', padding: '6rem 2rem', textAlign: 'center', color: '#fff' }}>
          <h2 style={{ color: '#fff', fontSize: '3rem', maxWidth: '800px', margin: '0 auto 1.5rem' }}>Ready to accelerate your healthcare growth engine?</h2>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 3rem' }}>
            Book a strategic consultation to get a custom growth roadmap for your practice, hospital, or healthcare brand.
          </p>
          <a href="mailto:hello@caremetrix.com" className="btn" style={{ background: '#fff', color: 'var(--color-primary)', fontSize: '1.1rem' }}>
            Book Your Free Strategy Call
          </a>
        </div>
      </section>

      <footer className="footer section" style={{ padding: '4rem 0 2rem' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div className="logo">
              <img
                src="https://pub-c61fbd9fa813427186a41ed133f48034.r2.dev/asset/website-banner/bg-logo.png"
                alt="CareMetrix Logo"
                className="logo-img"
              />
            </div>
            <div style={{ display: 'flex', gap: '2rem', fontWeight: 600 }}>
              <a href="#services">Services</a>
              <a href="#process">Process</a>
              <a href="#results">Results</a>
            </div>
          </div>
          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
            <span>© {new Date().getFullYear()} Caremetrix. All rights reserved.</span>
            <span>Built with precision for healthcare.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
