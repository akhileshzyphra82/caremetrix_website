import React from 'react';

const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Why CareMetrix', href: '#features' },
  { label: 'Our Mission', href: '#benefits' },
  { label: 'Enquiry', href: '#resources' },
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

type ModuleTab = {
  name: string;
  image: string;
  description: string;
  features: string[];
};

const moduleTabContent: ModuleTab[] = [
  {
    name: 'Dashboard',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
    description: 'Get a complete operational snapshot with live NDIS metrics, pending tasks, and service health.',
    features: ['Real-time KPI cards for participants, staff, and compliance', 'Smart notifications for urgent actions and upcoming deadlines', 'Custom widgets for finance, incidents, and team performance'],
  },
  {
    name: 'Rostering',
    image:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1400&q=80',
    description: 'Build accurate, conflict-free rosters in minutes with shift visibility and auto-assignment support.',
    features: ['Drag-and-drop schedule planner with worker availability', 'Shift clash alerts and travel-time awareness', 'Instant publish and worker confirmation tracking'],
  },
  {
    name: 'Risk Management',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80',
    description: 'Proactively identify, monitor, and resolve risks with structured registers and clear escalation paths.',
    features: ['Risk scoring matrix and mitigation action plans', 'Incident linking with corrective and preventive controls', 'Audit-ready logs for regulatory reporting'],
  },
  {
    name: 'HRM',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80',
    description: 'Manage workforce lifecycle, credentials, and performance in one secure HR workspace.',
    features: ['Employee onboarding and mandatory document checks', 'Credential expiry reminders and compliance tracking', 'Performance notes, training records, and appraisal history'],
  },
  {
    name: 'Participants',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1400&q=80',
    description: 'Keep participant care plans, progress notes, and communication history connected and easy to access.',
    features: ['Centralized profiles with goals, supports, and preferences', 'Daily notes and service timeline with quick filters', 'Family and stakeholder communication visibility'],
  },
  {
    name: 'Form Management',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80',
    description: 'Create and manage digital forms that standardize workflows and remove manual paperwork.',
    features: ['Reusable smart templates with conditional fields', 'E-signature support and instant form validation', 'Submission status tracking with approval flows'],
  },
  {
    name: 'Document Management',
    image:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80',
    description: 'Store, organize, and retrieve important NDIS documents with full version and permission control.',
    features: ['Role-based access for sensitive participant files', 'Version history and document expiry reminders', 'Fast search with tags, filters, and categories'],
  },
  {
    name: 'Support Coordination',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
    description: 'Coordinate supports efficiently with actionable plans, provider collaboration, and measurable outcomes.',
    features: ['Participant goal tracking and scheduled review notes', 'Provider coordination timeline with key interactions', 'Outcome-based reporting for transparent progress updates'],
  },
];

const featureSections = [
  {
    id: 'features',
    title: 'Why CareMetrix?',
    description:
      'NDIS organisations often rely on multiple software platforms to manage operations. This leads to:',
    bullets: [
      'High subscription costs',
      'Duplicate data entry',
      'Increased admin hours',
      'Compliance risks',
      'Fragmented communication',
    ],
    summary: 'CareMetrix replaces multiple systems with one complete solution.',
    tagline: 'One platform. One login. Total control.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'benefits',
    title: 'Our Mission',
    description:
      'At CareMetrix, our mission is to empower NDIS providers with technology that improves operational efficiency while upholding the highest standards of participant care.',
    summary:
      'We believe providers should spend more time supporting participants — and less time managing paperwork.',
    tagline: 'Get Started with CareMetrix',
    followUp:
      'Ready to transform your organization? Book your personalised demo today and discover how CareMetrix can reduce admin workload, improve compliance, and elevate the quality of care you deliver.',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
  },
];

