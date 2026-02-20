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

const processSteps = [
  'Discover your current patient journey, messaging, and infrastructure.',
  'Design a growth blueprint aligned to service lines and market opportunities.',
  'Deploy website, campaigns, and automation systems in coordinated sprints.',
  'Optimize continuously using data from attribution, engagement, and retention.',
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
      <header className="hero">
        <nav className="nav container">
          <div className="logo">CAREMETRIX</div>
          <div className="menu">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#results">Results</a>
            <a href="#contact" className="btn btn-outline">
              Book Strategy Call
            </a>
          </div>
        </nav>

        <div className="hero-content container">
          <p className="eyebrow">Healthcare Growth Partner</p>
          <h1>Scale healthcare brands with strategy, systems, and digital precision.</h1>
          <p className="lead">
            Inspired by modern performance-agency structures, Caremetrix helps healthcare businesses capture demand,
            improve patient experiences, and build compounding revenue channels.
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
      </header>

      <section className="trust container">
        <p>Trusted by growth-focused clinics, hospitals, and specialty care providers.</p>
        <div className="trust-grid">
          <span>PrimeCare Group</span>
          <span>MediBridge</span>
          <span>Axis Heart Center</span>
          <span>UrbanWell</span>
          <span>LifeSpring Labs</span>
        </div>
      </section>

      <section id="services" className="section container">
        <p className="eyebrow">Services</p>
        <h2>Everything your healthcare brand needs to grow, under one roof.</h2>
        <div className="cards">
          {services.map((service) => (
            <article className="card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="section section-alt">
        <div className="container">
          <p className="eyebrow">How We Work</p>
          <h2>A clear framework built for execution and measurable outcomes.</h2>
          <ol className="process-list">
            {processSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      <section id="results" className="section container">
        <p className="eyebrow">Impact</p>
        <h2>Results designed to move real business metrics.</h2>
        <div className="stats">
          {caseStudies.map((item) => (
            <article className="stat" key={item.label}>
              <strong>{item.metric}</strong>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <p className="eyebrow">Client Voices</p>
          <h2>Partnerships built on trust, speed, and transparency.</h2>
          <div className="testimonials">
            {testimonials.map((testimonial) => (
              <article className="testimonial" key={testimonial.name}>
                <p>“{testimonial.quote}”</p>
                <h3>{testimonial.name}</h3>
                <span>{testimonial.role}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section container cta-section">
        <h2>Ready to accelerate your healthcare growth engine?</h2>
        <p>
          Book a strategic consultation to get a custom growth roadmap for your practice, hospital, or healthcare brand.
        </p>
        <a href="mailto:hello@caremetrix.com" className="btn btn-primary">
          hello@caremetrix.com
        </a>
      </section>

      <footer className="footer">
        <div className="container footer-wrap">
          <span>© {new Date().getFullYear()} Caremetrix. All rights reserved.</span>
          <span>Built with React + TypeScript + Vite.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