function App() {
  const [activeTab, setActiveTab] = React.useState(moduleTabContent[0]);
  const [isDemoModalOpen, setIsDemoModalOpen] = React.useState(false);

  React.useEffect(() => {
    if (!isDemoModalOpen) {
      return undefined;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDemoModalOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isDemoModalOpen]);

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
            <button className="btn btn-primary" type="button" onClick={() => setIsDemoModalOpen(true)}>
              Book a Demo
            </button>
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
              <h1 className="hero-title">The Complete CRM & Workforce Management Software for NDIS Providers</h1>
              <p className="lead">
                CareMetrix is an all-in-one CRM and workforce management platform built exclusively for NDIS organisations.

                We understand the challenges providers face — multiple subscriptions, disconnected systems, compliance pressure, staffing complexity, and increasing administrative workload.
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
          href="https://wa.me/61456790271?text=Hi%20CareMetrix%2C%20I%20would%20like%20to%20book%20a%20demo."
          target="_blank"
          rel="noreferrer"
          aria-label="Chat instantly with CareMetrix on WhatsApp"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19.05 4.94A9.86 9.86 0 0 0 12.02 2c-5.47 0-9.93 4.45-9.93 9.92 0 1.74.46 3.45 1.32 4.95L2 22l5.3-1.37a9.86 9.86 0 0 0 4.72 1.2h.01c5.47 0 9.93-4.45 9.93-9.93a9.82 9.82 0 0 0-2.9-6.96Zm-7.03 15.2h-.01a8.18 8.18 0 0 1-4.16-1.13l-.3-.18-3.14.8.84-3.06-.2-.31a8.2 8.2 0 0 1-1.26-4.34c0-4.52 3.68-8.2 8.22-8.2a8.13 8.13 0 0 1 5.82 2.42 8.15 8.15 0 0 1 2.4 5.8c0 4.53-3.69 8.2-8.22 8.2Zm4.5-6.15c-.25-.13-1.47-.72-1.7-.8-.23-.08-.39-.12-.55.13-.16.24-.63.8-.77.96-.14.16-.28.18-.53.06-.24-.13-1.03-.38-1.96-1.2a7.34 7.34 0 0 1-1.35-1.68c-.14-.25-.02-.39.1-.52.12-.12.25-.3.37-.45.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.13-.55-1.33-.75-1.83-.2-.47-.4-.4-.55-.4h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.11 3.64 2.41 1.04 2.41.7 2.84.66.43-.04 1.37-.56 1.56-1.1.2-.54.2-1 .14-1.1-.06-.1-.22-.16-.47-.29Z" />
          </svg>
          <span>Chat Instantly</span>
        </a>

        <section className="reviews" id="reviews">
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

        <section className="modules" id="solutions">
          <div className="container">
            <h2>Smart Solutions For All Your NDIS Needs</h2>
            <div className="module-grid" role="tablist" aria-label="CareMetrix feature modules">
              {moduleTabContent.map((tab) => (
                <button
                  key={tab.name}
                  role="tab"
                  aria-selected={activeTab.name === tab.name}
                  className={activeTab.name === tab.name ? 'module active' : 'module'}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            <article className="module-panel" role="tabpanel" aria-label={`${activeTab.name} overview`}>
              <figure className="dashboard-shell module-preview">
                <img src={activeTab.image} alt={`${activeTab.name} module preview`} />
              </figure>
              <div className="module-copy">
                <h3>{activeTab.name}</h3>
                <p>{activeTab.description}</p>
                <ul className="feature-list">
                  {activeTab.features.map((feature: string) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </section>

        {featureSections.map((section, index) => (
          <section key={section.id} className="feature" id={section.id}>
            <div className={`container feature-grid ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
                {section.bullets && (
                  <ul className={`feature-list ${section.id === 'features' ? 'feature-list-check' : ''}`}>
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.summary && <p className="feature-summary">{section.summary}</p>}
                {section.tagline && <p className="feature-tagline">{section.tagline}</p>}
                {section.followUp && <p>{section.followUp}</p>}
                <button className="btn btn-primary" type="button" onClick={() => setIsDemoModalOpen(true)}>
                  Book a Demo
                </button>
              </div>
              <img src={section.image} alt={section.title} />
            </div>
          </section>
        ))}

        <section className="contact-enquiry" id="resources">
          <div className="container enquiry-grid">
            <aside className="contact-card">
              <p className="contact-kicker">Connect With CareMetrix</p>
              <h2>Contact Details</h2>
              <p>Our team is ready to help you choose the right setup for your NDIS operations.</p>
              <ul className="contact-list contact-list-large">
                <li><span className="contact-icon">✉</span> support@caremetrix.com.au</li>
                <li><span className="contact-icon">☎</span> +61 456 790 271</li>
                <li><span className="contact-icon">📍</span> Infopark Road, Opposite Prestige Hillside Gateway, Kusumagiri, Kakkanad, Kochi.</li>
              </ul>
              <a className="instant-whatsapp" href="https://wa.me/61456790271?text=Hi%20CareMetrix%2C%20I%20need%20support%20with%20an%20enquiry." target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.05 4.94A9.86 9.86 0 0 0 12.02 2c-5.47 0-9.93 4.45-9.93 9.92 0 1.74.46 3.45 1.32 4.95L2 22l5.3-1.37a9.86 9.86 0 0 0 4.72 1.2h.01c5.47 0 9.93-4.45 9.93-9.93a9.82 9.82 0 0 0-2.9-6.96Zm-7.03 15.2h-.01a8.18 8.18 0 0 1-4.16-1.13l-.3-.18-3.14.8.84-3.06-.2-.31a8.2 8.2 0 0 1-1.26-4.34c0-4.52 3.68-8.2 8.22-8.2a8.13 8.13 0 0 1 5.82 2.42 8.15 8.15 0 0 1 2.4 5.8c0 4.53-3.69 8.2-8.22 8.2Z"/></svg>
                <div>
                  <strong>Chat Instantly on WhatsApp</strong>
                  <span>Get a quick response from our team.</span>
                </div>
              </a>
              <div className="social-links" aria-label="Social media links">
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 8.5V6.7c0-.76.5-.94.85-.94h2.1V2.5l-2.9-.01C10.5 2.49 9 4.4 9 7.2v1.3H6.5V12H9v9.5h4.5V12h2.9l.4-3.5h-3.3Z" /></svg>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm-.2 2A3 3 0 0 0 4 7v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm10.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" /></svg>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.2 8.7H2.8V21h3.4V8.7ZM4.5 3A2 2 0 1 0 4.6 7 2 2 0 0 0 4.5 3Zm16.7 10.6c0-3.2-1.7-5.3-4.8-5.3-2.2 0-3.2 1.2-3.8 2v-1.7H9.2V21h3.4v-6.1c0-1.6.3-3.2 2.3-3.2 2 0 2 1.9 2 3.3V21H21v-7.4Z" /></svg>
                </a>
              </div>
            </aside>

            <div className="enquiry-form-card">
              <h2>Send Us Your Enquiry</h2>
              <p>Share your requirements and we will get back to you with a tailored demo and implementation guidance.</p>
              <form className="enquiry-form">
                <label>
                  Full Name*
                  <input type="text" name="name" required placeholder="Enter your full name" />
                </label>
                <label>
                  Work Email*
                  <input type="email" name="email" required placeholder="name@company.com" />
                </label>
                <label>
                  Contact Number*
                  <input type="tel" name="phone" required placeholder="+61" />
                </label>
                <label>
                  Organisation Name*
                  <input type="text" name="organisation" required placeholder="Your organisation" />
                </label>
                <label>
                  Enquiry Details*
                  <textarea name="message" required rows={4} placeholder="Tell us what you need help with" />
                </label>
                <button className="btn btn-primary" type="submit">Submit Enquiry</button>
              </form>
            </div>
          </div>
        </section>

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
              CareMetrix is an all-in-one CRM and workforce management platform built exclusively for NDIS organisations.

              We understand the challenges providers face — multiple subscriptions, disconnected systems, compliance pressure, staffing complexity, and increasing administrative workload.

              CareMetrix simplifies everything.

              Our fully automated platform brings staffing, participant management, compliance, reporting, and quality assurance together into one powerful system — designed specifically for NDIS providers.
            </p>
          </section>
          <section>
            <h3>Useful Links</h3>
            <ul>
              {navLinks.map((link) => (
                <li key={`footer-${link.href}`}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h3>Contact Details</h3>
            <ul className="contact-list">
              <li>
                <span className="contact-icon" aria-hidden="true">
                  ✉
                </span>
                Email: support@caremetrix.com.au
              </li>
              <li>
                <span className="contact-icon" aria-hidden="true">
                  ☎
                </span>
                Phone: +61 456 790 271
              </li>
              <li>
                <span className="contact-icon" aria-hidden="true">
                  📍
                </span>
                Infopark Road, Opposite Prestige Hillside Gateway, Kusumagiri, Kakkanad, Kochi.
              </li>
            </ul>
            <iframe
              className="footer-map"
              title="CareMetrix office location map"
              src="https://maps.google.com/maps?q=Infopark%20Road%2C%20Opposite%20Prestige%20Hillside%20Gateway%2C%20Kusumagiri%2C%20Kakkanad%2C%20Kochi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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

      {isDemoModalOpen && (
        <div className="demo-modal-backdrop" role="presentation" onClick={() => setIsDemoModalOpen(false)}>
          <div className="demo-modal" role="dialog" aria-modal="true" aria-label="Book a demo" onClick={(event: { stopPropagation: () => void }) => event.stopPropagation()}>
            <button className="modal-close" type="button" aria-label="Close" onClick={() => setIsDemoModalOpen(false)}>
              ×
            </button>
            <p className="contact-kicker">Book Your Demo</p>
            <h2>Choose the Fastest Way to Connect</h2>
            <p>Select the option that suits your preference and our team will guide you through the next steps.</p>
            <div className="demo-options">
              <a className="demo-option" href="#resources" onClick={() => setIsDemoModalOpen(false)}>
                <span className="demo-icon" aria-hidden="true">📝</span>
                <div>
                  <h3>Share your requirements through our enquiry form</h3>
                  <p>Provide your details so we can arrange a tailored product walkthrough.</p>
                </div>
              </a>
              <a className="demo-option" href="https://wa.me/61456790271?text=Hi%20CareMetrix%2C%20I%20want%20to%20book%20a%20demo%20instantly." target="_blank" rel="noreferrer">
                <span className="demo-icon demo-icon-whatsapp" aria-hidden="true">💬</span>
                <div>
                  <h3>Book instantly on WhatsApp</h3>
                  <p>Start a live chat for immediate assistance and scheduling.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
